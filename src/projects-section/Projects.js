import './Projects.css';
import {useState, Component} from 'react';
import more from './more_horiz.svg';
import screenshot1 from './project-screensot01.png';
import screenshot2 from './project-screensot02.png';
import screenshot3 from './project-screensot03.png';

const myProjects = [
    {
        screenshot: screenshot1,
        name: "Recipe Blog",
        technos: ["HTML", "CSS", "Responsive"],
        description: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    },
    {
        screenshot: screenshot2,
        name: "My Gallery",
        technos: ["HTML", "CSS", "Responsive"],
        description: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io"
    },
    {
        screenshot: screenshot3,
        name: "Checkout",
        technos: ["HTML", "CSS", "Responsive"],
        description: "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io"
    }
]

function Project({screenshot, technos, name, description }) {
    return (
        <div className="project">
            <img className="project-picture" src={screenshot} alt="screenshot of the project"/>
            <div className="project-technos">{technos.map((el, i) => <span key={i}>{"#" + el}</span>)}</div>
            <div className="project-name">{name}</div>
            <div className="project-description">{description}</div>
            <div className="project-buttons">
                <button className="btn-project btn-demo">Demo</button>
                <button className="btn-project btn-code">Code</button>
            </div>
        </div>
    );
}
function ProjectsTags({ projectsLength, handleClick }) {
    const [selectedTag, setSelectedTag] = useState("Responsive");
    const tagsList = ["React", "Vue", "Responsive"]
    
    const selectTag = (e) => {
        const tag = e.target.innerText;
        setSelectedTag(selectedTag => tag);
        handleClick(tag);
    }

    return (
        <div className="projects-tags">
            <h2 className="title">{"projects ("+projectsLength+")"}</h2>
            <div className="tags">
                {tagsList.map((el, i) => <div key={i} className={el === selectedTag ? "tag active" : "tag"} onClick={selectTag}>{el}</div>)}
            </div>
        </div>
    );
}

function ProjectsList({ projects }) {
    return (
        <div className="projects-list">
            {projects.map((el, i) => <Project key={i} screenshot={el.screenshot} technos={el.technos} name={el.name} description={el.description}/>)}
        </div>
    );
}

function ProjectsPagination({ projectsLength, projectsMaxLengthPerPage, selectedPage, handleClick }) {
    let paginationButtons = [];

    /*Event's functions*/
    const handleClickNext = () => {
        if (projectsLength > 0) {
            const indice = selectedPage + 1 > Math.ceil(projectsLength / projectsMaxLengthPerPage) ? selectedPage : selectedPage + 1;
            handleClick(indice);    
        }
    };
    const handleClickPrevious = () => {
        if (projectsLength > 0) { 
            const indice = selectedPage - 1 < 1 ? selectedPage : selectedPage - 1;
            handleClick(indice);    
        }
    };
    const handleClickIndice = (e) => {
        const indice = parseInt(e.target.value);
        handleClick(indice);
    };

    /*Functions to create Pagination buttons*/
    const generatePaginationButtons = (currentIndice) => {
        let buttons = [];
        for (let i = 0; i < Math.ceil(projectsLength / projectsMaxLengthPerPage); i++) {
            const indice = i + 1;
            if (indice === currentIndice) {
                buttons.push(<button className="pagination-button active" key={indice} value={indice} onClick={handleClickIndice}>{indice}</button>);
            } else {
                buttons.push(<button className="pagination-button" key={indice} value={indice} onClick={handleClickIndice}>{indice}</button>);
            }
        }
        return buttons;
    };
    const displayPaginationButtons = (buttons, currentIndice) => {
        if (buttons.length < 5) {
            return buttons
        } else {
            let preIndiceButtons = buttons.slice(0, currentIndice - 1);
            let afIndiceButtons = buttons.slice(currentIndice);

            if (preIndiceButtons.length > 2) {
                preIndiceButtons = [preIndiceButtons[0], <button key={currentIndice - 2} className="pagination-dot"><img src={more} alt=""/></button>, preIndiceButtons[preIndiceButtons.length - 1]];
                preIndiceButtons.push(<button key={currentIndice - 2} className="pagination-dot"><img src={more} alt=""/></button>);
            }
            if (afIndiceButtons.length > 2) {
                afIndiceButtons = [afIndiceButtons[0], <button key={currentIndice + 2} className="pagination-dot"><img src={more} alt=""/></button>, afIndiceButtons[afIndiceButtons.length - 1]]
            }

            return [...preIndiceButtons, buttons[currentIndice - 1], ...afIndiceButtons];
        }
    }
    
    
    paginationButtons = generatePaginationButtons(selectedPage);
    return (
        <div className="pagination">
            <button className="pagination-button previous" onClick={handleClickPrevious}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pagination-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg></button>
            {displayPaginationButtons(paginationButtons, selectedPage)}
            <button className="pagination-button next" onClick={handleClickNext}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="pagination-icon"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg></button>
        </div>
    );
}

class ProjectsSection extends Component{
    constructor(props) {
        super(props)
        this.state = {
            projectsList: myProjects,
            projectsListByTag: [],
            projectsListByPage: [],
            projectsMaxLengthPerPage: 0,
            selectedTag: "",
            selectedPage: 1,
        }

        this.selectTag = this.selectTag.bind(this);
        this.selectPage = this.selectPage.bind(this);
        this.filterProjectsByTag = this.filterProjectsByTag.bind(this);
        this.filterProjectsByPage = this.filterProjectsByPage.bind(this);
        this.changeProjectsMaxLengthPerPage = this.changeProjectsMaxLengthPerPage.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.changeProjectsMaxLengthPerPage, false);
        this.changeProjectsMaxLengthPerPage();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.projectsMaxLengthPerPage === 3 && prevState.projectsMaxLengthPerPage !== 3) {
            this.selectTag("Responsive");
        }
        if (this.state.projectsMaxLengthPerPage === 2 && prevState.projectsMaxLengthPerPage !== 2) {
            this.selectTag("Responsive");
        }
    }

    selectPage(pageIndex) {
        if (pageIndex !== this.state.selectedPage) {
            this.setState({
                selectedPage: pageIndex,
                projectsListByPage: this.filterProjectsByPage(pageIndex, this.state.projectsListByTag)
            });
        }
    }
    selectTag(tag) {
        const projectsByTag = this.filterProjectsByTag(tag);

        this.setState({
            selectedTag: tag,
            selectedPage: 1,
            projectsListByTag: projectsByTag,
            projectsListByPage: this.filterProjectsByPage(1, projectsByTag)
        })
    }
    filterProjectsByTag(tag) {
        const projects =this.state.projectsList.filter(el => el.technos.includes(tag));
        return projects;
    }
    filterProjectsByPage(pageIndex, projectsByTag) {
        const projectsMaxLengthPerPage = this.state.projectsMaxLengthPerPage;
        let projects = projectsByTag.slice((pageIndex - 1) * projectsMaxLengthPerPage);
        projects = projects.length > projectsMaxLengthPerPage ? projects.slice(0, projectsMaxLengthPerPage) : projects;
        return projects;
    }

    changeProjectsMaxLengthPerPage() {
        const screenSize = window.innerWidth;
        if (screenSize < 992 && this.state.projectsMaxLengthPerPage !== 2) {
            this.setState({
                projectsMaxLengthPerPage: 2
            });
        }
        if (screenSize > 992 && this.state.projectsMaxLengthPerPage !== 3) {
            this.setState({
                projectsMaxLengthPerPage: 3
            });
        }
    }

    render() {
        return (
            <div className="projects-section">
                <ProjectsTags projectsLength={this.state.projectsListByTag.length} handleClick={this.selectTag}></ProjectsTags>
                <ProjectsList projects={this.state.projectsListByPage}></ProjectsList>
                <ProjectsPagination projectsLength={this.state.projectsListByTag.length} projectsMaxLengthPerPage={this.state.projectsMaxLengthPerPage} selectedPage={this.state.selectedPage} handleClick={this.selectPage}></ProjectsPagination>
            </div>    
        );
    }
}


export default ProjectsSection;
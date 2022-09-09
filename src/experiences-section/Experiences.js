import './Experiences.css';
import companyLogo1 from './company-logo01.svg';
import companyLogo2 from './company-logo02.svg';

const experiencesData = [
    {
        logo: companyLogo1,
        date: "Feb 2017 - Current",
        jobName: "Front-end developer",
        jobDescription: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
    },
    {
        logo: companyLogo2,
        date: "Aug 2016 - Feb 2018",
        jobName: "Full-stack developer",
        jobDescription: "Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
    }
];

function Job({companyLogo, date, jobName, jobDescription}) {
    return (
        <div className="job">
            <img className="company-logo" src={companyLogo} alt="logo of the company"/>
            <div className="job-infos">
                <span className="date">{date}</span>
                <span className="job-name">{jobName}</span>
                <p className="job-description">{jobDescription}</p>
            </div>
        </div>
    ); 
}

function ExperiencesSection() {
    return (
        <div className="experiences-section section">
            <h2 className="title">Experiences</h2>
            <div className="experiences-list">
                {experiencesData.map((el, i) => <Job key={i} companyLogo={el.logo} date={el.date} jobName={el.jobName} jobDescription={el.jobDescription}/>)}
            </div>
        </div>
    );
}

export default ExperiencesSection;
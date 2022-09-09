import './Hobbies.css';
import hobbiePicture1 from './hobbies-picture01.png';
import hobbiePicture2 from './hobbies-picture02.png';
import hobbiePicture3 from './hobbies-picture03.png';

function Hobbie({picture ,name, description}) {
    return (
        <div className="hobbie">
            <img className="hobbie-picture" src={picture} alt={"about"+name} />
            <div className="hobbie-name">{name}</div>
            <div className="hobbie-description">{description}</div>
        </div>
    );    
}

function HobbiesSection() {
    return (
        <div className="hobbies-section section">
            <h2 className="title">Hobbies</h2>
            <div className="hobbies-list">
                <Hobbie picture={hobbiePicture1} name="Gaming" description="Quisque feugiat malesuada molestie." />
                <Hobbie picture={hobbiePicture2} name="Cooking" description="Quisque feugiat malesuada molestie." />
                <Hobbie picture={hobbiePicture3} name="Biking" description="Quisque feugiat malesuada molestie." />
            </div>
        </div>
    );
}

export default HobbiesSection;
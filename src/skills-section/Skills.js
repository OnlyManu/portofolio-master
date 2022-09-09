import './Skills.css';

function Skill({name, percentage}) {
    return (
        <div className="skill">
            <span className="skill-name">{name}</span>
            <div className="skill-bar">
                <div className="skill-percentage" style={{width: percentage+"%"}}></div>
            </div>
        </div>
    );
}

function SkillsSection() {
    return (
        <div className="skills-section section">
            <h2 className="tiltle">Front end</h2>
            <div className="skills-list">
                <Skill name="React" percentage="69" />
                <Skill name="Javascript" percentage="88" />
                <Skill name="CSS" percentage="94" />
                <Skill name="Vue" percentage="65" />
                <Skill name="Redux" percentage="76" />
                <Skill name="React Native" percentage="96" />
            </div>
        </div>
    );
}

export default SkillsSection;
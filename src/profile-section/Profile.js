import './Profile.css';
import profilePicture from './profile-picture.png';


function ProfileSection() {
    return (
        <div className="profile-section section">
            <img className="profile-picture" src={profilePicture} alt="profile" />

            <div className="profile-info">
                <div className="header">
                    <div className="info">
                        <span className="name">Billy Pearson</span>
                        <span className="profession">Front-end developer</span>
                    </div>
                    <div className="contacts">
                        <span className="contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>billy@example.com</span>
                        <span className="contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>(+603) 546 624 342</span>
                    </div>
                </div>
                <div className="about-me">
                    <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
                    <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;
import './App.css';
import ProfileSection from './profile-section/Profile';
import SkillsSection from './skills-section/Skills';
import BlogSection from './blog-section/Blog';
import HobbiesSection from './hobbies-section/Hobbies';
import ExperiencesSection from './experiences-section/Experiences';
import ProjectsSection from './projects-section/Projects';

function App() {
  return (
    <div className="App">
      <ProfileSection></ProfileSection>
      <SkillsSection></SkillsSection>
      <BlogSection></BlogSection>
      <HobbiesSection></HobbiesSection>
      <ExperiencesSection></ExperiencesSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}

export default App;

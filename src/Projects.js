import projectsJSON from './assets/projects.json';
import ProjectCard from './components/ProjectCard';
import './assets/css/Projects.css';

export default function Projects(props) {
    const projectsData = projectsJSON.map((p, i) => (
        <ProjectCard 
            key={i} 
            title={p.title}
            image={p.image}
            skills={p.skills}
            summary={p.summary}
            github={p.github}
            url={p.url}/>
      ))
    return (
    <div className="projects-container">
        <p ref={props.projectRef} className="projects-heading">Projects</p>
        <div className="projects-cards">
            {projectsData}
        </div>
    </div>
    );
}

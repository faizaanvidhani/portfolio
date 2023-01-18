import React, { useEffect, useState } from 'react';
import '../assets/css/components/ProjectCard.css';
import GitHubIcon from '../assets/icons/github-icon.svg';
import URLIcon from '../assets/icons/url-icon.svg';

export default function ProjectCard(props) {
    const [projectSkills, setProjectSkills] = useState([]);
    useEffect(() => {
        setProjectSkills(props.skills.map((name, i) => (
            <p className="project-skill" key={i}>{name}</p>
        )));
      }, []);
    

    return (
        <div className="project-card">
            <div>
                <img className="project-image" src={props.image} alt={props.title}/>
                <div className="project-card-info">
                    <p className="project-card-heading">{props.title}</p>
                    <div className="project-card-skills">
                        {projectSkills}
                    </div>
                    <p className="project-card-summary">
                        {props.summary}
                    </p>
                </div>
            </div>
            
            <div className="project-card-icons">
                {props.url !== "NONE" ? <a href={props.url}><img src={URLIcon} className="project-icon" alt="URL"></img></a> : null}
                {props.github !== "NONE" ? <a href={props.github}><img src={GitHubIcon} className="project-icon" alt="GitHub"></img></a> : null}
            </div>
        </div>
      )
    }
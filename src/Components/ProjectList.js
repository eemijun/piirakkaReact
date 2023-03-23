import React, { useState } from 'react';
import './ProjectList.css';

const projects =  [
      {
        "title":"Simple F1",
        "description":"Get the results from a random Formula 1 race",
        "image":"images/formula-one.png",
        "url":"https://main.dniqvhd9rgzap.amplifyapp.com/"
      },
      {
        "title":"SimpleFootball",
        "description":"Simple app displaying info about the National Football League",
        "image":"images/sf_logo.png",
        "url":"https://play.google.com/store/apps/details?id=com.eemij.simplefootball"
      },
      {
        "title":"SimpleWeather",
        "description":"Easy to view weather app written in Python",
        "image":"images/cloudy.png",
        "url":"https://github.com/eemijun/simpleweather#readme"
      },
      {
        "title":"Lautapeli",
        "description":"Pick a random board game to play for game nights",
        "image":"images/chess.png",
        "url":"/boardgame"
      },
      {
        "title":"Piirakka",
        "description":"Personal webpage written with Django running on AWS.",
        "image":"images/pie.png",
        "url":"https://github.com/eemijun/piirakka#readme"
      }
    ]

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };
  return (
    <div className="project-list-container">
      <h1 className="project-list-title">Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project ${selectedProject === project.id ? 'selected' : ''}`}
            //onClick={() => handleProjectClick(project.id)}
          >
            <a href={project.url}>
            <img src={project.image} alt={project.title}/>
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
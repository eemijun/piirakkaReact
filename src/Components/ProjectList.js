import React, { Component } from 'react';
import Project from './Project';

function ProjectList({projects}){
            return (
			<div >
				<h2>Projects</h2>
                    {projects.map((project, i) => <Project project={project}key={i} />)}
            </div>
        );
}

export default ProjectList;

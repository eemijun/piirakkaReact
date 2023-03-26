import React from 'react';

function Project({ project }) {
    return (
        <article>
			<h1>{project.title}</h1>
			<h3 className="major">{project.description}</h3>
			<a href={project.url}>
            <img src={project.image} alt={project.title}/>
            </a>
		</article>
    );
}

export default Project;
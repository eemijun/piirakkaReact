import React from 'react';
import Zmage from "react-zmage";

function Project({ project }) {
	let projectImage = "images/" + project.image;

    return (
        <article>
			<Zmage alt={project.title} src={projectImage} />
			<h3 className="major">{project.info}</h3>
			<a href={project.url} className="special">{project.name}</a>
		</article>
    );
}

export default Project;
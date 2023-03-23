import React, { Component } from "react";
import ProjectList from '../Components/ProjectList';

function HomePage({projects}){
        return (
            <><p className='App-Par'>Welcome to my website showcasing various projects that I have been working on.</p>

            <ProjectList projects={projects} ></ProjectList></>
        );
    }

export default HomePage;
import React, { Component } from "react";
import ProjectList from '../Components/ProjectList';

function HomePage({projects}){

        return (
            <ProjectList projects={projects} ></ProjectList>
        );
    }

export default HomePage;
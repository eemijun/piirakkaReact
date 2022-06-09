import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { useEffect, useState } from "react";

function App() {

	const [projects, setProjects] = useState([]);
	const getData=()=>{
		fetch('resumeData.json'
		,{
		  headers : { 
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		   }
		}
		)
		  .then(function(response){
			return response.json();
		  })
		  .then(function(myJson) {
			setProjects(myJson.portfolio.projects)
		  });
	  }
	  useEffect(()=>{
		getData()
	  },[])
	return (
		  <div className="App">
			<header>
			  <h1 className='App-Header'>Eemi Juntunen</h1>
			  <p className='App-Par'>Welcome to my website showcasing various projects that I have been working on.</p>
			</header>
			<Router>
			  <Route path="/" exact>
				<HomePage projects={projects}></HomePage>
			  </Route>
			</Router>
			<footer className='App-Footer'>
			  © 2022 Eemi Juntunen
			</footer>
		  </div>
		  );	
	}


export default App;



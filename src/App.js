import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Lautapeli from './Pages/Lautapeli'
import SimpleF1 from './Pages/SimpleF1'
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
			</header>
			<Router>
			  <Route path="/" exact>
				<HomePage projects={projects}></HomePage>
			  </Route>
			  <Route path="/boardgame" exact>
				<Lautapeli></Lautapeli>
			  </Route>
			  <Route path="/kilpa" exact>
				<SimpleF1></SimpleF1>
			  </Route>
			</Router>
			<footer className='App-Footer'>
			  © 2022 Eemi Juntunen
			</footer>
		  </div>
		  );	
	}


export default App;



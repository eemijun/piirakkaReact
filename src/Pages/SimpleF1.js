import React, { Component } from "react";
import { useEffect, useState } from "react";
import Papa from 'papaparse';

function SimpleF1({}){
const axios = require('axios').default;
const seasons_races = {"1950": 7,"1951": 8,"1952": 8,"1953": 9,"1954": 9,"1956": 8,"1957": 8,"1958": 11,"1960": 10,"1961": 8,
"1962": 9,"1963": 10,"1964": 10,"1965": 10,"1966": 9,"1967": 11,"1968": 12,"1969": 11,"1970": 13,"1971": 11,"1972": 12,"1973": 15,
"1974": 15,"1975": 14,"1976": 16,"1977": 17,"1978": 16,"1979": 15,"1980": 14,"1981": 15,"1982": 16,"1983": 15,"1984": 16,"1985": 16,
"1986": 16,"1987": 16,"1988": 16,"1990": 16,"1991": 16,"1992": 16,"1993": 16,"1994": 16,"1995": 17,"1996": 16,"1997": 17,"1998": 16,
"1999": 16,"2000": 17,"2001": 17,"2002": 17,"2003": 16,"2004": 18,"2005": 19,"2006": 18,"2007": 17,"2008": 18,"2009": 17,"2010": 19,
"2011": 19,"2012": 20,"2013": 19,"2014": 19,"2015": 19,"2016": 21,"2017": 20,"2018": 21,"2019": 21,"2020": 17,"2021": 22}
const [racename, setRaceName] = useState([]);
const [resultList, setResults] = useState([]);
async function getData(){
    var keys = Object.keys(seasons_races);
    let race = keys[Math.floor(Math.random()*keys.length)];

    const response = await fetch('results.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return csv;
	// axios
	// .get("http://ergast.com/api/f1/" + race + "/" + seasons_races[race] + "/results", {
	// 	"Content-Type": "application/xml; charset=utf-8"
	//  })
	// .then(function(response) {
    //     var xml = new XMLParser().parseFromString(response.data);
	
    //     setRaceName(xml.getElementsByTagName('Race')[0].children[0].value);
    //     setResults(xml.getElementsByTagName('Results'));
    //     console.log(xml.getElementsByTagName('Result').childNodes[0])
	// })
	// .catch(function(error) {
	// 	console.log(error);
	// });
    }

    async function GetData(artist) {
        const data = Papa.parse(await getData());
       // console.log(data.data[1][0]);
        setResults(data.data);
    }
    useEffect(()=>{
    GetData()
    },[])

        return (
            <div>
                <h1 class="display-5 fw-bold">The {racename}</h1>
      {/* <h1 class="display-5 fw-bold">Round {resultList.round} of {resultList.season} Season</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Raced on {resultList.Date} at {resultList.Circuit.CircuitName} located in
                                {resultList.Circuit.Location.Locality}, {resultList.Circuit.Location.Country}</p>
        <p class="lead mb-4"><a href="{{data.url}}" class="btn btn-primary" >Wikipedia Link for more info</a> </p>
    </div> */}
    {resultList}
            </div>

            

        );
    }

export default SimpleF1;
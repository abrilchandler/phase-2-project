import React, { useState, useEffect } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import Golden from "./Golden.js";
import MassMonster from "./MassMonster.js";
import Modern from "./Modern.js";
import Bronze from "./Bronze.js";
import '../App.css';

function App() {

  const [data, setData] = useState([]); // array destructuring

  useEffect(() => {
    console.log("hi")
    fetch("http://localhost:4000/bodybuilders")
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
    },[]);
    
    const filterBodybuilders = (era) => {
      return data.filter(bodybuilder => bodybuilder.era.toLowerCase() === era)
    }
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/golden">
          <Golden data={filterBodybuilders("golden")} />
        </Route>
        <Route path="/massmonster">
          <MassMonster data={filterBodybuilders('mass monster')}/>
        </Route>
        <Route path="/modern">
          <Modern data={filterBodybuilders('modern')}/>
        </Route>
        <Route path="/bronze">
          <Bronze data={filterBodybuilders("bronze")}/>
        </Route>
        <Route path="/">
          <Home setData={setData} data={data}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;

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

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("hi")
    fetch("http://localhost:4000/bodybuilders")
    .then(response => response.json())
    .then(data => {
      setData(data);
    });
    },[]);
    
  return (
    <div>
    <NavBar />
    <Switch>
    <Route path="/golden">
      <Golden data={data}/>
    </Route>
    <Route path="/massmonster">
      <MassMonster data={data}/>
    </Route>
    <Route path="/modern">
      <Modern data={data}/>
    </Route>
    <Route path="/bronze">
      <Bronze data={data}/>
    </Route>
    <Route path="/">
      <Home setData={setData} data={data}/>
    </Route>
    </Switch>
    </div>
  )
}

export default App;

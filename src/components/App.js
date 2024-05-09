import React, { useState, useEffect } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import Golden from "./Golden.js";
import MassMonster from "./MassMonster.js";
import Modern from "./Modern.js";
import Bronze from "./Bronze.js";
import AddForm from "./AddForm.js";




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
      <Golden />
    </Route>
    <Route path="/massmonster">
      <MassMonster />
    </Route>
    <Route path="/modern">
      <Modern />
    </Route>
    <Route path="/bronze">
      <Bronze />
    </Route>
    
    <Route path="/">
      <Home />
    </Route>
    </Switch> 
    <AddForm setData={setData} data={data}/>
    {data.length > 0 && data.map(bodybuilder => (
        <option key={bodybuilder.id} value={bodybuilder.id}>{bodybuilder.name}  |  {bodybuilder.titles}  |  {bodybuilder.era}</option>
      ))}
      
    </div>
  )
}

export default App;

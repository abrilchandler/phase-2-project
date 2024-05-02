import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import Golden from "./Golden.js";
import MassMonster from "./MassMonster.js";
import Modern from "./Modern.js";
import Bronze from "./Bronze.js";


function App() {

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
    </div>
  )
}

export default App;

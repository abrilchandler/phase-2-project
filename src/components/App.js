import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./Home.js";
import NavBar from "./NavBar.js";
import JayCutler from "./JayCutler.js";
import RonnieColeman from "./RonnieColeman.js";
import DorianYates from "./DorianYates";
import ArnoldSchwarzenegger from "./ArnoldSchwarzenegger";
import CreateYourOwnWorkout from "./CreateYourOwnWorkout";

function App() {

  return (
    <div>
    <NavBar />
    <Switch>
    <Route path="/ronniecoleman">
      <RonnieColeman />
    </Route>
    <Route path="/jaycutler">
      <JayCutler />
    </Route>
    <Route path="/dorianyates">
      <DorianYates />
    </Route>
    <Route path="/arnoldschwarzenegger">
      <ArnoldSchwarzenegger />
    </Route>
    <Route path="/createyourownworkout">
      <CreateYourOwnWorkout />
    </Route>
    <Route path="/">
      <Home />
    </Route>
    </Switch>
    </div>
  )
}

export default App;

import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles={
    display: "inline-block",
    width: "140px",
    padding: "12px",
    margin: "0 0 0 ",
    background: "red",
    textDecoration: "none",
    color: "white"
  }
  
  function NavBar() {
    return (
      <div>
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Home</NavLink>
        <NavLink 
        to="/ronniecoleman"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Ronnie Coleman</NavLink>
        <NavLink 
        to="/jaycutler"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Jay Cutler</NavLink>
        <NavLink 
        to="/dorianyates"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Dorian Yates</NavLink>
        <NavLink 
        to="/arnoldschwarzenegger"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Arnold Schwarzenegger</NavLink>
        <NavLink
        to="/createyourownworkout"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Create Your Own Workout</NavLink>
      </div>

    )
  }

  export default NavBar;
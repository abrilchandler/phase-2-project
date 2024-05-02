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
        to="/golden"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Golden Era</NavLink>

        <NavLink 
        to="/massmonster"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Mass Monster Era</NavLink>

        <NavLink 
        to="/modern"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Modern Era</NavLink>

        <NavLink 
        to="/bronze"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Bronze Era</NavLink>

      </div>

    )
  }

  export default NavBar;
import React from "react";
import {NavLink} from "react-router-dom";

  function NavBar() {
    return (
      <div className="navBar">
        <div className="navLinks">
        <NavLink
        to="/"
        exact
        activeStyle={{
          background: "darkred",
        }}
        >Home</NavLink>
      </div>
      
      <div className="navLinks">
        <NavLink 
        to="/golden"
        exact
        activeStyle={{
          background: "darkred",
        }}
        >Golden Era</NavLink>
      </div>

      <div className="navLinks">
        <NavLink 
        to="/massmonster"
        exact
        activeStyle={{
          background: "darkred",
        }}
        >Mass Monster Era</NavLink>
</div>

<div className="navLinks">
        <NavLink 
        to="/modern"
        exact
        activeStyle={{
          background: "darkred",
        }}
        >Modern Era</NavLink>
</div>

<div className="navLinks">
        <NavLink 
        to="/bronze"
        exact
        activeStyle={{
          background: "darkred",
        }}
        >Bronze Era</NavLink>
    </div>
      </div>

    )
  }

  export default NavBar;
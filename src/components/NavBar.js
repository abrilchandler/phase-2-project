import React from "react";
import {NavLink} from "react-router-dom";

  function NavBar() {
    return (
      <div className="navBar">
        <div className="navLinks">
        <NavLink
        to="/"
        exact
        // className="navLinks"
        //style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Home</NavLink>
      </div>
      <div className="navLinks">
        <NavLink 
        to="/golden"
        exact
        //style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Golden Era</NavLink>
      </div>
      <div className="navLinks">
        <NavLink 
        to="/massmonster"
        exact
        // style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Mass Monster Era</NavLink>
</div>
<div className="navLinks">
        <NavLink 
        to="/modern"
        exact
        // style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Modern Era</NavLink>
</div>
<div className="navLinks">
        <NavLink 
        to="/bronze"
        exact
        // style={linkStyles}
        activeStyle={{
          background: "darkred",
        }}
        >Bronze Era</NavLink>
</div>
      </div>

    )
  }

  export default NavBar;
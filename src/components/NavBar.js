import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "block",
};

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" style={linkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" style={linkStyles}>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/directors" style={linkStyles}>
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink to="/actors" style={linkStyles}>
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2 id="navbar-brand">Fashion</h2>
      <div id="navbar-links">
        <Link to="#" className="bordered-link">
          Home
        </Link>
        <Link to="#" className="bordered-link">
          Women's
        </Link>
        <Link to="#" className="bordered-link">
          Men's
        </Link>
        <Link to="#" className="bordered-link">
          Shop
        </Link>
        <Link to="#" className="bordered-link">
          Pages
        </Link>
        <Link to="#" className="bordered-link">
          Blog
        </Link>
        <Link to="#" className="bordered-link">
          Contact
        </Link>
      </div>
      <div id="navbar-icons">
        <span>Login / Register</span>
        <i className="material-icons">search</i>
        <i className="material-icons">favorite_border</i>
        <i className="material-icons">card_travel</i>
      </div>
      <i id="hamburger" className="material-icons">
        menu
      </i>
    </nav>
  );
};

export default Navbar;

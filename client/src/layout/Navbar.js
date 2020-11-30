import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2 id="navbar-brand">Fashion</h2>
      <div id="navbar-links">
        <a href="#" className="bordered-link">
          Home
        </a>
        <a href="#" className="bordered-link">
          Women's
        </a>
        <a href="#" className="bordered-link">
          Men's
        </a>
        <a href="#" className="bordered-link">
          Shop
        </a>
        <a href="#" className="bordered-link">
          Pages
        </a>
        <a href="#" className="bordered-link">
          Blog
        </a>
        <a href="#" className="bordered-link">
          Contact
        </a>
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

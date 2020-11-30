import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div id="header-one">
        <div className="header-text">
          <h1>Women's fashion</h1>
          <p>
            Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            incidid-unt labore edolore magna aliquapendisse ultrices gravida.
          </p>
          <a href="#" className="bordered-link">
            Shop Now
          </a>
        </div>
      </div>
      <div id="header-two">
        <div className="sub-header">
          <div className="header-text">
            <h2>Men's fashion</h2>
            <p>258 items</p>
            <a href="#" className="bordered-link">
              Shop Now
            </a>
          </div>
        </div>
        <div className="sub-header">
          <div className="header-text">
            <h2>Kid's fashion</h2>
            <p>273 items</p>
            <a href="#" className="bordered-link">
              Shop Now
            </a>
          </div>
        </div>
        <div className="sub-header">
          <div className="header-text">
            <h2>Cosmetics</h2>
            <p>159 items</p>
            <a href="#" className="bordered-link">
              Shop Now
            </a>
          </div>
        </div>
        <div className="sub-header">
          <div className="header-text">
            <h2>Accessories</h2>
            <p>792 items</p>
            <a href="#" className="bordered-link">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

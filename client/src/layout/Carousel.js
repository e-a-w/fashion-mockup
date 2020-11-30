import React from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <section id="carousel-container">
      <h3>The Chloe Collection</h3>
      <h2>The Project Jacket</h2>
      <Link to="/collection" className="bordered-link">
        Shop Now
      </Link>
    </section>
  );
};

export default Carousel;

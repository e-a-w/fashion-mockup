import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("womens");

  useEffect(() => {
    fetch(`/api/products?category=${category}&limit=9`)
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(e => console.log(e));
  }, [category]);

  return (
    <section id="product-container">
      <h2 id="product-title">
        <span>New</span> Product
      </h2>
      <div id="product-links">
        <a onClick={() => setCategory(null)}>All</a>
        <a onClick={() => setCategory("womens")}>Women's</a>
        <a onClick={() => setCategory("mens")}>Men's</a>
        <a onClick={() => setCategory("kids")}>Kids</a>
        <a onClick={() => setCategory("accessories")}>Accessories</a>
        <a onClick={() => setCategory("cosmetics")}>Cosmetics</a>
      </div>
      <div id="product-cards">
        {products?.map(product => {
          return (
            <div className="p-card" key={product.id}>
              <div
                className="p-img"
                style={{ backgroundImage: `url('${product.image}')` }}
              >
                <div className={`p-toast ${product.label}`}>
                  {product.label === "oos" ? "out of stock" : product.label}
                </div>
                <div className="p-icons">
                  <i className="material-icons">open_in_full</i>
                  <i className="material-icons">favorite_border</i>
                  <i className="material-icons">card_travel</i>
                </div>
              </div>
              <div className="p-info">
                <p>{product.description}</p>
                <div className="p-rating">
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                  <i className="material-icons">star</i>
                </div>
                <h4>{product.price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;

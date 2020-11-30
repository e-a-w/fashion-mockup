import React from "react";

const SaleCol = ({ sale, products }) => {
  return (
    <div className="sale-col">
      <h3>{sale}</h3>
      {products.map(product => {
        return (
          <div key={product.id} className="sale-card">
            <img src={product.image} height="75px" width="75px" alt="sales" />
            <div className="p-info">
              <p>{`${product.description.slice(0, 22)}...`}</p>
              <div className="p-rating">
                {[1, 2, 3, 4, 5].map(star => (
                  <i key={star} className="material-icons">
                    star
                  </i>
                ))}
              </div>
              <h4>$ {product.price}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SaleCol;

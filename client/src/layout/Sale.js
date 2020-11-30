import React, { useState, useEffect } from "react";
import SaleCol from "../components/SaleCol";

const Sale = () => {
  const [trend, setTrend] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [bestseller, setBestseller] = useState([]);
  const sales = ["trend", "bestseller", "featured"];

  useEffect(() => {
    sales.forEach(sale => {
      fetch(`/api/products?sale=${sale}&limit=3`)
        .then(res => res.json())
        .then(json => {
          switch (sale) {
            case "trend":
              setTrend(json);
              break;
            case "featured":
              setFeatured(json);
              break;
            case "bestseller":
              setBestseller(json);
              break;
            default:
              break;
          }
        })
        .catch(e => console.log(e));
    });
  }, [sales]);

  return (
    <section id="sales-container">
      <SaleCol sale="Hot Trend" products={trend} />
      <SaleCol sale="Bestseller" products={bestseller} />
      <SaleCol sale="Featured" products={featured} />
    </section>
  );
};

export default Sale;

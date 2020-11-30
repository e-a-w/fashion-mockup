import React from "react";
import Navbar from "./layout/Navbar";
import Header from "./layout/Header";
import Products from "./layout/Products";
import Carousel from "./layout/Carousel";
import Sale from "./layout/Sale";
import Discounts from "./layout/Discounts";
import Insta from "./layout/Insta";
import SiteInfo from "./layout/SiteInfo";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Carousel />
      <Sale />
      <Discounts />
      <Insta />
      <SiteInfo />
      <Footer />
    </>
  );
};

export default App;

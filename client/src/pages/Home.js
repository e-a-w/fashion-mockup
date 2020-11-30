import React from "react";
import Header from "../layout/Header";
import Products from "../layout/Products";
import Carousel from "../layout/Carousel";
import Sale from "../layout/Sale";
import Discounts from "../layout/Discounts";
import Insta from "../layout/Insta";
import SiteInfo from "../layout/SiteInfo";

const Home = () => {
  return (
    <>
      <Header />
      <Products />
      <Carousel />
      <Sale />
      <Discounts />
      <Insta />
      <SiteInfo />
    </>
  );
};

export default Home;

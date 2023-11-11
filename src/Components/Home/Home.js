import React from "react";
import Navbar from "../NavigationBar/Navbar";
import ProductSlider from "./ProductSlider";
import Deals from "./Deals";
import topDeals_data from "../../Data/TopDealsData";
function Home() {
  return (
    <>
      <Navbar />

      <ProductSlider />

      <Deals heading={"Top Deals"} data={topDeals_data} />

      <Deals heading={"Trending Deals"} data={topDeals_data} />

      <Deals heading={"Deals You May Like"} data={topDeals_data} />

    </>
  );
}

export default Home;

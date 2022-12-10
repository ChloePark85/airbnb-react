import React from "react";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeList from "../Components/HomeList";
import CategoryList from "../Components/Slider";
import Float from "../Components/Float";

function Home() {
  return (
    <>
      <Banner />
      <Header />
      <CategoryList />
      <HomeList />
      <Float />
      <Footer />
    </>
  );
}

export default Home;

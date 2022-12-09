import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeList from "../Components/HomeList";
import CategoryList from "../Components/Slider";

function Home() {
  return (
    <>
      <Header />
      <CategoryList />
      <HomeList />
      <Footer />
    </>
  );
}

export default Home;

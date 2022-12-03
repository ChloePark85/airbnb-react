import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import HomeList from "../Components/HomeList";
import { HomeListContainer, HomeListBox } from "../Components/HomeList";
import { CategoryContainer, CategoryBtn } from "../Components/Slider";
import Slider from "../Components/Slider";
import FilterSrc from "../Components/filter.png";
import { FilterBtn } from "../Components/Slider";

function Home() {
  const [homeItem, setHomeItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3004/data/homes.json`)
      .then((response) => response.json())
      .then((json) => setHomeItems(json));
  }, []);
  const [categoryItem, setCategoryItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3004/data/categories.json`)
      .then((response) => response.json())
      .then((json) => setCategoryItems(json));
  }, []);
  return (
    <>
      <Header />
      <CategoryContainer>
        <CategoryBtn>
          {categoryItem.map((category) => (
            <Slider
              key={category.id}
              imageUrls={category.imageUrls}
              name={category.name}
            />
          ))}
        </CategoryBtn>
        <FilterBtn>
          {/* {
            <img
              src={FilterSrc}
              style={{ width: "15px", height: "15px" }}
              alt=""
            />
          } */}
          {/* {<span>필터</span>} */}
        </FilterBtn>
      </CategoryContainer>
      <HomeListContainer>
        <HomeListBox>
          {homeItem.map((home) => (
            <HomeList
              key={home.id}
              imageUrls={home.imageUrls}
              location={home.location}
              registration={home.registration}
              date={home.date}
              price={home.price}
            />
          ))}
        </HomeListBox>
      </HomeListContainer>
      <Footer />
    </>
  );
}

export default Home;

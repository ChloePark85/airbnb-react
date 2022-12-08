import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import HomeList from "../Components/HomeList";
import { HomeListContainer, HomeListBox } from "../Components/HomeList";
import SlickSlider from "../Components/Slider";
import {
  CategoryBtn,
  CategoryContainer,
  CategoryItems,
} from "../Components/Slider";
import CategoryCard from "../Components/CategoryCard";
// import FilterSrc from "../Components/filter.png";
// import { FilterBtn } from "../Components/Slider";

function Home() {
  const [homeItem, setHomeItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/data/homes.json`)
      .then((response) => response.json())
      .then((json) => setHomeItems(json));
  }, []);
  const [categoryItem, setCategoryItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/data/categories.json`)
      .then((response) => response.json())
      .then((json) => setCategoryItems(json));
  }, []);
  return (
    <>
      <Header />
      {/* <SlickSlider /> */}
      <CategoryContainer>
        <CategoryBtn>
          <CategoryItems>
            {categoryItem.map((category) => (
              <CategoryCard
                key={category.id}
                imageUrls={category.imageUrls}
                name={category.name}
              />
            ))}
          </CategoryItems>
        </CategoryBtn>
        {/* <FilterBtn> */}
        {/* {
            <img
              src={FilterSrc}
              style={{ width: "15px", height: "15px" }}
              alt=""
            />
          } */}
        {/* {<span>필터</span>} */}
        {/* </FilterBtn> */}
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

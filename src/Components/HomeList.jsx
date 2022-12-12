import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeCard from "./HomeCard";

const HomeLists = styled.div`
  width: 100%;
  margin: 25px 78px 25px 78px;
  position: relative;
`;

const HomeListBox = styled.div`
  display: grid;
  grid-template-columns: 306px 306px 306px 306px;
  height: 393px;
  grid-gap: 24px;
  margin-bottom: 14px;
`;

function HomeList() {
  const [homeItem, setHomeItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/data/homes.json`)
      .then((response) => response.json())
      .then((json) => setHomeItems(json));
  }, []);
  return (
    <HomeLists>
      <HomeListBox>
        {homeItem.map((item) => {
          return (
            <HomeCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrls1={item.imageUrls1}
              imageUrls2={item.imageUrls2}
              location={item.location}
              rating={item.rating}
              registration={item.registration}
              date={item.date}
              price={item.price}
            />
          );
        })}
      </HomeListBox>
    </HomeLists>
  );
}

export default HomeList;

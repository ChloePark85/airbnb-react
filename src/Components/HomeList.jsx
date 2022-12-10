import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeCard from "./HomeCard";

const HomeLists = styled.div`
  width: 100%;
  margin-left: 78px;
  margin-right: 78px;
  /* top: 154px; */
`;

const HomeListBox = styled.div`
  display: grid;
  grid-template-columns: 306px 306px 306px 306px;
  height: 393px;
  grid-gap: 24px;
  margin-bottom: 14px;
  text-decoration: none;
`;

function HomeList() {
  const [homeItem, setHomeItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/data/homes.json`)
      .then((response) => response.json())
      .then((json) => setHomeItems(json));
  }, []);
  return (
    <Link to="/homes">
      <HomeLists>
        <HomeListBox>
          {homeItem.map((item) => {
            return (
              <HomeCard
                key={item.id}
                imageUrls={item.imageUrls}
                location={item.location}
                registration={item.registration}
                date={item.date}
                price={item.price}
              />
            );
          })}
        </HomeListBox>
      </HomeLists>
    </Link>
  );
}

export default HomeList;

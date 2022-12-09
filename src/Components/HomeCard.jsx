import React from "react";
import styled from "styled-components";

const HomeCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeImageContainer = styled.img`
  width: 321px;
  height: 306px;
  border-radius: 10px;
`;

const HomeInfo = styled.div`
  margin-top: 14px;
  position: relative;
`;

function HomeCard({ imageUrls, location, registration, date, price }) {
  return (
    <HomeCards>
      <HomeImageContainer src={imageUrls} alt="" />
      <HomeInfo>
        <h2>{location}</h2>
        <h2>{registration}</h2>
        <h2>{date}</h2>
        <h2>{price}</h2>
      </HomeInfo>
    </HomeCards>
  );
}

export default HomeCard;

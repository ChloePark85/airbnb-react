import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeListContainer = styled.div`
  margin-left: 78px;
  margin-right: 78px;
  top: 154px;
`;

export const HomeListBox = styled.div`
  display: grid;
  grid-template-columns: 306px 306px 306px 306px;
  height: 393px;
  grid-gap: 24px;
  margin-bottom: 14px;
  margin-top: 124px;
  text-decoration: none;
`;

const HomeInfo = styled.div`
  margin-top: 14px;
  display: grid;
`;

function HomeList({ imageUrls, location, registration, date, price }) {
  return (
    <Link to="/homes">
      <img
        src={imageUrls}
        style={{ width: "321px", height: "306px", borderRadius: "10px" }}
        alt=""
      />
      <HomeInfo>
        <h2>{location}</h2>
        <h2>{registration}</h2>
        <h2>{date}</h2>
        <h2>{price}</h2>
      </HomeInfo>
    </Link>
  );
}

export default HomeList;

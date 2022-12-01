import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Banner from "../Components/Banner";

const Slider = styled.div``;

const Row = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5px;
`;

const Category = styled.div`
  background-color: white;
  height: 123px;
`;

function Home() {
  return (
    <>
      <Banner />
      <Header />
      <Slider>
        <Row>
          <Category />
        </Row>
      </Slider>
    </>
  );
}

export default Home;

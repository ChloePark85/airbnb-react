import React from "react";
import styled from "styled-components";
import { useState } from "react";

const CategoryCards = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &:hover {
    border-bottom: grey 2px solid;
  }
`;

const ImageContainer = styled.img`
  height: 24px;
  width: 24px;
  overflow: hidden;
`;

const CategoryInfo = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
  font-size: 13px;
  white-space: nowrap;
`;

function CategoryCard({ imageUrls, name }) {
  const [category, setCategory] = useState("default");
  const handleClick = () => {
    setCategory("categorySwitch");
  };
  return (
    <>
      {category === "default" && (
        <CategoryCards onClick={handleClick}>
          <ImageContainer src={imageUrls} alt="" />
          <CategoryInfo style={{ marginBottom: "15px" }}>{name}</CategoryInfo>
        </CategoryCards>
      )}
      {/* {category ==="categorySwitch" && } */}
    </>
  );
}

export default CategoryCard;

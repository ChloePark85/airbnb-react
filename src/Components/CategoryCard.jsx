import React from "react";
import styled from "styled-components";

const CategoryCards = styled.div`
  width: 249px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 24px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const CategoryInfo = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
`;

function CategoryCard({ imageUrls, name }) {
  return (
    <CategoryCards>
      <ImageContainer>
        <img src={imageUrls} style={{ width: "24px", height: "24px" }} alt="" />
      </ImageContainer>
      <CategoryInfo>{name}</CategoryInfo>
    </CategoryCards>
  );
}

export default CategoryCard;

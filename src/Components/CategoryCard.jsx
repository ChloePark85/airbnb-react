import React from "react";
import styled from "styled-components";

const CategoryCards = styled.div`
  /* width: 249px; */
  cursor: pointer;
`;

const ImageContainer = styled.img`
  height: 24px;
  width: 24px;
  overflow: hidden;
  position: relative;
`;

const CategoryInfo = styled.div`
  position: relative;
  padding: 14px 10px 0px 0px;
`;

function CategoryCard({ imageUrls, name }) {
  return (
    <CategoryCards>
      <ImageContainer src={imageUrls} alt="" />
      <CategoryInfo>{name}</CategoryInfo>
    </CategoryCards>
  );
}

export default CategoryCard;

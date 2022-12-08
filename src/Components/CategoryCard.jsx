import React from "react";
import styled from "styled-components";

export const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 66px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
`;

function CategoryCard({ imageUrls, name }) {
  return (
    <CategoryItems>
      <button>
        <img src={imageUrls} style={{ width: "24px", height: "24px" }} alt="" />
      </button>
      <span>{name}</span>
    </CategoryItems>
  );
}

export default CategoryCard;

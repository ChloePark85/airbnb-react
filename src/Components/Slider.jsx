import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 107px; */
  border-bottom: #dddddd 1px solid;
  background-color: white;
  position: fixed;
`;

export const CategoryBtn = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 110px;
  margin-left: 78px;
  display: grid;
  grid-template-columns: repeat(60, 1fr);
  column-gap: 48px;
  word-break: keep-all;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
`;

export const FilterBtn = styled.button`
  text-align: right;
  width: 78px;
  height: 48px;
  box-sizing: border-box;
  border: #dddddd 1px solid;
  border-radius: 10px;
  margin-right: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 66px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
`;

function Slider({ imageUrls, name }) {
  return (
    <Link to="/">
      <CategoryItems>
        <button>
          <img
            src={imageUrls}
            style={{ width: "24px", height: "24px" }}
            alt=""
          />
        </button>
        <span>{name}</span>
      </CategoryItems>
    </Link>
    //     <Button>
    //       <CategoryItems>
    //         {
    //           <img
    //             src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
    //             style={{ width: "24px", height: "24px" }}
    //             alt=""
    //           />
    //         }
    //         {<span>신규</span>}
    //         {
    //           <img
    //             src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
    //             style={{ width: "24px", height: "24px" }}
    //             alt=""
    //           />
    //         }
    //         {<span>신규</span>}
    //       </CategoryItems>
    //     </Button>
    //   <FilterBtn>
    //     {
    //       <img
    //         src={FilterSrc}
    //         style={{ width: "15px", height: "15px" }}
    //         alt=""
    //       />
    //     }
    //     {<span>필터</span>}
    //   </FilterBtn>
  );
}

export default Slider;

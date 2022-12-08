import React from "react";
import styled from "styled-components";
import Slider, { settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 107px; */
  border-bottom: #dddddd 1px solid;
  background-color: white;
  position: fixed;
  overflow: scroll; //여기까지 원래 코드
  margin: 5% auto;
  width: 100%;
  .slick-prev:before {
    // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 50;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
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

export const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 66px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  /* height: 260px;
  width: 100%; */
  /* position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  } */
`;

const StyledSlider = styled(Slider)`
  height: 260px;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
`;

function SlickSlider({ imageUrls, name, children }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <button>
        <img src={imageUrls} style={{ width: "24px", height: "24px" }} alt="" />
      </button>
      <span>{name}</span>
    </Slider>
  );
}

export default SlickSlider;

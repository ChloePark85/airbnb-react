import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { TbAdjustmentsHorizontal } from "react-icons/tb";
// import {
//   IoChevronBackCircleOutline,
//   IoChevronForwardCircleOutline,
// } from "react-icons/io5";

const CategoryLists = styled.div`
  box-sizing: border-box;
  margin: 0px 78px 0px 78px;
  padding: 0px 0px 18px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CategoryContainer = styled.div`
  position: fixed;
  height: 78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-button-next {
    background: url("../images/next.png") no-repeat;
    background-size: 50% auto;
    background-position: center;
    color: #222222;
  }

  .swiper-button-prev {
    color: #222222;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    /* display: none; */
  }
`;

const FilterBtn = styled.button`
  width: 78px;
  height: 48px;
  box-sizing: border-box;
  border: #dddddd 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  white-space: nowrap;
  column-gap: 10px;
  cursor: pointer;
`;

function CategoryList() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/data/categories.json`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <CategoryLists>
      <StyledSwiper
        slidesPerView={13}
        slidesPerGroup={13}
        spaceBetween={10}
        freeMode={true}
        navigation={true}
        mousewheel={true}
        modules={[Navigation, FreeMode, Mousewheel]}
      >
        <CategoryContainer>
          {category.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CategoryCard
                  key={item.id}
                  imageUrls={item.imageUrls}
                  name={item.name}
                />
              </SwiperSlide>
            );
          })}
        </CategoryContainer>
      </StyledSwiper>
      <FilterBtn>
        <TbAdjustmentsHorizontal />
        <span>필터</span>
      </FilterBtn>
    </CategoryLists>
  );
}

export default CategoryList;

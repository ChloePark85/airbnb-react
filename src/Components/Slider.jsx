import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const FilterBtn = styled.button`
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

const CategoryLists = styled.div`
  width: 1050px;
  margin: 0px auto;
  padding: 40px 0px;
  position: relative;
`;

const CategoryContainer = styled.div`
  position: relative;
  width: 1050px;
  margin: 0px auto;
  display: flex;
`;

function CategoryList() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3003/data/categories.json`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <CategoryLists>
      <Swiper
        slidesPerView={8}
        slidesPerGroup={4}
        spaceBetween={18}
        navigation={true}
        modules={[Navigation]}
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
      </Swiper>
    </CategoryLists>
  );
}

export default CategoryList;

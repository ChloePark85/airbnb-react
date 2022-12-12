import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slider, { settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const HomeCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeImageContainer = styled.div`
  position: relative;
`;

const HomeImage = styled.img`
  width: 321px;
  height: 306px;
  border-radius: 10px;
`;

const HomeInfo = styled.div`
  margin-top: 14px;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
  .slick-next {
    right: 1rem;
  }
  .slick-prev {
    left: 1rem;
    z-index: 1;
  }
  .slick-dots {
    bottom: 10px;
  }
`;

function HomeCard(props) {
  const navigate = useNavigate();
  const onClickHomeItem = () => {
    navigate(`/homes/${props.id}`, {
      state: props,
    });
  };

  return (
    <HomeCards>
      <HomeImageContainer onClick={onClickHomeItem}>
        <StyledSlider infinite autoplay arrows={true} slidesToShow={1} dots>
          <HomeImage src={props.imageUrls1} alt="" />
          <HomeImage src={props.imageUrls2} alt="" />
        </StyledSlider>
        <AiOutlineHeart
          style={{
            position: "absolute",
            top: "14px",
            right: "10px",
            color: "white",
            width: "24px",
            height: "21px",
          }}
        />
      </HomeImageContainer>

      <HomeInfo>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: "600", marginBottom: "5px" }}>
            {props.location}
          </span>
          <div>
            <AiFillStar />
            {props.rating}
          </div>
        </div>
        <h3 style={{ fontWeight: "400", color: "grey", marginBottom: "5px" }}>
          {props.registration}
        </h3>
        <h2 style={{ fontWeight: "400", color: "grey", marginBottom: "10px" }}>
          {props.date}
        </h2>
        <h2>{props.price} /박</h2>
      </HomeInfo>
    </HomeCards>
  );
}

export default HomeCard;

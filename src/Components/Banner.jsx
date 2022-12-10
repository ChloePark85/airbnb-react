import React from "react";
import styled from "styled-components";
import YoutubeSrc from "./images/youtubepreview.png";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  top: 0;
  background-color: #f7f7f7;
  height: 64px;
  font-size: 14px;
  border-bottom: #dddddd 1px solid;
`;

const Youtube = styled.img`
  width: 54px;
  height: 31px;
  margin-right: 10px;
`;

const Items = styled.div`
  margin-right: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; ;
`;

function Banner() {
  return (
    <BannerContainer>
      <span style={{ marginLeft: "78px" }}>
        2022 겨울 업그레이드를 소개합니다
      </span>
      <Items>
        <Youtube src={YoutubeSrc} />
        <span>동영상 재생</span>
        <div
          style={{
            borderLeft: "1px solid #dddddd",
            height: "30px",
            margin: "10px",
          }}
        />
        <span>새로운 기능 확인하기</span>
      </Items>
    </BannerContainer>
  );
}

export default Banner;

import React from "react";
import styled from "styled-components";

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
  padding: 0px 78px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Banner() {
  return (
    <BannerContainer>
      <span>2022 겨울 업그레이드를 소개합니다</span>
      <Items>
        <span>동영상 재생</span>
        <span>새로운 기능 확인하기</span>
      </Items>
    </BannerContainer>
  );
}

export default Banner;

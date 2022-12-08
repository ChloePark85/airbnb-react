import React from "react";
import styled from "styled-components";
import LogoSrc from "./images/logo.png";
import GlobeSrc from "./images/globe.png";
import YoutubeSrc from "./images/youtubepreview.png";

const HeaderWrapper = styled.div`
  height: 145px;
  display: grid;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: #dddddd 1px solid;
  top: 0;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
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

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: white;
  top: 65px;
  height: 81px;
  font-size: 14px;
  border-bottom: #dddddd 1px solid;
`;
const Search = styled.div`
  width: 333px;
  height: 47px;
  border: 1px solid #dddddd;
  border-radius: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const SearchIcon = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  padding: 10px;
  background-color: #ff385c;
  margin-right: 5px;
`;

const Logo = styled.img`
  margin-left: 78px;
  width: 107px;
  height: 36px;
  padding: 24px;
`;
const Items = styled.div`
  margin-right: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; ;
`;
const Globe = styled.img`
  height: 16px;
  width: 16px;
  padding: 20px;
`;

const Login = styled.div`
  margin: 5px;
  text-align: center;
  border: 1px solid #dddddd;
  width: 70px;
  height: 40px;
  border-radius: 21px;
  transition: box-shadow 0.2s ease;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderWrapper>
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
      <Nav>
        <Logo src={LogoSrc} />
        <Search>
          <button>어디든지</button>
          <div
            style={{
              borderLeft: "1px solid #dddddd",
              height: "24px",
            }}
          />
          <button>언제든 일주일</button>
          <div
            style={{
              borderLeft: "1px solid #dddddd",
              height: "24px",
            }}
          />
          <button>게스트 추가</button>
          <SearchIcon />
        </Search>
        <Items>
          <span>당신의 공간을 에어비앤비하세요</span>
          <Globe src={GlobeSrc} />
          <Login />
        </Items>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

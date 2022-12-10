import React from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import LogoSrc from "./images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiGlobe } from "react-icons/bi";

const HeaderWrapper = styled.div``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  background-color: white;
  height: 81px;
  font-size: 14px;
  border-bottom: #dddddd 1px solid;
`;
const Search = styled.div`
  width: 333px;
  height: 47px;
  border: 1px solid #dddddd;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 8px 16px 16px;
  box-sizing: border-box;
`;

const SearchIcon = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  padding: 10px;
  background-color: #ff385c;
`;

export const Logo = styled.img`
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

const Login = styled.div`
  margin: 5px;
  border: 1px solid #dddddd;
  width: 70px;
  height: 40px;
  border-radius: 21px;
  transition: box-shadow 0.2s ease;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Logo src={LogoSrc} />
        </Link>
        <Search>
          <button style={{ fontWeight: "500" }}>어디든지</button>
          <div
            style={{
              borderLeft: "1px solid #dddddd",
              height: "24px",
            }}
          />
          <button style={{ fontWeight: "500" }}>언제든 일주일</button>
          <div
            style={{
              borderLeft: "1px solid #dddddd",
              height: "24px",
            }}
          />
          <button style={{ fontWeight: "300" }}>게스트 추가</button>
          <SearchIcon>
            <HiMagnifyingGlass style={{ color: "white" }} />
          </SearchIcon>
        </Search>
        <Items>
          <span>당신의 공간을 에어비앤비하세요</span>
          <BiGlobe style={{ height: "16px", width: "16px", padding: "20px" }} />
          <Login>
            <RxHamburgerMenu />
            <CgProfile style={{ width: "24px", height: "24px" }} />
          </Login>
        </Items>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

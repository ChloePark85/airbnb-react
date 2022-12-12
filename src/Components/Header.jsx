import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoSrc from "./images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiGlobe } from "react-icons/bi";
import { useState } from "react";

const HeaderWrapper = styled.div``;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 81px;
  font-size: 14px;
  border-bottom: #dddddd 1px solid;
  position: fixed;
  z-index: 3;
  top: 0;
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
  cursor: pointer;
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
  align-items: center;
`;

const Login = styled.div`
  margin: 5px;
  border: 1px solid #dddddd;
  width: 70px;
  height: 40px;
  border-radius: 21px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const Button = styled.button`
  cursor: pointer;
`;

function Header() {
  const [isToggleOn1, setToggleOn1] = useState(false);
  const handleBackgroundColor1 = () => {
    setToggleOn1((current) => !current);
  };
  const [isToggleOn2, setToggleOn2] = useState(false);
  const handleBackgroundColor2 = () => {
    setToggleOn2((current) => !current);
  };
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <Logo src={LogoSrc} />
        </Link>
        <Search>
          <Button style={{ fontWeight: "500" }}>어디든지</Button>
          <div
            style={{
              borderLeft: "1px solid #dddddd",
              height: "24px",
            }}
          />
          <Button style={{ fontWeight: "500" }}>언제든 일주일</Button>
          <div
            style={{
              borderLeft: "1px solid #dddddd",
              height: "24px",
            }}
          />
          <Button style={{ fontWeight: "300" }}>게스트 추가</Button>
          <SearchIcon>
            <HiMagnifyingGlass style={{ color: "white" }} />
          </SearchIcon>
        </Search>
        <Items>
          <div
            onMouseOver={handleBackgroundColor1}
            style={{
              width: "206px",
              height: "39px",
              borderRadius: "24px",
              backgroundColor: isToggleOn1 ? "#dddddd" : "white",
              padding: "13px 7px",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <span>당신의 공간을 에어비앤비하세요</span>
          </div>
          <div
            onMouseOver={handleBackgroundColor2}
            style={{
              width: "44px",
              height: "39px",
              borderRadius: "24px",
              backgroundColor: isToggleOn2 ? "#dddddd" : "white",
              padding: "13px 13px",
              boxSizing: "border-box",
            }}
          >
            <BiGlobe
              style={{
                height: "16px",
                width: "16px",
              }}
            />
          </div>
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

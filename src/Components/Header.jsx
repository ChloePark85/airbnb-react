import React from "react";
import styled from "styled-components";
import LogoSrc from "./logo.png";
import GlobeSrc from "./globe.png";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
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
  border-radius: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    <Nav>
      <Logo src={LogoSrc} />
      <Search />
      <Items>
        <span>당신의 공간을 에어비앤비하세요</span>
        <Globe src={GlobeSrc} />
        <Login />
      </Items>
    </Nav>
  );
}

export default Header;

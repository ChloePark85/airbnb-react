import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoshapeSrc from "./images/logoshape.png";
import LogotextSrc from "./images/logotext.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiGlobe } from "react-icons/bi";
import { useState } from "react";
import SearchForm from "./forms/SearchForm";
import LoginModal from "./modals/LoginModal";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background-color: white;
  padding-top: 30px;
  margin-bottom: 15px;
  font-size: 14px;
  border-bottom: #dddddd 1px solid;
  position: fixed;
  z-index: 3;
  top: 0px;
  padding-bottom: 17px;
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
  margin-bottom: 15px;
`;

const SearchIcon = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  padding: 10px;
  background-color: #ff385c;
  cursor: pointer;
`;

export const LogoShape = styled.img`
  margin-left: 78px;
  width: 34px;
  height: 34px;
  margin-right: 5px;
`;

export const LogoText = styled.img`
  width: 68px;
  height: 18px;
  @media screen and (max-width: 1147px) {
    display: none;
  }
`;
const Items = styled.div`
  margin-right: 78px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Login = styled.button`
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
  const [isOpen, setOpen] = useState(false);
  const handleLoginClick = () => {
    setOpen((current) => !current);
  };

  const [searchForm, setSearchForm] = useState("default");
  const [isSearchBarOn, setSearchBarOn] = useState(false);

  const handleSearchBarOn = () => {
    setSearchBarOn(true);
  };

  const handleSearchWhereClick = () => {
    setSearchForm("showSearchWhere");
  };
  const handleSearchWhenClick = () => {
    setSearchForm("showSearchWhen");
  };
  const handleSearchGuestClick = () => {
    setSearchForm("showSearchGuest");
  };
  console.log({ searchForm });
  return (
    <HeaderWrapper>
      <Nav
        style={{
          height: isSearchBarOn ? "158px" : "80px",
          boxSizing: "border-box",
        }}
      >
        <Link to="/">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "104px",
            }}
          >
            <LogoShape src={LogoshapeSrc} />
            <LogoText src={LogotextSrc} />
          </div>
        </Link>

        {/* 클릭에 따라 검색 폼 달라지는 부분 */}
        {searchForm === "default" && (
          <Search onClick={handleSearchBarOn}>
            <Button
              style={{ fontWeight: "500", whiteSpace: "nowrap" }}
              onClick={handleSearchWhereClick}
            >
              어디든지
            </Button>
            <div
              style={{
                borderLeft: "1px solid #dddddd",
                height: "24px",
              }}
            />
            <Button
              style={{ fontWeight: "500", whiteSpace: "nowrap" }}
              onClick={handleSearchWhenClick}
            >
              언제든 일주일
            </Button>
            <div
              style={{
                borderLeft: "1px solid #dddddd",
                height: "24px",
              }}
            />
            <Button
              style={{ fontWeight: "300", whiteSpace: "nowrap" }}
              onClick={handleSearchGuestClick}
            >
              게스트 추가
            </Button>
            <SearchIcon>
              <HiMagnifyingGlass style={{ color: "white" }} />
            </SearchIcon>
          </Search>
        )}
        {/* 언제든지 클릭한 경우 */}
        {searchForm === "showSearchWhere" && <SearchForm value="destination" />}
        {searchForm === "showSearchWhen" && <SearchForm value="checkin" />}
        {searchForm === "showSearchGuest" && <SearchForm value="guest" />}

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
          <Login onClick={handleLoginClick}>
            <RxHamburgerMenu />
            <CgProfile style={{ width: "24px", height: "24px" }} />
            <LoginModal isOpen={isOpen} />
          </Login>
        </Items>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

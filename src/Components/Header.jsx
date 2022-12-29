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
import CategoryList from "../Components/Slider";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: white;
  padding-top: 30px;
  margin-bottom: 15px;
  font-size: 14px;
  border-bottom: #dddddd 1px solid;
  position: fixed;
  z-index: 3;
  top: 0;

  padding: 0 40px;

  .bar {
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .detail {
    margin-bottom: 12px;
  }
`;

const Search = styled.div`
  flex: 1;

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

export const LogoShape = styled.img`
  width: 34px;
  height: 34px;
`;

export const LogoText = styled.img`
  width: 68px;
  height: 18px;
  @media screen and (max-width: 1147px) {
    display: none;
  }
`;

const Items = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
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

  return (
    <HeaderWrapper>
      <Nav>
        <div className="bar">
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "104px",
            }}
          >
            <Link to="/">
              <LogoShape src={LogoshapeSrc} />
              <LogoText src={LogotextSrc} />
            </Link>
          </div>
          {searchForm !== "showSearchWhere" && (
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
          {searchForm === "showSearchWhere" && (
            <SearchFormCategory>
              <div>숙소</div>
              <div>체험</div>
              <div>온라인 체험</div>
            </SearchFormCategory>
          )}
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
        </div>
        {searchForm === "showSearchWhere" && (
          <div className="detail">
            <SearchForm value="destination" />
          </div>
        )}
        <CategoryList />
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;

const SearchFormCategory = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 195px;
  margin-bottom: 9px;
  column-gap: 32px;
  font-size: 18px;
  white-space: nowrap;
`;

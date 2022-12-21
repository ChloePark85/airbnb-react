import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AreaModal from "../modals/AreaModal";
import GuestModal from "../modals/GuestModal";
import CheckinModal from "../modals/CheckinModal";
import CheckoutModal from "../modals/CheckoutModal";
import { checkinState } from "../../recoil/CheckinDate";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

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
  margin-left: 500px;
  white-space: nowrap;
  position: relative;
`;

const SearchBar = styled.div`
  width: 850px;
  height: 62px;
  border-radius: 50px;
  border: #dddddd 1px solid;
  margin-left: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 17px 10px 17px 17px;
  box-sizing: border-box;
  align-items: center;
`;

const TourInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 5px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;
const SearchButton = styled.button`
  width: 87px;
  height: 47px;
  background-color: #e31c5a;
  border-radius: 20px;
  color: white;
`;

function SearchForm({ checkinDate }) {
  const [value, setValue] = useState("default");
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const chekinDay = useRecoilValue(checkinState);
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleDestinationClick = () => {
    setValue("destination");
    setOpen(true);
  };

  const handleCheckinClick = () => {
    setValue("checkin");
    setOpen(true);
  };
  const handleCheckoutClick = () => {
    setValue("checkout");
    setOpen(true);
  };

  const handleGuestClick = () => {
    setValue("guest");
    setOpen(true);
  };

  const handleDefaultClick = () => {
    setValue("default");
  };

  return (
    <SearchFormContainer>
      <SearchFormCategory>
        <div>숙소</div>
        <div>체험</div>
        <div>온라인 체험</div>
      </SearchFormCategory>

      {value === "default" && (
        <SearchBar style={{ backgroundColor: "#ebebeb" }}>
          <TourInfo onClick={handleDestinationClick}>
            <div>여행지</div>
            <input
              type="text"
              value={search}
              placeholder="여행지 검색"
              onChange={onChangeSearch}
            ></input>
          </TourInfo>
          <TourInfo onClick={handleCheckinClick}>
            <div>체크인</div>
            <div style={{ fontWeight: "300" }}>날짜 입력</div>
          </TourInfo>
          <TourInfo onClick={handleCheckoutClick}>
            <div>체크아웃</div>
            <div style={{ fontWeight: "300" }}>날짜 입력</div>
          </TourInfo>
          <TourInfo onClick={handleGuestClick}>
            <div>여행자</div>
            <div style={{ fontWeight: "300" }}>게스트 추가</div>
          </TourInfo>
          <SearchButton type="submit">검색</SearchButton>
        </SearchBar>
      )}
      {value === "destination" && (
        <>
          <SearchBar style={{ backgroundColor: "#ebebeb" }}>
            <TourInfo onClick={handleDestinationClick}>
              <div>여행지</div>
              <input placeholder="여행지 검색"></input>
            </TourInfo>
            <TourInfo onClick={handleCheckinClick}>
              <div>체크인</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleCheckoutClick}>
              <div>체크아웃</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleGuestClick}>
              <div>여행자</div>
              <div style={{ fontWeight: "300" }}>게스트 추가</div>
            </TourInfo>
            <SearchButton>검색</SearchButton>
          </SearchBar>
          <AreaModal isOpen={isOpen} />
        </>
      )}
      {value === "checkin" && (
        <>
          <SearchBar style={{ backgroundColor: "#ebebeb" }}>
            <TourInfo onClick={handleDestinationClick}>
              <div>여행지</div>
              <input placeholder="여행지 검색"></input>
            </TourInfo>
            <TourInfo onClick={handleCheckinClick}>
              <div>체크인</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleCheckoutClick}>
              <div>체크아웃</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleGuestClick}>
              <div>여행자</div>
              <div style={{ fontWeight: "300" }}>게스트 추가</div>
            </TourInfo>
            <SearchButton>검색</SearchButton>
          </SearchBar>
          <CheckinModal isOpen={isOpen} />
        </>
      )}
      {value === "checkout" && (
        <>
          <SearchBar style={{ backgroundColor: "#ebebeb" }}>
            <TourInfo onClick={handleDestinationClick}>
              <div>여행지</div>
              <input placeholder="여행지 검색"></input>
            </TourInfo>
            <TourInfo onClick={handleCheckinClick}>
              <div>체크인</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleCheckoutClick}>
              <div>체크아웃</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleGuestClick}>
              <div>여행자</div>
              <div style={{ fontWeight: "300" }}>게스트 추가</div>
            </TourInfo>
            <SearchButton>검색</SearchButton>
          </SearchBar>
          <CheckoutModal isOpen={isOpen} />
        </>
      )}

      {value === "guest" && (
        <>
          <SearchBar style={{ backgroundColor: "#ebebeb" }}>
            <TourInfo onClick={handleDestinationClick}>
              <div>여행지</div>
              <input placeholder="여행지 검색"></input>
            </TourInfo>
            <TourInfo onClick={handleCheckinClick}>
              <div>체크인</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleCheckoutClick}>
              <div>체크아웃</div>
              <div style={{ fontWeight: "300" }}>날짜 입력</div>
            </TourInfo>
            <TourInfo onClick={handleGuestClick}>
              <div>여행자</div>
              <div style={{ fontWeight: "300" }}>게스트 추가</div>
            </TourInfo>
            <SearchButton>검색</SearchButton>
          </SearchBar>
          <GuestModal isOpen={isOpen} />
        </>
      )}
    </SearchFormContainer>
  );
}

export default SearchForm;

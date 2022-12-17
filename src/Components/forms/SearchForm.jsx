import React from "react";
import styled from "styled-components";

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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 17px 10px 17px 17px;
  box-sizing: border-box;
  align-items: center;
`;

const Button = styled.button``;
const SearchButton = styled.button`
  width: 87px;
  height: 47px;
  background-color: #e31c5a;
  border-radius: 20px;
  color: white;
`;

function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormCategory>
        <div>숙소</div>
        <div>체험</div>
        <div>온라인 체험</div>
      </SearchFormCategory>

      <SearchBar>
        <Button>여행지</Button>
        <Button>체크인</Button>
        <Button>체크아웃</Button>
        <Button>여행자</Button>
        <SearchButton>검색</SearchButton>
      </SearchBar>
    </SearchFormContainer>
  );
}

export default SearchForm;

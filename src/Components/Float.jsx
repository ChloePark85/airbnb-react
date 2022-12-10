import React from "react";
import styled from "styled-components";
import { BsMap } from "react-icons/bs";

const Button = styled.button`
  width: 140px;
  height: 50px;
  border-radius: 24px;
  background-color: #222222;
  color: white;
  padding: 16px 19px;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  position: fixed;
  left: 655px;
  justify-content: center;
  column-gap: 7px;
  bottom: 120px;
`;

function Float() {
  return (
    <Button>
      <span>지도 표시하기</span>
      <BsMap style={{ width: "17px", height: "17px" }} />
    </Button>
  );
}

export default Float;

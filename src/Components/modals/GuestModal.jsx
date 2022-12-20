import React from "react";
import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import styled from "styled-components";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Wrapper = styled.div`
  padding: 0px 38px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 405px;
  box-sizing: border-box;
`;

const GuestType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: #dddddd 1px solid;
  padding: 26px 0px 27px 0px;
  align-items: center;
`;

function GuestModal({ isOpen }) {
  const [adultNum, setAdultNum] = useState(0);
  const [kidNum, setKidNum] = useState(0);
  const [babyNum, setBabyNum] = useState(0);
  const [petNum, setPetNum] = useState(0);

  const handleAdultNumMinus = () => {
    setAdultNum(adultNum - 1);
  };
  const handleAdultNumPlus = () => {
    setAdultNum(adultNum + 1);
  };
  const handleKidNumMinus = () => {
    setKidNum(kidNum - 1);
  };
  const handleKidNumPlus = () => {
    setKidNum(kidNum + 1);
  };
  const handleBabyNumMinus = () => {
    setBabyNum(babyNum - 1);
  };
  const handleBabyNumPlus = () => {
    setBabyNum(babyNum + 1);
  };
  const handlePetNumMinus = () => {
    setPetNum(petNum - 1);
  };
  const handlePetNumPlus = () => {
    setPetNum(petNum + 1);
  };

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
          position: "fixed",
          top: "155px",
          left: "745px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          //   padding: "20px",
          width: "411px",
          height: "405px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        },
      }}
    >
      <Wrapper>
        <GuestType>
          <div>
            <div>성인</div>
            <div>만 13세 이상</div>
          </div>
          <div>
            <AiOutlineMinusCircle
              onClick={handleAdultNumMinus}
              style={{
                marginRight: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
            {adultNum}
            <AiOutlinePlusCircle
              onClick={handleAdultNumPlus}
              style={{
                marginLeft: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
          </div>
        </GuestType>
        <GuestType>
          <div>
            <div>어린이</div>
            <div>만 2~12세</div>
          </div>
          <div>
            <AiOutlineMinusCircle
              onClick={handleKidNumMinus}
              style={{
                marginRight: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
            {kidNum}
            <AiOutlinePlusCircle
              onClick={handleKidNumPlus}
              style={{
                marginLeft: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
          </div>
        </GuestType>
        <GuestType>
          <div>
            <div>유아</div>
            <div>만 2세 미만</div>
          </div>
          <div>
            <AiOutlineMinusCircle
              onClick={handleBabyNumMinus}
              style={{
                marginRight: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
            {babyNum}
            <AiOutlinePlusCircle
              onClick={handleBabyNumPlus}
              style={{
                marginLeft: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
          </div>
        </GuestType>
        <GuestType>
          <div>
            <div>반려동물</div>
            <div>보조동물을 동반하시나요?</div>
          </div>
          <div>
            <AiOutlineMinusCircle
              onClick={handlePetNumMinus}
              style={{
                marginRight: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
            {petNum}
            <AiOutlinePlusCircle
              onClick={handlePetNumPlus}
              style={{
                marginLeft: "5px",
                width: "31px",
                height: "31px",
                color: "grey",
              }}
            />
          </div>
        </GuestType>
      </Wrapper>
    </Modal>
  );
}

export default GuestModal;

import React from "react";
import styled from "styled-components";
import { Nav, Logo } from "../Components/Header";
import LogoSrc from "../Components/images/logo.png";
import Footer from "../Components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useLocation } from "react-router-dom";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  margin: 65px 170px;
  column-gap: 34px;
  justify-content: flex-start;
  top: 90px;
  position: relative;
`;
const Base = styled.div`
  display: flex;
  margin: 0px 170px 0px 170px;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  top: 90px;
`;

const BaseLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 562px;
`;

const BaseLeftBox = styled.div`
  border: #dddddd 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 27px 39px 27px 25px;
  box-sizing: border-box;
`;

const BaseLeftInfo = styled.div`
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: #dddddd 1px solid;
  margin: 20px 0px 36px 0px;
  padding: 35px 0px;
`;

const BaseRight = styled.div`
  width: 466px;
  height: 486px;
  border: #dddddd 1px solid;
  border-radius: 10px;
  padding: 23px 25px 25px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BaseRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

function Booking() {
  return (
    <>
      <Nav>
        <Logo src={LogoSrc} />
      </Nav>
      <Title>
        <IoIosArrowBack />
        <span>예약 요청</span>
      </Title>
      <Base>
        <BaseLeft>
          <BaseLeftBox>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <span>흔치 않은 기회입니다.</span>
              <span>Jenny님의 숙소는 보통 예약이 가득 차 있습니다.</span>
            </div>
            <img src="" alt="" />
          </BaseLeftBox>
          <BaseLeftInfo>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              예약정보
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span>날짜</span>
                <span style={{ textDecoration: "underline" }}>수정</span>
              </div>
              <span>2023년 4월 3일~8일</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span>게스트</span>
                <span style={{ textDecoration: "underline" }}>수정</span>
              </div>
              <span>게스트 1명</span>
            </div>
          </BaseLeftInfo>
          <BaseLeftInfo>
            <span>결제방식 선택하기</span>
            <div>table</div>
          </BaseLeftInfo>
        </BaseLeft>
        <BaseRight>
          <BaseRightRow></BaseRightRow>
        </BaseRight>
      </Base>
      <Footer />
    </>
  );
}

export default Booking;

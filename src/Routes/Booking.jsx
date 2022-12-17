import React from "react";
import styled from "styled-components";
import { Nav, LogoShape, LogoText } from "../Components/Header";
import LogoshapeSrc from "../Components/images/logoshape.png";
import LogotextSrc from "../Components/images/logotext.png";
import Footer from "../Components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { useParams, useLocation } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

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

  flex-direction: column;
  justify-content: space-between;
  border-bottom: #dddddd 1px solid;
  margin: 20px 0px 0px 0px;
  padding: 20px 0px;
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
  box-sizing: border-box;
`;

const BaseRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function Booking() {
  return (
    <>
      <Nav>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <LogoShape src={LogoshapeSrc} />
          <LogoText src={LogotextSrc} />
        </div>
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
            <img src="src/Components/images/gem.png" alt="" />
          </BaseLeftBox>
          <BaseLeftInfo style={{ rowGap: "30px" }}>
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
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              결제방식 선택하기
            </span>
            <div
              style={{
                border: "black 1px solid",
                width: "560px",
                height: "75px",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                padding: "18px 15px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "600", marginBottom: "10px" }}>
                    전액 결제
                  </span>

                  <span>총액을 결제하시면 모든 절차가 완료됩니다.</span>
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>₩5,399,032</span>
                  <button>버튼</button>
                </div>
              </div>
            </div>
            <div
              style={{
                border: "#dddddd 1px solid",
                width: "560px",
                height: "120px",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                padding: "18px 15px",
                rowGap: "10px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{}}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ fontWeight: "600", marginBottom: "10px" }}>
                      요금 일부는 지금 결제, 나머지는 나중에 결제
                    </div>
                    <div>
                      <span style={{ fontWeight: "600" }}>₩2,699,516</span>
                      <button> 버튼</button>
                    </div>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    지금 ₩2,699,516을 결제하시면, 나머지 금액은 동일한
                    결제수단으로 2023년 2월 24일 자동 청구됩니다. 추가 수수료는
                    없습니다.
                  </div>
                  <div
                    style={{ fontWeight: "600", textDecoration: "underline" }}
                  >
                    상세 정보
                  </div>
                </div>
              </div>
            </div>
          </BaseLeftInfo>
          <BaseLeftInfo>
            <span
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              예약하려면 로그인 또는 회원 가입하세요
            </span>
            <div
              style={{
                border: "#dddddd 1px solid",
                borderRadius: "10px",
                height: "115px",
                width: "562px",
              }}
            ></div>
            <span style={{ margin: "9px 0px 18px 0px", fontSize: "6px" }}>
              전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
              데이터 요금이 부과됩니다. 개인정보 처리방침
            </span>
            <button
              style={{
                width: "562px",
                height: "48px",
                backgroundColor: "#ff385c",
                color: "white",
                borderRadius: "10px",
              }}
            >
              계속
            </button>
          </BaseLeftInfo>
        </BaseLeft>
        <BaseRight>
          <BaseRightRow
            style={{ borderBottom: "#dddddd 1px solid", paddingBottom: "26px" }}
          >
            <img
              style={{
                marginRight: "13px",
                borderRadius: "10px",
                width: "126px",
                height: "106px",
              }}
              src="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=720"
              alt=""
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "106px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>저택 전체</span>
                <span>Hidden Haven - 5 Bed Villa with pool & Sea Views</span>
              </div>
              <div>
                <AiFillStar /> 5.00(후기 5개) &nbsp; 슈퍼호스트
              </div>
            </div>
          </BaseRightRow>
          <div
            style={{ padding: "20px 0px", borderBottom: "#dddddd 1px solid" }}
          >
            <img
              style={{ width: "52px", height: "16px" }}
              src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
              alt=""
            />
            를 통한 예약 보호
          </div>
          <span style={{ fontSize: "20px", fontWeight: "600" }}>
            요금 세부정보
          </span>
          <BaseRightRow>
            <div>₩784,781 x 6박</div>
            <div>₩4,708,686</div>
          </BaseRightRow>
          <BaseRightRow>
            <div>청소비</div>
            <div>₩22,422</div>
          </BaseRightRow>
          <BaseRightRow
            style={{ borderBottom: "#dddddd 1px solid", paddingBottom: "15px" }}
          >
            <div>서비스 수수료</div>
            <div>₩667,924</div>
          </BaseRightRow>
          <BaseRightRow>
            <div>총합계 (KRW)</div>
            <div>₩5,399,032</div>
          </BaseRightRow>
        </BaseRight>
      </Base>
      <Footer />
    </>
  );
}

export default Booking;

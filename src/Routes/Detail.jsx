import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShare } from "react-icons/fi";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { IoPersonOutline, IoCalendarClearOutline } from "react-icons/io5";
import { VscKey } from "react-icons/vsc";
import Footer from "../Components/Footer";

const Base = styled.div`
  margin: 0px 170px 0px 170px;
  position: absolute;
  top: 100px;
`;

const HomeTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 109px;
  padding: 32px 0px 32px 0px;
  row-gap: 17px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const TitleDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HomeImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0px 0px 53px 0px;
`;

const HomeLeft = styled.img`
  width: 563px;
  height: 376px;
  border-radius: 10px 0px 0px 10px;
  margin-right: 8px;
`;

const HomeRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 551px;
`;

const HomeRightRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 184px;
`;

const HomeInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 653px;
  margin-right: 92px;
`;

const HomeInfoLeftTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 0px 28px 0px;
  align-items: center;
  border-bottom: #dddddd 1px solid;
`;
const HomeInfoLeftRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: #dddddd 1px solid;
  row-gap: 29px;
  padding: 30px 0px 30px 0px;
`;

const HomeInfoRight = styled.div``;

const PriceBox = styled.div`
  width: 375px;
  height: 497px;
  border: #dddddd 1px solid;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 25px;
  /* row-gap: 25px; */
  box-sizing: border-box;
`;

const PriceTable = styled.div`
  border: 1px solid #929292;
  width: 322px;
  height: 115px;
  border-collapse: separate;
  border-radius: 10px;
  padding: 12px 19px 12px 19px;
  box-sizing: border-box;
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const Button = styled.button`
  background-color: #ff385c;
  width: 323px;
  border-radius: 10px;
  color: white;
  padding: 18px 0;
  cursor: pointer;
`;

function Detail() {
  const { id } = useParams();
  const { state } = useLocation();
  console.log(id);
  console.log(state);

  return (
    <>
      <Header />
      <Base>
        <HomeTitleContainer>
          <Title>{state.title}</Title>
          <TitleDetail>
            <span>
              <AiFillStar />
              {state.rating} · 후기 5개 · 슈퍼호스트 · {state.location}
            </span>
            <span>
              <FiShare />
              공유하기 &nbsp; <AiOutlineHeart />
              저장
            </span>
          </TitleDetail>
        </HomeTitleContainer>
        <HomeImages>
          <HomeLeft src={state.imageUrls1} alt="" />
          <HomeRight>
            <HomeRightRow style={{ marginBottom: "8px" }}>
              <img src={state.imageUrls2} style={{ width: "270px" }} alt="" />
              <img
                src={state.imageUrls1}
                style={{ width: "270px", borderTopRightRadius: "10px" }}
                alt=""
              />
            </HomeRightRow>
            <HomeRightRow>
              <img src={state.imageUrls2} style={{ width: "270px" }} alt="" />
              <img
                src={state.imageUrls1}
                style={{ width: "270px", borderBottomRightRadius: "10px" }}
                alt=""
              />
            </HomeRightRow>
          </HomeRight>
        </HomeImages>
        <HomeInfo>
          <HomeInfoLeft>
            <HomeInfoLeftTitle>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "13px",
                }}
              >
                <span style={{ fontSize: "20px", fontWeight: "500" }}>
                  Jenny님이 호스팅하는 저택 전체
                </span>
                <span>최대 인원 10명 침실 5개 침대 5개 욕실 3개</span>
              </div>
              <img
                src="https://a0.muscache.com/im/pictures/user/cd62972a-95b4-4ed7-9e44-81d9dc6ed4fa.jpg?im_w=240"
                style={{ borderRadius: "100px", width: "55px", height: "55px" }}
                alt=""
              />
            </HomeInfoLeftTitle>
            <HomeInfoLeftRow>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "18px",
                }}
              >
                <IoPersonOutline
                  style={{ width: "22px", height: "22px" }}
                  alt=""
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "9px",
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>
                    Jenny님은 슈퍼호스트입니다
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "300" }}>
                    슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                    숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "18px",
                }}
              >
                <VscKey style={{ width: "22px", height: "22px" }} alt="" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "9px",
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>
                    순조로운 체크인 과정
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "300" }}>
                    최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준
                    숙소입니다.
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "18px",
                }}
              >
                <IoCalendarClearOutline
                  style={{ width: "22px", height: "22px" }}
                  alt=""
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    columnGap: "9px",
                  }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>
                    3월 4일 전까지 무료로 취소하실 수 있습니다.
                  </span>
                </div>
              </div>
            </HomeInfoLeftRow>
            <HomeInfoLeftRow>
              <img
                src="https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg"
                style={{ width: "102px", height: "29px" }}
                alt=""
              />
              <span>
                모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지
                않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호
                프로그램이 포함됩니다.
              </span>
              <span style={{ textDecoration: "underline" }}>더 알아보기</span>
            </HomeInfoLeftRow>
          </HomeInfoLeft>
          <HomeInfoRight>
            <PriceBox>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span style={{ fontSize: "20px", fontWeight: "600" }}>
                    {state.price}
                  </span>
                  <span>&nbsp; /박</span>
                </div>
                <div>
                  <AiFillStar />
                  <span>{state.rating} 후기 5개</span>
                </div>
              </div>
              <PriceTable>
                <table>
                  <tr>
                    <td>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          marginBottom: "5px",
                        }}
                      >
                        체크인
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", fontWeight: "300" }}>
                        2023.4.3.
                      </span>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          marginBottom: "5px",
                        }}
                      >
                        체크아웃
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", fontWeight: "300" }}>
                        2023.4.8.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <span
                        style={{
                          fontSize: "12px",
                          fontWeight: "600",
                          marginBottom: "5px",
                        }}
                      >
                        인원
                      </span>
                      <br />
                      <span style={{ fontSize: "14px", fontWeight: "300" }}>
                        게스트 1명
                      </span>
                    </td>
                  </tr>
                </table>
              </PriceTable>
              <Link to="/booking">
                <Button>예약하기</Button>
              </Link>
              <span style={{ textAlign: "center" }}>
                예약 확정 전에는 요금이 청구되지 않습니다.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  textDecoration: "underline",
                }}
              >
                <span>{state.price} x 5박</span>
                <span>parseInt({state.price * 5})</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  textDecoration: "underline",
                }}
              >
                <span>청소비</span>
                <span>₩23,033</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  textDecoration: "underline",
                  paddingBottom: "15px",
                  borderBottom: "#dddddd 1px solid",
                }}
              >
                <span>서비스 수수료</span>
                <span>₩572,302</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <span>총 합계</span>
                <span>₩4,704,977</span>
              </div>
            </PriceBox>
          </HomeInfoRight>
        </HomeInfo>
      </Base>
      <Footer />
    </>
  );
}

export default Detail;

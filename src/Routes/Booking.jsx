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
        <span>?????? ??????</span>
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
              <span>?????? ?????? ???????????????.</span>
              <span>Jenny?????? ????????? ?????? ????????? ?????? ??? ????????????.</span>
            </div>
            <img src="src/Components/images/gem.png" alt="" />
          </BaseLeftBox>
          <BaseLeftInfo style={{ rowGap: "30px" }}>
            <span style={{ fontSize: "22px", fontWeight: "600" }}>
              ????????????
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
                <span>??????</span>
                <span style={{ textDecoration: "underline" }}>??????</span>
              </div>
              <span>2023??? 4??? 3???~8???</span>
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
                <span>?????????</span>
                <span style={{ textDecoration: "underline" }}>??????</span>
              </div>
              <span>????????? 1???</span>
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
              ???????????? ????????????
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
                    ?????? ??????
                  </span>

                  <span>????????? ??????????????? ?????? ????????? ???????????????.</span>
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>???5,399,032</span>
                  <button>??????</button>
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
                      ?????? ????????? ?????? ??????, ???????????? ????????? ??????
                    </div>
                    <div>
                      <span style={{ fontWeight: "600" }}>???2,699,516</span>
                      <button> ??????</button>
                    </div>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    ?????? ???2,699,516??? ???????????????, ????????? ????????? ?????????
                    ?????????????????? 2023??? 2??? 24??? ?????? ???????????????. ?????? ????????????
                    ????????????.
                  </div>
                  <div
                    style={{ fontWeight: "600", textDecoration: "underline" }}
                  >
                    ?????? ??????
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
              ??????????????? ????????? ?????? ?????? ???????????????
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
              ????????? ????????? ??????????????? ?????????????????????. ?????? ?????? ????????? ?????? ???
              ????????? ????????? ???????????????. ???????????? ????????????
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
              ??????
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
                <span>?????? ??????</span>
                <span>Hidden Haven - 5 Bed Villa with pool & Sea Views</span>
              </div>
              <div>
                <AiFillStar /> 5.00(?????? 5???) &nbsp; ???????????????
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
            ??? ?????? ?????? ??????
          </div>
          <span style={{ fontSize: "20px", fontWeight: "600" }}>
            ?????? ????????????
          </span>
          <BaseRightRow>
            <div>???784,781 x 6???</div>
            <div>???4,708,686</div>
          </BaseRightRow>
          <BaseRightRow>
            <div>?????????</div>
            <div>???22,422</div>
          </BaseRightRow>
          <BaseRightRow
            style={{ borderBottom: "#dddddd 1px solid", paddingBottom: "15px" }}
          >
            <div>????????? ?????????</div>
            <div>???667,924</div>
          </BaseRightRow>
          <BaseRightRow>
            <div>????????? (KRW)</div>
            <div>???5,399,032</div>
          </BaseRightRow>
        </BaseRight>
      </Base>
      <Footer />
    </>
  );
}

export default Booking;

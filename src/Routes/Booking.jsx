import React from "react";
import styled from "styled-components";
import { Nav, Logo } from "../Components/Header";
import LogoSrc from "../Components/images/logo.png";
import Footer from "../Components/Footer";
import { IoIosArrowBack } from "react-icons/io";

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  margin: 65px 170px;
  column-gap: 34px;
  justify-content: flex-start;
`;
const Base = styled.div`
  display: flex;
  margin: 0px 170px 0px 170px;
  flex-direction: row;
  justify-content: space-between;
`;

const BaseLeft = styled.div``;

const BaseRight = styled.div``;

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
        <BaseLeft></BaseLeft>
        <BaseRight></BaseRight>
      </Base>
      <Footer />
    </>
  );
}

export default Booking;

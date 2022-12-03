import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  width: 100%;
  height: 91px; /* footer의 높이 */
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: #dddddd 1px solid;
  background-color: white;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 78px;
  margin-left: 78px;
`;

const Item1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: #dddddd 1px solid;
  font-size: 14px;
  padding: 15px;
`;
const Item2 = styled.div`
  font-size: 9px;
  font-weight: 100;
  padding: 10px;
`;

function Footer() {
  return (
    <Foot>
      <Items>
        <Item1>
          <span>
            © 2022 Airbnb, Inc.·개인정보 처리방침·이용약관·사이트맵·한국의
            변경된 환불 정책·회사 세부정보
          </span>
          <span>한국어(KR) ₩ KRW 지원 및 참고자료</span>
        </Item1>
        <Item2>
          웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8
          Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian
          Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호:
          IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅
          서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로
          에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
          통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소,
          체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
          호스트에게 있습니다.
        </Item2>
      </Items>
    </Foot>
  );
}

export default Footer;

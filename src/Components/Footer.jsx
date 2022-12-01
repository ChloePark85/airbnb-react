import React from "react";
import styled from "styled-components";

const Foot = styled.div`
  width: 100%;
  height: 91px; /* footer의 높이 */
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: #dddddd solid;
  background-color: white;
`;

const Item1 = styled.div``;
const Item2 = styled.div``;

function Footer() {
  return (
    <Foot>
      <Item1>d</Item1>
      <Item2>f</Item2>
    </Foot>
  );
}

export default Footer;

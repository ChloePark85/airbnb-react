import React from "react";
import Modal from "react-modal/lib/components/Modal";
import styled from "styled-components";
import GoogleButton from "../../GoogleLogin";

const SocialButton = styled.div`
  border: black 1px solid;
  width: 519px;
  height: 48px;
  border-radius: 10px;
  text-align: center;
  padding: 17px 26px;
  box-sizing: border-box;
`;

function LoginpopModal({ isOpen, showPopup }) {
  return (
    <Modal
      isOpen={showPopup}
      showPopup={showPopup}
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
          top: "245px",
          left: "445px",
          right: "78px",
          bottom: "485px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          padding: "20px",
          width: "575px",
          height: "685px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        },
      }}
    >
      <div>로그인 또는 회원가입</div>
      <div style={{ border: "#dddddd 1px solid" }}></div>
      <div>에어비앤비에 오신 것을 환영합니다.</div>
      <div>테이블</div>
      <div style={{ fontSize: "9px" }}>
        전화나 문자로 전화번호를 확인하겠습니다. 일반 문자메시지 요금 및 데이터
        요금이 부과됩니다. 개인정보처리방침
      </div>
      <button>계속</button>
      <div style={{ border: "#dddddd 1px solid" }}></div>
      <SocialButton>페이스북으로 로그인하기</SocialButton>
      <SocialButton>
        <GoogleButton />
      </SocialButton>
      <SocialButton>Apple 계정으로 계속하기</SocialButton>
      <SocialButton>이메일로 로그인하기</SocialButton>
    </Modal>
  );
}

export default LoginpopModal;

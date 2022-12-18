import React from "react";
import Modal from "react-modal/lib/components/Modal";

function LoginModal({ isOpen }) {
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
          backgroundColor: "rgba(0, 0, 0, 0)",
        },
        content: {
          position: "fixed",
          top: "74px",
          left: "1128px",
          right: "78px",
          bottom: "485px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          padding: "20px",
          width: "246px",
          height: "244px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        },
      }}
    >
      <div>로그인</div>
      <div>회원가입</div>
      <div>당신의 공간을 에어비앤비하세요</div>
      <div style={{ border: "#dddddd 1px solid" }}></div>
      <div>체험 호스팅하기</div>
      <div>도움말</div>
    </Modal>
  );
}

export default LoginModal;

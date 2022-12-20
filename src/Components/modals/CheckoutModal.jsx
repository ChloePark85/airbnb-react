import React from "react";
import Modal from "react-modal/lib/components/Modal";

function CheckinModal({ isOpen }) {
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
          left: "302px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          //   padding: "20px",
          width: "854px",
          height: "513px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        },
      }}
    >
      체크아웃
    </Modal>
  );
}

export default CheckinModal;

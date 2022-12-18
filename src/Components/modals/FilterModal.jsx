import React from "react";
import Modal from "react-modal/lib/components/Modal";

function FilterModal({ isOpen }) {
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
          top: "78px",
          left: "337px",
          right: "337px",
          bottom: "39px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          padding: "20px",
          width: "788px",
          height: "684px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zindex: "289",
        },
      }}
    >
      <div>필터</div>
      <div>가격 범위</div>
      <div>평균 1박 요금은 ₩319,371 입니다</div>
      <div>숙소유형</div>
    </Modal>
  );
}

export default FilterModal;

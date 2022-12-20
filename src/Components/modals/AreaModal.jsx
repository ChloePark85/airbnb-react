import React from "react";
import Modal from "react-modal/lib/components/Modal";

function AreaModal({ isOpen }) {
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
          top: "153px",
          left: "305px",
          border: "1px solid #ccc",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          padding: "47px 50px 55px 50px",
          width: "495px",
          height: "477px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zindex: "289",
          columnGap: "15px",
        },
      }}
    >
      <div>지역으로 검색하기</div>
      <div
        className="row1"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
            alt="유연한 검색"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              border: "#dddddd 1px solid",
              marginBottom: "5px",
            }}
          />
          <span>유연한 검색</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
            alt="유럽"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              border: "#dddddd 1px solid",
              marginBottom: "5px",
            }}
          />
          <span>유럽</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320"
            alt="일본"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              border: "#dddddd 1px solid",
              marginBottom: "5px",
            }}
          />
          <span>일본</span>
        </div>
      </div>
      <div
        className="row2"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
            alt="동남아시아"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              border: "#dddddd 1px solid",
              marginBottom: "5px",
            }}
          />
          <span>동남아시아</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320"
            alt="프랑스"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              border: "#dddddd 1px solid",
              marginBottom: "5px",
            }}
          />
          <span>프랑스</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
            alt="미국"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              border: "#dddddd 1px solid",
              marginBottom: "5px",
            }}
          />
          <span>미국</span>
        </div>
      </div>
    </Modal>
  );
}

export default AreaModal;

import React from "react";
import { useState, useRef } from "react";
import Modal from "react-modal/lib/components/Modal";
import { AiOutlineClose } from "react-icons/ai";

function FilterModal({ isOpen }) {
  const [modal, setModal] = useState(true);
  const outside = useRef();
  return (
    <>
      {modal && (
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
              padding: "24px",
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottom: "#dddddd 1px solid",
              height: "43px",
              width: "788px",
              boxSizing: "border-box",
            }}
          >
            <button
              style={{ marginRight: "338px", cursor: "pointer" }}
              onClick={() => setModal(false)}
            >
              <AiOutlineClose />
            </button>
            <div style={{ fontSize: "15px", fontWeight: "700" }}>필터</div>
          </div>
          <div
            className="price span"
            style={{
              borderBottom: "#dddddd 1px solid",

              height: "306px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "22px", fontWeight: "600" }}>
                가격 범위
              </div>
              <div style={{ fontSize: "15px", color: "grey" }}>
                평균 1박 요금은 ₩319,371 입니다
              </div>
            </div>
            <div>그래프</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "314px",
                  height: "54px",
                  border: "#dddddd 1px solid",
                  display: "flex",
                  flexDirection: "column",
                  padding: "12px",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                }}
              >
                <div>최저 요금</div>
                <div>₩13000</div>
              </div>
              <div>-</div>
              <div
                style={{
                  width: "314px",
                  height: "54px",
                  border: "#dddddd 1px solid",
                  display: "flex",
                  flexDirection: "column",
                  padding: "12px",
                  boxSizing: "border-box",
                  borderRadius: "10px",
                }}
              >
                <div>최고 요금</div>
                <div>₩80000</div>
              </div>
            </div>
          </div>
          <div
            className="home type"
            style={{ borderBottom: "#dddddd 1px solid" }}
          >
            <div style={{ fontSize: "22px", fontWeight: "700" }}>숙소 유형</div>
            <div
              className="row1"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>집 전체</div>
                <div>단독으로 사용하는 공간 전체</div>
              </div>
              <div>
                <div>개인실</div>
                <div>집 또는 호텔의 개인실과 일부 공용 공간</div>
              </div>
            </div>
            <div className="row2">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>다인실</div>
                <div>다른 사람들과 함께 사용하는 다인실 및 공용 공간</div>
              </div>
            </div>
          </div>
          <div
            className="filter bottom"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <div style={{ textDecoration: "underline", fontWeight: "600" }}>
              전체 해제
            </div>
            <button
              style={{
                width: "193px",
                height: "51px",
                backgroundColor: "black",
                color: "white",
                borderRadius: "10px",
              }}
            >
              숙소 1,000개 이상 표시
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default FilterModal;

import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import Calendar from "react-calendar/dist/cjs/Calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import styled from "styled-components";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    width: 800px;
    max-width: 100%;
    background-color: black;
    color: #222;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__tile--now {
    background: black;
    color: white;
    border-radius: 50%;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: black;
    border-color: grey;
    border-radius: 50%;
  }
`;

function CheckinModal({ isOpen }) {
  const [value, onChange] = useState(new Date());
  const checkinDate = moment(value).format("YYYY년 MM월 DD일");
  console.log(value);
  console.log(checkinDate);

  return (
    <Modal
      isOpen={isOpen}
      checkinDate={checkinDate}
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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <StyledCalendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("DD")}
          value={value}
          checkinDate={moment(value).format("YYYY년 MM월 DD일")}
          selectRange={true}
          nextLabel={<MdNavigateNext />}
          prevLabel={<GrFormPrevious />}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
        />
        <div className="text-gray-500 mt-4">
          {moment(value).format("YYYY년 MM월 DD일")}
        </div>
        <StyledCalendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format("DD")}
          value={value}
        />
      </div>
    </Modal>
  );
}

export default CheckinModal;

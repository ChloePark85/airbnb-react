import React from "react";

export function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

export default NextArrow;

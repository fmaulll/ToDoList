import React from "react";

const Priority = ({ severity }) => {
  const severityColor = (level) => {
    if (level === "very-high") {
      return "#ED4C5C";
    }
    if (level === "high") {
      return "#FFCE31";
    }
    if (level === "normal") {
      return "#00A790";
    }
    if (level === "low") {
      return "#43C4E3";
    }
    if (level === "very-low") {
      return "#B01AFF";
    }
  };
  return (
    <div
      style={{
        borderRadius: "50%",
        width: "9px",
        height: "9px",
        backgroundColor: severityColor(severity),
        marginRight: "15px",
      }}
    ></div>
  );
};

export default Priority;

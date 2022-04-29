import React, { useState } from "react";
import "./ReadDate.css";

const ReadDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="read-date">
      <div className="read-date-month">{month}</div>
      <div className="read-date-day">{day}</div>
      <div className="read-date-year">{year}</div>
    </div>
  );
};

export default ReadDate;

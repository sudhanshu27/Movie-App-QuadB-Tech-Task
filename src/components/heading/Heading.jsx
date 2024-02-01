import React from "react";
import "./Heading.css";

const Heading = ({ heading }) => {
  return (
    <div className="head">
      <h1>{heading}</h1>
    </div>
  );
};

export default Heading;

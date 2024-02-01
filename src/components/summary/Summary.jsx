import React from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import "./Summary.css";

function Summary({ list }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form", { state: list });
  };
  return (
    <div>
      <div className="details-box">
        <div className="text">
          {parse(`
        ${list.summary}
      `)}
        </div>
        <button onClick={handleClick} className="btn btn-primary button-sum">
          Grab Your Seat !!
        </button>
      </div>
    </div>
  );
}

export default Summary;

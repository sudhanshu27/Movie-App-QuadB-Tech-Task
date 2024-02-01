import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ showName, rating, image, genres, link }) => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/details", { state: link });
  };
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title text-style">Name: {showName}</h5>
        <p className="card-text text-style">Rating: {rating}</p>
        <p className="card-text text-style">Generes: {genres.join(", ")}</p>
        <a
          onClick={handleExploreClick}
          className="btn btn-primary button text-style"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Card;

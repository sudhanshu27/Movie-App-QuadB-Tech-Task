import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form() {
  const location = useLocation();
  const navigate = useNavigate();
  if (!location.state) {
    return <div>No details available</div>;
  }
  return (
    <div className="form-box">
      <form>
        <h2>Pleae Fill the details</h2>
        <h5>Movie Name: {location.state.name}</h5>
        <h5>Movie Rating: {location.state.rating?.average ?? "5.2"}</h5>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="peoplecount">Number of Seats</label>
          <input
            type="number"
            class="form-control"
            id="peoplecount"
            placeholder="Enter number of seats"
          />
        </div>

        <button
          onClick={() => {
            navigate("/");
          }}
          type="submit"
          class="btn btn-primary button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

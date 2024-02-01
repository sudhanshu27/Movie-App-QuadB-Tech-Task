import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import Summary from "../../components/summary/Summary";
import Heading from "../../components/heading/Heading";

const Details = () => {
  const [list, setList] = useState([]);
  const location = useLocation();

  if (!location.state) {
    return <div>No details available</div>;
  }
  const link = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(link);
        setList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="summary-box">
      <Heading heading={"You have an eye for movies!"} />
      <Summary list={list} />
    </div>
  );
};

export default Details;

import "./Home.css";
import Card from "../../components/card/Card";
import Heading from "../../components/heading/Heading";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="top">
        <Heading className="head" heading="What's Your Movie!" />
        <div className="line"></div>
      </div>
      <div className="body">
        {list.map((item) => {
          const showName = item.show.name;
          const rating = item.show.rating.average;
          const image =
            item.show.image?.original ??
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
          const genres = item.show.genres;
          const link = item.show._links.self.href;
          return (
            <Card
              key={item.show.id}
              showName={showName}
              rating={rating}
              image={image}
              genres={genres}
              link={link}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;

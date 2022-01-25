import React, { useEffect, useState } from "react";
import axios from "./../axios";
import Card from "./Card";

export default function Row(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(props.request);
      console.log(data.data.results);
      setMovies(data.data.results);
    };
    fetch();
  }, [props.request]);

  console.log(movies);

  return (
    <section className="text-white ml-4 my-4 font-normal text-lg ">
      <div>
        <h1>{props.title}</h1>
      </div>
      <div className="cards flex overflow-x-scroll my-3">
        {movies &&
          movies.map((ele) => {
            return (
              <Card
                id={ele.id}
                image={ele.poster_path}
                name={ele?.title || ele?.name || ele?.original_title}
                date={ele.release_date}
              />
            );
          })}
      </div>
    </section>
  );
}
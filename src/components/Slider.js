import React, { useEffect, useState } from "react";
import axios from "./../axios";
import request from "./../requests";

export default function Slider() {
  const [movie, setMovie] = useState({});
  const [key, setKey] = useState("");

  useEffect(() => {
    const trendingMovieGetter = async () => {
      const data = await axios.get(request.fetchTrending);
      setMovie(
        data.data.results[Math.floor(Math.random() * data.data.results.length)]
      );
      return data;
    };
    trendingMovieGetter();
  }, []);

  useEffect(() => {
    const youtubeFun = async () => {
      if (movie?.id) {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=544cc1a83bc6fb204d6f8af527c90773`
        )
          .then((req) => req.json())
          .catch((err) => console.log(err));
        const movieArray = data.results;
        movieArray.forEach((ele) => {
          if (
            ele.type === "Trailer" ||
            ele.type === "Teaser" ||
            ele.type === "Clip" ||
            ele.type === "Featurette" ||
            ele.type === "Trailer-2"
          ) {
            setKey(ele.key);
          }
        });
      }
    };
    youtubeFun();
  }, [movie.id]);

  return (
    <section className=" text-white tall:flex">
      {key && (
        <div className="mx-2 py-8">
          <h1 className="text-white text-xl text-center font-semibold mb-2">
            Watch Preview
          </h1>
          <iframe
            className="w-full tall:w-[360px]"
            // width="360"
            height="315"
            src={`https://www.youtube.com/embed/${key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="relative text-white md:w-[55rem] md:h-[350px] md:mx-auto overflow-hidden rounded-3xl mt-3">
        {movie?.backdrop_path && (
          <a href="/">
            <img
              className="w-full h-full mx-2"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt="Movie Slide"
            />
          </a>
        )}
        <span className="font-bold  bottom-5 right-10 absolute">
          {movie?.name || movie?.title}
        </span>
      </div>
    </section>
  );
}

import React from "react";
import Slider from "./Slider";
import Row from "./Row";
import requests from "../requests";

export default function Movie() {
  return (
    <article>
      <Slider />
      <Row request={requests.fetchTopRated} title="Top Rated" />
      <Row request={requests.fetchActionMovies} title="Action movies" />
      <Row request={requests.fetchDocumentaries} title="Documentaries" />
      <Row request={requests.fetchHorrorMovies} title="Horror movies" />
      <Row request={requests.fetchRomanceMovies} title="Romance movies" />
    </article>
  );
}

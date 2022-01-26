import React from "react";
import Row from "./Row";
import Slider from "./Slider";

const trendingSeries =
  "/trending/tv/day?api_key=544cc1a83bc6fb204d6f8af527c90773";
const popular =
  "/tv/popular?api_key=544cc1a83bc6fb204d6f8af527c90773&language=en-US&page=1";
const topRated =
  "/tv/top_rated?api_key=544cc1a83bc6fb204d6f8af527c90773&language=en-US&page=1";
const airingToday =
  "/tv/airing_today?api_key=544cc1a83bc6fb204d6f8af527c90773&language=en-US&page=1";

export default function TvShow() {
  return (
    <article>
      <Slider request={trendingSeries} />
      <Row request={airingToday} title="Airing Today" />
      <Row request={popular} title="Popular" />
      <Row request={topRated} title="Top rated" />
    </article>
  );
}

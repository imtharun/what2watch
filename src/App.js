import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";
import Search from "./components/Search";
import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movie" />} />
      <Route
        path="/movie"
        element={
          <main className={`font-monts`}>
            <Header />
            <Movie />
          </main>
        }
      />
      <Route
        path="/tvseries"
        element={
          <main className={`font-monts `}>
            <Header />
            <TvShow />
          </main>
        }
      />
      <Route
        path="/search"
        element={
          <main className={`font-monts `}>
            <Header />
            <Search />
          </main>
        }
      />
    </Routes>
  );
}

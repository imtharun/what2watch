import React from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import TvShow from "./components/TvShow";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/movie" />} />
      <Route
        path="/movie"
        element={
          <main className="app font-monts">
            <Header />
            <Movie />
          </main>
        }
      />
      <Route
        path="/tvseries"
        element={
          <main>
            <Header />
            <TvShow />
          </main>
        }
      />
    </Routes>
  );
}

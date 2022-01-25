import React from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

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
            <p className="text-white">This page will contain TV series</p>
          </main>
        }
      />
    </Routes>
  );
}

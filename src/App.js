import React from "react";
import Header from "./components/Header";
import Movie from "./components/Movie";
import "./index.css";

export default function App() {
  return (
    <main className="app font-monts">
      <Header />
      <Movie />
    </main>
  );
}

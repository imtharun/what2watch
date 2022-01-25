import React from "react";

export default function Card(props) {
  return (
    <div className="bg-white mr-2 rounded-md">
      <div className="w-36 m-2">
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/original${props?.image}`}
          alt={props.name}
        />
      </div>
      <div className="text-black max-w-[9rem] text-center">
        <h1 className="text-black text-sm p-2">{props.name}</h1>
      </div>
    </div>
  );
}

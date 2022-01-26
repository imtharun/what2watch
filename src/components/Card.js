import React from "react";

export default function Card(props) {
  return (
    <div className="relative bg-white mr-2 my-2 rounded-md">
      <div className="w-44 m-2">
        <img
          className="rounded-md"
          src={`https://image.tmdb.org/t/p/original${props?.image}`}
          alt={props.name}
        />
      </div>
      <div className="text-black max-w-[13rem] text-center z-50">
        <h1 className="text-black text-sm p-3 font-medium">{props.name}</h1>
      </div>
      <span className="text-black  -top-2 -right-1 text-sm px-1 rounded-lg bg-blue-400 absolute">
        {props.star}
      </span>
    </div>
  );
}

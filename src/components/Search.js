import React, { useState, useRef } from "react";
import Row from "./Row";

export default function Search() {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const changeHandler = function () {
    setInput(inputRef.current.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();
    setInput(input);
  };

  const searchUrl = `/search/movie?api_key=544cc1a83bc6fb204d6f8af527c90773&language=en-US&query=${input}&page=1&include_adult=false`;

  return (
    <article className="text-center mt-5">
      <form onSubmit={submitHandler}>
        <div className="relative inline-block text-gray-600">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search movies and series..."
            value={input}
            onChange={changeHandler}
            name="serch"
            className="bg-white h-10 w-64 px-5 pr-12 rounded-full text-sm focus:outline-none "
          />
          <button
            type="submit"
            className="absolute right-0 top-1 md:top-0 mt-2 md:mt-3 mr-4"
          >
            <svg
              className="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              // style="enable-background:new 0 0 56.966 56.966;"
              space="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </form>
      <section className="">
        <Row
          request={input.length === 0 ? "" : searchUrl}
          title={
            input.length === 0
              ? "Movies you might like"
              : `Movies related to ${input}`
          }
          isGrid={true}
        />
      </section>
    </article>
  );
}

import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [inputMovie, setInputMovie] = useState("");
  const inputRef = useRef();

  const changeHandler = function () {
    console.log(inputRef.current.value);
    setInputMovie(inputRef.current.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();
  };

  const [isActiveMovie, setIsActiveMovie] = useState(false);
  const [isActiveSeries, setIsActiveSeries] = useState(false);

  return (
    <React.Fragment>
      <header className="w-full flex p-2 justify-between mt-[0.25rem]">
        <div className="flex ">
          <div>
            <h1 className="font-monts hidden md:block md:text-2xl font-semibold mx-2 text-red-400">
              WHAT2WATCH
            </h1>
            <div className="flex itmes-center md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 md:hidden cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <h1 className="font-monts ml-2 -mt-1 md:hidden text-2xl font-semibold mr-1 text-red-400">
                W2W
              </h1>
            </div>
          </div>
          <div className="text-white mt-1 hidden md:block">
            <ul className="flex justify-around  md:w-44">
              <li>
                <span className="relative w-max two">
                  <NavLink
                    to="/movie"
                    className={(arg) => setIsActiveMovie(arg.isActive)}
                  >
                    Movies
                  </NavLink>
                  <span
                    className={`absolute -bottom-1 w-${
                      isActiveMovie ? 7 : 0
                    } left-1/2 transition-all h-1 
                      bg-red-400`}
                  ></span>
                  <span
                    className={`absolute -bottom-1 w-${
                      isActiveMovie ? 7 : 0
                    } right-1/2 transition-all h-1 
                      bg-red-400`}
                  ></span>
                </span>
              </li>
              <li>
                <span className="relative w-max two">
                  <NavLink
                    to="/tvseries"
                    className={(arg) => setIsActiveSeries(arg.isActive)}
                  >
                    Tv Series
                  </NavLink>
                  <span
                    className={`absolute -bottom-1 left-1/2 w-${
                      isActiveSeries ? 7 : 0
                    } transition-all h-1 bg-red-400`}
                  ></span>
                  <span
                    className={`absolute -bottom-1 right-1/2 w-${
                      isActiveSeries ? 7 : 0
                    } transition-all h-1 bg-red-400`}
                  ></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:mr-2">
          <form onSubmit={submitHandler}>
            <div className="relative  text-gray-600">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search movies..."
                value={inputMovie}
                onChange={changeHandler}
                name="serch"
                className="bg-white h-8 md:h-10 px-5 pr-1 md:pr-10 rounded-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 md:mt-3 mr-4"
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
        </div>
      </header>
    </React.Fragment>
  );
}

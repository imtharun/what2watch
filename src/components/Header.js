import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";
import { HamContext } from "../HamContextProvider";

export default function Header() {
  const { hamActive, hamHandler } = useContext(HamContext);

  return (
    <React.Fragment>
      <header className="w-full flex p-2 justify-between mt-[0.25rem]">
        <div className="flex ">
          <div>
            <Link to="/movie">
              <h1 className="font-monts hidden md:block md:text-2xl font-semibold mx-2 text-red-400">
                WHAT2WATCH
              </h1>
            </Link>

            <div className="flex itmes-center md:hidden">
              <button onClick={hamHandler}>
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
              </button>
              {hamActive && (
                <div className="z-50 bg-white w-56 h-52 flex flex-col justify-center rounded-xl absolute top-1/2 right-1/2 translate-x-1/2 traslate-y-1/2 ring-2 ring-gray-400 backdrop-blur-3xl">
                  <Modal>
                    <ul className="text-lg p-5 text-center">
                      <li className="mb-4">
                        <Link
                          className="border-b-2"
                          to="/movie"
                          onClick={hamHandler}
                        >
                          Movies
                        </Link>
                      </li>
                      <li className="mb-4">
                        <Link
                          className="border-b-2"
                          to="/tvseries"
                          onClick={hamHandler}
                        >
                          Tv series
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          className="border-b-2"
                          to="/search"
                          onClick={hamHandler}
                        >
                          Search
                        </Link>
                      </li>
                    </ul>
                  </Modal>
                </div>
              )}
              <Link to="/movie">
                <h1 className="font-monts ml-2 md:hidden text-2xl font-semibold mr-1 text-red-400">
                  W2W
                </h1>
              </Link>
            </div>
          </div>
          <div className="text-white mt-1 hidden md:block">
            <ul className="flex justify-around  md:w-56">
              <li>
                <span className="relative w-max two">
                  <NavLink to="/movie">Movies</NavLink>
                  <span
                    className="absolute -bottom-1 w-0
                     left-1/2 transition-all h-1 
                      bg-red-400"
                  ></span>
                  <span
                    className="absolute -bottom-1 w-0 right-1/2 transition-all h-1 
                      bg-red-400"
                  ></span>
                </span>
              </li>
              <li>
                <span className="relative w-max two">
                  <NavLink to="/tvseries">Tv Series</NavLink>
                  <span
                    className="absolute -bottom-1 left-1/2 w-0
                     transition-all h-1 bg-red-400"
                  ></span>
                  <span
                    className="absolute -bottom-1 right-1/2 w-0
                     transition-all h-1 bg-red-400"
                  ></span>
                </span>
              </li>
              <li>
                <span className="relative w-max two">
                  <NavLink to="/search">Search</NavLink>
                  <span
                    className="absolute -bottom-1 left-1/2 w-0
                    } transition-all h-1 bg-red-400"
                  ></span>
                  <span
                    className="absolute -bottom-1 right-1/2 w-0
                    } transition-all h-1 bg-red-400"
                  ></span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

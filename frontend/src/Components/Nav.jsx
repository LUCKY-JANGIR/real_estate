import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navclasses = {
    link: " text-white duration-200 px-4 py-0.5 rounded hover:text-cyan-400",
    header:
      " bg-gradient-to-r from-cyan-600 to-blue-600  grid grid-cols-3 p-1 justify-center align-middle",
    h1: "capitalize   text-sm sm:text-lg font-bold ",
    span1: "text-white/80",
    span2: "text-blue-200/80",
    search:
      " p-1 w-[25rem]  outline-1  outline-none  bg-white bg-opacity-25 border-0  focus:bg-opacity-50 placeholder-cyan-300 focus:placeholder-cyan-600",
    ul: "flex capitalize justify-end",
  };
  return (
    <>
      <header className={navclasses.header}>
        <h1 className={navclasses.h1}>
          <span className={navclasses.span1}>Brojabo-</span>
          <span className={navclasses.span2}>estate</span>
        </h1>
        <div>
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search"
            className={navclasses.search}
          />
        </div>
        <ul className={navclasses.ul}>
          <li className="">
            <Link to="/" className={navclasses.link}>
              proo
            </Link>
          </li>
          <li className=" ">
            <Link to="/" className={navclasses.link}>
              Proo
            </Link>
          </li>
          <li className="">
            <Link to="/" className={navclasses.link}>
              proo
            </Link>
          </li>
          <li className="">
            <Link to="/" className={navclasses.link}>
              proo
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

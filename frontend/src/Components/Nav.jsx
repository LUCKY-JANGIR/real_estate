import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const navclasses = {
    link: " text-white duration-200 px-4 py-0.5 rounded hover:text-[#11705a]",
    header:
      " bg-gradient-to-r from-[#00bbdd] to-[#00d072]  rounded-xl m-1 grid grid-cols-3 p-1 justify-center align-middle",
    h1: "capitalize   text-sm sm:text-lg font-bold ",
    span1: "text-white/80",
    span2: "text-[#00ffe4]",
    search:
      " px-3 py-1 w-[25rem]  outline-1  rounded-xl	 outline-none  bg-white bg-opacity-25 border-0  focus:bg-opacity-50 placeholder-[rgb(161 201 250)] focus:placeholder-cyan-600",
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

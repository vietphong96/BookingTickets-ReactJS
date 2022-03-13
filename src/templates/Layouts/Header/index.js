import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            className="w-32 "
            src={require("../../../assets/img/Logo/logo.png")}
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              activeClassName="border-b-2 border-indigo-500"
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 "
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              activeClassName="border-b-2 border-indigo-500"
              rel="noopener noreferrer"
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 "
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              activeClassName="border-b-2 border-indigo-500"
              rel="noopener noreferrer"
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 "
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink to="/login" className="self-center px-8 py-3 rounded">
            Sign in
          </NavLink>
          <button className="self-center px-8 py-3 font-semibold rounded">
            Sign up
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-5 flex flex-col gap-5 border-2 border-orange-500">
        <h1>Pages</h1>
        <hr className="border-white bg-white" />
        <div className="links flex flex-col gap-3">
          <NavLink
            to="/"
            className="link hover:border-orange-500 border-1 rounded-3xl p-1"
          >
            Home
          </NavLink>
          <NavLink
            to="/card"
            className="link hover:border-orange-500 border-1 rounded-3xl p-1"
          >
            Cards
          </NavLink>
          <NavLink
            to="/posts"
            className="link hover:border-orange-500 border-1 rounded-3xl p-1"
          >
            Posts
          </NavLink>
          <NavLink
            to="/users"
            className="link hover:border-orange-500А border-1 rounded-3xl p-1"
          >
            Users
          </NavLink>
        </div>
        <button className="changeback">Mode</button>
      </header>
    </>
  );
};

export default Header;

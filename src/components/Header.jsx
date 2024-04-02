import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="p-5 flex flex-col gap-5 border-2 border-orange-500">
        <h1>Pages</h1>
        <hr className="border-white bg-white" />
        <div className="links flex flex-col gap-3">
          <Link
            to="/"
            className="hover:bg-white hover:text-orange-500 border-1 rounded-3xl p-1"
          >
            Home
          </Link>
          <Link
            to="/card"
            className="hover:bg-white hover:text-orange-500 border-1 rounded-3xl p-1"
          >
            Cards
          </Link>
          <Link
            to="/posts"
            className="hover:bg-white hover:text-orange-500 border-1 rounded-3xl p-1"
          >
            Posts
          </Link>
          <Link
            to="/users"
            className="hover:bg-white hover:text-orange-500 border-1 rounded-3xl p-1"
          >
            Users
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

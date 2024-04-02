import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setlightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setlightMode();
  };
  return (
    <>
      <header className="p-5 flex flex-col gap-5 border-2 border-orange-500">
        <h1 className=" text-center">Pages</h1>
        <hr className="border-white bg-white" />
        <div className="links flex flex-col gap-3">
          <NavLink
            to="/"
            className="link hover:border-orange-500 border-1 rounded-3xl p-1 text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/card"
            className="link hover:border-orange-500 border-1 rounded-3xl p-1 text-center"
          >
            Cards
          </NavLink>
          <NavLink
            to="/posts"
            className="link hover:border-orange-500 border-1 rounded-3xl p-1 text-center"
          >
            Posts
          </NavLink>
          <NavLink
            to="/users"
            className="link hover:border-orange-500А border-1 rounded-3xl p-1 text-center"
          >
            Users
          </NavLink>
        </div>
        <div className="dark_mode flex justify-center">
          <input
            className="dark_mode_input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
          />
          <label className="dark_mode_label" for="darkmode-toggle"></label>
        </div>{" "}
      </header>
    </>
  );
};

export default Header;

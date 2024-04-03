import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <header className="p-5 flex flex-col gap-5 border-2 border-orange-500 text-center h-full">
        <div className="flex justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </div>
        <hr className="border-orange-500 hover:border-white" />
        <div className="links flex flex-col gap-3">
          <NavLink
            to="/"
            className="linka hover:border-orange-500 border-1 rounded-3xl p-1 text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/card"
            className="linka hover:border-orange-500 border-1 rounded-3xl p-1 text-center"
          >
            Cards
          </NavLink>
          <NavLink
            to="/posts"
            className="linka hover:border-orange-500 border-1 rounded-3xl p-1 text-center"
          >
            Posts
          </NavLink>
          <NavLink
            to="/users"
            className="linka hover:border-orange-500А border-1 rounded-3xl p-1 text-center"
          >
            Users
          </NavLink>
        </div>
        <div className="dark_mode flex justify-center">
          <input
            className="dark_mode_input input"
            type="checkbox"
            id="darkmode-toggle"
            onChange={toggleTheme}
          />
          <label
            className="dark_mode_label label"
            for="darkmode-toggle"
          ></label>
        </div>{" "}
      </header>
    </>
  );
};

export default Header;

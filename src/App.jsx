import React, { useState, useEffect } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Card from "./components/Card";
import Users from "./components/Users";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Notfoundpage from "./components/Notfoundpage";
import Header from "./components/Header";

function App() {
  return (
    <div className="body flex gap-3 p-2 w-full h-full">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/card" element={<Card />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <div className="flex flex-col gap-5 w-full p-5 ">
        <nav className="flex justify-between gap-5 w-full">
          <h1>Dashboard</h1>
          <h1>panel</h1>
        </nav>
        <br />
        <br />
        <Card />
        <hr className="border-white bg-white" />
        <Posts />
        <hr className="border-white bg-white" />
        <Users />
      </div> */
}

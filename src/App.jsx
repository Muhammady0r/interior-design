import React, { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
// import { useQuery } from "react-query";
// import Container from "react-bootstrap/Container";

import Posts from "./components/Posts";
import Card from "./components/Card";
import Users from "./components/Users";

function App() {
  return (
    <div className="flex flex-col gap-5 w-full p-5 ">
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
    </div>
  );
}

export default App;

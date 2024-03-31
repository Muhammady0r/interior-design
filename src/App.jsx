import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useQuery } from "react-query";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Posts from "./components/Posts";
import Card from "./components/Card";

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
      <Posts />
    </div>
  );
}

export default App;

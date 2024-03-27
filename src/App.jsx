import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { useQuery } from "react-query";

function App() {
  const { data: navlinks, isloading: navloading } = useQuery(() => {
    return axios.get(
      "https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links"
    );
  });

  if (navloading) {
    return <h1>Loading...</h1>;
  }
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  function edit(id) {
    const navLink = {
      text: text,
      link: link,
    };

    axios.put(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links/${id}`,
      navLink
    );
  }
  return (
    <div>
      <input
        className="p-2"
        type="text"
        placeholder="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <input
        className="p-2"
        type="text"
        placeholder="link"
        onChange={(e) => {
          setLink(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </div>
  );
}

export default App;

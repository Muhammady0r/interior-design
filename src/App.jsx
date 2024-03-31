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

function App() {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  const { data, isLoading } = useQuery(
    "navlinks",
    () => {
      return axios.get(
        "https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links"
      );
    },
    {
      refetchInterval: 2500,
    }
  );

  const handleEditNavLink = (e, id) => {
    e.preventDefault();

    const navLink = {
      text: text,
      link: link,
    };

    axios.put(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links/${id}`,
      navLink
    );
  };

  const handleNewNavLink = function (e) {
    e.preventDefault();

    const navLink = {
      text: text,
      link: link,
    };

    axios.post(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links/`,
      navLink
    );
  };

  const handleDeleteNavLink = function (id) {
    axios.delete(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links/${id}`
    );
  };

  if (isLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <div className="flex flex-col gap-5 w-full p-5 ">
      <nav className="flex justify-between gap-5 w-full">
        <h1>Dashboard</h1>
        <h1>panel</h1>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="cards flex flex-col gap-2 p-3 border-2 border-orange-500 w-full ">
        <h1 className="text-center text-3xl font-bold">Nav links</h1>
        <Dialog>
          <DialogTrigger>New +</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adding navlink</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={handleNewNavLink}
              className="p-5 gap-5 flex flex-col border-2 rounded-3xl "
            >
              <div className="name flex flex-col gap-2">
                <p className="ml-1 text-left">Text</p>
                <input
                  className="p-2 border-1 rounded-3xl w-full"
                  type="text"
                  placeholder="text"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>
              <div className="link flex flex-col gap-2">
                <p className="ml-1 text-left">Link</p>
                <input
                  className="p-2 border-1 rounded-3xl"
                  type="text"
                  placeholder="link"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </DialogContent>
        </Dialog>

        {data.data.map((res, i) => {
          return (
            <div
              key={i}
              className="nav flex gap-2 p-3 border-2 rounded-3xl justify-between  "
            >
              <p className="">{res.text}</p>
              <p>{res.link}</p>
              <button
                onClick={() => {
                  handleDeleteNavLink(res.id);
                }}
              >
                Delete
              </button>
              <Dialog>
                <DialogTrigger
                  onClick={() => {
                    setText(res.text);
                    setLink(res.link);
                  }}
                >
                  Edit
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editing navlink with id {res.id}</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      handleEditNavLink(e, res.id);
                    }}
                    className="p-5 gap-5 flex flex-col border-2 rounded-3xl "
                  >
                    <div className="name flex flex-col gap-2">
                      <p className="ml-1 text-left">Text</p>
                      <input
                        className="p-2 border-1 rounded-3xl w-full"
                        defaultValue={res.text}
                        type="text"
                        placeholder="text"
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      />
                    </div>
                    <div className="link flex flex-col gap-2">
                      <p className="ml-1 text-left">Link</p>
                      <input
                        className="p-2 border-1 rounded-3xl"
                        defaultValue={res.link}
                        type="text"
                        placeholder="link"
                        onChange={(e) => {
                          setLink(e.target.value);
                        }}
                      />
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useQuery } from "react-query";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Posts() {
  const [poster, setPoster] = useState("");
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  const [linkp, setLinkp] = useState("");

  const { data, isLoading } = useQuery(
    "posts",
    () => {
      return axios.get(
        "https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/posts/"
      );
    },
    {
      refetchInterval: 2500,
    }
  );

  const handleEditPoster = (e, id) => {
    e.preventDefault();

    const post = {
      poster: poster,
      header: header,
      description: description,
      link: linkp,
    };

    axios.put(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/posts/${id}`,
      post
    );
  };

  const handleNewPoster = function (e) {
    e.preventDefault();

    const post = {
      poster: poster,
      header: header,
      description: description,
      link: linkp,
    };

    axios.post(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/posts/`,
      post
    );
  };

  const handleDeletePoster = function (id) {
    axios.delete(
      `https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/posts/${id}`
    );
  };

  if (isLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  return (
    <>
      <div className="posters flex flex-col gap-2 p-3 border-2 border-orange-500 w-full ">
        <h1 className="text-center text-3xl font-bold">Posters</h1>
        <Dialog>
          <DialogTrigger>New +</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adding posters</DialogTitle>
              <br />
              <form
                onSubmit={handleNewPoster}
                className="p-5 gap-5 flex flex-col border-2 rounded-3xl "
              >
                <div className="poster  flex flex-col gap-2">
                  <p className="ml-1 text-left">Poster</p>
                  <input
                    className="p-2 border-1 rounded-3xl w-full"
                    type="text"
                    placeholder="text"
                    onChange={(e) => {
                      setPoster(e.target.value);
                    }}
                  />
                </div>
                <div className="header">
                  <p className="ml-1 text-left">Header</p>
                  <input
                    className="p-2 border-1 rounded-3xl w-full"
                    type="text"
                    placeholder="text"
                    onChange={(e) => {
                      setHeader(e.target.value);
                    }}
                  />
                </div>
                <div className="description">
                  <p className="ml-1 text-left">Description</p>
                  <input
                    className="p-2 border-1 rounded-3xl w-full"
                    type="text"
                    placeholder="text"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="link">
                  <p className="ml-1 text-left">Link</p>
                  <input
                    className="p-2 border-1 rounded-3xl w-full"
                    type="text"
                    placeholder="text"
                    onChange={(e) => {
                      setLinkp(e.target.value);
                    }}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        {data.data.map((res, i) => {
          return (
            <div
              key={i}
              className="nav flex gap-2 p-3 border-2 rounded-3xl justify-between"
            >
              <p>{res.poster}</p>
              <p>{res.header}</p>
              <p>{res.description}</p>
              <p>{res.link}</p>
              <button
                onClick={() => {
                  handleDeletePoster(res.id);
                }}
              >
                Delete
              </button>
              <Dialog>
                <DialogTrigger
                  onClick={() => {
                    setPoster(res.poster);
                    setHeader(res.header);
                    setDescription(res.description);
                    setLinkp(res.link);
                  }}
                >
                  Edit
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editing post with id {res.id}</DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={(e) => {
                      handleEditPoster(e, res.id);
                    }}
                    className="p-5 gap-5 flex flex-col border-2 rounded-3xl "
                  >
                    <div className="poster  flex flex-col gap-2">
                      <p className="ml-1 text-left">Poster</p>
                      <input
                        className="p-2 border-1 rounded-3xl w-full"
                        type="text"
                        placeholder="text"
                        onChange={(e) => {
                          setPoster(e.target.value);
                        }}
                      />
                    </div>
                    <div className="header">
                      <p className="ml-1 text-left">Header</p>
                      <input
                        className="p-2 border-1 rounded-3xl w-full"
                        type="text"
                        placeholder="text"
                        onChange={(e) => {
                          setHeader(e.target.value);
                        }}
                      />
                    </div>
                    <div className="description">
                      <p className="ml-1 text-left">Description</p>
                      <input
                        className="p-2 border-1 rounded-3xl w-full"
                        type="text"
                        placeholder="text"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                    <div className="link">
                      <p className="ml-1 text-left">Link</p>
                      <input
                        className="p-2 border-1 rounded-3xl w-full"
                        type="text"
                        placeholder="text"
                        onChange={(e) => {
                          setLinkp(e.target.value);
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
    </>
  );
}

export default Posts;

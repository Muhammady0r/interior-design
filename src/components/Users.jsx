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

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [needs, setNeeds] = useState("");

  const { data, isLoading } = useQuery(
    "users",
    () => {
      return axios.get("https://66053f6b2ca9478ea17fd0d8.mockapi.io/v1/users");
    },
    {
      refetchInterval: 2500,
    }
  );

  const handleDeleteUser = function (id) {
    axios.delete(`https://66053f6b2ca9478ea17fd0d8.mockapi.io/v1/users/${id}`);
  };
  if (isLoading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );

  return (
    <>
      <div className="users flex flex-col gap-2 p-3 border-2 border-orange-500 w-full ">
        <h1 className="text-center text-3xl font-bold">Users</h1>
        {data.data.map((res, i) => {
          return (
            <div
              key={i}
              className="user  flex gap-2 p-3 border-2 rounded-3xl justify-between"
            >
              <p>{res.name}</p>
              <p>{res.email}</p>
              <p>{res.room}</p>
              <p>{res.needs}</p>
              <button
                onClick={() => {
                  handleDeleteUser(res.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;

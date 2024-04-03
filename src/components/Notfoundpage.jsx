import React from "react";
import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div className="text-center p-16 w-full">
      <h1>
        There's nothing here. Go <Link to={"/"}>home</Link>
      </h1>
    </div>
  );
};

export default Notfoundpage;

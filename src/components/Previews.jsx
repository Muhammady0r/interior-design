import { getImages } from "@/App";
import React from "react";

const Previews = () => {
  return (
    <div className="flex flex-col container">
      <h1 className="playd-700 text-6xl max-sm:text-4xl">
        Reviews from Our Clients
      </h1>
      <p className="flex gap-2 items-center poppins-500 text-xl text-secondary">
        <div className="h-1 w-10 bg-accent rounded-lg"></div> OUR CLIENT SAYS
      </p>
      <div>
        <div className="h-full w-full rounded overflow-hidden">
          <img
            src={getImages(true)}
            alt=""
            className="w-full h-full object-cover blur-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Previews;

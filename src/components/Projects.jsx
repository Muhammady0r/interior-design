import React, { useContext, useEffect, useState } from "react";
import { Card } from "./ui/card";
import { getImages } from "@/App";
import { Button, buttonVariants } from "./ui/button";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { LangContext } from "./lang";
import { getText } from "./Funcs";

const Projects = () => {
  const { lang } = useContext(LangContext);
  const [texts, setTexts] = useState(getText("projects"));

  useEffect(() => {
    setTexts(getText("projects"));
  }, [lang]);

  const { data, isLoading } = useQuery(
    "projects",
    () => {
      return axios("https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/posts");
    },
    { refetchIntervalInBackground: 10000 }
  );

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col container">
      <h1 className="playd-700 text-6xl max-lg:text-4xl text-center">
        {texts.title}
      </h1>
      <p className="flex gap-2 items-center justify-center poppins-500 text-xl text-secondary max-sm:text-base">
        <span className="h-1 w-10 bg-accent rounded-lg"></span> {texts.gallery}
        <span className="h-1 w-10 bg-accent rounded-lg"></span>
      </p>
      <div className="flex flex-col gap-10 pt-10">
        {data.data.map((res, i) => {
          return (
            <Card
              className={
                "h-[477px] grid grid-cols-2 gap-20 max-xl:gap-10 max-lg:h-[370px] max-md:grid-cols-1 max-md:h-auto"
              }
              key={i}
            >
              <div
                className={`${
                  i % 2 == 0 ? "order-1 max-md:order-[0]" : ""
                } rounded overflow-hidden w-full h-full max-md:max-h-[500px]`}
              >
                <img
                  src={res.poster}
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="flex flex-col justify-between items-start max-md:gap-2">
                <h1
                  className="poppins-600 text-6xl max-lg:text-4xl max-sm:text-2xl"
                  style={{ lineHeight: "120%" }}
                >
                  {res.header}
                </h1>
                <p
                  className="text-2xl poppins-500 text-secondary max-lg:text-xl max-sm:text-base"
                  style={{ lineHeight: "190%" }}
                >
                  {res.description}
                </p>
                <Link
                  to={res.link}
                  className={`${buttonVariants({
                    variant: "",
                  })} text-lg max-sm:text-base max-sm:p-5`}
                >
                  {texts.read_more}
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

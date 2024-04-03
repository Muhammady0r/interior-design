import { getImages } from "@/App";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LangContext } from "./lang";
import { getText } from "./Funcs";

const Previews = () => {
  const { lang } = useContext(LangContext);
  const [texts, setTexts] = useState(getText("reviews"));

  useEffect(() => {
    setTexts(getText("reviews"));
  }, [lang]);

  return (
    <>
      <div className="flex flex-col container">
        <h1 className="playd-700 text-6xl max-lg:text-4xl">{texts.title}</h1>
        <p className="flex gap-2 items-center poppins-500 text-xl text-secondary">
          <span className="h-1 w-10 bg-accent rounded-lg"></span>{" "}
          {texts.client_says}
        </p>
        <div className="mt-2 grid grid-cols-2 justify-center items-center gap-12 max-lg:gap-6 max-lg:grid-cols-1">
          <div className="h-[415px] w-full rounded overflow-hidden max-sm:h-[200px]">
            <img
              src={getImages(true)}
              alt=""
              className="w-full h-full object-cover blur-md"
            />
          </div>
          <div className="flex flex-col justify-center items-stretch">
            <h1 className="poppins-600 text-5xl max-lg:text-3xl">
              Mr. Leonardo
            </h1>
            <h2 className="poppins-500 text-xl text-secondary max-lg:text-base">
              {texts.client_job}
            </h2>
            <p
              className="poppins-500 text-2xl my-14 max-xl:my-10 max-lg:my-4 max-lg:text-xl"
              style={{ lineHeight: "190%" }}
            >
              {texts.client_desc}
            </p>
            <div className="flex gap-2">
              <Button className={"w-12 h-12"}>
                <i className="fa-solid fa-arrow-left fa-xl"></i>
              </Button>
              <Button className={"w-12 h-12"}>
                <i className="fa-solid fa-arrow-right fa-xl"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Previews;

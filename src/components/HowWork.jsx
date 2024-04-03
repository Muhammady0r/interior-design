import React, { useContext, useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getImages } from "@/App";
import { getText } from "./Funcs";
import { LangContext } from "./lang";

const HowWork = () => {
  const { lang } = useContext(LangContext);
  const [texts, setTexts] = useState(getText("how_we_work"));
  const [cards, setCards] = useState([
    texts.planning,
    texts.concept,
    texts.design,
    texts.installation,
  ]);

  useEffect(() => {
    setTexts(getText("how_we_work"));
  }, [lang]);

  useEffect(() => {
    setCards([texts.planning, texts.concept, texts.design, texts.installation]);
  }, [texts]);

  return (
    <div className="flex flex-col container">
      <h1 className="playd-700 text-6xl max-sm:text-4xl">{texts.title}</h1>
      <p className="flex gap-2 items-center poppins-500 text-xl text-secondary">
        <span className="h-1 w-10 bg-accent rounded-lg"></span>
        {texts.workflow}
      </p>
      <Carousel className={"mt-10"}>
        <CarouselContent className={"gap-8"}>
          {cards.map((data, i) => {
            return (
              <CarouselItem
                className={
                  "basis-1/4 max-lg:basis-1/3 max-md:basis-1/2 max-sm:basis-full"
                }
                key={i}
              >
                <Card>
                  <div className="overflow-hidden h-56 w-full rounded">
                    <img
                      src={getImages(true)}
                      alt=""
                      className="rounded h-full w-full object-cover shadow-2xl blur-md"
                    />
                  </div>
                  <CardHeader className={"p-2"}>
                    <CardTitle
                      className={
                        "flex justify-between items-center poppins-600 text-4xl"
                      }
                    >
                      {data}
                      <span className="poppins-600 text-xl text-primary">
                        {i + 1 < 10 ? "0" : ""}
                        {i + 1}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={"p-2"}>
                    <p className="poppins-500 text-xl text-justify text-secondary">
                      One key part of the strategic planning is to understand
                      your goals and budget.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HowWork;

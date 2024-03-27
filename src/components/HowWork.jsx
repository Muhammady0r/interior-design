import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getImages } from "@/App";

const cards = [
  "Planning",
  "Concept",
  "Design",
  "Installation",
  "Planning",
  "Concept",
  "Design",
  "Installation",
  "Planning",
  "Concept",
  "Design",
  "Installation",
  "Planning",
  "Concept",
  "Design",
  "Installation",
];

const HowWork = () => {
  return (
    <div className="flex flex-col container">
      <h1 className="playd-700 text-6xl max-sm:text-4xl">How We Work</h1>
      <p className="flex gap-2 items-center poppins-500 text-xl text-secondary">
        <div className="h-1 w-10 bg-accent rounded-lg"></div> OUR WORKFLOW
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

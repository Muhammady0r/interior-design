import React from "react";

const Homepage = () => {
  return (
    <div className="home w-full flex flex-col gap-3 justify-between">
      <div className="flex p-5 border-2 w-full border-orange-500">
        <h1>This is Home page</h1>
      </div>
      <div className="flex p-5 flex-col gap-3 border-2 border-orange-500 w-full">
        <h1>Interior design</h1>
        <p>
          Interior design is the art and science of enhancing the interior of a
          building to achieve a healthier and more aesthetically pleasing
          environment for the people using the space. With a keen eye for detail
          and a creative flair, an interior designer is someone who plans,
          researches, coordinates, and manages such enhancement projects.
          Interior design is a multifaceted profession that includes conceptual
          development, space planning, site inspections, programming, research,
          communicating with the stakeholders of a project, construction
          management, and execution of the design.
        </p>
      </div>
    </div>
  );
};

export default Homepage;

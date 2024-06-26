import React, { useContext, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";

import { toast } from "sonner";
import { LangContext } from "./lang";
import { getText } from "./Funcs";

const Work = () => {
  const { lang } = useContext(LangContext);
  const [texts, setTexts] = useState(getText("work_us"));

  useEffect(() => {
    setTexts(getText("work_us"));
  }, [lang]);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const roomInput = useRef(null);
  const needsInput = useRef(null);

  function formSubmit(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    const value = Object.fromEntries(data?.entries());

    const user = { value }.value;

    const userData = {
      name: user.name,
      email: user.email,
      room: user.room,
      needs: user.needs,
    };

    if (
      user.name.length > 2 &&
      user.email.length > 2 &&
      user.room.length > 2 &&
      user.needs.length > 2
    ) {
      axios
        .post("https://66053f6b2ca9478ea17fd0d8.mockapi.io/v1/users", userData)
        .then(() => {
          nameInput.current.value = "";
          emailInput.current.value = "";
          roomInput.current.value = "";
          needsInput.current.value = "";
          toast("Data successfully sent.");
        });
    }
  }

  return (
    <div className="container grid grid-cols-2 gap-20 max-lg:gap-10 max-lg:grid-cols-1">
      <div className="grid grid-rows-2 max-lg:grid-rows-1">
        <div className="flex flex-col justify-between max-lg:gap-8">
          <h1 className="playd-700 text-6xl max-sm:text-4xl">{texts.title}</h1>
          <p className="text-secondary poppins-500 text-2xl max-sm:text-lg">
            {texts.desc}
          </p>
          <div className="h-1 w-[60%] bg-accent rounded-lg"></div>
        </div>
        <div className="max-lg:hidden"></div>
      </div>
      <form
        className="flex flex-col gap-8 rounded-2xl shadow-xl px-8 py-12 max-lg:px-4 max-sm:py-4 max-sm:gap-4"
        onSubmit={formSubmit}
      >
        <label htmlFor="name" className="flex flex-col gap-2">
          <h1 className="poppins-500 text-2xl max-sm:text-lg">
            {texts.form.name}
          </h1>
          <Input
            className={
              "border-none bg-muted p-8 poppins-500 text-xl max-sm:text-base max-sm:p-4"
            }
            placeholder={texts.form.name_placeholder}
            id={"name"}
            name={"name"}
            ref={nameInput}
          />
        </label>
        <label htmlFor="email" className="flex flex-col gap-2">
          <h1 className="poppins-500 text-2xl max-sm:text-lg">{texts.email}</h1>
          <Input
            className={
              "border-none bg-muted p-8 poppins-500 text-xl max-sm:text-base max-sm:p-4"
            }
            placeholder={texts.email}
            id={"email"}
            name={"email"}
            type={"email"}
            ref={emailInput}
          />
        </label>
        <label htmlFor="room" className="flex flex-col gap-2">
          <h1 className="poppins-500 text-2xl max-sm:text-lg">
            {texts.form.room}
          </h1>
          <Input
            className={
              "border-none bg-muted p-8 poppins-500 text-xl max-sm:text-base max-sm:p-4"
            }
            placeholder={texts.form.room_placeholder}
            id={"room"}
            name={"room"}
            ref={roomInput}
          />
        </label>
        <label htmlFor="needs" className="flex flex-col gap-2">
          <h1 className="poppins-500 text-2xl max-sm:text-lg">
            {texts.form.tell}
          </h1>
          <Input
            className={
              "border-none bg-muted p-8 poppins-500 text-xl max-sm:text-base max-sm:p-4"
            }
            placeholder={texts.form.tell_placeholder}
            id={"needs"}
            name={"needs"}
            ref={needsInput}
          />
        </label>
        <Button className={"p-6 text-xl self-end max-sm:text-base max-sm:p-5"}>
          {texts.submit}
        </Button>
      </form>
    </div>
  );
};

export default Work;

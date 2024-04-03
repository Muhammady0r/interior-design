import React, { useContext, useEffect, useState } from "react";
import "./Footer/Footer.css";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { LangContext } from "./lang";
import { getText } from "./Funcs";

const Footer = () => {
  const { lang } = useContext(LangContext);
  const [texts, setTexts] = useState(getText("footer"));

  useEffect(() => {
    setTexts(getText("footer"));
  }, [lang]);

  return (
    <div className="container footer">
      <div className="grid footer-top mt-44">
        <div className="grid mr-20">
          <div className="flex gap-6 justify-start items-center">
            <h1 className="poppins-600 text-2xl">{texts.sub}</h1>
            <div className="h-1 w-[30%] bg-accent rounded-lg"></div>
          </div>
          <p className="poppins-500 text-xl text-secondary mt-4 mb-9 ">
            {texts.sub_desc}
          </p>
          <form className="bg-muted grid p-2 gap-2 rounded-xl">
            <Input
              className={"text-secondary poppins-500 text-lg py-6"}
              placeholder={texts.email}
            />
            <Button className={"text-base poppins-600 py-6"}>
              {texts.submit}
            </Button>
          </form>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="poppins-600 text-2xl">{texts.navigation.title}</h1>
          <ul className="text-secondary poppins-500 text-xl flex flex-col gap-4">
            <li>
              <Link className="hover:underline">{texts.navigation.home}</Link>
            </li>
            <li>
              <Link className="hover:underline">
                {texts.navigation.workflow}
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                {texts.navigation.reviews}
              </Link>
            </li>
            <li>
              <Link className="hover:underline">
                {texts.navigation.project}
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="poppins-600 text-2xl">{texts.about.title}</h1>
          <ul className="text-secondary poppins-500 text-xl flex flex-col gap-4">
            <li>
              <Link className="hover:underline">{texts.about.pricing}</Link>
            </li>
            <li>
              <Link className="hover:underline">{texts.about.contact}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="poppins-600 text-2xl">{texts.social}</h1>
          <ul className="text-secondary poppins-500 text-xl flex flex-col gap-4">
            <li>
              <Link className="hover:underline">Instagram</Link>
            </li>
            <li>
              <Link className="hover:underline">Facebook</Link>
            </li>
            <li>
              <Link className="hover:underline">WhatsApp</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-36 flex justify-between footer-bottom">
        <p className="text-secondary poppins-500 text-xl">{texts.lic}</p>
        <div className="flex gap-4">
          <Link className="text-secondary poppins-500 text-xl hover:underline">
            {texts.lic1}
          </Link>
          <Link className="text-secondary poppins-500 text-xl hover:underline">
            {texts.lic2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

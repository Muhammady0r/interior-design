import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import Loading from "./Loading";
import { useTheme } from "./theme-provider";
import { getText } from "./Funcs";
import { LangContext } from "./lang";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [texts, setTexts] = useState(getText("header"));
  const { lang, setLang } = useContext(LangContext);

  const { data: navLinks, isLoading: navLoading } = useQuery(
    "navlinks",
    () => {
      return axios(
        "https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links"
      );
    },
    {
      refetchIntervalInBackground: 10000,
    }
  );

  useEffect(() => {
    setTexts(getText("header"));
  }, [lang]);

  if (navLoading) return <Loading />;

  return (
    <div className="flex justify-between items-center w-full fixed top-0 py-8 z-20 backdrop-blur-sm bg-background/70">
      <div className="container flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="playd-700 text-4xl max-md:text-2xl">Interiorqu.</h1>
        </Link>
        <div className="flex gap-6 justify-center items-center max-lg:hidden">
          <ul className="flex gap-4">
            {navLinks.data.map((res, i) => {
              return (
                <Link
                  to={res.link}
                  className="nav-link relative poppins-500 text-xl text-secondary hover:text-foreground transition-all"
                  key={i}
                >
                  {res.text}
                  <div className="absolute m-auto left-[25%] rounded-xl bottom-0 bg-accent h-1 transition-all w-1/2"></div>
                </Link>
              );
            })}
          </ul>
          <Dialog>
            <DialogTrigger
              className={`${buttonVariants({ variant: "outline" })}`}
            >
              {texts.contact_us}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{texts.contact.title}</DialogTitle>
              </DialogHeader>
              <form action="/" className="flex flex-col gap-3">
                <Input placeholder={texts.contact.name} />
                <Input placeholder={texts.contact.l_name} />
                <Input placeholder={texts.contact.email} type={"email"} />
                <Input placeholder={texts.contact.phone} type={"number"} />
                <Button>{texts.submit}</Button>
              </form>
            </DialogContent>
          </Dialog>
          <Button
            className={"w-9"}
            onClick={() => {
              setTheme(theme == "dark" ? "light" : "dark");
            }}
          >
            {theme == "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </Button>
          <Button
            className={"w-full flex justify-center items-center gap-1"}
            onClick={() => {
              setLang(lang == "ru" ? "en" : "ru");
            }}
          >
            <i className="fa-solid fa-globe"></i>
            {lang.toUpperCase()}
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={`${buttonVariants({ variant: "" })} hidden max-lg:block`}
          >
            <i className="fa-solid fa-bars"></i>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {navLinks.data.map((res, i) => {
              return (
                <DropdownMenuItem className={"p-0"} key={i}>
                  <Link to={res.link} className="w-full h-full px-2 py-1.5">
                    {res.text}
                  </Link>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />

            <Dialog>
              <DialogTrigger
                className={`${buttonVariants({ variant: "outline" })} w-full`}
              >
                {texts.contact_us}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{texts.contact.title}</DialogTitle>
                </DialogHeader>
                <form action="/" className="flex flex-col gap-3">
                  <Input placeholder={texts.contact.name} />
                  <Input placeholder={texts.contact.l_name} />
                  <Input placeholder={texts.contact.email} type={"email"} />
                  <Input placeholder={texts.contact.phone} type={"number"} />
                  <Button>{texts.submit}</Button>
                </form>
              </DialogContent>
            </Dialog>

            <DropdownMenuSeparator />

            <Button
              className={"w-full"}
              onClick={() => {
                setTheme(theme == "dark" ? "light" : "dark");
              }}
            >
              {theme == "dark" ? (
                <i className="fa-solid fa-sun"></i>
              ) : (
                <i className="fa-solid fa-moon"></i>
              )}
            </Button>

            <DropdownMenuSeparator />

            <Button
              className={"w-full flex justify-center items-center gap-1"}
              onClick={() => {
                setLang(lang == "ru" ? "en" : "ru");
              }}
            >
              <i className="fa-solid fa-globe"></i>
              {lang.toUpperCase()}
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;

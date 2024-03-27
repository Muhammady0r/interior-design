import axios from "axios";
import React from "react";
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

const Header = () => {
  const { data: navLinks, isLoading: navLoading } = useQuery(
    "navlinks",
    () => {
      return axios(
        "https://65e6e0fb53d564627a8d390f.mockapi.io/api/v1/nav-links"
      );
    },
    {
      refetchIntervalInBackground: 5000,
    }
  );

  if (navLoading) {
    return (
      <>
        <l-ring size="60" color="coral"></l-ring>
      </>
    );
  }

  return (
    <div className="flex justify-between items-center container">
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
            Contact Us
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <form action="/" className="flex flex-col gap-3">
              <Input placeholder={"First name..."} />
              <Input placeholder={"Last name..."} />
              <Input placeholder={"Email..."} type={"email"} />
              <Input placeholder={"Phone number..."} type={"number"} />
              <Button>Submit</Button>
            </form>
          </DialogContent>
        </Dialog>
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
              Contact Us
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <form action="/" className="flex flex-col gap-3">
                <Input placeholder={"First name..."} />
                <Input placeholder={"Last name..."} />
                <Input placeholder={"Email..."} type={"email"} />
                <Input placeholder={"Phone number..."} type={"number"} />
                <Button>Submit</Button>
              </form>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;

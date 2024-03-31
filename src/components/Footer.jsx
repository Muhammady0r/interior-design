import React from "react";
import "./Footer/Footer.css";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="grid footer-top mt-44">
        <div className="grid mr-20">
          <div className="flex gap-6 justify-start items-center">
            <h1 className="poppins-600 text-2xl">Newsletter</h1>
            <div className="h-1 w-[30%] bg-accent rounded-lg"></div>
          </div>
          <p className="poppins-500 text-xl text-secondary mt-4 mb-9 ">
            Subscribe to our newsletter for awesome newsletter and daily
            inspiration.
          </p>
          <form className="bg-muted grid p-2 gap-2 rounded-xl">
            <Input
              className={"text-secondary poppins-500 text-lg py-6"}
              placeholder={"Email address"}
            />
            <Button className={"text-base poppins-600 py-6"}>Submit</Button>
          </form>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="poppins-600 text-2xl">Navigation</h1>
          <ul className="text-secondary poppins-500 text-xl flex flex-col gap-4">
            <li>
              <Link className="hover:underline">Home</Link>
            </li>
            <li>
              <Link className="hover:underline">Workflow</Link>
            </li>
            <li>
              <Link className="hover:underline">Reviews</Link>
            </li>
            <li>
              <Link className="hover:underline">Project</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="poppins-600 text-2xl">About</h1>
          <ul className="text-secondary poppins-500 text-xl flex flex-col gap-4">
            <li>
              <Link className="hover:underline">Pricing</Link>
            </li>
            <li>
              <Link className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="poppins-600 text-2xl">Social</h1>
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
        <p className="text-secondary poppins-500 text-xl">
          Created @ 2021 Interiorqu.com.StudioWebsite
        </p>
        <div className="flex gap-4">
          <Link className="text-secondary poppins-500 text-xl hover:underline">
            Privacy Policy
          </Link>
          <Link className="text-secondary poppins-500 text-xl hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

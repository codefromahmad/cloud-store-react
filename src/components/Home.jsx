import React from "react";
import { Link } from "react-scroll";
import heroImage from "../assets/cyber-bg.png";
import Widget from "./Widget";

const Home = () => {
  return (
    <div name="home" className="sm:h-screen w-full bg-zinc-200 pt-28 sm:pt-0">
      <div className="flex flex-col h-full sm:flex-row max-w-screen-lg sm:justify-center mx-auto sm:px-8 items-center">
        <div className="sm:w-1/2">
          <p className="text-center sm:text-left">
            Unique Sequencing and Production
          </p>
          <p className="text-4xl font-bold sm:text-5xl md:text-6xl py-4 text-center sm:text-left">
            Cloud Management
          </p>
          <p className="text-center py-2 sm:text-left">
            This is our Tech Brand
          </p>
          <div className="flex justify-center sm:block my-2">
            <Link
              to="pricing"
              smooth="pricing"
              className="bg-blue-500 hover:opacity-80 text-white rounded-md px-16 py-1.5"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="pt-12 w-4/5 sm:w-1/2 sm:pt-0">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
      <Widget />
    </div>
  );
};

export default Home;

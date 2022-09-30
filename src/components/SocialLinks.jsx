import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
      <hr className="mx-4 mb-2 bg-slate-700 my-5" />
      <div className="flex justify-between flex-col md:flex-row text-center text-slate-400 sm:text-left max-w-[950px] md:mx-auto px-4 py-2">
        <p className="text-center md:text-left">
          2022 Workflow, LLC, All right reserved.
        </p>
        <div className="flex justify-evenly py-6 md:py-0">
          <FaFacebook
            size={25}
            className="hover:text-slate-300 duration-200 cursor-pointer md:mx-6"
          />
          <FaInstagram
            size={25}
            className="hover:text-slate-300 duration-200 cursor-pointer md:mx-6"
          />
          <FaTwitter
            size={25}
            className="hover:text-slate-300 duration-200 cursor-pointer md:mx-6"
          />
          <FaTwitch
            size={25}
            className="hover:text-slate-300 duration-200 cursor-pointer md:mx-6"
          />
          <FaGithub
            size={25}
            className="hover:text-slate-300 duration-200 cursor-pointer md:mx-6"
          />
        </div>
      </div>
    </>
  );
};

export default SocialLinks;

import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      link: "home",
    },
    {
      id: 2,
      name: "about",
      link: "about",
    },
    {
      id: 3,
      name: "support",
      link: "support",
    },
    {
      id: 4,
      name: "platforms",
      link: "platforms",
    },
    {
      id: 5,
      name: "pricing",
      link: "pricing",
    },
  ];
  return (
    <div className="w-full fixed h-20 bg-zinc-200 py-5 drop-shadow-lg">
      <div className="flex justify-between items-center mx-3">
        <div className="flex items-center">
          <p className="text-3xl font-bold pr-3">Brand.</p>
          <ul className="hidden md:flex justify-between">
            {links.map(({ id, name, link }) => (
              <li
                key={id}
                className="mx-3 hover:mx-[10px] capitalize cursor-pointer hover:scale-102 duration-200 hover:font-bold"
              >
                <a href="#">{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-6 hidden md:block">
          <button className="mr-3 hover:scale-102 duration-200 hover:font-bold">
            Sign in
          </button>
          <button className="bg-blue-500 hover:opacity-80 text-white py-2 px-5 rounded-md">
            Sign up
          </button>
        </div>
        {nav ? (
          <GrClose
            onClick={() => setNav(!nav)}
            size={30}
            className="md:hidden block font-bold cursor-pointer"
          />
        ) : (
          <FiMenu
            onClick={() => setNav(!nav)}
            size={30}
            className="md:hidden block font-bold cursor-pointer"
          />
        )}
        {nav && (
          <div className="absolute z-99 top-20 right-0 w-full bg-zinc-300">
            <ul className="flex flex-col items-center w-full justify-center">
              {links.map(({ id, name, link }) => (
                <li
                  key={id}
                  className="capitalize text-3xl py-3 cursor-pointer hover:scale-102 duration-200 hover:font-bold"
                >
                  <a href="#">{name}</a>
                </li>
              ))}
              <li className="border-t-2 border-zinc-400 py-3">
                <a
                  href="#"
                  className="capitalize text-3xl cursor-pointer hover:scale-102 duration-200 hover:font-bold"
                >
                  Sign in
                </a>
              </li>
              <li className="py-3">
                <a
                  href="#"
                  className="capitalize text-3xl cursor-pointer hover:scale-102 duration-200 hover:font-bold"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

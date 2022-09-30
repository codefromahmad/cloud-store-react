import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "support",
    },
    {
      id: 4,
      name: "platform",
    },
    {
      id: 5,
      name: "pricing",
    },
  ];
  return (
    <div className="w-full fixed h-20 z-20 bg-zinc-200 py-5 drop-shadow-lg">
      <div className="flex justify-between items-center mx-3">
        <div className="flex items-center">
          <p className="text-3xl font-bold pr-3">Brand.</p>
          <ul className="hidden md:flex justify-between">
            {links.map(({ id, name, link }) => (
              <li
                key={id}
                className="mx-3 hover:mx-[10px] capitalize cursor-pointer hover:scale-102 duration-200 hover:font-bold"
              >
                <Link to={name} smooth={name}>
                  {name}
                </Link>
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
            <ul className="flex flex-col w-full justify-center">
              {links.map(({ id, name, link }) => (
                <li
                  key={id}
                  className="capitalize mx-5 py-4 cursor-pointer border-b-[1px] border-slate-400 hover:scale-102 duration-200 hover:font-bold"
                >
                  <Link onClick={() => setNav(!nav)} to={name} smooth={name}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col py-2 mx-4">
              <button className="py-2 my-1 border-slate-500 border-[1px] rounded-md">
                Sign in
              </button>
              <button className="bg-blue-500 hover:opacity-80 my-1 text-white py-2 px-5 rounded-md">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

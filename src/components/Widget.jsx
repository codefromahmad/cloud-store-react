import React from "react";
import { BsFillCloudArrowUpFill, BsServer } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

const Widget = () => {
  const lists = [
    {
      id: 1,
      text: "App Security",
      icon: <BsFillCloudArrowUpFill />,
    },
    {
      id: 2,
      text: "Dashboard Design",
      icon: <FaDatabase />,
    },
    {
      id: 3,
      text: "Cloud Data",
      icon: <BsServer />,
    },
    {
      id: 4,
      text: "API",
      icon: <HiPaperAirplane />,
    },
  ];
  return (
    <div className="absolute z-0 self-center px-3 bottom-[13%] md:bottom-[8%] left-0 right-0 lg:right-[25%] lg:left-[25%] md:right-[20%] md:left-[20%] sm:right-[12%] sm:left-[12%] mx-4 h-24 rounded-md bg-white drop-shadow-lg shadow-white">
      <div className="sm:max-w-screen-sm">
        <div className="py-2">
          <p className="text-center font-bold">Data Services</p>
        </div>
        <div className="flex justify-between">
          {lists.map(({ id, text, icon }) => (
            <div key={id} className="flex items-center sm:px-2">
              <span className="pr-1 text-blue-500">{icon}</span>
              <p className="text-gray-500 w-auto text-xs sm:text-md">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widget;

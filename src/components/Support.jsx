import React from "react";
import support from "../assets/support.jpg";
import { BsTelephone, BsArrowRightShort } from "react-icons/bs";
import { HiSupport, HiOutlineChip } from "react-icons/hi";

const Support = () => {
  const cards = [
    {
      id: 1,
      title: "Sales",
      icon: <BsTelephone size={22} className="text-white" />,
      text: `Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.`,
    },
    {
      id: 2,
      title: "Technical Supoort",
      icon: <HiSupport size={22} className="text-white" />,
      text: `Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.`,
    },
    {
      id: 3,
      title: "Media Inquiries",
      icon: <HiOutlineChip size={22} className="text-white" />,
      text: `Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.`,
    },
  ];
  return (
    <div name="support" className="w-full pt-20">
      <div className="w-full h-[400px] absolute bg-gray-900/90">
        <img
          src={support}
          className="w-full h-full mix-blend-overlay object-cover"
        />
      </div>
      <div className="w-full max-w-[990px] mx-auto py-8 text-white relative">
        <p className="text-3xl font-bold mx-6 text-slate-300 text-center uppercase">
          Support
        </p>
        <p className="text-3xl font-bold mx-6 py-6 text-center">
          Trusted by Developers across the world
        </p>
        <p className="text-gray-300 mx-6 text-center font-semibold">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-5 sm:mx-10 gap-4 py-8 max-w-[990px] lg:mx-auto">
        {cards.map(({ id, title, icon, text }) => (
          <div
            key={id}
            className="bg-white my-6 md:my-0 shadow-2xl rounded-lg relative"
          >
            <div className="rounded-md mx-4 -mt-7 bg-blue-700 w-12 h-12  flex justify-center items-center">
              {icon}
            </div>
            <div>
              <p className="text-xl mx-4 pt-4 font-bold">{title}</p>
              <p className="mx-4 py-3">{text}</p>
            </div>
            <div className="group flex px-4 py-2 rounded-b-md bg-slate-200 hover:bg-slate-300 cursor-pointer items-center">
              <p className="font-bold">Contact Us</p>
              <BsArrowRightShort
                size={30}
                className="group-hover:pl-1 duration-200"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

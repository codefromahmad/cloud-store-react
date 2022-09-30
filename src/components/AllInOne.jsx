import React from "react";
import { BsCheck2 } from "react-icons/bs";

const AllInOne = () => {
  const notifications = [
    {
      id: 1,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it
            to make a type specimen book`,
    },
    {
      id: 2,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book`,
    },
    {
      id: 3,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book`,
    },
    {
      id: 4,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book`,
    },
    {
      id: 5,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book`,
    },
    {
      id: 6,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book`,
    },
    {
      id: 7,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book`,
    },
    {
      id: 8,
      title: "Notification",
      text: `Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it
                to make a type specimen book`,
    },
  ];
  return (
    <div name="platform" className="w-full pt-24">
      <div className="max-w-screen-lg mx-auto">
        <div>
          <p className="mx-6 text-center text-3xl font-bold">
            All-In-One Platform
          </p>
          <p className=" mx-6 text-gray-500 text-center py-3">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s to make a type specimen book.
          </p>
        </div>
        <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-6 gap-5 py-6">
          {notifications.map(({ id, title, text }) => (
            <div
              key={id}
              className="p-2 rounded-md bg-slate-200 drop-shadow-lg"
            >
              <div className="flex items-center">
                <BsCheck2 size={22} className="text-green-500" />
                <p className="font-bold px-2">{title}</p>
              </div>
              <div>
                <p className="pl-7 py-2">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllInOne;

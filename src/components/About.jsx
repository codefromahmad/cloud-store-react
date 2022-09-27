import React from "react";

const About = () => {
  const blocks = [
    {
      id: 1,
      num: "100%",
      text: "Completion",
    },
    {
      id: 2,
      num: "24/7",
      text: "Delivery",
    },
    {
      id: 1,
      num: "100k",
      text: "Transactions",
    },
  ];
  return (
    <div className="">
      <div className="w-full py-10 max-w-screen-lg mx-auto">
        <p className="text-3xl font-bold text-center">
          Trusted by Developers across the world
        </p>
        <p className="py-3 text-gray-500">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <div className="grid"></div>
      </div>
    </div>
  );
};

export default About;

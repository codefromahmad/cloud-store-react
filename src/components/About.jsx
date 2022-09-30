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
    <div name="about" className="w-full py-16 max-w-screen-lg mx-auto">
      <p className="text-3xl mx-6 font-bold text-center">
        Trusted by Developers across the world
      </p>
      <p className="py-6 text-gray-500 mx-6 text-center font-semibold">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-6">
        {blocks.map(({ id, num, text }) => (
          <div key={id} className="shadow-lg py-6 rounded-xl shadow-gray-400">
            <p className="text-center text-4xl md:text-6xl">{num}</p>
            <p className="text-center">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

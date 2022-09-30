import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Pricing = () => {
  const pricings = [
    {
      id: 1,
      type: "standard",
      price: 49,
      text: `Lorem Ipsum has been the industry's standard dummy text.`,
      includes: [
        {
          id: 1,
          inc: "Lorem, ipsum dolor.",
        },
        {
          id: 2,
          inc: "Lorem, ipsum dolor ect.",
        },
        {
          id: 3,
          inc: "Lorem,  dolor.",
        },
        {
          id: 4,
          inc: "Lorem, ipsum dolor go tcto.",
        },
        {
          id: 5,
          inc: "Lorem, ipsum dolor.",
        },
      ],
    },
    {
      id: 1,
      type: "enterprise",
      price: 89,
      text: `Lorem Ipsum has been the industry's standard dummy text.`,
      includes: [
        {
          id: 1,
          inc: "Lorem, ipsum dolor.",
        },
        {
          id: 2,
          inc: "Lorem, ipsum dolor ect.",
        },
        {
          id: 3,
          inc: "Lorem,  dolor.",
        },
        {
          id: 4,
          inc: "Lorem, ipsum dolor go tcto.",
        },
        {
          id: 5,
          inc: "Lorem, ipsum dolor.",
        },
      ],
    },
  ];
  return (
    <div name="pricing" className="w-full py-20">
      <div className="w-full h-[550px] absolute mix-blend-overlay bg-gray-900/90"></div>
      <div className="w-full max-w-screen-lg mx-auto py-8 text-white relative">
        <p className="text-3xl font-bold mx-6 text-slate-300 text-center uppercase">
          Pricing
        </p>
        <p className="text-3xl font-bold mx-6 py-6 text-center">
          The right price for your research.
        </p>
        <p className="text-gray-300 mx-6 text-center font-semibold">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took it to make a type specimen book.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 sm:mx-20 gap-10 py-8 max-w-[900px] lg:mx-auto">
        {pricings.map(({ id, type, price, text, includes }) => (
          <div key={id} className="bg-white rounded-xl shadow-2xl p-6">
            <div>
              <p className="uppercase text-xs bg-indigo-200 text-indigo-800 w-20 text-center p-1 rounded-xl">
                {type}
              </p>
              <p className="py-4">
                <span className="font-bold text-5xl">${price}</span>/mo
              </p>
              <p className="py-4">{text}</p>
            </div>
            {includes.map(({ id, inc }) => (
              <div key={id} className="flex items-center py-4">
                <BsCheck2 size={22} className="text-green-500" />
                <p className="px-2">{inc}</p>
              </div>
            ))}
            <div>
              <button className="bg-gray-900 hover:bg-white hover:text-gray-900 hover:border-[1px] border-gray-900 text-white rounded-md w-full py-2">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const links = [
    {
      id: 1,
      text: "solutions",
      childs: [
        {
          id: 1,
          text: "Marketing",
        },
        {
          id: 2,
          text: "Analytics",
        },
        {
          id: 3,
          text: "Commerce",
        },
        {
          id: 4,
          text: "Data",
        },
        {
          id: 5,
          text: "Cloud",
        },
      ],
    },
    {
      id: 2,
      text: "support",
      childs: [
        {
          id: 1,
          text: "Pricing",
        },
        {
          id: 2,
          text: "Documentaion",
        },
        {
          id: 3,
          text: "Guides",
        },
        {
          id: 4,
          text: "API Status",
        },
      ],
    },
    {
      id: 3,
      text: "company",
      childs: [
        {
          id: 1,
          text: "About",
        },
        {
          id: 2,
          text: "Blog",
        },
        {
          id: 3,
          text: "Jobs",
        },
        {
          id: 4,
          text: "Press",
        },
        {
          id: 5,
          text: "Partners",
        },
      ],
    },
    {
      id: 4,
      text: "legal",
      childs: [
        {
          id: 1,
          text: "Clain",
        },
        {
          id: 2,
          text: "Privact",
        },
        {
          id: 3,
          text: "Policies",
        },
        {
          id: 4,
          text: "Terms",
        },
      ],
    },
  ];
  return (
    <div className="w-full bg-gray-900 text-slate-200 py-5">
      <div className="flex flex-col md:flex-row text-center sm:text-left max-w-[950px] md:mx-auto">
        <div className="lg:w-3/5 w-full">
          <div className="flex justify-between text-xs sm:text-sm px-4">
            {links.map(({ id, text, childs }) => (
              <div key={id}>
                <p className="uppercase font-bold py-3">{text}</p>
                {childs.map(({ id, text }) => (
                  <ul key={id}>
                    <li className="py-1">
                      <a href="https://google.com">{text}</a>
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 w-full lg:ml-12 py-3 px-10">
          <p className="uppercase font-bold">subscribe to our newsletter</p>
          <p className="py-3">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex justify-between">
            <input
              className="focus:outline-none px-3 py-2 rounded-md w-full text-gray-700"
              type="text"
              placeholder="Enter your email"
            />
            <button className="ml-2 bg-blue-500 hover:bg-blue-400 text-white px-3 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Footer;

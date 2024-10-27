import React from "react";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blogs",
    link: "/blogz",
  },
  {
    name: "Featured",
    link: "/#featured",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];
const categories = [
  {
    name: "Technology",
  },
  {
    name: "Travel",
  },
  {
    name: "Food",
  },
];
const Footer = () => {
  return (
    <Wrapper>
      <div className="bg-[#F6F6F7] py-12 px-8  flex justify-between flex-wrap gap-4 lg:gap-0 ">
        <div className="space-y-4 w-full sm:w-[300px]">
          <div>
            <h3 className="font-bold text-2xl">About</h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              error voluptatem dolorem! Recusandae sequi, pariatur expedita odit
              placeat aspernatur quasi?
            </p>
          </div>
          <div>
            <span className="block">
              <span className="font-bold">Email:</span>{" "}
              nadeemsangrasi903@gmail.com
            </span>
            <span>
              <span className="font-bold">Phone:</span>{" "}
              nadeemsangrasi903@gmail.com
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Quick Links</h3>
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.name} className="text-slate-600">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl">Category</h3>
          <ul className="space-y-1">
            {categories.map((link) => (
              <li key={link.name} className="text-slate-600">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4  bg-[#FFFFFF] shadow-lg p-4 text-center">
          <div>
            <h3 className="font-bold text-2xl">Weekly Newsletter</h3>
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            </p>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Your Email"
              className="border p-2 border-slate-200 rounded-md w-full"
            />
            <button className="w-full bg-blue text-white rounded-md py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { SiRefinedgithub } from "react-icons/si";
import { IoReorderThreeOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const listNavBar = [
  { text: "Home", route: "/" },
  { text: "Get In Touch", route: "/get-in-touch" },
  { text: "Skills", route: "/skills" },
  { text: "certificate", route: "/certificate" },
  { text: "blog", route: "/blog" },
  { text: "Resume", route: "/resume" },
  { text: "Recent work", route: "/recent-work" },
  { text: "About", route: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(true);

  const handleIsActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={` border-2 border-white   w-full md:flex md:justify-center   sticky top-6  z-50 p-2 md:border-none  dark:text-white text-black font-bold gap-12      rounded-2xl`}
    >
      <div className="flex w-full justify-between items-end md:hidden  transform transition   ">
        <h2 className="text-4xl capitalize p-2 m-2 border-b-1 rounded-xl">
          portfolio
        </h2>
        <button
          onClick={handleIsActive}
          className="p-2 m-2 cursor-pointer hover:scale-105 hover:duration-200 hover:transform-transition"
        >
          <IoReorderThreeOutline className="text-4xl curosr-pointer text-baseline " />
        </button>
      </div>
      <div
        onMouseLeave={handleIsActive}
        className={` absolute rounded-xl  right-4 backdrop-blur-xl    md:static w-2/5 md:w-4/5 dark:text-slate-300 md:flex flex-col md:flex-row gap-4 md:justify-around md:rounded-2xl font-sans  p-4
        md:shadow-2xl md:border-1  border-white shadow-2xl  border-1  text-slate-800  bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 ${
          isActive == true ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between md:gap-12 gap-6   ">
          {listNavBar.map((link) => (
            <Link onClick={handleIsActive} href={link.route} key={link.route}>
              <li
                className={`list-none transition-all duration-300  hover:brightness-125 relative group text-center  ${
                  pathname === link.route
                    ? " px-4 py-1 rounded-md  bg-blue-500 hover:text-white"
                    : "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent "
                }`}
              >
                {link.text}
                <span
                  className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-400 
               group-hover:w-full group-hover:left-0 transition-all duration-300"
                ></span>
              </li>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <p className={`hover:text-blue-500 hover:scale-105 text-[16px] duration-200 transform ${pathname === link.route ?"text-blue-500":""}` }>{link.text}</p> */
}

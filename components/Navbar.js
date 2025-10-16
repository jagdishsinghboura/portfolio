"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { SiRefinedgithub } from "react-icons/si";
import { IoReorderThreeOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdWbSunny } from "react-icons/md";

const listNavBar = [
  { text: "Home", route: "/" },
  { text: "Get In Touch", route: "/get-in-touch" },
  { text: "Recent work", route: "/recent-work" },
  { text: "About", route: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(true);

  const handleIsActive = () => {
    setIsActive((prev) => !prev);
  }


  return (
    <div className={`w-full md:flex md:justify-center   sticky top-0  z-50 border-b-2 md:border-none p-2 dark:text-white text-black font-bold gap-12  bg-slate-100 dark:bg-slate-900  bg-gradient-to-r from-slate-100 to-slate-200  dark:from-slate-800 dark:to-slate-900`}>
      <div className="flex w-full justify-between items-end md:hidden  transform transition  ">
        <h2 className="text-4xl capitalize p-2 m-2 border-b-1 rounded-xl">portfolio</h2>
        <button
          onClick={handleIsActive}
          className="p-2 m-2 cursor-pointer hover:scale-105 hover:duration-200 hover:transform-transition"
        ><IoReorderThreeOutline className="text-4xl curosr-pointer text-baseline " /></button>
      </div>
      <div onMouseLeave={handleIsActive} className={` absolute rounded-xl  top-16 right-2 backdrop-blur-xl    md:static w-2/5 md:w-3/4 dark:text-slate-300 md:flex flex-col md:flex-row gap-4 md:justify-around md:rounded-b-md font-sans p-4 md:border-b-1 shadow-2xl bg-slate-200  text-slate-800 dark:bg-slate-900 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 ${isActive == true ? "hidden" : ""}`}>
        <div className="flex flex-col md:flex-row justify-around md:gap-4 ">

          {listNavBar.map((link) => (
            <Link onClick={handleIsActive} href={link.route} key={link.route}>
              <li
                key={link.text}
                className={`list-none p-2 m-2 font-medium font-sans tracking-wide text-center md:text-left  ${pathname === link.route ? "border-b-2 dark:border-b-white border-b-slate-900" : ""
                  }`}
              >
                <p className="hover:text-blue-500 hover:scale-105 duration-200 transform">{link.text}</p>
              </li>
            </Link>
          ))}
        </div>
        

        <div className="md:flex justify-center md:justify-end items-center gap-6 hidden">
          <Link href="https://www.linkedin.com/in/jagdishsinghboura/" target="_blank" className="text-lg">
            <FaLinkedinIn className="text-2xl hover:text-blue-400 hover:scale-105 transition duration-300" />
          </Link>
          <Link
            href="https://leetcode.com/u/jagdishsinghboura6783/"
            target="_blank"
            className="text-lg"
          >
            <SiLeetcode className="text-2xl hover:text-yellow-400 hover:scale-105 transition duration-300" />
          </Link>
          {/* <Link href="/contact" target="_blank" className="text-lg">
            <FaTwitter className="text-xl hover:text-blue-400 transition duration-300" />
          </Link> */}
          <Link href="/https://github.com/jagdishsinghboura" target="_blank" className="text-lg">
            <SiRefinedgithub className="text-2xl hover:text-slate-500 hover:scale-105 transition duration-300" />
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { SiRefinedgithub } from "react-icons/si";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const listNavBar = [
  { text: "Home", route: "/" },
  { text: "Get In Touch", route: "/get-in-touch" },
  { text: "Recent work", route: "/recent-work" },
  { text: "About", route: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  
  
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-3/4 bg-[#221f1f] text-slate-300 flex flex-col md:flex-row gap-4 justify-around rounded-b-md font-sans p-4">
        <div className="flex flex-col md:flex-row justify-around md:gap-4 ">
          {listNavBar.map((link) => (
            <Link href={link.route} key={link.route}>
            <li
              key={link.text}
              className={`list-none p-2 m-2 font-medium font-sans text-center md:text-left hover:text-blue ${
                pathname === link.route ? "border-b-2 shadow-md text-slate-300" : ""
              }`}
            >
              <p>{link.text}</p>
            </li>
            </Link>
          ))}
        </div>

        <div className="flex justify-center md:justify-end items-center gap-6">
          <Link href="https://www.linkedin.com/in/jagdishsinghboura/" target="_blank" className="text-lg">
            <FaLinkedinIn className="text-xl hover:text-blue-400 transition duration-300" />
          </Link>
          <Link
            href="https://leetcode.com/u/jagdishsinghboura6783/"
            target="_blank"
             className="text-lg"
          >
            <SiLeetcode className="text-xl hover:text-yellow-400 transition duration-300" />
          </Link>
          <Link href="/contact" target="_blank" className="text-lg">
            <FaTwitter className="text-xl hover:text-blue-400 transition duration-300" />
          </Link>
          <Link href="/contact" target="_blank" className="text-lg">
            <SiRefinedgithub className="text-xl hover:text-slate-400 transition duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

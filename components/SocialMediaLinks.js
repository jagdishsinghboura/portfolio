"use client";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiRefinedgithub } from "react-icons/si";
import React from 'react'

 function SocialMediaLinks({pageDetails}) {
    const {page, classes} =pageDetails;
  return (
    <div className="shadow-2xl p-2  rounded-2xl hover:shadow-2xl   ">
        <div className={`md:flex flex  justify-evenly  md:justify-evenly items-center gap-6  ${page!="get-in-touch"?"hidden":""}`}>
          <Link href="https://www.linkedin.com/in/jagdishsinghboura/" target="_blank" className="text-lg">
            <FaLinkedinIn className="shadow-2xl  m-2 text-3xl hover:text-blue-400 transition duration-300" />
          </Link>
          <Link
            href="https://leetcode.com/u/jagdishsinghboura6783/"
            target="_blank"
            className="text-lg"
          >
            <SiLeetcode className="shadow-2xl  m-2 text-3xl hover:text-yellow-400 transition duration-300" />
          </Link>
          {/* <Link href="/contact" target="_blank" className="text-lg">
            <FaTwitter className="text-xl hover:text-blue-400 transition duration-300" />
          </Link> */}
          <Link href="/https://github.com/jagdishsinghboura" target="_blank" className="text-lg">
            <SiRefinedgithub className="shadow-2xl  m-2 text-3xl hover:text-slate-400 transition duration-300" />
          </Link>
        </div>
    </div>
  )
}

export default SocialMediaLinks
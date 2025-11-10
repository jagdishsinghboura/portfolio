import React from "react";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const page = () => {
  return (
    <div className="relative dark:bg-slate-900 min-h-[84vh] flex justify-center items-center w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className=" absolute  top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-4xl text-blue-500 p-2 m-2 font-sans tracking-wider font-extrabold text-center">Let′s Connect & Collaborate <span></span></h1>
        <p className=" p-2 font-sans text-wrap  m-1">Whether it's a new project ,  a collaboration or just to say hi,-- i'd love to hear from you. </p>
        <div className="w-full  flex justify-center items-center  ">
          <div className="">
          <SocialMediaLinks  pageCall={"getintouch"}/>
          </div>
        </div>
        <div className="w-full flex  flex-col justify-evenly  items-center mt-2 p-2 m-2 gap-6">
            <input placeholder="your name " className="w-[75%]  outline-none font-sans bg-gray-400 text-white dark:text-black/50  dark:bg-gray-600 p-3 m-1 rounded-md "/>
            <input placeholder="subject " className="w-[75%]  outline-none font-sans bg-gray-400 text-white dark:text-black/50  dark:bg-gray-600 p-3 m-1 rounded-md "/>
            <textarea rows={3} placeholder="your message " className="w-[75%]  outline-none font-sans bg-gray-400 text-white dark:text-black/50  dark:bg-gray-600 p-3 m-1 rounded-md "/>
            <button className="w-[60%] cursor-pointer hover:scale-105 transition-transform delay-300 text-xl font-sans bg-blue-600 text-nowrap rounded-md m-2 p-2 ">send message 📩</button>
        </div>

      </div>
    </div>
  );
};

export default page;

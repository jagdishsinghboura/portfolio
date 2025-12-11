import React from "react";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import GetSend from "@/components/GetSend";

const page = () => {
  return (
    <div className="relative dark:bg-slate-900 min-h-[84vh] flex justify-center items-center w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className=" absolute  top-10 left-1/2 -translate-x-1/2">
        <h1 className="text-4xl text-blue-500 p-2 m-2 font-sans tracking-wider font-extrabold text-center">Let′s Connect & Collaborate <span></span></h1>
        <p className=" p-2 font-sans text-wrap  m-1">Whether it&apos;s a new project ,  a collaboration or just to say hi -- i&apso;d love to hear from you. </p>
        <div className="w-full  flex justify-center items-center  ">
          <div className="">
          <SocialMediaLinks  pageCall={"getintouch"}/>
          </div>
        </div>
        <GetSend/>

      </div>
    </div>
  );
};

export default page;

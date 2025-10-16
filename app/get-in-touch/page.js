import React from "react";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const page = () => {
  return (
    <div className="dark:bg-slate-900 min-h-screen flex justify-center w-full">
      <div className=" h-full flex justify-center w-full">
        <div className="flex w-full md:flex-row flex-col m-6 justify-center items-center  gap-8  p-5  ">
      <div className="max-w-md  w-full  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative top-20">
        <div className="flex flex-row gap-10 m-2 p-2">
          <h1 className="w-full  text-xl font-bold">NAME :- </h1>
          <p className="text-base text-nowrap font-mono capitalize">Jagdish Singh Boura</p>
        </div>
        <div className="flex flex-row gap-10 m-2 p-2">
          <h1 className="w-full  text-xl font-bold">Gmail :- </h1>
          <p className="text-base font-mono capitalize ">bourajagdish1221@gmail.com</p>
        </div>
        <div className="p-2 m-2 text-4xl">
           <SocialMediaLinks pageDetails={{page:"get-in-touch", className:""}}/>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default page;

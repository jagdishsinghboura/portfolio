import React from "react";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const page = () => {
  return (
    <div className="dark:bg-slate-900 min-h-screen flex justify-center w-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className=" h-full flex justify-center w-full">
        <div className="flex w-full md:flex-row flex-col m-6 justify-center items-center  gap-8  p-5  ">
          <div className="max-w-md  w-full  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative top-20">
            <div className="flex flex-row  w-full m-2 p-2  ">
              <span className=" w-36 text-xl font-bold ">NAME :- </span>
              <span className="text-base text-nowrap font-mono capitalize">Jagdish Singh Boura</span>
            </div>
            <div className="flex flex-row   w-full  m-2 p-2 ">
              <span className="w-full  text-xl font-bold">Gmail :- </span>
              <span className="text-base font-mono capitalize ">bourajagdish1221@gmail.com</span>
            </div>
            <div className="p-2 m-2 text-4xl">
              <SocialMediaLinks pageDetails={{ page: "get-in-touch", className: "" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

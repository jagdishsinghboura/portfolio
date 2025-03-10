import React from "react";

const page = () => {
  return (
    <div className="flex w-full md:flex-row flex-col m-6 justify-center items-center  gap-8  p-5">
      <div className="max-w-md  w-full  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <div className="flex flex-row gap-10 m-2 p-2">
          <h1 className="w-full  text-xl font-bold">NAME :- </h1>
          <p className="text-base text-nowrap">Jagdish Singh Boura</p>
        </div>
        <div className="flex flex-row gap-10 m-2 p-2">
          <h1 className="w-full  text-xl font-bold">Gmail :- </h1>
          <p className="text-sm">bourajagdish1221@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default page;

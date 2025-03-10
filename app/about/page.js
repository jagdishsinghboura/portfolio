import React from "react";

const page = () => {
  return (
    <div className="flex w-full md:flex-row flex-col m-6 justify-center items-center  gap-8  p-5">
      <div className="max-w-md  w-full  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <h1 className="w-full  m-2 p-2 text-2xl font-bold">About Me </h1>
        <div className="flex flex-col gap-10 m-2 p-2">
          <div>
            <h2 className="text-xl ">{"Hi, I'm Jagdish Singh Boura"}</h2>
            <h3 className=" text-sm font-medium p-2">
              {" "}
              a passionate Full Stack Developer with expertise in building
              dynamic web applications using React, Next.js, Express.js, and
              MongoDB. I specialize in creating modern, responsive designs with
              Tailwind CSS and implementing robust backend solutions with
              Node.js.
            </h3>
            <p className=" text-sm font-medium p-2">
            I have hands-on experience in developing dynamic web applications with modern technologies. You can explore my projects in the Recent Work section to see my skills and expertise in action.
              </p>
          </div>
        </div>
      </div>
      <div className="max-w-md  w-full  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <h1 className="w-full  m-2 p-2 text-2xl font-bold">Education </h1>
        <div className="flex flex-col gap-10 m-2 p-2">
          <div>
            <h2 className="text-xl ">2022 -2025</h2>
            <h3 className=" text-sm font-medium p-2">
              Bachelor Of Computer Application
            </h3>
            <h3 className=" text-sm font-medium p-2">
              Graphic Era Hill University, Dehradun
            </h3>
          </div>
          <div>
            <h2 className="text-xl">2020 -2022</h2>
            <h3 className="text-sm font-medium p-2">High School</h3>
            <h3 className="text-sm font-medium p-2">
              Goverment Inter Collage Bagwalipkhar,Almora{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

import React from "react";
import { FaUniversity } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa6";
import { LuSchool, LuUniversity } from "react-icons/lu";



const page = () => {
  return (
    <div className="dark:bg-slate-900 bg-slate-200 min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">

      <div className="flex w-full  flex-col  justify-center items-center  gap-8  p-5 
    ">
        <div className="  md:w-[75%]  w-full m-3 p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
          <h1 className="w-full  m-2 p-2 text-2xl font-bold text-blue-600">About Me </h1>
          <div className="flex flex-col gap-10 m-2 p-2">
            <div>
              <h2 className="text-xl font-medium tracking-tight indent-4 overflow-auto ">Hi, I&#39;m <span className="font-bold "> Jagdish Singh Boura</span></h2>
              <h3 className=" text-sm font-sans nav p-2 tracking-widest indent-8">
                {" "}
                a passionate Full Stack Developer with expertise in building
                dynamic web applications using React, Next.js, Express.js, and
                MongoDB. I specialize in creating modern, responsive designs with
                Tailwind CSS and implementing robust backend solutions with
                Node.js.
              </h3>
              <p className=" text-sm font-sans  p-2 tracking-widest indent-4 text-wrap">
                I have hands-on experience in developing dynamic web applications with modern technologies. You can explore my projects in the Recent Work section to see my skills and expertise in action.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="w-full  m-2 p-2 text-2xl font-bold text-blue-600">Education </h1>
            <div className="flex flex-col gap-10 m-2 p-2">

              <div className="shadow-2xl border-slate-400 dark:border-slate-600 p-4 bg-slate-200 dark:bg-slate-800 rounded-xl flex flex-col md:flex-row hover:scale-105 hover:ring-2 hover:ring-gray-400 transition-all duration-700 cursor-pointer">
                <div className="md:w-1/4 w-full flex  justify-center  items-center">
                  <FaUniversity  className="md:text-6xl text-3xl text-blue-400" />
                </div>
                <div>
                  <h1 className=" text-xl font-serif font-bold   p-2 tracking-wide text-blue-500">
                    Bachelor Of Computer Application
                  </h1>
                  <h2 className="text-xl font-mono oldstyle-nums font-semibold ">2022-2025</h2>
                  <h2 className="font-serif font-medium tracking-wide p-2">Graduation(8.1 CGPA)</h2>
                  <h3 className=" text-md font-sans p-2 tracking-wide capitalize">
                    Graphic Era Hill University, Dehradun
                  </h3>
                </div>
              </div>
              <div className="shadow-2xl border-slate-400 dark:border-slate-600 p-4 bg-slate-200 dark:bg-slate-800 rounded-xl flex flex-col md:flex-row hover:scale-105 hover:ring-2 hover:ring-gray-400 transition-all duration-700 cursor-pointer">
                <div className="md:w-1/4 w-full flex  justify-center  items-center">
                  <IoIosSchool className="text-6xl text-blue-400" />
                </div>
                <div>

                  <h1 className="text-md font-serif text-xl  p-2 tracking-wide font-bold text-blue-500">Higher Secondary education (12th Grade)</h1>
                  <h2 className=" font-mono p-2 font-semibold">completed - 2022 </h2>
                  <h2 className=" font-sans p-2 "> uttrakhand Board / 76 %</h2>
                  <h3 className="text-md font-sans p-2 tracking-wide inset-4">
                    Goverment Inter Collage Bagwalipkhar   ,Almora {" "}
                  </h3>
                </div>
              </div>
              <div className="shadow-2xl border-slate-400 dark:border-slate-600 p-4 bg-slate-200 dark:bg-slate-800 rounded-xl flex flex-col md:flex-row hover:scale-105 hover:ring-2 hover:ring-gray-400 transition-all duration-700 cursor-pointer">
                <div className="md:w-1/4 w-full flex justify-center  items-center">
                  <FaSchool className="text-6xl text-blue-400" />
                </div>
                <div>

                  <h1 className="text-md font-serif text-xl  p-2 tracking-wide font-bold text-blue-500"> Secondary education (10th Grade)</h1>
                  <h2 className=" font-mono p-2 font-medium"> completed - 2020  </h2>
                  <h2 className=" font-sans p-2 "> uttrakhand Board / 73 %</h2>
                  <h3 className="text-md font-sans p-2 tracking-wide inset-4">
                    Goverment Inter Collage Bagwalipkhar   ,Almora {" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default page;

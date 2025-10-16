import React from "react";

const page = () => {
  return (
    <div className="dark:bg-slate-900 bg-slate-200 min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">

    <div className="flex w-full md:flex-row flex-col  justify-center items-center  gap-8  p-5 
    ">
      <div className="max-w-md  w-full  m-3 p-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <h1 className="w-full  m-2 p-2 text-2xl font-bold underline">About Me </h1>
        <div className="flex flex-col gap-10 m-2 p-2">
          <div>
            <h2 className="text-xl font-medium tracking-tight indent-4 overflow-auto ">Hi, I&#39;m Jagdish Singh Boura</h2>
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
      </div>
      <div className="max-w-md  w-full  m-3 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
        <h1 className="w-full  m-2 p-2 text-2xl font-bold underline">Education </h1>
        <div className="flex flex-col gap-10 m-2 p-2">
          <div>
            <h2 className="text-xl font-mono oldstyle-nums font-semibold ">2022-2025</h2>
            <h2 className="font-serif font-medium tracking-wide p-2">Graduation(8.1 CGPA)</h2>
            <h3 className=" text-md font-sans  p-2 tracking-wide">
              Bachelor Of Computer Application
            </h3>
            <h3 className=" text-md font-sans p-2 tracking-wide capitalize">
              Graphic Era Hill University, Dehradun
            </h3>
          </div>
          <div>
            <h2 className="text-xl font-mono font-semibold">2020 -2022 </h2>
            <h3 className="text-md font-serif p-2 tracking-wide font-medium     ">Senior Secondary education (76 percent)</h3>
            <h3 className="text-md font-sans p-2 tracking-wide inset-4">
              Goverment Inter Collage Bagwalipkhar   ,Almora {" "}
            </h3>
          </div>
        </div>
      </div>
     
    </div>
    
    </div>
  );
};

export default page;

import React from "react";
import { FaFileDownload, FaSchool } from "react-icons/fa";



export default function Page() {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 min-h-screen flex justify-center">
      <div className="md:w-[75%] flex gap-2 items-start flex-col p-2 m-2">
        <div className="flex flex-col">
          <div className="w-full justify-between flex items-center px-3 p-1">

          <h1 className="text-xl font-sans font-bold text-slate-900 dark:text-white">📄 Resume</h1>
           <a
            href="/jagdish.docx"
            download
            className="inline-block"
          >
            <button className="    p-2 m-2 hover:ring-2 hover:ring-blue-500 border-blue-500 cursor-pointer hover:scale-105 transition-all duration-600 border rounded-md text-black bg-slate-300 dark:bg-slate-700 dark:text-white shadow-md font-sans flex gap-2 items-center">
              Download Resume
              <FaFileDownload className="text-2xl" />
            </button>
          </a>
          </div>
          <p className="text-sm font-sans p-2 tracking-wide ">
            Full-Stack Developer with expertise in React, Next.js, Node.js, and PostgreSQL. Passionate about
            designing scalable, high-performance applications with optimized algorithms, secure
            authentication, and cloud-based solutions. Strong problem-solving skills with 350+ solved DSA
            problems, and experience in Agile development for building impactful software.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-2 p-2 m-2 ">
          <div className="w-full h-auto flex flex-col gap-4">
            <div className="flex flex-col gap-4 ">
              <h1 className="text-xl font-bold font-serif text-blue-500 gap-1 flex">
                🧑‍🎓 Jagdish Singh Boura
              </h1>
              <p className="font-sans">
                Full Stack Development & Backend Development
              </p>
              <p className="text-sm font-sans ">📍 Dehradun, Uttarakhand</p>
              <p className="text-sm font-sans ">
                bourajagdish1221@gmail.com
              </p>

            </div>

            <div className="flex flex-col gap-4 ">
              <h1 className="text-xl font-serif font-bold text-blue-500 flex  gap-1">
                🎓 Education
              </h1>
              <div className="flex flex-col justify-between gap-2">
                <h1 className="textl-xl font-sans font-bold text-gray-400 ">Graduation (2022-2025)</h1>
                <h2 className="font-sans">Bachelor Of Computer Applications(8.03)</h2>
                <p className="font-sans">
                  Graphic Era Hill University,Dehradun, Uttarakhand
                </p>
              </div>
              <div className="flex flex-col justify-between gap-2 ">
                <h1 className="textl-xl font-sans font-bold text-gray-400 "> Higher Secondary School 2022</h1>
                <h2 className="font-sans">12th Grade (76%)</h2>
                <p className="font-sans">
                  G.I.C. Bagwalipokhar Almora, Uttarakhand
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  p-2 m-1 h-auto">
            <h1 className="font-bold text-xl text-blue-500 font-serif"> 📽️Projects</h1>
            <div className="w-full ">
              <h1 className="text-xl font-sans font-bold text-gray-500 p-1 m-1">Task Management</h1>
              <p className="text-sm font-sans inset-3 indent-10 text-wrap">	Developed a full-stack task management application to help users efficiently manage daily tasks.
                Implemented user authentication (sign up/sign in), task management (add, edit, delete tasks), and task filtering and sorting.
                Utilized React with TypeScript for the frontend, Tailwind CSS for styling, Express.js with TypeScript for the backend, and Prisma ORM with PostgreSQL for database management.
                Deployed the application on Vercel for seamless access.
              </p>
            </div>
            <div className="w-full ">
              <h1 className="text-xl font-sans font-bold text-gray-500 p-1 m-1 capitalize">Threads App</h1>
              <p className="text-sm font-sans inset-3 indent-10 text-wrap">	The Threads-app is a web application project built with Next.js, intended as a scalable, modern template for creating robust web applications. Bootstrapped using the create-next-app utility, this project leverages cutting-edge web technologies and a thoughtfully organized structure to achieve high performance, type safety, and ease of use for both developers and future contributors.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import BubbleCard from "./BubbleCard"
import Image from "next/image";


import { FaLaptopCode, FaLink } from "react-icons/fa";
const ProjectCard = ({ id, heading, summary,
  image,tech, githubLink, liveLink }) => {
  return (
    <div className="mt-5">
      
      <div className="min-h-108 flex items-center justify-center ">
        <BubbleCard>
          <div className="relative z-10">
            <Image
              src={image}
              alt="Example"
              width={300}
              height={300}
              className="object-contain object-center h-40 w-full rounded-xl"
            />

            <h5 className="pt-3 text-xl font-semibold tracking-tight text-gray-900 dark:text-blue-600">
              {heading}
            </h5>

            <p className="text-xs dark:text-white  font-sans p-1">
              {summary}
            </p>
            <div className="flex flex-wrap gap-2 p-1 w-full">
              {[...tech.split(",")].map((t) => (
                <span
                  key={t}
                  className="animate-float text-xs px-1 py-1 rounded-full 
                 bg-slate-900 border border-slate-700 text-white
                 shadow-lg shadow-blue-500/10
                 transition-all duration-300
                 hover:shadow-blue-500/50 hover:scale-110"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="w-full flex justify-end items-center gap-3 group">
              <Link href={githubLink} target="_blank" className="p-2 text-sm font-sans shadow-2xl flex flex-row items-center gap-1 cursor-pointer group-hover:scale-105  text-blue-400  bg-gray-700 rounded-md"> <FaLaptopCode/> code</Link>
              <Link href={liveLink} target="_blank" className="p-2 text-sm font-sans shadow-2xl flex flex-row items-center gap-1 cursor-pointer group-hover:scale-105   bg-blue-700 rounded-md"> <FaLink/> live</Link>
            </div>




          </div>
        </BubbleCard>

      </div>


    </div>
  );
};

export default ProjectCard;

import ProjectCard from "@/components/ProjectCard";
import { projectDetails } from "@/lib/constant";
import React from "react";



const page = () => {

  return (
    <div className="container flex flex-col  p-2  min-h-[83vh]  relative   ">
      <h1 className="text-3xl text-slate-300 dark:text-slate-400 font-bold text-center p-3 m-4">
        MY PROJECTS
      </h1>
      <div className="flex justify-around items-center ">
        <div className="grid  gap-12 md:grid-cols-2 grid-cols-1  ">

        {projectDetails.map((project, index) => (
            <ProjectCard
            id={index}
            key={index}
            heading={project.heading}
            summary={project.summary}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            />
          ))}
        
         
        </div>
      </div>
    </div>
  );
};

export default page;

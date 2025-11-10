import ProjectCard from "@/components/ProjectCard";
import { projectDetails } from "@/lib/constant";
import React from "react";



const page = () => {

  return (
    <div className="container flex flex-col  p-2  min-h-[83vh]  relative    bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 w-full">
      
      <div className="flex justify-around items-center ">
        <div className="grid  gap-12 md:grid-cols-3 grid-cols-1  ">

          {projectDetails.map((project, index) => (
            <ProjectCard
            id={index}
            key={index}
            heading={project.heading}
            summary={project.summary}
            description={project.description}
            image={project.image}
            tech={project.tech}
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

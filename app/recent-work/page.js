import ProjectCard from "@/components/ProjectCard";
import React from "react";

const projectDetails=[
  {
    heading:"My Listing ",
    content:"The Listing project is a backend application developed by jagdishsinghboura. It utilizes JavaScript (50.2%), EJS (27.5%), and CSS (22.3%) to manage and serve data effectively. The project structure includes directories such as controllers, models, routes, and views, indicating a well-organized MVC architecture. Additional folders like public and uploads suggest functionalities for serving static files and handling file uploads. Configuration files like .env and cloudConfig.js are present, highlighting the use of environment variables and cloud services.",
    image:"",
    githubLink:"https://github.com/jagdishsinghboura/Listing",
    liveLink:"",
  },
  {
    heading:"My Task",
    content:"The MyTask project is a task management web application designed to help users organize and track their daily activities efficiently. It features functionalities such as task creation, updating, deletion, and marking tasks as completed. The project implements user authentication for secure access, ensuring personalized task management. Built with React, TypeScript, and Tailwind CSS on the frontend, and Node.js, Express.js, and Prisma on the backend, it follows modern web development practices. The application is deployed on Vercel for seamless accessibility. 🚀",
    image:"",
    githubLink:"https://github.com/jagdishsinghboura/mytask",
    liveLink:"https://mytask-rust.vercel.app/",
  },
  {
    heading:"University-library",
    content:"The university-library-JB project, developed by jagdishsinghboura, is a web application designed to manage university library resources efficiently. Built with Next.js, it leverages modern web development practices for server-side rendering and seamless user experiences. The project's structure includes directories such as components, constants, database, and lib, indicating a modular and organized codebase. Configuration files like drizzle.config.ts, eslint.config.mjs, and tailwind.config.ts suggest the use of tools like Drizzle ORM, ESLint, and Tailwind CSS for database management, code linting, and styling, respectively. Deployment configurations point towards hosting on platforms like Vercel, ensuring scalability and reliability.",
    image:"",
    githubLink:"https://github.com/jagdishsinghboura/university-library-JB",
    liveLink:"https://university-library-jb.vercel.app/",
  },
  
]

const page = () => {
  return (
    <div className="container flex flex-col justify-evenly ml-6 mr-6   relative  ">
      <h1 className="text-3xl text-slate-200 font-bold text-center p-3 m-4">
        MY PROJECTS
      </h1>
      <div className="flex justify-around items-center ">
        <div className="grid  gap-12 md:grid-cols-2 grid-cols-1">
        {projectDetails.map((project, index) => (
            <ProjectCard
            key={index}
            heading={project.heading}
            content={project.content}
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

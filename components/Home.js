"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import "../styles/animations.css";

const texts = [
  "FULL STACK DEVELOPER 🚀",
  "Frontend Developer 🚀",
  "Backend Developer 🚀",
];

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting) {
      if (displayText !== texts[index]) {
        timer = setTimeout(() => {
          setDisplayText(texts[index].slice(0, displayText.length + 1));
        }, 200);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText !== "") {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/jagdishsinghboura-Resume.docx";
    link.download = "Jagdish_Singh_Boura_Resume.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col m-3">
        <div className="container flex flex-col md:flex-row items-center justify-evenly ml-6 mr-6 h-auto md:h-[420px]">a
          {/* Text Section */}
          <div className="flex flex-col items-center text-center md:text-start md:w-1/2 gap-4 p-3 order-2 md:order-1">
            <h1 className="text-3xl text-white font-extrabold m-3">
              Jagdish Singh Boura
            </h1>

            <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {displayText}|
            </div>

            <button
              onClick={handleDownload}
              className="px-6 py-3 w-full sm:w-auto text-xl text-white font-bold rounded-md bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              {" Resume Download >"}
            </button>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center md:order-2 order-1">
            <div className="rounded-full border-4 border-blue-500 shadow-lg overflow-hidden w-[300px] h-[300px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] hover:cursor-pointer">
              <Image
                src="/jagdishSinghBoura.jpeg"
                alt="photo"
                width={300}
                height={300}
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="w-full m-3">
          <h1 className="font-bold text-2xl p-2 m-1 ml-10">Tech Stack</h1>
          <div className="flex w-full items-center justify-center">
            <div className="flex w-full max-w-[800px] flex-wrap gap-2 p-2 justify-center">
              {[
                "React",
                "Next.js",
                "MongoDB",
                "Postgres",
                "SQL",
                "Express.js",
                "Tailwind",
                "Docker",
                "Prisma",
                "Java",
                "C++",
                "Python",
                "Node.js",
                "JavaScript",
              ].map((tech) => (
                <button
                  key={tech}
                  className="bg-blue-500 text-white text-sm font-medium p-2 px-4 rounded-2xl transition-all hover:scale-105"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

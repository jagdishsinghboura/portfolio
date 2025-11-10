
import Image from "next/image";
import SocialMediaLinks from "./SocialMediaLinks";
import TypingText from "./TypingText"
import "../styles/animations.css";

const texts = [
  "FULL STACK DEVELOPER 🚀",
  "Frontend Developer 🚀",
  "Backend Developer 🚀",
  "Tech Explorer"
];

const Home = () => {

  

  return (
    <>
      <div className="flex flex-col  min-h-screen bg-linear-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <div className="container flex flex-col md:flex-row items-center justify-evenly  h-auto md:h-[420px]">
          <div className="flex items-center justify-center md:order-2 order-1 mt-2">
            <div
              className="rounded-full   m-2  mt-4 md:w-68 md:h-68
            shadow-2xl border-2 border-gray-400  hover:ring-4 hover:ring-gray-400 hover:ring-opacity-40
            
             overflow-hidden w-44 h-44 hover:cursor-pointer hover:scale-105  transition-transform duration-300  ease-in-out transform sepia-0"
            >
              <Image
                src="/jagdishsinghbora.jpeg"
                alt="admin photo"
                width={300}
                height={300}
                priority
                className="w-full h-full   object-center object-fill   
                "
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:text-start md:w-1/2 gap-4 p-3 order-2  ">
            <h1 className="text-3xl text-black dark:text-white font-extrabold m-3  capitalize font-mono text-wrap">
              hiˏ I′m{" "}
              <span className="text-blue-400 hover:shadow-2xl cursor-pointer capitalize">
                {" "}
                Jagdish Singh boura{" "}
              </span>
            </h1>

            <TypingText/>


            <div className="w-full flex flex-col md:flex-row justify-around items-center md:gap-4 gap-8 m-2">
              <div
                className="flex flex-col items-center gap-2 shadow-xl border bg-black/10 p-4 rounded-md 
                  w-60 md:w-72 hover:scale-105 transition-all duration-300 cursor-pointer 
                  border-cyan-400 hover:ring-2 hover:ring-cyan-400"
              >
                <h1 className="text-xl font-medium capitalize">📍Location</h1>
                <p className="text-sm tracking-wide flex flex-row items-center gap-2 whitespace-nowrap">
                  Dehradun  Uttarakhand
                </p>
              </div>

              <div
                className="flex flex-col items-center gap-2 shadow-xl border bg-black/10 p-4 rounded-md 
                  w-60 md:w-80 hover:scale-105 transition-all duration-300 cursor-pointer 
                  border-fuchsia-400 hover:ring-2 hover:ring-fuchsia-400"
              >
                <h1 className="text-xl font-medium capitalize">💼Expertise</h1>
                <p className="text-sm tracking-wide text-center whitespace-nowrap">
                  Developer / Problem-Solving
                </p>
              </div>

              <div
                className="flex flex-col items-center gap-2 shadow-xl border bg-black/10 p-4 rounded-md 
                  w-60 md:w-80 hover:scale-105 transition-all duration-300 cursor-pointer 
                  border-amber-300 hover:ring-2 hover:ring-amber-500"
              >
                <h1 className="text-xl font-medium capitalize">📩Contact</h1>
                <p className="text-sm tracking-wide text-center">
                  bourajagdish1221@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <div>
            <SocialMediaLinks pageCall={"home"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


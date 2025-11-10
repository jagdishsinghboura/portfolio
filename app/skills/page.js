import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaNetworkWired, FaCode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill, RiDatabase2Fill, RiJavascriptFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiDocker, SiTypescript, SiPostman, SiRedux, SiPostgresql,SiCodingninjas } from "react-icons/si";
import { LuFileJson } from "react-icons/lu";
import { BiSolidFileJson } from "react-icons/bi";
import { FaC } from "react-icons/fa6";


export default function FullStackCard() {
    const tag = `flex items-center gap-1 bg-gray-700 text-gray-200 px-3 py-1 rounded-lg text-sm shadow hover:bg-gray-600 cursor-default transition`
    return (
        <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex justify-center  p-6 w-full">
            <div className="  md:w-[75%]   bg-slate-200 dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-slate-100 dark:border-gray-700">

                <h1 className="text-2xl font-bold text-black dark:text-white mb-3 font-sans">Full Stack Developer</h1>
                <p className="dark:text-gray-300 text-black text-sm mb-6 font-sans">
                    Technologies I use for building scalable, modern applications.
                </p>
                {/* languaage */}
                <div className="mb-5 p-2">
                    <h2 className="text-xl text-orange-500 font-semibold mb-2 p-1">Language</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className={`skill-tag `}><FaJava /> Java</span>
                        <span className={`skill-tag `}><FaPython /> python</span>
                        <span className={`skill-tag `}><FaC /> C</span>
                        <span className={`skill-tag `}><RiJavascriptFill /> JavaScript</span>
                        <span className={`skill-tag `}><SiTypescript /> Typescript</span>
                    </div>
                </div>

                {/* FRONTEND */}
                <div className="mb-5 p-2">
                    <h2 className="text-xl text-blue-400 font-semibold mb-2 p-1">Frontend</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className={`skill-tag`}><FaReact /> React</span>
                        <span className={`skill-tag `}><TbBrandNextjs /> Next.js</span>
                        <span className={`skill-tag `}><RiTailwindCssFill /> Tailwind CSS</span>
                        <span className={`skill-tag `}><SiRedux /> Redux</span>
                    </div>
                </div>


                {/* BACKEND */}
                <div className="mb-5 p-2">
                    <h2 className="text-xl text-green-400 font-semibold mb-2 p-1">Backend</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className={`skill-tag `}><FaNodeJs /> Node.js</span>
                        <span className={`skill-tag `}><SiExpress /> Express.js</span>
                        <span className={`skill-tag `}><LuFileJson /> JWT Authentication</span>
                        <span className={`skill-tag `}><BiSolidFileJson /> JSON</span>
                    </div>
                </div>

                {/* DATABASE */}
                <div className="mb-5 p-2">
                    <h2 className="text-xl text-yellow-400 font-semibold mb-2 p-1">Database</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className={`skill-tag `}><SiMongodb /> MongoDB</span>
                        <span className={`skill-tag `}><RiDatabase2Fill /> SQL</span>
                        <span className={`skill-tag `}><SiPostgresql /> PostGresSql</span>
                    </div>
                </div>

                {/* DEVOPS & TOOLS */}
                <div>
                    <h2 className="text-xl text-purple-400 font-semibold mb-2 p-1">DevOps & Tools</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className={`skill-tag `}><SiDocker /> Docker</span>
                        <span className={`skill-tag `}><FaGitAlt /> Git</span>
                        <span className={`skill-tag `}><SiPostman /> Postman</span>
                    </div>
                </div>


                <div>
                    <h2 className="text-xl text-pink-400 font-semibold mb-2 p-1">Theory</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className={`skill-tag `}><FaNetworkWired /> Networking</span>
                        <span className={`skill-tag `}><SiCodingninjas /> Problem-solving</span>
                        <span className={`skill-tag `}><FaCode />400 + LeetCode Problems Solved</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

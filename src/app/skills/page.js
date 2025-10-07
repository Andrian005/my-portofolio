"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaLaravel,
  FaBootstrap,
  FaT
} from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-4" id="skills">
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-40 h-40 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
        </div>

        <h1 className="relative text-2xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-md">
          My Skills
        </h1>

        <div className="relative mt-4 mb-2 flex justify-center">
          <span className="block w-24 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></span>
        </div>

        <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          A collection of technologies I use to build responsive, dynamic, and
          high-performance web applications.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center w-32 h-32 rounded-2xl bg-gray-800/30 hover:bg-gray-800/60 border border-gray-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-blue-500/20"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-110">
              {skill.icon}
            </div>
            <p className="text-gray-300 text-sm font-medium mt-1 tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

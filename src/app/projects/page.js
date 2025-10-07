"use client";
import Link from "next/link";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
            name: "Portfolio Website",
            image: "/images/portofolio.png",
            description:
                "Personal portfolio built with Next.js and Tailwind CSS to showcase my skills and projects.",
            link: "https://yourportfolio.vercel.app",
        },
    ];

    return (
        <section className="w-full max-w-6xl mx-auto py-20 px-4">
            <div className="text-center mb-16 relative">
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-40 h-40 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
                </div>

                <h1 className="relative text-2xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-md">
                    Projects
                </h1>

                <div className="relative mt-4 mb-2 flex justify-center">
                    <span className="block w-24 h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></span>
                </div>

                <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                    A showcase of some of my favorite projects — blending creativity, performance,
                    and clean code.
                </p>
            </div>

            <div className="w-full flex justify-center">
                <div
                    className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 place-content-center justify-items-center w-full max-w-screen-lg"
                >
                    {projects.map((project, i) => (
                        <div
                            key={project.name}
                            className="group bg-gray-900/40 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col w-full max-w-sm"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-2">{project.name}</h2>
                                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                                </div>

                                {project.link && (
                                    <div className="mt-4">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                                        >
                                            View Project <FaExternalLinkAlt className="text-xs" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

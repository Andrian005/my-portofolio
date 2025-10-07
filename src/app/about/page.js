"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4 sm:px-8 text-center">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-48 h-64 sm:w-56 sm:h-72 mb-6 group">
          <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          <div
            className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-blue-500/80 bg-gray-900/40 backdrop-blur-md shadow-lg shadow-blue-900/40 group-hover:scale-105 transition-all duration-500 ease-out"
          >
            <Image
              src="/images/profil.jpg"
              alt="Profile Picture"
              fill
              className="object-cover object-top"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500"></div>

            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/50 transition-all duration-500"></div>
          </div>
        </div>


        <p className="text-gray-400 text-lg mb-1">Hi, I'm</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
          Mukhammad Nurwakhid Meilandri
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-400 mt-2 animate-fadeIn">
          Full Stack Web Developer
        </h2>
      </div>

      <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
        I'm a passionate developer who loves crafting clean, scalable, and
        user-friendly web applications. My focus is on creating modern
        interfaces with optimized performance and seamless user experiences
        using the latest web technologies.
      </p>

      <div className="mt-10 flex justify-center">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold text-white transition-all duration-300 shadow-md hover:shadow-blue-500/30"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}

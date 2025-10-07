"use client";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 px-4 py-12 w-full">
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

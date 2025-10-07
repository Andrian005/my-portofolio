"use client";

import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    <Link href="/" className="hover:text-blue-400 transition-colors duration-300">
                        MNM
                    </Link>
                </h1>

                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-white/90 hover:text-blue-400 font-medium transition-colors duration-300 group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    <Link
                        href="mailto:mukhammad.meilandri@gmail.com"
                        className="ml-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Contact Me
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl text-white focus:outline-none transition-transform duration-200 active:scale-90"
                >
                    {isOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>

            <div
                className={`md:hidden absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-6 transition-all duration-500 ease-in-out
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
                bg-black/70 backdrop-blur-md border-t border-white/10`}
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="w-3/4 text-center py-2 rounded text-white/90 hover:bg-white/10 hover:text-white transition-all duration-300"
                    >
                        {link.name}
                    </Link>
                ))}

                <Link
                    href="mailto:mukhammad.meilandri@gmail.com"
                    onClick={() => setIsOpen(false)}
                    className="w-3/4 text-center py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    Contact Me
                </Link>
            </div>
        </nav>
    );
}

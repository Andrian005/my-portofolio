"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
    const socialMedia = [
        { icon: <FaGithub />, href: "https://github.com/Andrian005", hover: "hover:text-gray-200" },
        { icon: <FaLinkedin />, href: "https://linkedin.com/in/mukhammad-nurwakhid-meilandri-b147932b9", hover: "hover:text-blue-500" },
        { icon: <FaInstagram />, href: "https://instagram.com/lan_drn_", hover: "hover:text-pink-500" },
    ];

    return (
        <footer className="border-t border-white/10 bg-gradient-to-b from-gray-900/70 to-gray-950/90 backdrop-blur-md py-12 px-4 sm:px-8 text-gray-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left space-y-3">
                    <h2 className="text-2xl font-bold tracking-wide text-white hover:text-blue-400 transition-colors duration-300">
                        Mukhammad Nurwakhid Meilandri
                    </h2>
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>

                <div className="flex space-x-6 text-2xl">
                    {socialMedia.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-transform duration-300 hover:scale-125 ${link.hover}`}
                        >
                            {link.icon}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="mt-10 text-center text-xs text-gray-500 tracking-wide">
                Built with <span className="text-blue-400">Next.js</span> • Designed by <span className="text-white font-medium">MNM</span>
            </div>
        </footer>
    );
}

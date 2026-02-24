"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Linkedin, Github, Mail, CodeSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "./magnetic-button";

export function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative bg-gradient-to-b from-[#05050f] to-black border-t border-white/5 py-16 px-6 overflow-hidden">
            {/* Subtle Honeycomb Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='69.282' viewBox='0 0 40 69.282' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 11.547L40 34.641L20 46.188L0 34.641L0 11.547L20 0L40 11.547ZM20 23.094L33.333 15.396L33.333 30.792L20 38.49L6.667 30.792L6.667 15.396L20 23.094Z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 69.282px'
                }}
            />

            {/* Footer Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start relative z-10">

                {/* Left Column: Brand */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-3xl font-black tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Hanzla.
                    </h2>
                    <p className="text-white font-bold tracking-wide mb-3">AI-Powered Full-Stack Engineer</p>
                    <p className="text-gray-400 text-sm max-w-xs font-medium leading-relaxed">
                        Building intelligent, scalable, and beautifully designed digital experiences for humans and autonomous agents alike.
                    </p>
                </div>

                {/* Center Column: Quick Links */}
                <div className="flex flex-col items-center">
                    <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Quick Links</h4>
                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-xs">
                        {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-400 hover:text-cyan-400 text-sm font-semibold transition-all hover:scale-110 relative group"
                            >
                                {link}
                                <motion.span
                                    className="absolute -bottom-1 left-0 h-[2px] bg-cyan-400"
                                    initial={{ width: "0%" }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right Column: Socials */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-white font-bold mb-6 tracking-widest text-sm uppercase">Connect</h4>
                    <div className="flex gap-4">
                        <MagneticButton>
                            <a href="https://linkedin.com/in/muhammad-hanzla-787081279" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="https://github.com/hanzlikhan" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                                <Github size={20} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="https://leetcode.com/u/hanzlakhan/" target="_blank" rel="noreferrer" title="300+ Solved" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300">
                                <CodeSquare size={20} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="mailto:khangormani79@gmail.com" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-rose-400 hover:border-rose-400/50 hover:bg-rose-400/10 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all duration-300">
                                <Mail size={20} />
                            </a>
                        </MagneticButton>
                    </div>
                </div>

            </div>

            {/* Copyright Strip */}
            <div className="w-full max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 font-medium relative z-10">
                <p>© {currentYear} Muhammad Hanzla. All rights reserved.</p>
                <p className="mt-3 md:mt-0 flex items-center gap-1.5">
                    Built with Next.js, Framer Motion & <Heart size={14} className="text-red-500 inline fill-red-500 hover:scale-125 transition-transform cursor-pointer" />
                </p>
            </div>

            {/* Floating Back to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: showTopBtn ? 1 : 0, scale: showTopBtn ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
                whileHover={{ rotate: 360, scale: 1.1 }}
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-3 lg:p-4 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:bg-cyan-500/30 transition-colors ${showTopBtn ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                <ArrowUp size={24} />
            </motion.button>
        </footer>
    );
}

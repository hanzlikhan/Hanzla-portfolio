"use client";

import { motion } from "framer-motion";

export function AnimatedLogo() {
    return (
        <motion.div
            className="relative flex items-center justify-center w-14 h-14 cursor-pointer group"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
        >
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(0,123,255,0.5)] transition-all duration-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Defs for gradients */}
                <defs>
                    <linearGradient id="bgTop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00f5ff" />
                        <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="bgBottom" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4c1d95" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="silverGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#e0e0e0" />
                        <stop offset="100%" stopColor="#9e9e9e" />
                    </linearGradient>
                    <linearGradient id="orbitGlow" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00f5ff" />
                        <stop offset="50%" stopColor="#007bff" />
                        <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                </defs>

                {/* Split Sphere Background */}
                <motion.g
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                >
                    <path d="M 50 10 A 40 40 0 0 1 90 50 L 10 50 A 40 40 0 0 1 50 10" fill="url(#bgTop)" />
                    <path d="M 10 50 A 40 40 0 0 0 90 50 L 10 50" fill="url(#bgBottom)" />
                </motion.g>

                {/* Back part of orbital ring */}
                <motion.ellipse
                    cx="50" cy="50" rx="46" ry="15"
                    fill="none" stroke="url(#orbitGlow)" strokeWidth="3"
                    strokeDasharray="100 200"
                    opacity="0.3"
                    initial={{ rotate: -20 }}
                    animate={{ rotate: -20, strokeDashoffset: [0, 300] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                />

                {/* 3D 'H' Graphic */}
                <motion.g
                    initial={{ y: 0 }}
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Left Pillar */}
                    <path d="M 25 20 L 40 18 L 35 80 L 20 78 Z" fill="url(#silverGlow)" />
                    {/* Right Pillar */}
                    <path d="M 60 22 L 75 20 L 70 82 L 55 80 Z" fill="url(#silverGlow)" />
                    {/* Crossbar */}
                    <path d="M 32 45 L 65 42 L 67 55 L 34 58 Z" fill="url(#silverGlow)" />

                    {/* 3D Depth Highlights */}
                    <path d="M 40 18 L 43 28 L 38 82 L 35 80 Z" fill="#757575" />
                    <path d="M 75 20 L 78 30 L 73 84 L 70 82 Z" fill="#757575" />
                    <path d="M 34 58 L 67 55 L 68 62 L 35 65 Z" fill="#757575" />
                </motion.g>

                {/* Front part of orbital ring */}
                <motion.ellipse
                    cx="50" cy="50" rx="46" ry="15"
                    fill="none" stroke="url(#orbitGlow)" strokeWidth="4"
                    strokeDasharray="150 150"
                    strokeLinecap="round"
                    initial={{ rotate: -20 }}
                    animate={{ rotate: -20, strokeDashoffset: [300, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                />
            </svg>
        </motion.div>
    );
}

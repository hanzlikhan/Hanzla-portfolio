"use client";

import { motion } from "framer-motion";

export function AnimatedLogo() {
    return (
        <motion.div
            className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
            {/* Background looping gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 relative z-10 drop-shadow-lg">
                H
            </span>

            {/* Scanning light line */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[2px] bg-white pointer-events-none z-20"
                style={{ boxShadow: "0 0 10px 2px rgba(255,255,255,0.8)" }}
                animate={{ y: ["-10px", "58px"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
    );
}

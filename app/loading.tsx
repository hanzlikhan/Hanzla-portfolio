"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background glass">
            <div className="relative flex flex-col items-center justify-center">
                {/* Animated Icon Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute h-32 w-32 rounded-full neon-glow-cyan opacity-50 blur-xl"
                />

                {/* Animated Icon */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="relative text-neon-cyan"
                >
                    <Hexagon size={64} strokeWidth={1} className="text-glow-cyan" />
                </motion.div>

                {/* Loading Text */}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="mt-8 text-sm font-medium tracking-widest text-neon-purple text-glow-purple uppercase"
                >
                    Loading System
                </motion.div>
            </div>
        </div>
    );
}

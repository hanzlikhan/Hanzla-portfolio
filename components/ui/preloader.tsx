"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Force minimum loading time for visual appeal, plus ensure hydration complete
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isMounted || !loading) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <div className="relative flex items-center justify-center w-24 h-24 mb-8">
                {/* Outer spinning ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-t-2 border-r-2 border-cyan-400 border-opacity-30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner counter-spinning ring */}
                <motion.div
                    className="absolute inset-2 rounded-full border-b-2 border-l-2 border-purple-500 border-opacity-50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                <motion.span
                    className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 z-10"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    H
                </motion.span>
            </div>

            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                />
            </div>
            <motion.p
                className="text-white/50 text-xs tracking-[0.3em] uppercase mt-4 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
                Initializing Matrix
            </motion.p>
        </motion.div>
    );
}

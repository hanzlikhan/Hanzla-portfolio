"use client";

import { motion } from "framer-motion";

export function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
            {/* Ambient Base Gradient Layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.03)_0%,rgba(0,0,0,0)_100%)]" />

            {/* Slow Drifting Cyan Orb */}
            <motion.div
                className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-cyan-500/5 rounded-full blur-[120px]"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
            />

            {/* Slow Drifting Purple Orb */}
            <motion.div
                className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-purple-500/5 rounded-full blur-[150px]"
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: "transform" }}
            />

            {/* Subtle Grid Overlay (Optional, keeps it techy) */}
            <div
                className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

interface FloatingIconProps {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
    style?: React.CSSProperties;
}

export function FloatingIcon({
    children,
    delay = 0,
    duration = 4,
    yOffset = 20,
    className = "",
    style,
}: FloatingIconProps) {
    return (
        <motion.div
            className={`absolute z-10 hidden md:flex items-center justify-center rounded-full glass bg-white/5 p-4 border border-white/10 shadow-lg ${className}`}
            style={style}
            animate={{
                y: [0, yOffset, 0],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: delay,
            }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
        >
            {children}
        </motion.div>
    );
}

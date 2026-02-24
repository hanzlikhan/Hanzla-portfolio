"use client";

import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import React, { useRef } from "react";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * 0.3);
        y.set(middleY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative overflow-hidden rounded-full px-6 py-2 pb-[10px] font-medium transition-colors ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 z-0 bg-primary/20 opacity-0 transition-opacity duration-300 hover:opacity-100" />
        </motion.button>
    );
}

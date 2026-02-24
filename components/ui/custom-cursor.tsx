"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[100] mix-blend-exclusion"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 50,
                    mass: 0.1,
                }}
                style={{ willChange: "transform" }}
            />

            {/* Outer subtle ring glow */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-purple-500/50 rounded-full pointer-events-none z-[99]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 0.5,
                }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 40,
                    mass: 0.2,
                }}
                style={{ willChange: "transform" }}
            />
        </>
    );
}

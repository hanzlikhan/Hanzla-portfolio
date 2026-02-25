"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Smooth spring physics for the cursor so it feels premium, not laggy
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        // Interactive element detection
        const handleInteractionStart = () => setIsHovering(true);
        const handleInteractionEnd = () => setIsHovering(false);

        const addInteractionListeners = () => {
            const interactables = document.querySelectorAll(
                'a, button, input, textarea, select, [role="button"], .cursor-pointer'
            );
            interactables.forEach((el) => {
                el.addEventListener("mouseenter", handleInteractionStart);
                el.addEventListener("mouseleave", handleInteractionEnd);
            });
        };

        addInteractionListeners();

        // MutationObserver to attach listeners to dynamically added elements
        const observer = new MutationObserver(addInteractionListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            observer.disconnect();

            const interactables = document.querySelectorAll(
                'a, button, input, textarea, select, [role="button"], .cursor-pointer'
            );
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", handleInteractionStart);
                el.removeEventListener("mouseleave", handleInteractionEnd);
            });
        };
    }, [cursorX, cursorY, isVisible]);

    // Don't render on mobile devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center transform-gpu"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isVisible ? (isHovering ? 2.5 : 0.6) : 0,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
                opacity: { duration: 0.2 }
            }}
        />
    );
}

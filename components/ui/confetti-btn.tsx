"use client";

import React from "react";
import confetti from "canvas-confetti";
import { MagneticButton } from "./magnetic-button";

import { HTMLMotionProps } from "framer-motion";

interface ConfettiButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
}

export function ConfettiButton({ children, className = "", onClick, ...props }: ConfettiButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x, y },
            colors: ["#00f5ff", "#a855f7", "#ffffff"],
            zIndex: 100,
        });

        if (onClick) onClick(e);
    };

    return (
        <MagneticButton
            onClick={handleClick}
            className={`relative overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </MagneticButton>
    );
}

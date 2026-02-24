"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface TiltImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function TiltImage({ src, alt, className = "" }: TiltImageProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Parallax rotation amount based on mouse position
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const [imageError, setImageError] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={`relative w-full rounded-3xl overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] border border-white/10 hover:border-cyan-400/50 group ${className}`}
        >
            <div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{ transform: "translateZ(30px)" }}
            />
            {/* Fallback pattern in case image is missing */}
            {imageError && (
                <div className="absolute inset-0 bg-secondary/20 flex flex-col items-center justify-center z-0 text-muted-foreground text-center p-4">
                    <span className="text-sm">Image not found</span>
                    <span className="text-xs opacity-50 mt-1">Please add public{src}</span>
                </div>
            )}

            {!imageError && (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover z-0 relative group-hover:scale-105 transition-transform duration-500"
                    style={{ transform: "translateZ(10px)" }}
                    onError={() => setImageError(true)}
                    priority
                />
            )}
        </motion.div>
    );
}

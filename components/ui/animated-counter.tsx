"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export function AnimatedCounter({
    value,
    duration = 2,
    prefix = "",
    suffix = "",
    className = "",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, motionValue, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // If it's a decimal like CGPA (e.g. 3.60), keep 2 decimals if the original value has them
                const isDecimal = value % 1 !== 0;
                const formatted = isDecimal ? latest.toFixed(2) : Math.round(latest).toString();
                ref.current.textContent = `${prefix}${formatted}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix, value]);

    return (
        <span ref={ref} className={className}>
            {prefix}0{suffix}
        </span>
    );
}

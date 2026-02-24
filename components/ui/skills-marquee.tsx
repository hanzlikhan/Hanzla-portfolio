"use client";

import { motion } from "framer-motion";
import { Code, Brain, Bot, CircuitBoard, Server, Network, Users, ArrowUpFromLine } from "lucide-react";

export function SkillsMarquee() {
    const icons = [
        { icon: Code, color: "text-blue-400" },
        { icon: Brain, color: "text-purple-400" },
        { icon: Bot, color: "text-neon-cyan" },
        { icon: CircuitBoard, color: "text-green-400" },
        { icon: Server, color: "text-rose-400" },
        { icon: Network, color: "text-amber-400" },
        { icon: Users, color: "text-pink-400" },
        { icon: ArrowUpFromLine, color: "text-indigo-400" },
    ];

    // Duplicate the icons array to create a seamless loop
    const duplicatedIcons = [...icons, ...icons, ...icons];

    return (
        <div className="relative w-full overflow-hidden py-10 flex border-y border-white/5 bg-white/[0.02]">
            {/* Gradient masks for smooth fading at edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex gap-16 md:gap-24 items-center whitespace-nowrap min-w-max"
                animate={{
                    x: ["0%", "-33.33%"],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {duplicatedIcons.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={idx}
                            className={`flex items-center justify-center transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_15px_currentColor] cursor-pointer ${item.color}`}
                        >
                            <Icon size={48} strokeWidth={1.5} />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

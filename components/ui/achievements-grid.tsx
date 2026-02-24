"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Globe, Github } from "lucide-react";

const achievements = [
    {
        id: 1,
        title: "1st Place",
        subtitle: "Harvard CS50x Puzzle Day 2025",
        description: "Solved 9/9 logic puzzles perfectly, securing the top spot as part of an international team.",
        icon: Trophy,
        color: "text-yellow-400",
        glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:border-yellow-400/50",
        bgAccent: "bg-yellow-400/10",
    },
    {
        id: 2,
        title: "4th Place Winner",
        subtitle: "Pak Angel Generative AI Hackathon",
        description: "Developed CrisisPilot, an awarded multi-agent AI disaster response and alert system.",
        icon: Award,
        color: "text-rose-400",
        glow: "hover:shadow-[0_0_30px_rgba(251,113,133,0.3)] hover:border-rose-400/50",
        bgAccent: "bg-rose-400/10",
    },
    {
        id: 3,
        title: "300+ Solved",
        subtitle: "LeetCode Data Structures & Algorithms",
        description: "Consistent problem solver tackling complex algorithmic challenges actively.",
        icon: Star,
        color: "text-cyan-400",
        glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:border-cyan-400/50",
        bgAccent: "bg-cyan-400/10",
    },
    {
        id: 4,
        title: "Active Participant",
        subtitle: "20+ Global AI Hackathons",
        description: "Frequent competitor on lablab.ai, building and shipping cutting edge Agentic AI prototypes.",
        icon: Globe,
        color: "text-purple-400",
        glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:border-purple-400/50",
        bgAccent: "bg-purple-400/10",
    },
    {
        id: 5,
        title: "National Merit",
        subtitle: "Prime Minister Youth Laptop",
        description: "Awarded a merit-based laptop grant by the government recognizing academic excellence.",
        icon: Medal,
        color: "text-green-400",
        glow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] hover:border-green-400/50",
        bgAccent: "bg-green-400/10",
    },
    {
        id: 6,
        title: "Contributor",
        subtitle: "Active GitHub Profile",
        description: "Maintaining consistent coding streaks and pushing high-quality open source code and templates.",
        icon: Github,
        color: "text-gray-300",
        glow: "hover:shadow-[0_0_30px_rgba(209,213,219,0.3)] hover:border-gray-400/50",
        bgAccent: "bg-white/10",
    }
];

export function AchievementsGrid() {
    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-10 z-10 relative">
            <div className="mb-12 text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50 inline-block drop-shadow-sm">
                    Awards & Milestones
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.03 }}
                            className={`group relative glass rounded-2xl p-6 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-xl ${item.glow}`}
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-100 z-0" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`p-3 rounded-2xl border border-white/5 shadow-inner backdrop-blur-md ${item.bgAccent} ${item.color}`}>
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-bold tracking-tight ${item.color}`}>
                                            {item.title}
                                        </h4>
                                        <p className="text-xs uppercase tracking-wider font-semibold text-white/50">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed font-medium mt-auto">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative Corner Flare */}
                            <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full blur-[40px] opacity-20 transition-opacity duration-300 group-hover:opacity-40 pointer-events-none ${item.color.replace('text-', 'bg-')}`} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

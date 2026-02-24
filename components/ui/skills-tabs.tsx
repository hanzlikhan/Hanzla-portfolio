"use client";

import { useState, ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FileCode2, Codepen, Coffee, Braces, Binary,
    BrainCircuit, Bot, Database, Workflow, TerminalSquare,
    Server, Layers, Box, Webhook,
    Activity, MonitorPlay, GitBranch, LayoutTemplate, Container,
    Sparkles
} from "lucide-react";

const categories = [
    "Languages",
    "AI & Agentic Systems",
    "Backend & APIs",
    "Automation & Tools",
    "Currently Exploring"
] as const;

type Category = typeof categories[number];

interface SkillItem {
    name: string;
    desc: string;
    icon: ElementType;
    progress: number;
    color: string;
    glow: string;
}

const skillsData: Record<Category, SkillItem[]> = {
    "Languages": [
        { name: "Python", desc: "Advanced • Data & AI", icon: Codepen, progress: 90, color: "text-blue-400", glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] border-blue-400/20" },
        { name: "TypeScript", desc: "Advanced • Scalable UI", icon: Braces, progress: 85, color: "text-blue-500", glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-blue-500/20" },
        { name: "JavaScript", desc: "Expert • Frontend Core", icon: FileCode2, progress: 95, color: "text-yellow-400", glow: "hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] border-yellow-400/20" },
        { name: "C++", desc: "Intermediate • Algorithms", icon: Binary, progress: 70, color: "text-indigo-400", glow: "hover:shadow-[0_0_30px_rgba(129,140,248,0.5)] border-indigo-400/20" },
        { name: "Java", desc: "Intermediate • OOP", icon: Coffee, progress: 65, color: "text-red-400", glow: "hover:shadow-[0_0_30px_rgba(248,113,113,0.5)] border-red-400/20" },
    ],
    "AI & Agentic Systems": [
        { name: "LangChain", desc: "Advanced • Multi-Agent", icon: BrainCircuit, progress: 90, color: "text-neon-cyan", glow: "hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] border-cyan-400/20" },
        { name: "LangGraph", desc: "Intermediate • Workflows", icon: Workflow, progress: 80, color: "text-purple-400", glow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] border-purple-400/20" },
        { name: "Phidata", desc: "Intermediate • Memory", icon: Bot, progress: 75, color: "text-green-400", glow: "hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] border-green-400/20" },
        { name: "RAG", desc: "Advanced • Retrieval", icon: Database, progress: 85, color: "text-rose-400", glow: "hover:shadow-[0_0_30px_rgba(251,113,133,0.5)] border-rose-400/20" },
        { name: "Claude Code", desc: "Advanced • Spec-Driven", icon: TerminalSquare, progress: 85, color: "text-orange-400", glow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.5)] border-orange-400/20" },
    ],
    "Backend & APIs": [
        { name: "Node.js", desc: "Advanced • V8 Runtime", icon: Server, progress: 85, color: "text-green-500", glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] border-green-500/20" },
        { name: "Express.js", desc: "Advanced • Web Framework", icon: Layers, progress: 90, color: "text-gray-300", glow: "hover:shadow-[0_0_30px_rgba(209,213,219,0.5)] border-gray-300/20" },
        { name: "FastAPI", desc: "Intermediate • Async APIs", icon: Webhook, progress: 75, color: "text-teal-400", glow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] border-teal-400/20" },
        { name: "REST APIs", desc: "Advanced • Architecture", icon: Box, progress: 90, color: "text-blue-400", glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] border-blue-400/20" },
    ],
    "Automation & Tools": [
        { name: "n8n Automation", desc: "Advanced • Workflows", icon: Activity, progress: 85, color: "text-orange-500", glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] border-orange-500/20" },
        { name: "Streamlit", desc: "Intermediate • Python UIs", icon: LayoutTemplate, progress: 80, color: "text-red-500", glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] border-red-500/20" },
        { name: "Gradio", desc: "Intermediate • ML Demos", icon: MonitorPlay, progress: 75, color: "text-yellow-500", glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] border-yellow-500/20" },
        { name: "Docker", desc: "Intermediate • Containers", icon: Container, progress: 70, color: "text-blue-500", glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] border-blue-500/20" },
        { name: "Git", desc: "Advanced • Version Control", icon: GitBranch, progress: 90, color: "text-orange-600", glow: "hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] border-orange-600/20" },
    ],
    "Currently Exploring": [
        { name: "Digital FTEs", desc: "Autonomous AI Workers", icon: Sparkles, progress: 95, color: "text-neon-cyan", glow: "hover:shadow-[0_0_40px_rgba(0,245,255,0.7)] border-cyan-400/50" },
    ]
};

export function SkillsTabs() {
    const [activeTab, setActiveTab] = useState<Category>(categories[0]);

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            {/* Scrollable Tabs Container */}
            <div className="flex w-full overflow-x-auto no-scrollbar scroll-smooth pb-4 mb-8 snap-x justify-start lg:justify-center border-b border-white/10">
                <div className="flex gap-2 sm:gap-4 px-4 min-w-max">
                    {categories.map((category) => {
                        const isActive = activeTab === category;
                        const isExploring = category === "Currently Exploring";
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`relative px-4 py-3 sm:px-6 sm:py-4 rounded-t-xl text-sm sm:text-base font-semibold transition-colors snap-center whitespace-nowrap outline-none ${isActive
                                    ? isExploring ? "text-neon-cyan" : "text-white"
                                    : isExploring ? "text-cyan-400/60 hover:text-neon-cyan" : "text-white/50 hover:text-white/80"
                                    }`}
                            >
                                {category}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className={`absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full ${isExploring ? "bg-neon-cyan shadow-[0_-2px_10px_rgba(0,245,255,0.8)]" : "bg-gradient-to-r from-cyan-400 to-purple-500"}`}
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                {/* Subtle highlight for exploring tab */}
                                {isExploring && !isActive && (
                                    <span className="absolute top-2 right-2 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Grid Content */}
            <div className="w-full px-4 min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                    >
                        {skillsData[activeTab].map((skill, idx) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                                    whileHover={{
                                        scale: 1.05,
                                        rotateX: 5,
                                        rotateY: -5,
                                        transition: { duration: 0.2 }
                                    }}
                                    className={`relative glass rounded-2xl p-6 border transition-all duration-300 flex flex-col overflow-hidden h-full ${skill.glow}`}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <div className="flex items-start justify-between mb-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
                                        <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${skill.color}`}>
                                            <Icon size={32} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex-1 flex flex-col justify-end" style={{ transform: "translateZ(30px)" }}>
                                        <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                                        <p className="text-sm text-white/60 mb-6">{skill.desc}</p>

                                        {/* Animated Progress Bar */}
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full rounded-full ${activeTab === "Currently Exploring" ? "bg-neon-cyan" : "bg-gradient-to-r from-purple-500 to-cyan-400"}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.progress}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>

                                    {/* subtle background glow */}
                                    <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none ${skill.color.replace('text-', 'bg-')}`}></div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

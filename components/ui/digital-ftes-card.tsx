"use client";

import { motion } from "framer-motion";
import { Sparkles, TerminalSquare, Rocket, Bot } from "lucide-react";

export function DigitalFTEsCard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-5xl mx-auto mt-24 group"
        >
            {/* Animated Gradient Border Layer */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-cyan rounded-3xl blur-md opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient bg-[length:200%_auto]"></div>

            {/* Main Glass Card */}
            <div className="relative glass bg-[#0a0a1a]/80 backdrop-blur-2xl px-6 py-10 md:px-12 md:py-14 rounded-3xl border border-white/10 overflow-hidden isolate">

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] -z-10 translate-y-1/3 -translate-x-1/3"></div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 relative z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                        <Sparkles className="w-8 h-8 text-neon-cyan animate-pulse" />
                    </div>
                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 tracking-tight">
                            My Journey into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital FTEs</span>
                        </h3>
                        <p className="text-neon-cyan/70 font-mono text-sm mt-2 flex items-center gap-2">
                            <TerminalSquare className="w-4 h-4" /> Autonomous AI Workers &middot; 24/7 Scale
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="prose prose-invert prose-lg max-w-none relative z-10">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-white/80 leading-relaxed font-medium"
                    >
                        I&apos;m currently deep into building <strong className="text-white">Digital Full-Time Equivalents (Digital FTEs)</strong> — autonomous AI agents that work 24/7 like real team members.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-white/80 leading-relaxed mt-4"
                    >
                        From <span className="text-rose-400 font-semibold border-b border-rose-400/30">CrisisPilot’s</span> multi-agent disaster system to spec-driven agents using <span className="text-neon-cyan">LangGraph</span>, <span className="text-orange-400">Groq</span>, and <span className="text-orange-300">Claude</span>, I’m creating AI workers that can <span className="italic">reason, remember, act, and improve independently</span>.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-white/80 leading-relaxed mt-4"
                    >
                        My goal is to replace repetitive human tasks with intelligent digital employees that scale infinitely and cost <span className="text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">50x less</span> — turning ideas into production-ready AI teams.
                    </motion.p>
                </div>

                {/* Decorative Grid overlays */}
                <div className="absolute right-8 bottom-8 flex gap-4 opacity-50 z-0 hidden md:flex">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center backdrop-blur-sm">
                        <Bot className="text-white/30 w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center backdrop-blur-sm -ml-8 bg-[#0a0a1a]">
                        <Rocket className="text-cyan-400/40 w-5 h-5" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";

export function ReferencesCard() {
    return (
        <div className="w-full max-w-2xl mx-auto px-6 py-16 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                className="glass bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-10 text-center shadow-xl relative overflow-hidden group hover:border-cyan-400/30 transition-colors duration-500"
            >
                {/* Subtle internal background flares */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-cyan-400/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/10 transition-colors duration-500" />

                <p className="text-xl md:text-2xl font-bold tracking-tight mb-6 from-cyan-300 to-purple-400 bg-clip-text text-transparent bg-gradient-to-r leading-relaxed relative z-10">
                    &quot;Professional references available upon request. Feel free to connect via LinkedIn or email for details.&quot;
                </p>

                {/* Animated underline pulse */}
                <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)] relative z-10" />
            </motion.div>
        </div>
    );
}

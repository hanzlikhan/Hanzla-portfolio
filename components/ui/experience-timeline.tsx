"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

export const experiences = [
    {
        id: 1,
        title: "Section Leader Mentor",
        organization: "Stanford University – Code in Place",
        location: "California, United States (Remote)",
        date: "Apr 2025 – Jun 2025",
        type: "work",
        points: [
            "Selected as Section Leader to teach Python to international students in groups of 10-15.",
            "Mentored 100+ students worldwide (USA, Canada, Russia, UK, India, Bangladesh, Brazil, Germany, etc.)."
        ],
        icon: Building2
    },
    {
        id: 2,
        title: "Trainer and Moderator",
        organization: "iCodeGuru",
        location: "Remote",
        date: "Feb 2024 – Present",
        type: "work",
        points: [
            "Volunteer teaching Python and DSA with emphasis on LeetCode.",
            "Conducted weekly workshops for underprivileged students to learn coding freely.",
            "Positive student reviews on DSA & LeetCode impact."
        ],
        icon: Briefcase
    },
    {
        id: 3,
        title: "Teaching Computer Science",
        organization: "Fast Global Academy",
        location: "Faisalabad, PK",
        date: "2023 – Present",
        type: "work",
        points: [
            "Teaching Computer Science to Grades 9–12."
        ],
        icon: Briefcase
    },
    {
        id: 4,
        title: "Computer Science Teacher",
        organization: "KPS College",
        location: "Faisalabad, PK",
        date: "2024 (6 Months)",
        type: "work",
        points: [
            "Taught Computer Science to Intermediate class."
        ],
        icon: Briefcase
    },
    {
        id: 5,
        title: "BS Computer Science",
        organization: "Government College University",
        location: "Faisalabad, PK",
        date: "Dec 2020 – Dec 2026 (Expected)",
        type: "education",
        points: [
            "CGPA: 3.60 / 4.00"
        ],
        icon: GraduationCap
    }
];

export function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 z-10 py-10" ref={containerRef}>
            {/* Background Central Line */}
            <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

            {/* Animated Glowing Line */}
            <motion.div
                className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent origin-top"
                style={{ scaleY: pathLength }}
            />

            {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                const Icon = exp.icon;

                return (
                    <div
                        key={exp.id}
                        className={`relative flex flex-col md:flex-row items-start mb-16 md:mb-24 ${isEven ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Center Timeline Node */}
                        <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 w-9 h-9 flex items-center justify-center -translate-y-2 z-20">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full h-full rounded-full bg-black border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] relative"
                            >
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping absolute" />
                                <div className="w-3 h-3 rounded-full bg-purple-500" />
                            </motion.div>
                        </div>

                        {/* Content Side: Left or Right on Desktop, always Right on Mobile */}
                        <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 lg:pr-24 text-left md:text-right" : "md:pl-16 lg:pl-24 text-left"}`}>
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
                                className="relative group glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                            >
                                {/* Decorative glow inside card */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                                {/* Badge Context */}
                                <div className={`flex items-center gap-2 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                                    <span className="inline-flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400">
                                        <Icon size={16} />
                                    </span>
                                    <span className="text-sm font-mono text-cyan-400/80 font-semibold uppercase tracking-wider bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                                        {exp.date}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                                    {exp.title}
                                </h3>

                                <div className={`flex items-center gap-4 text-sm text-gray-400 mb-6 font-medium ${isEven ? 'md:justify-end flex-wrap-reverse' : 'flex-wrap'}`}>
                                    <span className="flex items-center gap-1.5"><Building2 size={14} className="text-purple-400" /> {exp.organization}</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={14} className="text-rose-400" /> {exp.location}</span>
                                </div>

                                <ul className="space-y-3 relative z-10">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-sm md:text-base text-gray-300 leading-relaxed flex items-start gap-3">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Empty Half on Desktop */}
                        <div className="hidden md:block w-1/2" />
                    </div>
                );
            })}
        </div>
    );
}

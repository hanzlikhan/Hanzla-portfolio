"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "RAG AI Business Intelligence",
        description: "An enterprise-grade, AI-powered Business Intelligence platform that ingests Gmail, Slack, CRM, and documents — then lets you query everything in plain English.",
        longDescription: "Multi-source RAG system for internal company knowledge. Connects PDFs, emails, chats, CRMs. Advanced retrieval, agentic querying, structured outputs. Built for real business decision-making.",
        tech: ["LangChain", "Gemini", "Pinecone", "Streamlit", "RAG", "Agentic AI"],
        image: "/images/projects/rag-business-intelligence.png",
        demo: "https://rag-business-intelligence-han.streamlit.app/",
        github: "https://github.com/hanzlikhan/RAG-Business-Intelligence/",
        featured: true
    },
    {
        id: 2,
        title: "Hanzla Outlet - Premium E-commerce Platform",
        description: "A modern AI full-stack e-commerce application built with Next.js 14, FastAPI, Supabase, and Tailwind CSS. Designed for performance, scalability, and a premium user experience. Order via chatbot.",
        longDescription: "AI-powered shopping with natural language ordering. Full-stack: Next.js frontend, FastAPI backend, Supabase DB/auth. Premium UI, smooth animations, real-time cart.",
        tech: ["Next.js", "FastAPI", "Supabase", "Tailwind", "AI Chatbot", "E-commerce"],
        image: "/images/projects/hanzla-outlet.png",
        demo: "https://hanzlaoutlet.vercel.app",
        github: "https://github.com/hanzlikhan/Hanzla-outlet",
        featured: true
    },
    {
        id: 3,
        title: "CrisisPilot (National Winner)",
        description: "CrisisPilot is an advanced agentic AI system that revolutionizes disaster response through real-time monitoring, intelligent analysis, and instant alert delivery. Built with cutting-edge AI technologies.",
        longDescription: "Multi-agent framework for real-time news/threat monitoring and alerts. Won 4th at Pak Angel Generative AI Hackathon. Groq Llama-3.3-70B, LangChain, Pydantic, Serper API, Streamlit glassmorphism UI.",
        tech: ["LangChain", "Groq", "Multi-Agent", "Streamlit", "Serper API", "Hackathon Winner"],
        image: "/images/projects/crisispilot.png",
        demo: "https://crisis-alert-pilot.streamlit.app/",
        github: "https://github.com/hanzlikhan/CrisisPilot-Global-Disaster-Swift-Response-Assistant",
        featured: true
    },
    {
        id: 4,
        title: "AI Personal Employee",
        description: "An AI system that watches email, WhatsApp messages, and Facebook live 24/7. It can text, email, or post automatically on your behalf.",
        longDescription: "Autonomous AI employee for communication automation. Monitors inboxes/chats, responds intelligently, posts content. Built for productivity and always-on presence.",
        tech: ["Agentic AI", "Automation", "Email/WhatsApp Integration", "Facebook API"],
        image: "/images/projects/ai-personal-employee.png",
        demo: "https://www.linkedin.com/posts/muhammad-hanzla-787081279_aiagents-systemarchitecture-softwareengineering-activity-7431004867269169152-QPot",
        github: "https://github.com/hanzlikhan/AI-personal-Emp/",
        featured: false
    },
    {
        id: 5,
        title: "AI Finger Mouse",
        description: "Control your computer's mouse cursor using hand gestures captured by your webcam. This project uses computer vision and hand tracking to create a touchless interface.",
        longDescription: "Touchless mouse control with real-time hand tracking. Gesture recognition for cursor movement and clicks. Built with OpenCV and MediaPipe for smooth interaction.",
        tech: ["OpenCV", "MediaPipe", "PyAutoGUI", "Computer Vision", "Gesture Control"],
        image: "/images/projects/ai-finger-mouse.png",
        demo: "https://www.linkedin.com/posts/muhammad-hanzla-787081279_ai-computervision-handtracking-activity-7322599214725648384-xWkf",
        github: "https://github.com/hanzlikhan/Ai-fingure-mouse/",
        featured: false
    }
];

export function ProjectsShowcase() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [showAll, setShowAll] = useState(false);

    const featuredProjects = projects.filter(p => p.featured);
    const remainingProjects = projects.filter(p => !p.featured);

    const openProjectModal = (project: typeof projects[0]) => {
        setSelectedProject(project);
    };

    const ProjectCard = ({ project, isFeatured = true }: { project: typeof projects[0], isFeatured?: boolean }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
                scale: 1.02,
                rotateX: 2,
                rotateY: -2,
            }}
            className="group relative flex flex-col glass bg-[#0a0a1a]/80 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => window.open(project.demo, "_blank", "noreferrer")}
        >
            {/* Image Container */}
            <div className={`relative w-full ${isFeatured ? 'h-64 sm:h-72' : 'h-48'} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/10 to-transparent z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-300" />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231a103c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23a855f7">Image Placeholder</text></svg>';
                    }}
                />

                {/* Floating Tag */}
                {project.featured && (
                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-neon-cyan/20 border border-neon-cyan/40 rounded-full text-xs font-semibold text-cyan-400 backdrop-blur-md">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm md:text-base text-gray-400 mb-6 line-clamp-3">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                    {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="px-2.5 py-1 text-[11px] md:text-xs font-mono font-medium rounded-full bg-white/5 border border-cyan-400/30 text-cyan-200">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="px-2.5 py-1 text-[11px] md:text-xs font-mono font-medium rounded-full bg-white/5 border border-white/10 text-gray-400">
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>

                {/* Butons Block inside Card (for quick links if they don't want to click modal, but click triggers modal by default. We'll stop propagation) */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2.5 rounded-xl bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                        <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 text-center py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-400 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                    >
                        <Github size={16} /> GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );

    return (
        <div className="w-full flex flex-col items-center">

            {/* Featured Grid (Top 3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-6 relative z-10">
                {featuredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} isFeatured={true} />
                ))}
            </div>

            {/* See More Button */}
            {!showAll && remainingProjects.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 relative z-10"
                >
                    <button
                        onClick={() => setShowAll(true)}
                        className="group relative px-8 py-4 font-bold text-white rounded-full bg-white/5 border border-white/10 hover:bg-white/10 overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            See More Projects
                        </span>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                    </button>
                </motion.div>
            )}

            {/* Remaining Projects Grid (Masonry / Grid) */}
            <AnimatePresence>
                {showAll && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-6 mt-16 relative z-10">
                            {remainingProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ProjectCard project={project} isFeatured={false} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Modal Component ShadCN Dialog */}
            <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#05050f]/95 border-white/10 glass text-white p-0 gap-0 shadow-[0_0_80px_rgba(168,85,247,0.15)] rounded-2xl md:rounded-3xl">
                    <DialogTitle className="sr-only">{selectedProject?.title}</DialogTitle>
                    <DialogDescription className="sr-only">{selectedProject?.description}</DialogDescription>

                    <DialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-colors">
                        <X size={20} />
                    </DialogClose>

                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col w-full"
                        >
                            {/* Modal Banner Hero */}
                            <div className="relative w-full h-64 md:h-96">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050f]/30 to-[#05050f] z-10" />
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    priority
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231a103c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23a855f7">Image Placeholder</text></svg>';
                                    }}
                                />
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 md:p-10 relative z-20 -mt-20 md:-mt-24">
                                <h2 className="text-3xl md:text-5xl font-black mb-4 drop-shadow-md tracking-tight text-glow-cyan">
                                    {selectedProject.title}
                                </h2>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="px-3 py-1.5 text-xs md:text-sm font-mono font-medium rounded-full bg-cyan-400/10 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="prose prose-invert prose-lg max-w-none mb-10 text-gray-300 leading-relaxed font-medium">
                                    <p>{selectedProject.longDescription}</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <MagneticButton>
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-colors w-full"
                                        >
                                            <ExternalLink size={20} /> View Live Demo
                                        </a>
                                    </MagneticButton>

                                    <MagneticButton>
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors w-full"
                                        >
                                            <Github size={20} /> View on GitHub
                                        </a>
                                    </MagneticButton>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

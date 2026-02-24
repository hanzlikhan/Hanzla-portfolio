"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Github, Globe, Loader2, Send, CodeSquare } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    service: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters.").max(1000, "Message cannot exceed 1000 characters.")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            service: "Freelance",
            message: ""
        }
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);

        // Simulate network delay for effect
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", data);

        setIsSubmitting(false);
        reset();

        // Trigger Success Effects
        toast.success("Message sent! 🚀", {
            description: "Thanks for reaching out! I'll get back to you soon.",
        });

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#22d3ee', '#a855f7', '#ffffff'] // cyan, purple, white
        });
    };

    const formAnimationParams = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 lg:gap-24 text-left">

            {/* Left Axis: Info & Socials */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="flex flex-col flex-1"
            >
                <div className="mb-8 relative inline-block">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white/10 relative z-10">
                        <Image
                            src="/images/profile.png"
                            alt="Hanzla"
                            fill
                            className="object-cover"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="%2322d3ee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="black">H</text></svg>';
                            }}
                        />
                    </div>
                    {/* Neon Ring Glow */}
                    <div className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.5)] z-0 rounded-full animate-pulse blur" />
                </div>

                <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
                    Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 block sm:inline">amazing.</span>
                </h3>

                <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-md">
                    Open for collaborations, freelance, mentorship, or just a chat about AI/full-stack!
                </p>

                <div className="flex flex-col gap-6 mb-12">
                    <motion.a
                        href="mailto:khangormani79@gmail.com?subject=Let's%20Work%20Together"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 text-white hover:text-cyan-400 transition-colors group cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-colors shadow-lg">
                            <Mail size={20} />
                        </div>
                        <span className="text-lg font-medium tracking-wide">khangormani79@gmail.com</span>
                    </motion.a>

                    <motion.a
                        href="tel:+923326400444"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 text-white hover:text-purple-400 transition-colors group"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-colors shadow-lg">
                            <Phone size={20} />
                        </div>
                        <span className="text-lg font-medium tracking-wide">+92 332 640 0444</span>
                    </motion.a>
                </div>

                {/* Social Magnetic Block */}
                <div className="flex flex-wrap gap-4 mt-auto">
                    <MagneticButton>
                        <a href="https://linkedin.com/in/muhammad-hanzla-787081279" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 hover:shadow-[0_0_20px_rgba(0,119,181,0.4)] transition-all duration-300">
                            <Linkedin size={24} />
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="https://github.com/hanzlikhan" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-gray-400 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
                            <Github size={24} />
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="https://leetcode.com/u/hanzlakhan/" target="_blank" rel="noreferrer" title="300+ Solved" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300">
                            <CodeSquare size={24} />
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                            <Globe size={24} />
                        </a>
                    </MagneticButton>
                </div>
            </motion.div>

            {/* Right Axis: Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
                className="flex-1 w-full"
            >
                <div className="glass bg-black/50 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Form inner glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

                    <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-6">

                        <motion.div {...formAnimationParams} transition={{ delay: 0.3 }}>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                {...register("name")}
                                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-400/50'} text-white rounded-xl px-4 py-3.5 outline-none transition-colors focus:bg-white/10 shadow-inner`}
                            />
                            {errors.name && <span className="text-red-400 text-xs mt-2 block">{errors.name.message}</span>}
                        </motion.div>

                        <motion.div {...formAnimationParams} transition={{ delay: 0.4 }}>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                {...register("email")}
                                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-400/50'} text-white rounded-xl px-4 py-3.5 outline-none transition-colors focus:bg-white/10 shadow-inner`}
                            />
                            {errors.email && <span className="text-red-400 text-xs mt-2 block">{errors.email.message}</span>}
                        </motion.div>

                        <motion.div {...formAnimationParams} transition={{ delay: 0.5 }}>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Interested In</label>
                            <div className="relative">
                                <select
                                    id="service"
                                    {...register("service")}
                                    className="w-full bg-white/5 border border-white/10 focus:border-cyan-400/50 text-white rounded-xl px-4 py-3.5 outline-none transition-colors focus:bg-white/10 appearance-none shadow-inner"
                                >
                                    <option value="Freelance" className="bg-black text-white">Freelance Project</option>
                                    <option value="Mentorship" className="bg-black text-white">Mentorship</option>
                                    <option value="Collaboration" className="bg-black text-white">Collaboration</option>
                                    <option value="Other" className="bg-black text-white">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...formAnimationParams} transition={{ delay: 0.6 }}>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Hello Hanzla! I would highly recommend reaching out regarding..."
                                {...register("message")}
                                className={`w-full bg-white/5 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-cyan-400/50'} text-white rounded-xl px-4 py-3.5 outline-none transition-colors focus:bg-white/10 shadow-inner resize-none`}
                            />
                            {errors.message && <span className="text-red-400 text-xs mt-2 block">{errors.message.message}</span>}
                        </motion.div>

                        <motion.div {...formAnimationParams} transition={{ delay: 0.7 }} className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                            >
                                {/* Button active glow tracking */}
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" size={24} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message
                                    </>
                                )}
                            </button>
                        </motion.div>

                    </form>
                </div>
            </motion.div>

        </div>
    );
}

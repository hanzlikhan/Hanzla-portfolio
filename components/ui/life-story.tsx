"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const storyTimeline = [
    {
        title: "Early Childhood in a Small Village",
        content: "I belong to a small village in Punjab province, Pakistan, near Dera Ghazi Khan. My home is in a quiet rural area where life is simple and close to nature. In my early childhood, I studied in small village schools. I often refused to go to school and was very stubborn about it. But my family wanted me to get a good education, so they sent me forcefully every day.",
        image: "/images/life-story/village-home.jpg",
        alt: "A peaceful rural Punjab village scene with mud houses and fields"
    },
    {
        title: "Moving to the City for Better Education",
        content: "After passing 5th class, my family admitted me to a better school in the city called Prime School. We didn't have our own house there, so I stayed with relatives for 4 years and continued my studies. In 2019, I passed Matriculation with 983/1100 marks.",
        image: "/images/life-story/city-school.jpg",
        alt: "Children studying in a small rural or city school classroom"
    },
    {
        title: "Sports and Fun in Childhood",
        content: "During Matric, our favorite activity was playing cricket whenever we got time. We loved the game a lot. One moment I will never forget is when we skipped academy to play cricket, and the school principal came and punished us for not attending. We also played common village games like hide and seek.",
        image: "/images/life-story/cricket-village.jpg",
        alt: "Boys playing cricket in a rural Punjab village field"
    },
    {
        title: "Boarding School Life",
        content: "After Matric, I joined a boarding school: Rashid Minhas Higher Secondary School in Ali Pur. There, everything followed a strict routine – from sleeping and eating to playing and classes. I learned a lot about discipline. I studied there for two years and passed in 2021 with 984/1100 marks. My family wanted me to become a doctor, so I attempted MDCAT, but unfortunately, I couldn't clear it.",
        image: "/images/life-story/boarding-school.jpg",
        alt: "Students in a boarding school dormitory or routine classroom in Pakistan"
    },
    {
        title: "University Journey and Discovering Computer Science",
        content: "For university admission, I was the first in my family to go to higher education, so guidance was limited. Everyone gave different advice. I first took admission in Microbiology at University of Okara and studied there for one year. But I realized it wasn't for me – I wanted practical struggle and hands-on work. Seeing my computer science friends in the hostel working all day on laptops motivated me. I decided to switch to Computer Science and took admission at Government College University Faisalabad (GCUF). When I entered this field, I knew nothing – it was my first time turning on a laptop. Slowly, my interest grew, and I started learning. A year later, I met Sir Ahmad Jaja (a tutor at Sylani Mass IT Welfare), who guided me properly. After that, I learned programming and kept building skills. Alhamdulillah, today I am in my last semester.",
        image: "/images/life-story/university-hostel.jpg",
        alt: "Pakistani university students in hostel working on laptop (computer science life)"
    }
];

export function LifeStory() {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10 border-t border-white/5 mt-16">
            {/* Background glowing effects for the section */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 drop-shadow-lg">
                    My Life Story
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            </motion.div>

            <div className="space-y-12">
                {storyTimeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="glass bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden group hover:border-cyan-400/30 transition-all duration-500 relative"
                    >
                        {/* Decorative background glow for each card */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors relative z-10">
                            {item.title}
                        </h3>

                        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                            <p className="text-white/80 leading-relaxed text-base md:text-lg flex-1">
                                {item.content}
                            </p>

                            {/* Image Container with Glow Borders */}
                            <div className="w-full md:w-2/5 shrink-0 relative aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,245,255,0.05)] group-hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] border border-white/10 group-hover:border-cyan-400/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

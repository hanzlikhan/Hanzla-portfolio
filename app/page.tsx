"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ConfettiButton } from "@/components/ui/confetti-btn";
import { FloatingIcon } from "@/components/ui/floating-icons";
import { TiltImage } from "@/components/ui/tilt-image";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { SkillsMarquee } from "@/components/ui/skills-marquee";
import { SkillsTabs } from "@/components/ui/skills-tabs";
import { DigitalFTEsCard } from "@/components/ui/digital-ftes-card";
import { ProjectsShowcase } from "@/components/ui/projects-showcase";
import { ExperienceTimeline } from "@/components/ui/experience-timeline";
import { AchievementsGrid } from "@/components/ui/achievements-grid";
import { ReferencesCard } from "@/components/ui/references-card";
import { ContactSection } from "@/components/ui/contact-section";
import { Footer } from "@/components/ui/footer";
import { LifeStory } from "@/components/ui/life-story";
import { Code, Terminal, BrainCircuit, Rocket, Database, Layers, ChevronDown } from "lucide-react";

const aboutSentences = [
  "I'm Muhammad Hanzla, a passionate Software Engineer and Tech Trainer who loves turning complex challenges into elegant, intelligent solutions.",
  "From leading an international team to 1st place at Harvard’s CS50x Puzzle Day 2025 (solving 9/9 puzzles) to mentoring 100+ students worldwide as a Stanford Code in Place Section Leader, I’ve always combined technical excellence with a passion for teaching.",
  "I’ve solved 300+ LeetCode problems, trained underprivileged students in DSA at iCodeGuru, and developed CrisisPilot — my real-time multi-agent disaster response system that secured 4th place at Pak Angel Generative AI Hackathon. I also actively participate in 20+ global AI hackathons on lablab.ai.",
  "Currently pursuing BS Computer Science at Government College University Faisalabad (CGPA 3.60/4.00), I specialize in Generative AI, Agentic Systems (LangChain, LangGraph, Phidata), RAG, and modern full-stack development. When I’m not coding, you’ll find me teaching Computer Science to Grades 9–12 or exploring NASA space data with AI.",
  "Let’s build something meaningful together."
];

const bioSentences = [
  "I'm Muhammad Hanzla — Software Engineer & Tech Trainer.",
  "Harvard CS50x Puzzle Day 2025 1st Place • Stanford Section Leader • CrisisPilot (Pak Angel AI Hackathon 4th Place) • 300+ LeetCode • Building intelligent multi-agent systems with LangChain, Groq & real-time AI."
];

export default function Home() {
  const [showLifeStory, setShowLifeStory] = useState(false);

  return (
    <main className="animatable min-h-screen bg-transparent text-foreground overflow-x-hidden selection:bg-neon-purple selection:text-white pb-32">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 overflow-hidden pt-20"
      >
        {/* Floating Particles / Ambient Orbs specific to Hero */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] z-0 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-neon-purple/10 rounded-full blur-[150px] z-0 pointer-events-none"
        />

        {/* Floating Tech Icons */}
        <FloatingIcon className="top-[15%] left-[20%] text-neon-cyan" delay={0} duration={6} yOffset={30}>
          <Terminal size={32} className="opacity-80 drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]" />
        </FloatingIcon>

        <FloatingIcon className="bottom-[25%] left-[15%] text-neon-purple" delay={1.5} duration={7} yOffset={40}>
          <BrainCircuit size={40} className="opacity-80 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
        </FloatingIcon>

        <FloatingIcon className="top-[25%] right-[15%] text-neon-cyan" delay={0.8} duration={5} yOffset={-25}>
          <Code size={36} className="opacity-80 drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]" />
        </FloatingIcon>

        <FloatingIcon className="bottom-[20%] right-[20%] text-white" delay={2.2} duration={8} yOffset={-35}>
          <Database size={28} className="opacity-60 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </FloatingIcon>

        <FloatingIcon className="top-[45%] right-[5%] text-neon-purple hidden lg:flex" delay={3} duration={6} yOffset={20}>
          <Layers size={24} className="opacity-70 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </FloatingIcon>

        <FloatingIcon className="top-[50%] left-[5%] text-neon-cyan hidden lg:flex" delay={0.4} duration={9} yOffset={-20}>
          <Rocket size={24} className="opacity-70 drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
        </FloatingIcon>

        {/* Central Content Glass Panel */}
        <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center p-8 md:p-12 lg:p-16 rounded-[2rem] glass bg-black/20 border border-white/10 shadow-2xl backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px w-1/2 mx-auto bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

          {/* Hero Headline */}
          <h1 className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold text-5xl md:text-7xl lg:text-[5rem] mb-8 tracking-tight flex items-center justify-center w-full leading-tight drop-shadow-sm min-h-[120px] md:min-h-[160px] lg:min-h-[100px] text-center">
            Hanzla – AI-Powered Full-Stack Engineer
          </h1>

          {/* Staggered Bio Fade */}
          <div className="flex flex-col gap-3 text-left w-full max-w-3xl mx-auto mb-12">
            {bioSentences.map((sentence, index) => {
              // Highlight specific keywords in the text
              const highlightedText = sentence
                .replace("Software Engineer & Tech Trainer", "<span class='text-neon-cyan font-semibold'>Software Engineer & Tech Trainer</span>")
                .replace("Harvard CS50x Puzzle Day 2025 1st Place", "<span class='text-amber-400 font-semibold'>Harvard CS50x Puzzle Day 2025 1st Place</span>")
                .replace("Stanford Section Leader", "<span class='text-neon-purple font-semibold'>Stanford Section Leader</span>")
                .replace("CrisisPilot (Pak Angel AI Hackathon 4th Place)", "<span class='text-rose-400 font-semibold'>CrisisPilot (Pak Angel AI Hackathon 4th Place)</span>")
                .replace("300+ LeetCode", "<span class='text-yellow-500 font-semibold'>300+ LeetCode</span>")
                .replace("LangChain, Groq & real-time AI", "<span class='text-neon-cyan font-semibold text-glow-cyan'>LangChain, Groq & real-time AI</span>");

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 2.5 + index * 0.15, // Delay until typing roughly finishes
                    ease: "easeOut",
                  }}
                  className={`text-base md:text-lg lg:text-xl text-muted-foreground/90 leading-relaxed ${index === 0 ? "mt-4 font-medium text-white/90" : "text-center font-medium mt-2 max-w-2xl mx-auto"
                    }`}
                  dangerouslySetInnerHTML={{ __html: highlightedText }}
                />
              );
            })}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.5, ease: "easeOut" }} // Delay after bio
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg neon-glow-cyan">
              Explore Projects
            </MagneticButton>

            <ConfettiButton
              onClick={() => window.open('/cv.pdf', '_blank')}
              className="glass border border-white/20 hover:bg-white/10 text-foreground font-semibold px-8 py-4 text-lg transition-colors"
            >
              View CV
            </ConfettiButton>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-neon-cyan transition-colors z-20 cursor-pointer hidden md:flex"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={36} className="drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#0a0a1a] to-background py-24 px-6 overflow-hidden">
        {/* Abstract Background for About */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center z-10">

          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {}
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="relative inline-block group mb-8 w-fit"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:300%_auto] animate-gradient mb-2 drop-shadow-lg pb-1">
                  About Hanzla
                </h2>
                <div className="absolute bottom-0 left-0 w-1/3 h-[3px] bg-gradient-to-r from-cyan-400 to-transparent rounded-full transition-all duration-500 group-hover:w-full"></div>
              </motion.div>

              <div className="flex flex-col gap-4 text-left w-full">
                {aboutSentences.map((sentence, index) => {
                  const highlightedText = sentence
                    .replace("Software Engineer and Tech Trainer", "<span class='text-neon-cyan font-semibold'>Software Engineer and Tech Trainer</span>")
                    .replace("1st place at Harvard’s CS50x Puzzle Day 2025", "<span class='text-amber-400 font-semibold'>1st place at Harvard’s CS50x Puzzle Day 2025</span>")
                    .replace("Stanford Code in Place Section Leader", "<span class='text-neon-purple font-semibold'>Stanford Code in Place Section Leader</span>")
                    .replace("300+ LeetCode problems", "<span class='text-yellow-500 font-semibold'>300+ LeetCode problems</span>")
                    .replace("CrisisPilot", "<span class='text-rose-400 font-semibold'>CrisisPilot</span>")
                    .replace("4th place at Pak Angel Generative AI Hackathon", "<span class='text-rose-400 font-bold'>4th place at Pak Angel Generative AI Hackathon</span>")
                    .replace("20+ global AI hackathons on lablab.ai", "<span class='text-blue-400 font-semibold'>20+ global AI hackathons on lablab.ai</span>")
                    .replace("BS Computer Science", "<span class='text-neon-cyan font-semibold'>BS Computer Science</span>")
                    .replace("Generative AI, Agentic Systems (LangChain, LangGraph, Phidata), RAG, and modern full-stack development", "<span class='text-neon-purple font-semibold text-glow-purple'>Generative AI, Agentic Systems (LangChain, LangGraph, Phidata), RAG, and modern full-stack development</span>")
                    .replace("NASA space data with AI", "<span class='text-white font-semibold text-glow-cyan'>NASA space data with AI</span>");

                  return (
                    <motion.p
                      key={index}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.5 } } }}
                      className={`text-base md:text-lg text-muted-foreground/90 leading-relaxed ${index >= 1 && index <= 3 ? "pl-4 md:pl-6 border-l-2 border-neon-cyan/30" : ""
                        } ${index === 0 ? "font-medium text-white/90 mt-2" : ""} ${index === 4 ? "mt-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-xl" : ""
                        }`}
                      dangerouslySetInnerHTML={{ __html: highlightedText }}
                    />
                  );
                })}
              </div>
            </motion.div>

            {/* Stats Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-wrap items-stretch justify-center sm:justify-start gap-3 lg:gap-4 mt-8"
            >
              {/* Stat 1 */}
              <div className="flex-1 min-w-[140px] max-w-[220px] glass p-3 sm:p-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-500 mb-1 drop-shadow-md">
                  <AnimatedCounter value={1} suffix="st" />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium text-center uppercase tracking-wider leading-tight">@ Harvard<br />CS50x</div>
              </div>

              {/* Stat 2 */}
              <div className="flex-1 min-w-[140px] max-w-[220px] glass p-3 sm:p-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-neon-cyan to-blue-400 mb-1 drop-shadow-md">
                  <AnimatedCounter value={100} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium text-center uppercase tracking-wider leading-tight">Students<br />Mentored</div>
              </div>

              {/* Stat 3 */}
              <div className="flex-1 min-w-[140px] max-w-[220px] glass p-3 sm:p-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-neon-purple to-pink-400 mb-1 drop-shadow-md">
                  <AnimatedCounter value={300} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium text-center uppercase tracking-wider leading-tight">LeetCode<br />Solved</div>
              </div>

              {/* Stat 4 */}
              <div className="flex-1 min-w-[140px] max-w-[220px] glass p-3 sm:p-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-1 drop-shadow-md">
                  <AnimatedCounter value={20} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium text-center uppercase tracking-wider leading-tight">Global<br />Hackathons</div>
              </div>

              {/* Stat 5 */}
              <div className="flex-1 min-w-[140px] max-w-[220px] glass p-3 sm:p-4 rounded-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors col-span-2 sm:col-span-1 lg:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-rose-400 to-red-500 mb-1 drop-shadow-md">
                  <AnimatedCounter value={4} suffix="th" />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium text-center uppercase tracking-wider leading-tight">@ Pak Angel<br />AI Hackathon</div>
              </div>
            </motion.div>

            {/* Read My Full Story Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-start sm:justify-start"
            >
              <MagneticButton
                onClick={() => setShowLifeStory(!showLifeStory)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 text-lg neon-glow-cyan shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                {showLifeStory ? "Hide Story" : "Read My Full Story"}
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <TiltImage src="/images/profile.png" alt="Muhammad Hanzla Profile" className="w-full max-w-md aspect-[4/5] object-cover" />
          </motion.div>
        </div>

        {/* Conditionally Render Life Story Component underneath About section */}
        <AnimatePresence>
          {showLifeStory && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full relative overflow-hidden"
            >
              <LifeStory />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="skills" className="min-h-screen flex flex-col items-center pt-24 pb-16 border-t border-white/5 relative bg-gradient-to-b from-background to-[#0a0a1a] overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 mb-12 relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative mb-12 inline-block">
            Skills & Expertise
            <span className="absolute -bottom-3 left-0 w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"></span>
          </h2>
        </div>

        {/* 1. Marquee Section */}
        <div className="w-full mb-20 relative z-10">
          <SkillsMarquee />
        </div>

        {/* 2. Interactive Tabs Grid */}
        <div className="w-full relative z-10">
          <SkillsTabs />
        </div>

        {/* 3. Digital FTEs Spotlight */}
        <div className="w-full px-6 relative z-10">
          <DigitalFTEsCard />
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center pt-24 pb-16 border-t border-white/5 relative bg-[#05050f] overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />

        <div className="w-full flex-col items-center flex relative z-10 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white relative mb-12">
            My Projects
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse"></span>
          </h2>
        </div>

        <ProjectsShowcase />
      </section>

      <section id="experience" className="min-h-screen flex flex-col items-center pt-24 pb-16 border-t border-white/5 relative bg-gradient-to-b from-[#05050f] to-background overflow-hidden w-full">
        {/* Abstract Particle Background Simulation */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />

        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

        <div className="w-full flex-col items-center flex relative z-10 mb-8 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70 relative mb-12 drop-shadow-md text-center max-w-4xl mx-auto tracking-tight">
            Experience & Achievements
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)]"></span>
          </h2>
        </div>

        {/* Timeline Component */}
        <div className="w-full relative z-10">
          <ExperienceTimeline />
        </div>

        {/* Floating Glowing Divider */}
        <div className="w-full max-w-lg mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent my-16 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10" />

        {/* Achievements Grid Component */}
        <div className="w-full relative z-10 mb-8 md:mb-16">
          <AchievementsGrid />
        </div>

        {/* Professional References Component */}
        <ReferencesCard />
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center pt-24 pb-20 border-t border-white/5 relative bg-gradient-to-t from-[#0a0a1a] to-[#05050f] overflow-hidden w-full">
        {/* Contact Background Orbs */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 translate-y-1/2" />

        <div className="w-full flex-col items-center flex relative z-10 mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white relative mb-12 drop-shadow-md text-center max-w-4xl mx-auto tracking-tight">
            Get in Touch
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.5)]"></span>
          </h2>
        </div>

        {/* Contact Content Mount */}
        <ContactSection />
      </section>

      {/* Footer System Mount */}
      <Footer />
    </main>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { MagneticButton } from "./ui/magnetic-button";
import { AnimatedLogo } from "./ui/animated-logo";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [activeHash, setActiveHash] = React.useState("#home");

    const handleHire = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Track scroll for navbar transparency/shadow
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Basic active section tracking
            const sections = navLinks.map(link => link.href.substring(1));
            let current = sections[0];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        current = section;
                    }
                }
            }
            setActiveHash(`#${current}`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-md py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">

                    {/* Logo */}
                    <Link href="#home" className="z-50" onClick={() => setMobileMenuOpen(false)}>
                        <AnimatedLogo />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2 md:items-center md:gap-x-1 lg:gap-x-2">
                        {navLinks.map((link) => {
                            const isActive = activeHash === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-active"
                                            className="absolute inset-0 z-0 rounded-md bg-white/5"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-active-underline"
                                            className="absolute bottom-0 left-3 right-3 h-[2px] bg-neon-cyan neon-glow-cyan"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Action Icons & Mobile Toggle */}
                    <div className="flex items-center gap-4 z-50">
                        <div className="hidden sm:block">
                            <ThemeToggle />
                        </div>

                        <div className="hidden md:block">
                            <MagneticButton onClick={handleHire} className="bg-primary text-primary-foreground hover:bg-primary/90 neon-glow-cyan">
                                Hire Me
                            </MagneticButton>
                        </div>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden glass flex h-10 w-10 items-center justify-center rounded-full text-foreground"
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={20} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Slide-in */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 right-0 top-0 z-50 flex w-[250px] flex-col glass bg-black/40 border-l border-white/10 p-6 pt-24 md:hidden"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => {
                                const isActive = activeHash === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="relative text-lg font-medium"
                                    >
                                        <span className={isActive ? "text-neon-cyan text-glow-cyan" : "text-foreground"}>
                                            {link.name}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="mobile-nav-active"
                                                className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neon-cyan neon-glow-cyan"
                                            />
                                        )}
                                    </Link>
                                );
                            })}

                            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-foreground">Theme</span>
                                    <ThemeToggle />
                                </div>
                                <MagneticButton onClick={handleHire} className="bg-primary py-3 font-semibold text-primary-foreground neon-glow-cyan mt-4 w-full">
                                    Hire Me
                                </MagneticButton>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

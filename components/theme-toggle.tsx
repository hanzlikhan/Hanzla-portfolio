"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex h-10 w-10 items-center justify-center rounded-full glass" />
        );
    }

    const isDark = theme === "dark";

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex h-10 w-10 items-center justify-center rounded-full glass text-muted-foreground transition-colors hover:text-foreground focus:outline-none"
            aria-label="Toggle theme"
        >
            <div className="relative h-5 w-5">
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 0 : 1,
                        rotate: isDark ? -90 : 0,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center text-amber-500"
                >
                    <Sun className="h-5 w-5" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        rotate: isDark ? 0 : 90,
                        opacity: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center text-neon-purple text-glow-purple"
                >
                    <Moon className="h-5 w-5" />
                </motion.div>
            </div>
        </motion.button>
    );
}

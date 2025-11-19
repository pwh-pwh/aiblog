import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-blob" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] animate-blob animation-delay-2000" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                        Welcome to the Future of Blogging
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-heading text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
                >
                    Crafting Digital <br />
                    <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
                        Experiences
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Exploring the intersection of design, engineering, and storytelling.
                    Join me on a journey through the modern web.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_var(--primary)]">
                        Start Reading
                    </button>
                    <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
                        View Portfolio
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </motion.div>
        </section>
    );
}

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-600" />
                <span className="font-heading text-xl font-bold tracking-tight">Antigravity</span>
            </div>

            <ul className="hidden md:flex items-center gap-8">
                {[
                    { name: 'Home', href: '/' },
                    { name: 'Blog', href: '/blog' },
                    { name: 'Projects', href: '#projects' },
                    { name: 'About', href: '#about' }
                ].map((item) => (
                    <li key={item.name}>
                        <a
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    </li>
                ))}
            </ul>

            <button className="hidden md:block px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all">
                Subscribe
            </button>
        </motion.nav>
    );
}

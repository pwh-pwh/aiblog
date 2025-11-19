import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ReadingProgressProps {
    target?: string;
}

export default function ReadingProgress({ target = 'body' }: ReadingProgressProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const element = document.querySelector(target);
            if (!element) return;

            const windowHeight = window.innerHeight;
            const documentHeight = element.scrollHeight;
            const scrollTop = window.scrollY;

            const totalHeight = documentHeight - windowHeight;
            const currentProgress = (scrollTop / totalHeight) * 100;

            setProgress(Math.min(100, Math.max(0, currentProgress)));
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, [target]);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.div
                className="h-full bg-gradient-to-r from-primary to-purple-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
            />
        </motion.div>
    );
}

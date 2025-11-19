import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import Fuse from 'fuse.js';

interface SearchResult {
    title: string;
    description: string;
    slug: string;
    category: string;
}

interface SearchModalProps {
    posts: SearchResult[];
}

export default function SearchModal({ posts }: SearchModalProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);

    const fuse = new Fuse(posts, {
        keys: ['title', 'description', 'category'],
        threshold: 0.3,
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (query.length > 0) {
            const searchResults = fuse.search(query).map(result => result.item);
            setResults(searchResults);
        } else {
            setResults([]);
        }
    }, [query]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-start justify-center pt-[20vh] px-4"
                onClick={() => setIsOpen(false)}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-card border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
                        <Search className="w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                        />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="max-h-[400px] overflow-y-auto">
                        {results.length > 0 ? (
                            <div className="p-2">
                                {results.map((result, index) => (
                                    <a
                                        key={result.slug}
                                        href={`/blog/${result.slug}`}
                                        className="block p-4 rounded-xl hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                        {result.category}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">
                                                    {result.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {result.description}
                                                </p>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        ) : query.length > 0 ? (
                            <div className="p-12 text-center text-muted-foreground">
                                No results found for "{query}"
                            </div>
                        ) : (
                            <div className="p-12 text-center text-muted-foreground">
                                Start typing to search articles...
                            </div>
                        )}
                    </div>

                    <div className="px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-4">
                            <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded">↑↓</kbd>
                            <span>Navigate</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded">ESC</kbd>
                            <span>Close</span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

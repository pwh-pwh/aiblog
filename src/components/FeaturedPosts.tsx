import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
    {
        title: "The Evolution of CSS Architecture",
        excerpt: "From BEM to Tailwind, exploring how we style the web and what the future holds for CSS.",
        date: "Nov 19, 2025",
        readTime: "5 min read",
        category: "Engineering",
        image: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)"
    },
    {
        title: "Designing for the Modern Web",
        excerpt: "Why aesthetics matter more than ever in user retention and how to implement premium designs.",
        date: "Nov 15, 2025",
        readTime: "7 min read",
        category: "Design",
        image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        title: "Mastering Framer Motion",
        excerpt: "A deep dive into creating complex animations and interactions in React applications.",
        date: "Nov 10, 2025",
        readTime: "10 min read",
        category: "Tutorial",
        image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
];

export default function FeaturedPosts() {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">Featured Writing</h2>
                        <p className="text-muted-foreground">Latest thoughts on tech and design.</p>
                    </div>
                    <a href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
                        View all posts
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
                        >
                            <div
                                className="h-48 w-full bg-cover bg-center relative overflow-hidden"
                                style={{ background: post.image }}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-medium text-white border border-white/10">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col flex-grow p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-medium text-primary">
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        View all posts
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface Post {
    title: string;
    description: string;
    pubDate: Date;
    category: string;
    heroImage?: string;
    slug: string;
}

interface PostListProps {
    posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
                <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative flex flex-col h-full bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
                >
                    <a href={`/blog/${post.slug}`} className="flex flex-col h-full">
                        <div
                            className="h-48 w-full bg-cover bg-center relative overflow-hidden"
                            style={{ background: post.heroImage || 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)' }}
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
                                    {post.pubDate.toLocaleDateString('en-us', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })}
                                </div>
                                {/* Read time would need to be calculated or passed, omitting for now or static */}
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    5 min read
                                </div>
                            </div>

                            <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                                {post.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-primary">
                                Read Article
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    </a>
                </motion.article>
            ))}
        </div>
    );
}

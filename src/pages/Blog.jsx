import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
    const { t, i18n } = useTranslation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // In a production Vite app with static markdown, we can use import.meta.glob
        // For this implementation, I will simulate the metadata for the 2 required posts
        const allPosts = [
            {
                id: 'java-backend-best-practices',
                title: 'Scalable Java Backend Best Practices',
                excerpt: 'Exploring microservices, Spring Boot optimizations, and clean architecture for modern enterprise systems.',
                date: '2026-02-10',
                author: 'Sai Sri Rama',
                readTime: '5 min',
                lang: 'en'
            },
            {
                id: 'ai-integration-future',
                title: 'AI統合の未来：業務自動化への道',
                excerpt: 'LLMとGenerative AIを活用した業務プロセス自動化の最新トレンドと具体的な実装手法について。',
                date: '2026-02-15',
                author: 'Sai Sri Rama',
                readTime: '8 分',
                lang: 'jp'
            }
        ];

        setPosts(allPosts.filter(post => post.lang === i18n.language));
    }, [i18n.language]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-charcoal mb-12 relative inline-block">
                    {t('nav.blog')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-japanese-red"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {posts.map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link to={`/blog/${post.id}`}>
                                <div className="mb-6 relative overflow-hidden bg-charcoal/5 aspect-video flex items-center justify-center p-12">
                                    <div className="text-charcoal/10 font-bold text-6xl select-none group-hover:scale-110 transition-transform duration-500">
                                        {post.lang === 'en' ? 'BLOG' : 'ブログ'}
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-4">
                                    <span className="flex items-center space-x-1"><Calendar size={12} /> <span>{post.date}</span></span>
                                    <span className="flex items-center space-x-1"><Clock size={12} /> <span>{post.readTime}</span></span>
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-secondary-highlight transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-body leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <span className="text-sm font-bold text-japanese-red flex items-center space-x-2">
                                    <span>{i18n.language === 'en' ? 'Read More' : '詳しく読む'}</span>
                                    <div className="w-4 h-[2px] bg-japanese-red group-hover:w-8 transition-all duration-300"></div>
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Blog;

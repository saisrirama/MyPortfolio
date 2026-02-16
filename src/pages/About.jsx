import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SEO from '../components/SEO/SEO';

const About = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO title={t('about.title')} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-charcoal mb-4 relative inline-block">
                        {t('about.title')}
                        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-japanese-red"></span>
                    </h2>

                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <p className="text-xl text-body leading-relaxed font-medium">
                                {t('about.content')}
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-6">
                                <div>
                                    <p className="text-3xl font-bold text-japanese-red">5+</p>
                                    <p className="text-xs text-body uppercase tracking-wider font-bold">Years Experience</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-japanese-red">20+</p>
                                    <p className="text-xs text-body uppercase tracking-wider font-bold">Features Delivered</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-soft-pink/10 p-8 border border-japanese-red/10 shadow-xl">
                            <h3 className="text-lg font-bold text-charcoal mb-6 uppercase tracking-widest border-b border-charcoal/10 pb-2">
                                Career Highlights
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Spring Boot Microservices Expert",
                                    "PostgreSQL & Optimized DB Design",
                                    "AI-Powered Chatbot Integration",
                                    "CI/CD Mastery with Jenkins",
                                    "Unit Test Coverage Enthusiast (100%)",
                                    "JLPT N3 Certified Engineer"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-body">
                                        <span className="w-1.5 h-1.5 bg-japanese-red rounded-full"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default About;

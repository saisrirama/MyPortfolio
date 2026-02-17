import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl font-bold text-charcoal mb-4 relative inline-block">
                    {t('about.title')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
                </h2>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <p className="text-xl text-body leading-relaxed font-medium">
                            {t('about.content')}
                        </p>
                        <div className="grid grid-cols-2 gap-8 pt-6">
                            <div>
                                <p className="text-3xl font-bold text-primary">5+</p>
                                <p className="text-xs text-body uppercase tracking-wider font-bold">{t('about.exp_years')}</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">20+</p>
                                <p className="text-xs text-body uppercase tracking-wider font-bold">{t('about.features')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-highlight/10 p-8 border border-primary/10 shadow-xl">
                        <h3 className="text-lg font-bold text-charcoal mb-6 uppercase tracking-widest border-b border-charcoal/10 pb-2">
                            {t('about.highlights_title')}
                        </h3>
                        <ul className="space-y-4">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <li key={num} className="flex items-center space-x-3 text-body">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    <span>{t(`about.highlight_${num}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;

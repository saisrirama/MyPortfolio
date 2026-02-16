import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO />
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Subtle Background Decoration */}
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-soft-pink/20 rounded-l-full blur-3xl opacity-50" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <p className="text-japanese-red font-bold tracking-widest uppercase text-sm mb-4">
                            Hello, I am
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 tracking-tight">
                            Sai Sri Rama <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-charcoal/60">
                                Khandavilli
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-charcoal/80 mb-8 font-medium">
                            {t('hero.title')}
                        </h2>
                        <p className="text-lg text-body mb-10 leading-relaxed max-w-2xl">
                            {t('hero.subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link
                                to="/projects"
                                className="w-full sm:w-auto px-8 py-4 bg-japanese-red text-white font-bold rounded-sm flex items-center justify-center space-x-2 hover:bg-japanese-red/90 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                            >
                                <span>{t('hero.cta_projects')}</span>
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href="/Sai_Sri_Rama_Resume.pdf"
                                download
                                className="w-full sm:w-auto px-8 py-4 border-2 border-charcoal text-charcoal font-bold rounded-sm flex items-center justify-center space-x-2 hover:bg-charcoal hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                <Download size={18} />
                                <span>{t('hero.cta_resume')}</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;

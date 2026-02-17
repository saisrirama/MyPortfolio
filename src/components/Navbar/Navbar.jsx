import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Highlight active section based on scroll position
            const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'projects', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'jp' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.home'), id: 'home' },
        { name: t('nav.about'), id: 'about' },
        { name: t('nav.skills'), id: 'skills' },
        { name: t('nav.experience'), id: 'experience' },
        { name: t('nav.certifications'), id: 'certifications' },
        { name: t('nav.projects'), id: 'projects' },
        { name: t('nav.contact'), id: 'contact' },
    ];

    const activeLink = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-xl font-bold text-charcoal tracking-tight">
                        Sai Sri Rama <span className="text-primary">Khandavilli</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === link.id ? 'text-primary border-b-2 border-primary' : 'text-body'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-charcoal/20 hover:border-primary hover:text-primary transition-all"
                        >
                            <Globe size={16} />
                            <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'JP' : 'EN'}</span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-body hover:text-primary transition-colors"
                        >
                            <Globe size={20} />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-charcoal focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-charcoal/5 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-3 text-base font-medium transition-colors ${activeSection === link.id ? 'text-primary bg-primary/5' : 'text-body hover:text-primary hover:bg-primary/5'} rounded-md`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

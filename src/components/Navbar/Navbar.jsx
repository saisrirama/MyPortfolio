import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'jp' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.skills'), path: '/skills' },
        { name: t('nav.experience'), path: '/experience' },
        { name: t('nav.certifications'), path: '/certifications' },
        { name: t('nav.projects'), path: '/projects' },
        { name: t('nav.blog'), path: '/blog' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const activeLink = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-charcoal tracking-tight">
                        Sai Sri Rama <span className="text-japanese-red">Khandavilli</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-japanese-red ${activeLink(link.path) ? 'text-japanese-red border-b-2 border-japanese-red' : 'text-body'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-charcoal/20 hover:border-japanese-red hover:text-japanese-red transition-all"
                        >
                            <Globe size={16} />
                            <span className="text-xs font-bold uppercase">{i18n.language === 'en' ? 'JP' : 'EN'}</span>
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-body hover:text-japanese-red transition-colors"
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
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-3 text-base font-medium transition-colors ${activeLink(link.path) ? 'text-japanese-red bg-japanese-red/5' : 'text-body hover:text-japanese-red hover:bg-japanese-red/5'} rounded-md`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

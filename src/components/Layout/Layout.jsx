import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <footer className="bg-charcoal text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <div>
                            <p className="text-lg font-bold">Sai Sri Rama Khandavilli</p>
                            <p className="text-white/60 text-sm mt-1">{t('hero.title')}</p>
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="https://github.com/saisrirama" target="_blank" rel="noopener noreferrer" className="hover:text-japanese-red transition-colors">GitHub</a>
                            <a href="https://www.linkedin.com/in/sai-sri-rama-k/" target="_blank" rel="noopener noreferrer" className="hover:text-japanese-red transition-colors">LinkedIn</a>
                            <a href="mailto:saisrirama.apk@gmail.com" className="hover:text-japanese-red transition-colors">Email</a>
                        </div>
                        <p className="text-white/40 text-xs text-center md:text-right">
                            © {new Date().getFullYear()} Sai Sri Rama Khandavilli. <br />
                            {t('contact.bristol')}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    const socialLinks = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            href: "mailto:saisrirama.apk@gmail.com",
            color: "hover:text-primary hover:border-primary"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            href: "https://linkedin.com/in/sai-sri-rama-k/",
            color: "hover:text-primary hover:border-primary"
        },
        {
            icon: <Github size={24} />,
            label: "GitHub",
            href: "https://github.com/saisrirama",
            color: "hover:text-primary hover:border-primary"
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-4xl font-bold text-charcoal mb-4 relative inline-block">
                    {t('contact.title')}
                    <span className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-primary"></span>
                </h2>

                <div className="max-w-3xl mx-auto mt-16 flex flex-col items-center">
                    <div className="grid grid-cols-3 gap-8 md:gap-16 mb-20">
                        {socialLinks.map((link, idx) => (
                            <motion.a
                                key={idx}
                                href={link.href}
                                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                whileHover={{ y: -5 }}
                                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border border-charcoal/10 rounded-none bg-white text-body transition-all duration-300 shadow-sm hover:shadow-xl ${link.color}`}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="p-10 bg-primary text-white shadow-2xl w-full max-w-2xl transform -rotate-1">
                        <h4 className="font-bold text-xl mb-4 tracking-tight">
                            {t('contact.availability_title')}
                        </h4>
                        <p className="text-white/90 text-md leading-relaxed">
                            {t('contact.availability_text')}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;

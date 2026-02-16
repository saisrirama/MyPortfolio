import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real implementation, integrate EmailJS here
        setStatus('Thank you! Your message has been sent (Demo).');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-charcoal mb-16 relative inline-block">
                    {t('contact.title')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-japanese-red"></span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold text-charcoal mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:saisrirama.apk@gmail.com" className="flex items-center space-x-4 group text-body hover:text-japanese-red transition-colors">
                                    <div className="w-12 h-12 bg-white border border-charcoal/10 flex items-center justify-center rounded-sm group-hover:bg-soft-pink/20 group-hover:border-japanese-red/20 transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium">saisrirama.apk@gmail.com</span>
                                </a>
                                <a href="https://linkedin.com/in/sai-sri-rama-k/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group text-body hover:text-japanese-red transition-colors">
                                    <div className="w-12 h-12 bg-white border border-charcoal/10 flex items-center justify-center rounded-sm group-hover:bg-soft-pink/20 group-hover:border-japanese-red/20 transition-all">
                                        <Linkedin size={20} />
                                    </div>
                                    <span className="font-medium">linkedin.com/in/sai-sri-rama-k/</span>
                                </a>
                                <a href="https://github.com/saisrirama" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group text-body hover:text-japanese-red transition-colors">
                                    <div className="w-12 h-12 bg-white border border-charcoal/10 flex items-center justify-center rounded-sm group-hover:bg-soft-pink/20 group-hover:border-japanese-red/20 transition-all">
                                        <Github size={20} />
                                    </div>
                                    <span className="font-medium">github.com/saisrirama</span>
                                </a>
                                <div className="flex items-center space-x-4 text-body">
                                    <div className="w-12 h-12 bg-white border border-charcoal/10 flex items-center justify-center rounded-sm">
                                        <MapPin size={20} />
                                    </div>
                                    <span className="font-medium">Bristol, United Kingdom</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-japanese-red text-white shadow-xl">
                            <h4 className="font-bold text-lg mb-2">Availability</h4>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Currently open to new opportunities and collaborations in Java Backend, Cloud ML, and AI solutions.
                            </p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 border border-charcoal/5 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">{t('contact.name')}</label>
                                    <input
                                        required
                                        type="text"
                                        className="w-full border-b border-charcoal/10 py-3 focus:outline-none focus:border-japanese-red transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">{t('contact.email')}</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full border-b border-charcoal/10 py-3 focus:outline-none focus:border-japanese-red transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-charcoal/40 mb-2">{t('contact.message')}</label>
                                <textarea
                                    required
                                    rows="5"
                                    className="w-full border-b border-charcoal/10 py-3 focus:outline-none focus:border-japanese-red transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-charcoal text-white font-bold flex items-center justify-center space-x-3 hover:bg-japanese-red transition-colors group"
                            >
                                <span>{t('contact.send')}</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                            {status && <p className="text-sm text-green-600 font-medium text-center">{status}</p>}
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;

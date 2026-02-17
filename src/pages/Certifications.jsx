import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Github } from 'lucide-react';

const Certifications = () => {
    const { t } = useTranslation();

    const certs = [
        {
            id: 'google',
            icon: <Award className="text-primary" />,
            link: "https://www.credly.com/badges/8ade4eb3-16d5-4604-b14f-a6371980fe29/linked_in_profile"
        },
        {
            id: 'jlpt',
            icon: <Award className="text-primary" />,
            link: "https://www.credential.net/d66b303e-cceb-44c8-924d-2a97f8352d97?username=saisriramakhandavilli"
        },
        {
            id: 'cisco',
            icon: <Award className="text-primary" />
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-charcoal mb-12 relative inline-block">
                    {t('nav.certifications')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-white border border-charcoal/5 shadow-sm flex items-start space-x-4 hover:border-primary/40 transition-all group relative"
                        >
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-4 right-4 text-charcoal/20 hover:text-primary transition-colors"
                                    title="View Credential"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            )}
                            <div className="mt-1">{cert.icon}</div>
                            <div className="pr-6">
                                <h3 className="text-lg font-bold text-charcoal leading-tight mb-2">
                                    {t(`certs.${cert.id}.title`)}
                                </h3>
                                <p className="text-sm text-body font-medium">
                                    {t(`certs.${cert.id}.issuer`)}
                                </p>
                                <p className="text-xs text-body/60 mt-1">
                                    {t(`certs.${cert.id}.date`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certifications;

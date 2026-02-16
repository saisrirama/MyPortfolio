import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Github } from 'lucide-react';

const Certifications = () => {
    const { t } = useTranslation();

    const certs = [
        {
            title: "Google Cloud Certified: Professional Machine Learning Engineer",
            issuer: "Google Cloud",
            year: "2024",
            icon: <Award className="text-primary-accent" />
        },
        {
            title: "Japanese Language Proficiency Test (JLPT) N3",
            issuer: "JEES",
            year: "2023",
            icon: <Award className="text-primary-accent" />
        },
        {
            title: "Winner – Cisco Interstate Hackathon",
            issuer: "Cisco",
            year: "2019",
            icon: <Award className="text-primary-accent" />
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
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-japanese-red"></span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-6 bg-white border border-charcoal/5 shadow-sm flex items-start space-x-4 hover:border-japanese-red/40 transition-all"
                        >
                            <div className="mt-1">{cert.icon}</div>
                            <div>
                                <h3 className="text-lg font-bold text-charcoal leading-tight mb-2">{cert.title}</h3>
                                <p className="text-sm text-body">{cert.issuer} • {cert.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certifications;

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            id: 'tcs',
            highlights: [1, 2, 3, 4, 5, 6]
        },
        {
            id: 'spikewell',
            highlights: [1, 2, 3]
        },
        {
            id: 'ctrtc',
            highlights: [1, 2]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-charcoal mb-16 relative inline-block">
                    {t('experience.title')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
                </h2>

                <div className="relative border-l-2 border-charcoal/10 ml-4 md:ml-0">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="mb-16 ml-8 relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal">{t(`experience.${exp.id}.role`)}</h3>
                                    <p className="text-primary font-medium">{t(`experience.${exp.id}.company`)}</p>
                                </div>
                                <div className="mt-2 md:mt-0 text-body font-bold text-sm bg-highlight/20 px-3 py-1 rounded-full w-fit">
                                    {t(`experience.${exp.id}.period`)}
                                </div>
                            </div>

                            <ul className="space-y-3 mt-6">
                                {exp.highlights.map((hNum, hIdx) => (
                                    <li key={hIdx} className="text-body flex items-start space-x-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></span>
                                        <span>{t(`experience.${exp.id}.h${hNum}`)}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Experience;

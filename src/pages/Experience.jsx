import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Experience = () => {
    const { t } = useTranslation();

    const experiences = [
        {
            company: "Tata Consultancy Services (TCS)",
            role: "Java Full Stack Developer",
            period: "Oct 2020 – Nov 2025",
            highlights: [
                "Resolved 20+ defects per release cycle in Agile environment.",
                "Developed 20+ application features using Java, Spring Boot, and Angular.",
                "Built AI-powered chatbot using Python Django and LLMs, reducing manual query handling by 30–40%.",
                "Designed Relational database schemas in PostgreSQL with Hibernate.",
                "Reduced manual release effort by 30–40% using integrated GitLab CI/CD pipelines.",
                "Authored unit test suites with 100% code coverage."
            ]
        },
        {
            company: "Spikewell Ltd.",
            role: "Business Intelligence Intern",
            period: "Sep 2019 – Nov 2019",
            highlights: [
                "Engineered healthcare conversational system with Azure Bot Service.",
                "Reduced patient wait times by 35% through encrypted data flows.",
                "Produced Power BI dashboards increasing reporting efficiency by 50%."
            ]
        },
        {
            company: "Central Tool Room & Training Centre",
            role: "AI/ML Intern",
            period: "Jun 2019",
            highlights: [
                "Constructed behavioral-cloning framework with TensorFlow/Keras.",
                "Achieved 90–95% imitation accuracy in lane-tracking simulations."
            ]
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
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-japanese-red"></span>
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
                            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-japanese-red rounded-full border-4 border-white"></div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal">{exp.role}</h3>
                                    <p className="text-japanese-red font-medium">{exp.company}</p>
                                </div>
                                <div className="mt-2 md:mt-0 text-body font-bold text-sm bg-soft-pink/20 px-3 py-1 rounded-full w-fit">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3 mt-6">
                                {exp.highlights.map((item, hIdx) => (
                                    <li key={hIdx} className="text-body flex items-start space-x-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 bg-soft-pink rounded-full shrink-0"></span>
                                        <span>{item}</span>
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

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Server, Layout as LayoutIcon, Cloud, Database, Cpu, Settings } from 'lucide-react';

const Skills = () => {
    const { t } = useTranslation();

    const skillCategories = [
        {
            title: t('skills.backend'),
            icon: <Server className="text-primary" />,
            skills: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Microservices", "Python Django"]
        },
        {
            title: t('skills.frontend'),
            icon: <LayoutIcon className="text-primary" />,
            skills: ["Angular", "React", "Tailwind CSS", "JavaScript ES6+"]
        },
        {
            title: t('skills.cloud_ai'),
            icon: <Cloud className="text-primary" />,
            skills: ["Google Cloud Platform", "Azure Bot Service", "LLM integrations", "TensorFlow", "Keras"]
        },
        {
            title: t('skills.devops'),
            icon: <Settings className="text-primary" />,
            skills: ["Jenkins", "GitLab CI/CD", "Maven", "SonarQube", "JUnit", "Mockito"]
        },
        {
            title: t('skills.database'),
            icon: <Database className="text-primary" />,
            skills: ["PostgreSQL", "SQL", "Database Design", "ORM Mapping"]
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-charcoal mb-4 relative inline-block">
                    {t('skills.title')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
                </h2>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 bg-white border border-charcoal/5 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-highlight/10 rounded-sm group-hover:bg-highlight/20 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-bold text-charcoal">{category.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="text-body flex items-center space-x-2">
                                        <span className="w-1 h-1 bg-charcoal/20 rounded-full"></span>
                                        <span>{skill}</span>
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

export default Skills;

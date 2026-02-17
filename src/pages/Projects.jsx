import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Database, Layout as LayoutIcon } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 'recipe',
            github: "https://github.com/saisrirama/recipe-generator",
            link: "https://saisrirama.github.io/recipe-generator/"
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
                    {t('projects.title')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-charcoal/5 p-8 flex flex-col hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex space-x-2">
                                    {t(`projects.${project.id}.tags`, { returnObjects: true }).map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-highlight/40 px-2 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-body/60 hover:text-primary transition-colors"><Github size={20} /></a>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-body/60 hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors">{t(`projects.${project.id}.title`)}</h3>
                            <p className="text-sm text-body/60 mb-4 font-medium italic">{t(`projects.${project.id}.tech`)}</p>
                            <p className="text-body leading-relaxed mb-8 grow">
                                {t(`projects.${project.id}.description`)}
                            </p>

                            <div className="pt-6 border-t border-charcoal/5 flex items-center justify-between">
                                <span className="text-sm font-bold text-charcoal underline decoration-primary decoration-2 underline-offset-4">{t(`projects.${project.id}.case_study`)}</span>
                                <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

// Helper for ArrowRight inside the same file since I didn't import it
const ArrowRight = ({ className, size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
    </svg>
);

export default Projects;

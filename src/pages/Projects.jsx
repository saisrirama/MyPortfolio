import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Cpu, Database, Layout as LayoutIcon } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: "Recipe Generator",
            tech: "Java, Spring AI, React, Ollama Gemma",
            description: "An AI-powered recipe generation platform that integrates the Ollama Gemma model via Spring AI. Features include prompt handling, inference orchestration, and a responsive React UI for personalized recipe suggestions.",
            github: "https://github.com/saisrirama",
            link: "#",
            tags: ["Artificial Intelligence", "Full Stack", "Spring AI"]
        },
        {
            title: "AI Chatbot System",
            tech: "Python, Django, TensorFlow, Keras",
            description: "Developed and integrated a custom chatbot using LLMs and Generative AI prompt engineering. Implementation reduced manual query handling by 30-40% for TCS client projects.",
            github: "https://github.com/saisrirama",
            link: "#",
            tags: ["NLP", "Machine Learning", "Automation"]
        },
        {
            title: "Healthcare Conversational Bot",
            tech: "Azure Bot Service, Azure Functions, QnA Maker",
            description: "Engineered a healthcare-focused system with encrypted data flows and layered dialogue logic, improving self-service resolution by 25%.",
            github: "https://github.com/saisrirama",
            link: "#",
            tags: ["Azure", "Healthcare", "Bot Framework"]
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
                    {t('nav.projects')}
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-japanese-red"></span>
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
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-[10px] font-bold uppercase tracking-widest text-japanese-red bg-soft-pink/40 px-2 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-4">
                                    <a href={project.github} className="text-body/60 hover:text-japanese-red transition-colors"><Github size={20} /></a>
                                    <a href={project.link} className="text-body/60 hover:text-japanese-red transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-charcoal mb-3 group-hover:text-japanese-red transition-colors">{project.title}</h3>
                            <p className="text-sm text-body/60 mb-4 font-medium italic">{project.tech}</p>
                            <p className="text-body leading-relaxed mb-8 grow">
                                {project.description}
                            </p>

                            <div className="pt-6 border-t border-charcoal/5 flex items-center justify-between">
                                <span className="text-sm font-bold text-charcoal underline decoration-japanese-red decoration-2 underline-offset-4">Case Study</span>
                                <ArrowRight className="text-japanese-red opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
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

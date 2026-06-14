export interface SkillCategory {
  name: string;
  color: string;
  bgColor: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10 border-violet-500/20',
    skills: ['Python', 'FastAPI', 'Django', 'Java', 'Spring Boot', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Frontend',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10 border-cyan-500/20',
    skills: ['React', 'TypeScript', 'Angular', 'Tailwind CSS'],
  },
  {
    name: 'AI & ML',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10 border-amber-500/20',
    skills: ['Agentic AI', 'LangGraph', 'LLM Integration', 'Prompt Engineering', 'RAG', 'Vector Databases', 'Pydantic', 'Gemini', 'DeepSeek'],
  },
  {
    name: 'Cloud & DevOps',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10 border-emerald-500/20',
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Jenkins', 'GitLab'],
  },
];

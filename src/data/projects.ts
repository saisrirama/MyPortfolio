export interface Project {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  impact: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'KnowledgeHub AI',
    tagline: 'RAG-Powered Research Notebook',
    description:
      'A production-ready RAG-powered research notebook enabling users to upload and query PDFs through semantic search, implementing document ingestion, vector embeddings, and citation-backed AI responses across 1,000+ document chunks per knowledge base.',
    features: [
      'PDF upload with document ingestion and chunking',
      'Semantic search via Supabase pgvector and text-embedding-3-small',
      'Hybrid context retrieval optimized to top 6 relevant chunks',
      'Citation-aware prompting to reduce hallucinations',
      'Secure multi-user auth with Supabase Auth and Row-Level Security',
      'Conversational follow-up questions with context retention',
      'Persistent research notebooks with source traceability',
    ],
    impact:
      'Built an end-to-end retrieval pipeline with grounded, citation-aware prompting across 1,000+ document chunks, reducing hallucinations and enabling traceable research workflows.',
    technologies: ['TypeScript', 'React', 'TanStack Start', 'Supabase', 'pgvector', 'RAG', 'Gemini', 'Lovable'],
    github: 'https://github.com/saisrirama/pearl-of-thought',
    demo: 'https://pearl-of-thought.lovable.app/',
    featured: true,
  },
  {
    title: 'Recipe Generator',
    tagline: 'AI-Powered Recipe Creation Platform',
    description:
      'A full-stack AI-powered recipe generation platform that creates personalized recipes from ingredients, cuisine preferences, and dietary restrictions, supporting 12+ dietary tags and reducing meal-planning time by 80%.',
    features: [
      'AI recipe generation from ingredients and cuisine preferences',
      '12+ dietary tags and restriction support',
      '15+ REST API endpoints for recipe CRUD, search, and filtering',
      'JWT authentication with secure user management',
      'Recipe categories, favorites, and saved collections',
      'Structured prompt workflows with AI response validation',
      'Recipe responses delivered in under 3 seconds',
    ],
    impact:
      'Improved recommendation relevance by 30%, reduced inconsistent AI outputs by 25%, and enabled secure management of 100+ user-generated recipes.',
    technologies: ['React', 'FastAPI', 'MongoDB', 'OpenAI LLM', 'JWT Authentication', 'Emergent'],
    github: 'https://github.com/saisrirama/the-recipe-generator',
    demo: 'https://meal-craft-11.preview.emergentagent.com/',
    featured: true,
  },
];

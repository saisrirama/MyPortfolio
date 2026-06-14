export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  description: string;
  contributions: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Senior Full Stack & AI Engineer',
    company: 'Whipcream',
    type: 'Startup Environment',
    period: 'April 2025 – Present',
    description:
      'Designed and developed AI-first applications that combine modern frontend experiences with scalable backend architectures.',
    contributions: [
      'Built AI-powered applications leveraging Large Language Models and agent-based workflows.',
      'Developed React frontends and FastAPI backend services for production environments.',
      'Designed end-to-end system architectures from concept to deployment.',
      'Implemented LangGraph-powered agent orchestration workflows.',
      'Created structured AI outputs using Pydantic models for reliability and consistency.',
      'Improved data architecture through database modernization and optimization initiatives.',
      'Integrated third-party platforms and APIs to streamline business operations.',
      'Collaborated directly with founders and stakeholders to define product roadmaps and technical strategy.',
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'LangGraph', 'LLMs', 'Docker', 'Cloud Platforms'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Tata Consultancy Services',
    type: 'Enterprise Software Engineering',
    period: 'October 2020 – November 2025',
    description:
      'Delivered enterprise-grade applications and internal platforms serving large user bases across multiple business functions.',
    contributions: [
      'Developed and maintained scalable web applications and APIs.',
      'Built AI-powered chatbot solutions supporting tens of thousands of users.',
      'Designed RESTful and GraphQL APIs for enterprise integrations.',
      'Optimized PostgreSQL databases to improve application performance and reliability.',
      'Developed CI/CD pipelines and automated deployment workflows.',
      'Worked within microservices architectures using modern backend technologies.',
      'Contributed to cloud-native solutions deployed on AWS infrastructure.',
      'Collaborated with cross-functional teams to deliver high-impact business solutions.',
    ],
    technologies: ['Python', 'Java', 'Spring Boot', 'PostgreSQL', 'AWS', 'Jenkins', 'GitLab', 'REST APIs', 'GraphQL'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Spikewell Ltd.',
    type: 'Internship',
    period: 'September 2019 – November 2019',
    description:
      'Contributed to conversational AI development and cloud-based chatbot solutions.',
    contributions: [
      'Developed a chatbot using Node.js and Azure LUIS.',
      'Integrated Azure QnA Maker for intelligent Q&A capabilities.',
      'Built conversational workflows using Microsoft Bot Framework.',
      'Designed dialog flows and support automation.',
      'Worked on cloud-based conversational AI solutions.',
    ],
    technologies: ['Node.js', 'Azure LUIS', 'Azure QnA Maker', 'Microsoft Bot Framework'],
  },
  {
    role: 'AI Engineering Intern',
    company: 'CTTC',
    type: 'Internship',
    period: 'June 2019',
    description:
      'Applied machine learning and computer vision to build a self-driving car prototype.',
    contributions: [
      'Developed a self-driving car prototype using CNNs.',
      'Built image-processing pipelines.',
      'Applied machine learning and computer vision techniques.',
      'Improved autonomous navigation performance.',
      'Strengthened AI and software engineering fundamentals.',
    ],
    technologies: ['Python', 'TensorFlow', 'CNNs', 'Computer Vision', 'OpenCV'],
  },
];

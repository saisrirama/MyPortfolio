export interface Certification {
  title: string;
  issuer: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: 'Google Cloud Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    description:
      'Demonstrates expertise in designing, building, and deploying machine learning solutions on Google Cloud.',
    icon: 'cloud',
  },
  {
    title: 'Deep Learning Certification',
    issuer: 'Deep Learning Specialization',
    description:
      'Practical training in deep learning architectures and model development.',
    icon: 'brain',
  },
  {
    title: 'AI for Real-World Applications',
    issuer: 'AI Training Program',
    description:
      'Advanced training focused on applying AI technologies to solve business challenges.',
    icon: 'cpu',
  },
  {
    title: 'Software Engineering Simulation',
    issuer: 'Engineering Program',
    description:
      'Hands-on experience with software engineering best practices and enterprise development workflows.',
    icon: 'code',
  },
];

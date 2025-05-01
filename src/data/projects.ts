import { kebabCase } from 'lodash-es'; // Helper to generate slugs

export interface Project {
  id: number;
  slug: string; // Added slug for routing
  title: string;
  description: string;
  imageUrl?: string; // Make imageUrl optional
  projectUrl?: string; // Optional link to the live project
  repoUrl?: string; // Optional link to the code repository
  internalUrl?: string; // Added for internal routing
  // Add a field for more detailed markdown content later?
  // detailMarkdown?: string;
}

// Helper function to create project objects with slugs
function createProject(projectData: Omit<Project, 'slug'>): Project {
  return {
    ...projectData,
    slug: kebabCase(projectData.title), // Auto-generate slug
  };
}

export const projects: Project[] = [
  createProject({
    id: 1,
    title: 'Forgd.com',
    description: 'A comprehensive platform offering free tools for blockchain builders, including economic modeling and market data analysis.',
    imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Forgd.com',
    projectUrl: 'https://www.forgd.com/',
  }),
  createProject({
    id: 2,
    title: 'Expense Sorted FYM', // Adjusted title slightly for uniqueness if needed
    description: 'Personal finance tool using AI expense categorization and runway calculation to help users achieve financial independence.',
    imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Expense+Sorted',
  }),
  createProject({
    id: 3,
    title: 'Life Calendar',
    description: 'Visualize your life week by week, from birth to 90. See time elapsed, future weeks, and plan milestones.',
    internalUrl: '/life-calendar',
  }),
  createProject({
    id: 4,
    title: 'The Good Cup',
    description: 'An app to brew coffee and get tailored recipes based on your taste preferences.',
    imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=The+Good+Cup',
  }),
]; 
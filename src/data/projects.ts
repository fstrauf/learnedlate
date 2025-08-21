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
    title: 'Supply Lah',
    description: 'Connects European SMEs directly with vetted Asian suppliers, bypassing expensive intermediaries. Promises 30-50% cost reductions with complete transparency and automated quote management.',
    imageUrl: 'https://www.supplylah.com/og-image.png',
    projectUrl: 'https://www.supplylah.com/',
  }),
  createProject({
    id: 2,
    title: 'Expense Sorted', // Adjusted title slightly for uniqueness if needed
    description: 'Effortless Expense Categorization Across Your Favorite Tools Ditch manual rules. Expense Sorted\'s AI automatically categorizes transactions in seconds within Google Sheets, Lunch Money, Tiller and soon PocketSmith. Explore our API for custom integrations.',
    imageUrl: 'https://www.expensesorted.com/opengraph-image.png?39779eca9e6e8d74',
    projectUrl: 'https://www.expensesorted.com/',
  }),
  createProject({
    id: 3,
    title: 'Forgd.com',
    description: 'A comprehensive platform offering free tools for blockchain builders, including economic modeling and market data analysis.',
    imageUrl: 'https://cdn.prod.website-files.com/6642268ef69d551ef8d67770/66d72c1ba054de8cd491c239_opengraph-forgd.jpg',
    projectUrl: 'https://www.forgd.com/',
  }),
  
  createProject({
    id: 4,
    title: 'Life Calendar',
    description: 'Visualize your life week by week, from birth to 90. See time elapsed, future weeks, and plan milestones.',
    internalUrl: '/life-calendar',
  }),
  // createProject({
  //   id: 4,
  //   title: 'The Good Cup',
  //   description: 'An app to brew coffee and get tailored recipes based on your taste preferences.',
  //   imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=The+Good+Cup',
  // }),
  createProject({
    id: 6,
    title: 'Bubble Biases',
    description: 'An interactive visualization exploring the concept of bubble biases.',
    internalUrl: '/concentric-circles', // This will be used by ProjectDetailPage to show the visualization
  }),
  createProject({
    id: 7,
    title: 'Life Balance Visualizer',
    description: 'An interactive tool to assess and visualize your work-life balance between the fisherman and businessman mindsets.',
    internalUrl: '/life-balance-visualizer',
  }),
  createProject({
    id: 8,
    title: 'NZ Coffee Hub',
    description: 'Discover and compare specialty coffee beans from New Zealand\'s finest roasters with real-time pricing and filtering.',
    internalUrl: '/coffee-roasters',
  }),
]; 
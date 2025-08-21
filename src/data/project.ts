
const learnOrgoChem = {
title: 'Learn Orgo Chem',
description: 'An educational platform to help students learn organic chemistry concepts with interactive lessons, quizzes, and visualizations.',
heroImage: '/LearnOrgoChem.png',
technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Interactive Quizzes', 'Charting / Visualization'],
status: 'In Development • Personal project',
liveLink: 'https://learnorgochem.com',
codeLink: 'https://github.com/Angela/learn-orgo-chem',
sections: [
{
heading: 'Goals & Requirements',
content: 'To provide students with an intuitive and interactive way to learn organic chemistry, including visual aids, quizzes, and clear explanations for each topic.'
},
{
heading: 'Design & Implementation',
content: 'Built with React and Next.js for a responsive, fast interface. Interactive quizzes and diagrams are integrated with charting libraries and modular React components to ensure reusability.'
},
{
heading: 'Key Features',
content: [
'Interactive lessons covering key organic chemistry concepts',
'Quizzes to test understanding and track progress',
'Visualizations for molecules and reactions',
'Responsive UI for desktop and mobile'
]
},
{
heading: 'Upcoming Improvements',
content: [
'Gamification features and progress tracking',
'Integration of user accounts for personalized learning',
'Additional topics and advanced reaction mechanisms',
'Accessibility improvements and multilingual support'
]
}
]
};

const financeTracker = {
  title: 'Finance Tracker',
  description: 'A React + Redux app for viewing, categorizing, and editing financial transactions with UUID-based tracking and monthly/yearly report visualizations.',
  heroImage: '/FinancialApp.png',
  technologies: ['React', 'Redux Toolkit', 'TypeScript', 'UUID', 'Tailwind CSS', 'Charting (Recharts)'],
  status: 'Done • Personal project',
  liveLink: 'https://github.com/AngelaNova/Finance_Project',
  codeLink: 'https://github.com/AngelaNova/Finance_Project',
  sections: [
    {
      heading: 'Goals & Requirements',
      content: 'I built Finance Tracker to simplify day-to-day money management and generate longer-term insights. The goal was a fast UI and clear monthly/yearly summaries.'
    },
    {
      heading: 'Design & Implementation',
      content: 'The app uses Redux Toolkit to avoid prop drilling and provide predictable state mutations. Every expense is assigned a UUID, eliminating collisions. UI is built with Tailwind CSS and charting library for reports.'
    },
    {
      heading: 'Key Features',
      content: [
        'Create, edit, and delete transactions with UUID-backed IDs',
        'Tagging & category filters with persisted state',
        'Report views (monthly / yearly) with charts',
        'Bulk edit & keyboard shortcuts for power users'
      ]
    },
    {
      heading: 'Upcoming Improvements',
      content: [
        'Import/export via CSV',
        'Optional authentication for multi-device sync',
        'Budget targets with alerts',
        'Accessibility audit and unit tests'
      ]
    }
  ]
};

const portfolioProject = {
  title: 'Personal Portfolio',
  description: 'A modern portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects, experience, and skills as a budding software developer.',
  heroImage: '/portfolio.png', 
  technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
  status: 'Active • Personal project',
  liveLink: 'https://angelanovakovic.vercel.app/', 
  codeLink: 'https://github.com/AngelaNova/portfolio', 
  sections: [
    {
      heading: 'Goals & Requirements',
      content: 'I built this portfolio to present my skills, projects, and journey transitioning from a chemistry background to software development. The focus was on a clean, interactive UI and easy navigation.'
    },
    {
      heading: 'Design & Implementation',
      content: 'The website uses Next.js App Router for modern routing, React for component-based architecture, and Tailwind CSS for responsive styling.'
    },
    {
      heading: 'Key Features',
      content: [
        'Home page with hero, intro, and navigation to About/Projects/Contact',
        'About section with dynamically rendered story and images',
        'Projects section displaying project cards with live/demo links',
        'Contact form integrated for easy communication',
      ]
    },
    {
      heading: 'Upcoming Improvements',
      content: [
        'Add dark/light mode toggle',
        'Add blog section or technical articles',
        'Add more about my experience'
      ]
    }
  ]
};


export { learnOrgoChem, financeTracker, portfolioProject };



export const projectSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: learnOrgoChem.title,
    description: learnOrgoChem.description,
    url: learnOrgoChem.liveLink,
    image: learnOrgoChem.heroImage,
    author: {
      "@type": "Person",
      name: "Angela Novakovic",
    },
    keywords: learnOrgoChem.technologies.join(", "),
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: financeTracker.title,
    description: financeTracker.description,
    url: financeTracker.liveLink,
    image: financeTracker.heroImage,
    author: {
      "@type": "Person",
      name: "Angela Novakovic",
    },
    keywords: financeTracker.technologies.join(", "),
  },
  {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: portfolioProject.title,
    description: portfolioProject.description,
    url: portfolioProject.liveLink,
    image: portfolioProject.heroImage,
    author: {
      "@type": "Person",
      name: "Angela Novakovic",
    },
    keywords: portfolioProject.technologies.join(", "),
  },
];

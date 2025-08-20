
const learnOrgoChem = {
title: 'Learn Orgo Chem',
description: 'An educational platform to help students learn organic chemistry concepts with interactive lessons, quizzes, and visualizations.',
heroImage: '/images/projects/learn-orgo-chem-hero.png',
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
  heroImage: '/images/projects/finance-hero.png',
  technologies: ['React', 'Redux Toolkit', 'TypeScript', 'UUID', 'Tailwind CSS', 'Charting (Recharts)'],
  status: 'Active • Personal project',
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


export { learnOrgoChem, financeTracker };

// Then in a page, you can render: <ProjectPage project={financeTracker} />

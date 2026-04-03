import dobiHomeScreen from '../assets/dobinow/home.png'
import dobiBookScreen from '../assets/dobinow/book.png'
import dobiServiceScreen from '../assets/dobinow/service.png'
import dobiProfileScreen from '../assets/dobinow/profile.png'
import dobiReferralScreen from '../assets/dobinow/referral.png'
import dobiTrackOrderScreen from '../assets/dobinow/trackorder.png'
import brainBurstHomeScreen from '../assets/brainburst/quizhome.png'
import brainBurstResultScreen from '../assets/brainburst/result.png'

// Skills shown in the technical arsenal section
export const skills = [
  {
    iconName: 'react',
    title: 'React',
    category: 'Framework',
    description:
      'Building interactive UIs with reusable components, managing state, and handling real-time user interactions.',
  },
  {
    iconName: 'javascript',
    title: 'JavaScript (ES6+)',
    category: 'Language',
    description:
      'Writing clear, functional logic for dynamic applications, including API integration and DOM manipulation.',
  },
  {
    iconName: 'tailwind',
    title: 'Tailwind CSS',
    category: 'Styling',
    description:
      'Creating responsive layouts and consistent UI systems with utility-first styling.',
  },
  {
    iconName: 'routerState',
    title: 'React Router + Zustand',
    category: 'Routing & State',
    description:
      'Managing navigation and lightweight global state for smoother user experiences across pages.',
  },
  {
    iconName: 'tooling',
    title: 'Vite + Git/GitHub',
    category: 'Tooling',
    description:
      'Developing fast, optimized applications and managing version control for project collaboration and deployment.',
  },
]

// Main project cards on the dark project section
export const projects = [
  {
    title: 'DobiNow',
    status: 'In Progress',
    year: '2026',
    role: 'Frontend Developer',
    description:
      'A modern laundry service web app that allows users to schedule pickups, track orders, and manage services seamlessly.',
    techStack: ['React', 'Tailwind CSS', 'Responsive UI'],
    liveDemo: 'https://dobi-now-laundry-app-q5m2.vercel.app/',
    github: 'https://github.com/BerryMuchocho/DobiNow_Laundry_App',
    screenshot: {
      src: dobiHomeScreen,
      label: 'Home screen',
    },
  },
  {
    title: 'BrainBurst Quiz App',
    status: 'Completed',
    year: '2026',
    role: 'Frontend Developer',
    description:
      'A React quiz application that handles API-driven content, state transitions, loading, retry logic, timing pressure, and result tracking in a clean, responsive UI.',
    techStack: ['JavaScript', 'API', 'Game Logic'],
    liveDemo: 'https://alx-fe-capstone-project-snowy.vercel.app/',
    github: 'https://github.com/BerryMuchocho/alx-fe-capstone-project',
    screenshot: {
      src: brainBurstHomeScreen,
      label: 'Quiz home screen',
    },
  },
]

// Stack overview used in the about section
export const stack = {
  intro:
    "Tools and technologies I've used to build and ship frontend projects, presented in a way that matches where I am right now.",
  groups: [
    {
      title: 'Core Stack',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Tailwind CSS',
        'React Router',
        'Zustand',
        'Vite',
        'Git & GitHub',
      ],
    },
    {
      title: 'Frontend Skills',
      items: [
        'Responsive Design',
        'Component Architecture',
        'State Management',
        'REST API Integration',
        'SPA Routing',
        'Debugging',
        'UI Implementation from Design References',
      ],
    },
    {
      title: 'Currently Learning',
      items: [
        'TypeScript',
        'Testing with Vitest / Testing Library',
        'Accessibility',
        'Advanced React Patterns',
        'Performance Optimization',
      ],
    },
  ],
  proof: [
    'DobiNow: React, Tailwind CSS, routing, and responsive service-booking flows',
    'BrainBurst Quiz App: JavaScript, API integration, game logic, and dynamic UI states',
    'UI Explorations: component systems, layout studies, and polished frontend presentation',
  ],
}

// Editorial project gallery content
export const galleryProjects = [
  {
    title: 'DobiNow',
    eyebrow: 'Project 01',
    subtitle:
      'A clean service-booking experience designed to make laundry scheduling, order tracking, and service management feel effortless.',
    summary:
      'Designed to simplify a practical service workflow with a calm interface, quick booking paths, and clearer order visibility.',
    type: 'dashboard',
    focus: 'Booking flow, service visibility, and a calmer user journey.',
    tags: ['React', 'Service Flow', 'Responsive'],
    outcome: 'Built around a smoother booking-to-tracking journey for everyday users.',
    link: 'https://dobi-now-laundry-app-q5m2.vercel.app/',
    screenshots: [
      { src: dobiHomeScreen, alt: 'DobiNow home screen', fit: 'contain' },
      { src: dobiBookScreen, alt: 'DobiNow booking screen', fit: 'contain' },
      { src: dobiServiceScreen, alt: 'DobiNow service selection screen', fit: 'contain' },
      { src: dobiTrackOrderScreen, alt: 'DobiNow order tracking screen', fit: 'contain' },
      { src: dobiReferralScreen, alt: 'DobiNow referral screen', fit: 'contain' },
      { src: dobiProfileScreen, alt: 'DobiNow profile screen', fit: 'contain' },
    ],
  },
  {
    title: 'BrainBurst Quiz App',
    eyebrow: 'Project 02',
    subtitle:
      'A responsive React quiz interface built around API-driven questions, timed decisions, and clear state feedback.',
    summary:
      'Designed to manage loading, retries, timer pressure, and result tracking in a smooth flow that keeps players focused from question one to final score.',
    type: 'poster',
    focus: 'Fast gameplay, feedback loops, and score-driven interaction.',
    tags: ['JavaScript', 'API', 'Game Logic'],
    outcome: 'Turns live quiz data into a faster, more engaging challenge flow.',
    screenshots: [
      { src: brainBurstHomeScreen, alt: 'BrainBurst Quiz App home screen' },
      { src: brainBurstResultScreen, alt: 'BrainBurst Quiz App results screen', fit: 'contain' },
    ],
    link: 'https://alx-fe-capstone-project-snowy.vercel.app/',
  },
  {
    title: 'UI Explorations',
    eyebrow: 'Project 03',
    subtitle:
      'A curated set of standalone interface sections designed separately and presented as a sideways-scrolling component gallery.',
    type: 'ui-lab',
    focus: 'Component polish, layout hierarchy, and reusable interface thinking.',
    tags: ['UI Design', 'Component Systems', 'Responsive Layout'],
    outcome: 'Shows how separate interface ideas can still feel cohesive when built with one visual system.',
    uiStudies: [
      {
        title: 'Analytics Header',
        label: 'Dashboard',
        style: 'analytics',
        blurb: 'Performance snapshot for weekly growth and engagement.',
      },
      {
        title: 'Pricing Snapshot',
        label: 'Section',
        style: 'pricing',
        blurb: 'A tier comparison area focused on clarity and conversion.',
      },
      {
        title: 'Google Olympics Home',
        label: 'Landing Concept',
        style: 'search',
        blurb: 'A search-home concept featuring an Olympics campaign spotlight.',
      },
      {
        title: 'Login Page',
        label: 'Authentication',
        style: 'login',
        blurb: 'A clean sign-in layout focused on clarity, hierarchy, and ease of entry.',
      },
    ],
    link: 'https://github.com/BerryMuchocho',
  },
]

// Personal details reused across the page
export const profile = {
  brandLabel: 'Stellah / Muchocho',
  initials: 'SM',
  shortName: 'Stellah',
  eyebrow: 'Frontend developer / user-focused builder',
  title: 'Frontend Developer.',
  heroSummary:
    'I care about building products that feel simple to use because the code and design decisions behind them are intentional.',
  skillsIntro:
    'Building responsive, user-focused interfaces with a practical frontend toolset, emphasizing clarity, structure, and real-world usability.',
  // Short story blocks for the about section
  journey: [
    {
      title: '',
      description:
        "I didn't start in tech. My background is in Food Science, where I worked closely with quality, systems, and processes that needed to be precise, reliable, and easy for people to follow. Over time, I became more aware of how much user experience mattered, not just in products, but in the systems people use every day.",
    },
    {
      title: 'The Shift',
      description:
        'That curiosity pushed me toward frontend development. I started noticing how well-designed interfaces could simplify complex workflows, reduce errors, and make tools feel intuitive instead of frustrating. I wanted to build those kinds of experiences myself, not just use them.',
    },
    {
      title: 'Building with Intent',
      description:
        "Through hands-on projects, I've been learning how to translate ideas into responsive, structured interfaces. I focus on clarity, usability, and consistency, drawing from my background where attention to detail and accuracy were critical.",
    },
    {
      title: "Where I'm Going",
      description:
        "I'm currently deepening my frontend skills while building real-world applications that solve practical problems. My goal is simple: create interfaces that feel clear, efficient, and genuinely useful to the people using them.",
    },
  ],
  quote: {
    title: '"Clean interfaces create confidence."',
    description:
      'I care about building products that feel simple to use because the code and design decisions behind them are intentional.',
  },
  aboutCta:
    "I'm open to opportunities where I can contribute as a frontend developer, keep learning, and help build thoughtful digital products.",
  // Contact links used in the nav and footer
  contact: {
    email: 'muchocho13@gmail.com',
    github: 'https://github.com/BerryMuchocho',
    x: 'https://x.com/yourhandle',
  },
}

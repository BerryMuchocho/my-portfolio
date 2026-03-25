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
    liveDemo: 'https://your-dob-now-link.com',
    github: 'https://github.com/BerryMuchocho',
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
      'A fast-paced quiz application with category selection, timer-based gameplay, and dynamic scoring using live API data.',
    techStack: ['JavaScript', 'API', 'Game Logic'],
    liveDemo: 'https://your-quiz-app-link.com',
    github: 'https://github.com/BerryMuchocho/alx-fe-capstone-project',
    screenshot: {
      src: brainBurstHomeScreen,
      label: 'Quiz home screen',
    },
  },
]

// Progress bars used in the about section
export const stack = [
  { name: 'Frontend Architecture', value: 95 },
  { name: 'React Ecosystem', value: 92 },
  { name: 'Tailwind CSS', value: 89 },
  { name: 'Responsive UI Development', value: 90 },
]

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
    screenshots: [
      { src: dobiHomeScreen, alt: 'DobiNow home screen' },
      { src: dobiBookScreen, alt: 'DobiNow booking screen', fit: 'contain' },
      { src: dobiServiceScreen, alt: 'DobiNow service selection screen', fit: 'contain' },
      { src: dobiTrackOrderScreen, alt: 'DobiNow order tracking screen' },
      { src: dobiReferralScreen, alt: 'DobiNow referral screen' },
      { src: dobiProfileScreen, alt: 'DobiNow profile screen' },
    ],
    link: 'https://your-dob-now-link.com',
  },
  {
    title: 'BrainBurst Quiz App',
    eyebrow: 'Project 02',
    subtitle:
      'A playful but structured quiz interface built for speed, clarity, and engaging score-driven interactions.',
    summary:
      'A lightweight trivia experience focused on momentum, fast decisions, and a UI that keeps players oriented as pressure rises.',
    type: 'poster',
    focus: 'Fast gameplay, feedback loops, and score-driven interaction.',
    tags: ['JavaScript', 'API', 'Game Logic'],
    outcome: 'Turns live quiz data into a faster, more engaging challenge flow.',
    screenshots: [
      { src: brainBurstHomeScreen, alt: 'BrainBurst Quiz App home screen' },
      { src: brainBurstResultScreen, alt: 'BrainBurst Quiz App results screen', fit: 'contain' },
    ],
    link: 'https://your-quiz-app-link.com',
  },
  {
    title: 'Responsive UI Studies',
    eyebrow: 'Project 03',
    subtitle:
      'A set of interface explorations focused on responsive layouts, clean structure, and polished frontend presentation.',
    summary:
      'A collection of layout experiments used to sharpen spacing, hierarchy, and responsive decision-making across screen sizes.',
    type: 'mobile',
    focus: 'Layout systems, hierarchy, and mobile-first presentation choices.',
    tags: ['UI Systems', 'Mobile First', 'Layout'],
    outcome: 'Explores how visual clarity can hold up from desktop down to mobile.',
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

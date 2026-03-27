# Frontend Portfolio Project Documentation

## 1. Project Overview

**Project title:** Personal Frontend Developer Portfolio  
**Project type:** Single-page portfolio website  
**Current stack:** React, Vite, TailwindCSS, and custom CSS

This project is a personal frontend portfolio built to present my background, skills, and selected work in a polished and user-focused way. The site combines reusable React components, TailwindCSS utility classes, and custom CSS for more detailed visual styling. It currently highlights projects such as DobiNow, BrainBurst Quiz App, and UI Explorations.

The portfolio is designed to:

* introduce who I am and what I care about as a frontend developer
* showcase projects and screenshots in a structured way
* present my technical stack and learning journey
* provide contact pathways for opportunities and collaboration

---

## 2. What The Project Currently Includes

The application is a single-page React app composed from sections rendered in sequence:

* Navigation bar
* Hero section
* Skills section
* About section
* Curated Work section
* Gallery section
* Footer

The current project data includes:

* **DobiNow** as an in-progress laundry service web app
* **BrainBurst Quiz App** as a completed quiz project with a live deployment
* **UI Explorations** as a set of interface studies presented like a gallery

The site content is driven from a central data file, which makes it easier to update project details, screenshots, and profile information without rewriting component structure.

---

## 3. Technologies Used

This is the real setup currently used in the repository:

* **React** for building the UI with reusable components
* **Vite** for development and production builds
* **TailwindCSS** for section layouts, spacing, buttons, cards, and gradual component styling
* **Custom CSS** in `src/App.css` and `src/index.css` for the remaining detailed visual system and custom mockups
* **npm** for dependency management
* **Git and GitHub** for version control and remote hosting

### Important note about styling

The project is currently in a gradual TailwindCSS conversion stage. A number of major layout and interface pieces now use Tailwind directly in JSX, while some of the more detailed decorative styles and mockup visuals are still handled in `App.css`. This approach keeps the current appearance stable while the codebase is migrated section by section.

---

## 4. System Requirements

To work on this project, the following tools are useful:

* **Operating System:** Windows
* **Code Editor:** Visual Studio Code
* **Runtime Environment:** Node.js
* **Package Manager:** npm
* **Browser:** Google Chrome or another modern browser

To confirm Node.js and npm are installed:

```bash
node -v
npm -v
```

---

## 5. Installation and Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/BerryMuchocho/my-portfolio.git
```

### Step 2: Move into the project directory

```bash
cd my-portfolio/my-portfolio
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the development server

```bash
npm run dev
```

### Step 5: Open the app in the browser

Vite will provide a local development URL, commonly:

```bash
http://localhost:5173
```

### Step 6: Build for production

```bash
npm run build
```

---

## 6. TailwindCSS Setup In This Project

TailwindCSS is now active in the project and is already being used alongside custom CSS.

### Installed packages

* `tailwindcss`
* `@tailwindcss/vite`
* `postcss`
* `autoprefixer`

### Current setup approach

Tailwind is connected through the Vite plugin. In `src/index.css`, only the Tailwind theme and utilities layers are imported. Tailwind's preflight reset is intentionally not applied so that the current portfolio styling remains stable during the migration.

That means:

* Tailwind is actively used in multiple components
* custom CSS still supports the remaining detailed visual pieces
* the existing functionality and overall design are preserved during the conversion

---

## 7. Current Project Structure

Below is the structure that matches the real project more closely:

```bash
my-portfolio/
├── docs/                     # Project notes and supporting documentation
├── my-portfolio/
│   ├── dist/                 # Production build output
│   ├── public/               # Static public assets
│   ├── src/
│   │   ├── assets/           # Project screenshots and images
│   │   ├── components/       # Reusable React components
│   │   ├── data/             # Portfolio content and project data
│   │   ├── App.css           # Main component styling and remaining custom visuals
│   │   ├── App.jsx           # Root application component
│   │   ├── index.css         # Global styles and Tailwind layer imports
│   │   └── main.jsx          # Application entry point
│   ├── package.json
│   └── vite.config.js
```

This structure keeps content, presentation, and reusable UI logic separated in a simple way.

---

## 8. How The App Is Organized

The main application renders its sections from `App.jsx` in this order:

1. `Navbar`
2. `HeroSection`
3. `SkillsSection`
4. `AboutSection`
5. `ProjectsSection`
6. `GallerySection`
7. `Footer`

The portfolio content is pulled from `src/data/portfolioData.js`, which includes:

* profile details
* skills displayed on the page
* featured projects
* gallery projects and screenshots
* stack and journey content used in the About section

This makes the app easier to maintain because content updates can often be made in one place.

### Current styling split

At this stage, the project uses a hybrid styling approach:

* TailwindCSS is used in top-level layout wrappers and several major components
* custom CSS remains in place for detailed art direction, gallery mockups, and visual effects that are still being migrated

This means the project is already using Tailwind in production, but is not yet 100% Tailwind-only.

---

## 9. Featured Projects Reflected In The Current Site

### DobiNow

* Status: In Progress
* Type: Laundry service web app
* Focus: scheduling pickups, tracking orders, and managing services
* Stack shown on the site: React, Tailwind CSS, Responsive UI
* Live link: not deployed yet

### BrainBurst Quiz App

* Status: Completed
* Type: Quiz application
* Focus: category selection, timer-based gameplay, dynamic scoring, and API-driven quiz content
* Stack shown on the site: JavaScript, API, Game Logic
* Live link: `https://alx-fe-capstone-project-snowy.vercel.app/`

### UI Explorations

* Type: Design and interface studies
* Focus: layout hierarchy, reusable interface thinking, and component presentation

---

## 10. Minimal Working Example

The current project is much more developed than a minimal React example, but a simplified version of the app idea looks like this:

```jsx
function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
```

This shows the component-based structure the portfolio is built around.

---

## 11. AI Prompt Journal

AI support was used as a learning and troubleshooting tool during development.

### Prompt 1

**Prompt used:**  
"Explain how React components work in a beginner-friendly way with a simple project example."

**What it helped with:**  
Understanding how to break the portfolio into reusable UI sections.

### Prompt 2

**Prompt used:**  
"Help me structure a personal portfolio website using React components."

**What it helped with:**  
Planning major sections like Hero, About, Skills, Projects, and Contact.

### Prompt 3

**Prompt used:**  
"Why are my React components rendering twice in development?"

**What it helped with:**  
Understanding React StrictMode behavior during development.

### Prompt 4

**Prompt used:**  
"How can I add TailwindCSS without breaking my current CSS design?"

**What it helped with:**  
Understanding how Tailwind could be introduced gradually while preserving the existing interface.

### Reflection

AI helped with:

* learning React concepts faster
* component planning
* debugging
* improving documentation

At the same time, testing and reviewing the actual codebase remained necessary. The final decisions still depended on checking what was true in the project itself.

---

## 12. Common Issues And Fixes

### Issue 1: Components appear to render twice in development

**Cause:**  
React StrictMode in development can intentionally trigger extra renders.

**Fix:**  
Treat this as expected development behavior unless it reveals a real side effect problem.

### Issue 2: Layout shifts or sections look different across screen sizes

**Cause:**  
Responsive layouts often need extra adjustment when sections use grids, cards, images, and long text blocks. A design that looks balanced on desktop can feel cramped or uneven on tablets and smaller screens.

**Fix:**  
Test the interface across multiple screen widths and adjust spacing, grid behavior, text sizing, and wrapping rules. Using responsive utility classes and checking real content instead of placeholders helps reduce layout issues.

### Issue 3: Images or screenshots appear cropped, stretched, or inconsistent

**Cause:**  
Project screenshots and images may have different aspect ratios, sizes, or crop behavior. This can make cards look inconsistent or hide important parts of an image.

**Fix:**  
Use consistent image containers, define how images should fit inside them, and test different screenshots in the actual card or gallery layout. In some cases, separate handling may be needed for decorative images versus interface screenshots.

### Issue 4: Button or link text has poor contrast against the background

**Cause:**  
When styling changes are made, especially during refactoring, text color can become too light or too dark for the button background. This makes calls to action hard to read.

**Fix:**  
Check contrast after any visual update and explicitly define readable text colors for important buttons and links. Primary actions should always stay clearly visible in all states, including hover.

### Issue 5: Project data updates do not appear correctly on the page

**Cause:**  
When content is driven from a shared data file, a small mistake in a field name, missing value, or broken link can affect how a section renders.

**Fix:**  
Review the data structure carefully, make sure component props still match the data shape, and test updates after changing project details, screenshots, or links.

---

## 13. Git Notes For This Repository

At the time of this documentation update:

* Git root: `C:/Users/USER/alx-fe/my-portfolio`
* Current local branch: `master`
* Configured remote: `origin`
* Remote URL: `https://github.com/BerryMuchocho/my-portfolio.git`

If more Git troubleshooting details are needed, they can be kept in a separate support document rather than mixed into the main project overview.

---

## 14. Learning Reflections

This project helped me apply frontend ideas in a more practical and personal way. I worked not only on writing React components, but also on presenting projects clearly, organizing content, handling responsive layout decisions, and refining the visual experience.

Some important lessons from this project:

* React becomes easier to understand when applied to a real interface
* structuring content in reusable components makes updates easier
* custom CSS can provide strong visual control when used intentionally
* Tailwind can be introduced gradually without forcing a full redesign
* hybrid styling can be a practical transition strategy during refactoring
* documentation is most useful when it matches the real project, not just the original plan

---

## 15. References

* React Docs: `https://react.dev/`
* Vite Docs: `https://vite.dev/`
* TailwindCSS Docs: `https://tailwindcss.com/`
* GitHub Docs: `https://docs.github.com/`

---

## 16. Final Note

This documentation reflects the current state of the portfolio more accurately. It describes the actual structure, the real project content, the current deployment status, and the current hybrid TailwindCSS plus custom CSS setup being used during the gradual migration.

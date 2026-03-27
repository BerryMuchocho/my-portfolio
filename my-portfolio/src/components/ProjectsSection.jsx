import ProjectCard from './ProjectCard'

function ProjectsSection({ projects }) {
  return (
    <section
      className="relative mt-6 border border-(--border) bg-[linear-gradient(180deg,rgba(10,19,26,0.94),rgba(7,13,18,0.98)),var(--panel)] px-[clamp(1.25rem,2vw,2rem)] py-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
      id="projects"
    >
      <div className="grid items-center justify-between gap-4 min-[901px]:grid-cols-[1fr_auto]">
        <div>
          <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-(--text-strong)">
            Curated Work
          </p>
        </div>
        <a
          className="text-[0.72rem] uppercase tracking-[0.11em] text-(--accent) transition-colors duration-200 hover:text-(--accent)"
          href="#projects"
        >
          View all
        </a>
      </div>

      <div className="mt-4 grid gap-4 min-[901px]:grid-cols-2">
        {/* Renders the main project cards */}
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            title={project.title}
            status={project.status}
            year={project.year}
            role={project.role}
            description={project.description}
            techStack={project.techStack}
            liveDemo={project.liveDemo}
            github={project.github}
            screenshot={project.screenshot}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection

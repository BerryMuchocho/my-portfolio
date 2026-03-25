import ProjectCard from './ProjectCard'

function ProjectsSection({ projects }) {
  return (
    <section className="panel projects-panel" id="projects">
      <div className="section-heading projects-heading">
        <div>
          <p className="section-kicker">Curated Work</p>
        </div>
        <a className="view-all" href="#projects">
          View all
        </a>
      </div>

      <div className="projects-grid">
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

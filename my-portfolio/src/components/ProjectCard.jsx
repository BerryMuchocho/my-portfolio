function ProjectCard({
  title,
  status,
  year,
  role,
  description,
  techStack,
  liveDemo,
  github,
  screenshot,
  index,
}) {
  const hasScreenshot = Boolean(screenshot)

  return (
    <article className="project-card">
      <div className={`project-preview preview-${index + 1}`}>
        {hasScreenshot ? (
          <img
            className="project-image-shot"
            src={screenshot.src}
            alt={`${title} ${screenshot.label}`}
          />
        ) : (
          <div className="preview-screen">
            <div className="preview-toolbar">
              <span />
              <span />
              <span />
            </div>
            <div className="preview-content">
              <div className="code-lines">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="chart-shape" />
            </div>
          </div>
        )}
      </div>

      {/* Small project details above the main text */}
      <div className="project-topline">
        <span className={`project-status status-${status.toLowerCase().replace(' ', '-')}`}>
          {status}
        </span>
        <span>{year}</span>
        <span>{role}</span>
      </div>

      <div className="project-meta">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>

      {/* Tech tags for the project */}
      <div className="project-tech-stack">
        {techStack.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={liveDemo} target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard

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
  const hasLiveDemo = Boolean(liveDemo)
  const statusKey = status.toLowerCase().replace(' ', '-')
  const statusClasses =
    statusKey === 'in-progress'
      ? 'border-[rgba(112,251,232,0.16)] bg-[rgba(86,240,223,0.1)] text-[#8ff9ec]'
      : 'border-[rgba(112,251,232,0.16)] bg-[rgba(255,255,255,0.05)] text-[#d8fdf7]'
  const linkClasses =
    'inline-flex min-h-[2.25rem] items-center justify-center rounded-[0.8rem] border border-[rgba(112,251,232,0.16)] px-[0.9rem] py-[0.55rem] text-[0.78rem] uppercase tracking-[0.06em] text-[var(--text-strong)] transition-[border-color,background-color,color] duration-200 hover:border-[rgba(112,251,232,0.34)] hover:bg-[rgba(86,240,223,0.08)] hover:text-[var(--accent)]'

  return (
    <article className="group relative overflow-hidden border border-[rgba(112,251,232,0.08)] bg-[linear-gradient(180deg,rgba(11,22,29,0.96),rgba(8,15,20,0.98))] p-4 transition-[transform,border-color,box-shadow,background,backdrop-filter] duration-200 hover:-translate-y-1 hover:border-[rgba(112,251,232,0.3)] hover:bg-[linear-gradient(180deg,rgba(20,36,46,0.82),rgba(10,20,27,0.78))] hover:backdrop-blur-[14px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_36px_rgba(0,0,0,0.24),0_0_0_1px_rgba(112,251,232,0.06)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.04)_40%,rgba(140,255,239,0.14)_50%,rgba(255,255,255,0.04)_60%,transparent_80%)] before:translate-x-[-140%] before:transition-transform before:duration-500 hover:before:translate-x-[140%]">
      <div className={`project-preview preview-${index + 1} aspect-[1.74] border border-[rgba(112,251,232,0.12)] bg-[linear-gradient(135deg,rgba(48,91,96,0.3),rgba(8,16,21,0.3))] p-[0.85rem]`}>
        {hasScreenshot ? (
          <img
            className="block h-full w-full rounded-[0.9rem] object-cover object-top"
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
      <div className="mt-4 flex flex-wrap gap-4 text-[0.72rem] uppercase tracking-[0.08em] text-(--text-dim)">
        <span className={`rounded-full border px-[0.58rem] py-[0.28rem] ${statusClasses}`}>
          {status}
        </span>
        <span>{year}</span>
        <span>{role}</span>
      </div>

      <div className="mt-4">
        <div>
          <h3 className="text-[1.05rem] text-(--text-strong)">{title}</h3>
          <p className="mt-3 max-w-136 text-(--text-muted)">{description}</p>
        </div>
      </div>

      {/* Tech tags for the project */}
      <div className="mt-4 flex flex-wrap gap-2 border-t border-[rgba(112,251,232,0.08)] pt-4">
        {techStack.map((tool) => (
          <span
            className="rounded-full bg-[rgba(112,251,232,0.08)] px-[0.65rem] py-[0.35rem] text-[0.78rem] text-(--text-muted)"
            key={tool}
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {hasLiveDemo ? (
          <a className={linkClasses} href={liveDemo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        ) : (
          <span
            className="inline-flex min-h-9 items-center justify-center rounded-[0.8rem] border border-[rgba(112,251,232,0.08)] px-[0.9rem] py-[0.55rem] text-[0.78rem] uppercase tracking-[0.06em] text-(--text-muted)"
            aria-disabled="true"
          >
            Live Demo Coming Soon
          </span>
        )}
        <a className={linkClasses} href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  )
}

export default ProjectCard

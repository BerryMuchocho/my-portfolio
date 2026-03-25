function GalleryCard({
  index,
  title,
  eyebrow,
  subtitle,
  summary,
  focus,
  type,
  screenshots = [],
  tags = [],
  outcome,
  link,
}) {
  const hasScreenshots = screenshots.length > 0
  const isReversed = index % 2 === 1

  return (
    <article className={`gallery-card ${isReversed ? 'reverse' : ''}`}>
      <div className={`gallery-visual case-visual ${type}`}>
        {hasScreenshots ? (
          // Real screenshots can be scrolled sideways on smaller spaces.
          <div className="gallery-shot-rail" aria-label={`${title} screenshots`}>
            {screenshots.map((shot) => (
              <figure className="gallery-shot-card" key={shot.alt}>
                <img
                  className={`gallery-shot-image ${shot.fit === 'contain' ? 'contain' : ''}`}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        ) : (
          <>
            {/* Fallback mockups are used only when screenshots are not available. */}
            {type === 'dashboard' && (
              <div className="gallery-dashboard" aria-hidden="true">
                <div className="gallery-dashboard-sidebar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="gallery-dashboard-main">
                  <div className="dashboard-topline" />
                  <div className="dashboard-panels">
                    <div className="panel-bars">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="panel-ring" />
                  </div>
                </div>
              </div>
            )}

            {type === 'poster' && (
              <div className="gallery-poster" aria-hidden="true">
                <div className="poster-sheet">
                  <span>BRAIN</span>
                  <span>BURST</span>
                  <span>QUIZ</span>
                </div>
              </div>
            )}

            {type === 'mobile' && (
              <div className="gallery-mobile" aria-hidden="true">
                <div className="phone phone-light">
                  <div className="phone-notch" />
                  <div className="phone-ui list-ui">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="phone phone-featured">
                  <div className="phone-notch" />
                  <div className="phone-ui art-ui" />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="gallery-meta">
        {eyebrow && <p className="gallery-eyebrow">{eyebrow}</p>}
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {summary && <p className="gallery-summary">{summary}</p>}
        {focus && (
          <div className="gallery-focus">
            <span>Focus</span>
            <p>{focus}</p>
          </div>
        )}
        {tags.length > 0 && (
          <div className="gallery-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {outcome && <p className="gallery-outcome">{outcome}</p>}
        <a href={link} target="_blank" rel="noreferrer">
          Open project
        </a>
      </div>
    </article>
  )
}

export default GalleryCard

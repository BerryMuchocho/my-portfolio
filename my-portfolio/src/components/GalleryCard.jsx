function GalleryCard({
  index,
  title,
  eyebrow,
  subtitle,
  summary,
  focus,
  type,
  screenshots = [],
  uiStudies = [],
  tags = [],
  outcome,
  link,
}) {
  const hasScreenshots = screenshots.length > 0
  const hasUiStudies = uiStudies.length > 0
  const isReversed = index % 2 === 1
  const hasLink = Boolean(link)
  const cardLayoutClasses = isReversed
    ? 'min-[901px]:grid-cols-[0.95fr_1.05fr]'
    : 'min-[901px]:grid-cols-[1.05fr_0.95fr]'
  const visualOrderClasses = isReversed ? 'min-[901px]:order-2' : ''
  const metaOrderClasses = isReversed ? 'min-[901px]:order-1' : ''

  return (
    <article className={`group relative grid items-stretch gap-8 overflow-hidden rounded-[1.4rem] border border-[rgba(112,251,232,0.08)] bg-[linear-gradient(180deg,rgba(15,27,35,0.92),rgba(9,18,24,0.96))] p-6 shadow-[0_1rem_2.25rem_rgba(89,68,46,0.06)] transition-[transform,border-color,box-shadow,background,backdrop-filter] duration-200 hover:-translate-y-1 hover:border-[rgba(112,251,232,0.3)] hover:bg-[linear-gradient(180deg,rgba(20,36,46,0.82),rgba(10,20,27,0.78))] hover:backdrop-blur-[14px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_36px_rgba(0,0,0,0.24),0_0_0_1px_rgba(112,251,232,0.06)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.04)_40%,rgba(140,255,239,0.14)_50%,rgba(255,255,255,0.04)_60%,transparent_80%)] before:translate-x-[-140%] before:transition-transform before:duration-500 hover:before:translate-x-[140%] ${cardLayoutClasses}`}>
      <div className={`gallery-visual case-visual ${type} ${visualOrderClasses} grid min-h-72 place-items-center overflow-hidden rounded-[1.2rem] p-5`}>
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
        ) : hasUiStudies ? (
          <div className="gallery-ui-rail" aria-label={`${title} interface studies`}>
            {uiStudies.map((study) => (
              <article className={`gallery-ui-card ${study.style}`} key={study.title}>
                <p>{study.label}</p>
                <h4>{study.title}</h4>
                {study.blurb && <span className="gallery-ui-copy">{study.blurb}</span>}

                {study.style === 'analytics' && (
                  <div className="ui-study ui-study-analytics" aria-hidden="true">
                    <div className="ui-study-pill-row">
                      <span>Weekly</span>
                      <span>+12%</span>
                    </div>
                    <div className="ui-study-topline" />
                    <div className="ui-study-chart">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="ui-study-metrics">
                      <div>
                        <strong>24.8k</strong>
                        <span />
                      </div>
                      <div>
                        <strong>Engaged users</strong>
                        <span />
                      </div>
                    </div>
                  </div>
                )}

                {study.style === 'pricing' && (
                  <div className="ui-study ui-study-pricing" aria-hidden="true">
                    <div className="pricing-tier featured">
                      <strong>Pro</strong>
                      <span />
                      <span />
                      <button type="button">Choose plan</button>
                    </div>
                    <div className="pricing-tier">
                      <strong>Starter</strong>
                      <span />
                      <span />
                    </div>
                  </div>
                )}

                {study.style === 'search' && (
                  <div className="ui-study ui-study-search" aria-hidden="true">
                    <div className="search-home-shell">
                      <div className="search-doodle">
                        <span>G</span>
                        <span>o</span>
                        <span>o</span>
                        <span>g</span>
                        <span>l</span>
                        <span>e</span>
                      </div>
                      <div className="search-bar-shell">
                        <span />
                      </div>
                      <div className="olympic-strip">
                        <strong>Olympics 2028</strong>
                        <p>Latest highlights, schedules, and medal stories.</p>
                        <button type="button">Explore</button>
                      </div>
                    </div>
                  </div>
                )}

                {study.style === 'login' && (
                  <div className="ui-study ui-study-login" aria-hidden="true">
                    <div className="login-shell">
                      <div className="login-brand">
                        <strong>Welcome back</strong>
                        <span />
                      </div>
                      <div className="login-fields">
                        <span />
                        <span />
                      </div>
                      <div className="login-actions">
                        <button type="button">Sign in</button>
                        <p>Forgot password?</p>
                      </div>
                      <div className="login-divider" />
                      <div className="login-alt">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}
              </article>
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

      <div className={metaOrderClasses}>
        {eyebrow && (
          <p className="text-[0.72rem] uppercase tracking-[0.11em] text-[rgba(112,251,232,0.68)]">
            {eyebrow}
          </p>
        )}
        <h3 className="mt-2 text-[1.5rem] text-(--text-strong)">{title}</h3>
        <p className="mt-4 text-[0.95rem] text-(--text-muted)">{subtitle}</p>
        {summary && <p className="mt-4 text-[0.95rem] text-(--text-muted)">{summary}</p>}
        {focus && (
          <div className="mt-5 grid gap-1">
            <span className="text-[0.72rem] uppercase tracking-[0.11em] text-(--accent)">Focus</span>
            <p className="text-[0.95rem] text-(--text-muted)">{focus}</p>
          </div>
        )}
        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                className="rounded-full bg-[rgba(112,251,232,0.08)] px-[0.65rem] py-[0.35rem] text-[0.78rem] text-(--text-muted)"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {outcome && <p className="mt-5 text-(--text-strong)">{outcome}</p>}
        {hasLink ? (
          <a
            className="mt-5 inline-flex text-[0.78rem] uppercase tracking-[0.08em] text-(--accent) transition-colors duration-200 hover:text-(--text-strong)"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Open project
          </a>
        ) : (
          <span className="mt-5 inline-flex text-[0.78rem] uppercase tracking-[0.08em] text-(--text-muted)" aria-disabled="true">
            Project link coming soon
          </span>
        )}
      </div>
    </article>
  )
}

export default GalleryCard

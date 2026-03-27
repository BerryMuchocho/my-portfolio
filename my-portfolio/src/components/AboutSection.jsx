import portraitImage from '../assets/photo3.png'

function AboutSection({ stack, journey, aboutCta, contactEmail }) {
  const primaryButtonClasses =
    'inline-flex min-h-[2.35rem] items-center justify-center bg-[var(--accent)] px-4 py-[0.72rem] text-[0.76rem] font-semibold uppercase tracking-[0.08em] !text-[#041417] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px hover:bg-[var(--accent-strong)] hover:!text-[#041417] max-sm:w-full'
  const secondaryButtonClasses =
    'inline-flex min-h-[2.35rem] items-center justify-center border border-[rgba(112,251,232,0.22)] bg-[rgba(14,27,35,0.74)] px-4 py-[0.72rem] text-[0.76rem] uppercase tracking-[0.08em] text-[var(--text-strong)] transition-[background-color,border-color,color,transform] duration-200 hover:border-[rgba(112,251,232,0.52)] hover:bg-[rgba(18,35,45,0.95)] max-sm:w-full'

  return (
    <section
      className="relative mt-6 border border-(--border) bg-[linear-gradient(180deg,rgba(10,19,26,0.94),rgba(7,13,18,0.98)),var(--panel)] px-[clamp(1.25rem,2vw,2rem)] py-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
      id="about"
    >
      <div className="grid items-start gap-6 min-[901px]:grid-cols-[0.9fr_1.3fr]">
        {/* Real portrait used in the about section */}
        <div className="portrait-card">
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={portraitImage}
              alt="Portrait of Stellah Muchocho"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="portrait-line" />
        </div>

        <div className="about-copy">
          <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-(--text-strong)">
            About
          </p>
          <h2 className="about-title">
            My <span>/ Journey</span>
          </h2>

          <div className="journey-list">
            {journey.map((item) => (
              <article key={item.title}>
                {item.title && <h3>{item.title}</h3>}
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="about-stack">
        <div className="stack-card stack-card-wide">
          <p className="section-kicker">Stack Overview</p>
          <p className="stack-intro">{stack.intro}</p>

          <div className="stack-list">
            {stack.groups.map((group) => (
              <article className="stack-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="stack-chip-list">
                  {group.items.map((item) => (
                    <span className="stack-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="stack-proof">
            <h3>Proof Through Projects</h3>
            <div className="stack-proof-list">
              {stack.proof.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h3>Let&apos;s create something meaningful.</h3>
        <p>{aboutCta}</p>
        <div className="mt-[1.35rem] flex justify-center gap-[0.9rem] max-sm:flex-col">
          <a className={primaryButtonClasses} href={`mailto:${contactEmail}`}>
            Get in Touch
          </a>
          <a className={secondaryButtonClasses} href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

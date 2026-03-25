import portraitImage from '../assets/photo3.png'

function AboutSection({ stack, journey, aboutCta, contactEmail }) {
  return (
    <section className="panel about-panel" id="about">
      <div className="about-grid">
        {/* Real portrait used in the about section */}
        <div className="portrait-card">
          <div className="portrait-frame">
            <img
              className="portrait-image"
              src={portraitImage}
              alt="Portrait of Stellah Muchocho"
            />
          </div>
          <div className="portrait-line" />
        </div>

        <div className="about-copy">
          <p className="section-kicker">About</p>
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
          <p className="section-kicker">Core Stack</p>
          <div className="stack-list">
            {stack.map((item) => (
              <div className="stack-row" key={item.name}>
                <div className="stack-label">
                  <span>{item.name}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="stack-bar">
                  <span style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <article className="stack-card stack-card-accent">
          <div className="stack-card-icon" aria-hidden="true">
            []
          </div>
          <h3>Deployment Ready</h3>
          <p>
            Growing confidence in taking frontend ideas from local development
            to polished, production-ready workflows.
          </p>
          <a href={`mailto:${contactEmail}`}>Let&apos;s talk</a>
        </article>

        <article className="stack-card">
          <h3>Project Workflow</h3>
          <p>
            Comfortable working with package tooling, local development setups,
            and component-based frontend projects from concept to deployment.
          </p>
        </article>
        
      </div>

      <div className="about-cta">
        <h3>Let&apos;s create something meaningful.</h3>
        <p>{aboutCta}</p>
        <div className="hero-actions about-actions">
          <a className="button button-primary" href={`mailto:${contactEmail}`}>
            Get in Touch
          </a>
          <a className="button button-secondary" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

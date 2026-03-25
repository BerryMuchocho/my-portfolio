function HeroSection({ profile, contact }) {
  return (
    <section className="hero-section" id="home">
      <div className="eyebrow">{profile.eyebrow}</div>
      <h1>
        Hi, I&apos;m {profile.shortName},
        <span> {profile.title}</span>
      </h1>
      <p className="hero-copy">{profile.heroSummary}</p>

      <div className="hero-actions">
        <a className="button button-primary" href="#projects">
          View My Projects
        </a>
        <a className="button button-secondary" href={`mailto:${contact.email}`}>
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default HeroSection

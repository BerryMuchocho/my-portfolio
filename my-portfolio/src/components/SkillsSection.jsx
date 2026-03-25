import SkillCard from './SkillCard'

function SkillsSection({ skills, intro }) {
  return (
    <section className="panel skills-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Core Technical Arsenal</p>
          <p className="section-intro">{intro}</p>
        </div>
        <span className="section-count">01 / Skills</span>
      </div>

      <div className="skills-grid">
        {/* One card for each skill */}
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>

      {/* Extra tech names styled like the design mockup */}
      <div className="tool-strip" aria-label="Technology names">
        <span>REACT</span>
        <span>JAVASCRIPT</span>
        <span>TAILWIND CSS</span>
        <span>REACT ROUTER</span>
        <span>ZUSTAND</span>
        <span>VITE</span>
      </div>
    </section>
  )
}

export default SkillsSection

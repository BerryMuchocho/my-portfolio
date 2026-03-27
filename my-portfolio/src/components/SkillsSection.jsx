import SkillCard from './SkillCard'

function SkillsSection({ skills, intro }) {
  return (
    <section className="relative mt-6 border border-(--border) bg-[linear-gradient(180deg,rgba(10,19,26,0.94),rgba(7,13,18,0.98)),var(--panel)] px-[clamp(1.25rem,2vw,2rem)] py-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="grid items-end justify-between gap-4 min-[901px]:grid-cols-[1fr_auto]">
        <div>
          <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-(--text-strong)">
            Core Technical Arsenal
          </p>
          <p className="mt-3 max-w-152 text-[0.9rem] text-(--text-muted)">{intro}</p>
        </div>
        <span className="text-[clamp(1.4rem,3vw,2.2rem)] font-bold uppercase tracking-[0.06em] text-[rgba(112,251,232,0.18)]">
          01 / Skills
        </span>
      </div>

      <div className="mt-7 grid gap-4 min-[901px]:grid-cols-5">
        {/* One card for each skill */}
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>

      {/* Extra tech names styled like the design mockup */}
      <div
        className="mt-6 flex justify-between gap-4 border-t border-[rgba(112,251,232,0.06)] pt-5 text-[clamp(1.15rem,3vw,2rem)] italic font-bold tracking-[0.05em] text-[rgba(112,251,232,0.08)] max-[900px]:grid max-[900px]:grid-cols-1"
        aria-label="Technology names"
      >
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

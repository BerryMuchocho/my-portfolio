import { skillIcons } from './skillIcons'

function SkillCard({ iconName, category, title, description }) {
  const Icon = skillIcons[iconName]

  return (
    <article className="group relative min-h-42 overflow-hidden rounded-2xl border border-[rgba(112,251,232,0.1)] bg-[linear-gradient(180deg,rgba(18,31,40,0.98),rgba(10,18,24,0.98))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_12px_28px_rgba(0,0,0,0.18)] transition-[transform,border-color,box-shadow,background] duration-200 hover:-translate-y-1 hover:border-[rgba(112,251,232,0.3)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_36px_rgba(0,0,0,0.24),0_0_0_1px_rgba(112,251,232,0.06)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.05)_40%,rgba(140,255,239,0.18)_50%,rgba(255,255,255,0.05)_60%,transparent_80%)] before:translate-x-[-140%] before:transition-transform before:duration-500 hover:before:translate-x-[140%]">
      {/* Imported icon for the skill */}
      <div
        className="mb-4 inline-grid h-10 w-10 place-items-center rounded-[0.8rem] border border-[rgba(112,251,232,0.18)] bg-[linear-gradient(180deg,rgba(86,240,223,0.16),rgba(86,240,223,0.05))] text-[0.78rem] font-bold tracking-[0.04em] text-(--text-strong) shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,background] duration-200 group-hover:border-[rgba(112,251,232,0.34)] group-hover:bg-[linear-gradient(180deg,rgba(86,240,223,0.24),rgba(86,240,223,0.08))] [&_svg]:h-[1.2rem] [&_svg]:w-[1.2rem]"
        aria-hidden="true"
      >
        {Icon ? <Icon /> : null}
      </div>
      <p className="text-[0.72rem] uppercase tracking-[0.11em] text-(--accent)">{category}</p>
      <h2 className="my-[0.4rem] mb-[0.8rem] text-[1.05rem]">{title}</h2>
      <p className="max-w-136 text-[0.82rem] leading-[1.55] text-(--text-muted)">
        {description}
      </p>
    </article>
  )
}

export default SkillCard

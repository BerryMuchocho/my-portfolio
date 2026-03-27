function HeroSection({ profile, contact }) {
  const [titleFirstWord = profile.title, ...titleRest] = profile.title.split(' ')
  const titleSecondLine = titleRest.join(' ')
  const primaryButtonClasses =
    'inline-flex min-h-[2.35rem] items-center justify-center bg-[var(--accent)] px-4 py-[0.72rem] text-[0.76rem] font-semibold uppercase tracking-[0.08em] !text-[#041417] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px hover:bg-[var(--accent-strong)] hover:!text-[#041417] max-sm:w-full'
  const secondaryButtonClasses =
    'inline-flex min-h-[2.35rem] items-center justify-center border border-[rgba(112,251,232,0.22)] bg-[rgba(14,27,35,0.74)] px-4 py-[0.72rem] text-[0.76rem] uppercase tracking-[0.08em] text-[var(--text-strong)] transition-[background-color,border-color,color,transform] duration-200 hover:border-[rgba(112,251,232,0.52)] hover:bg-[rgba(18,35,45,0.95)] max-sm:w-full'

  return (
    <section
      className="max-w-152 px-[clamp(1.25rem,2vw,2rem)] pb-[clamp(2.75rem,8vw,4.75rem)] pt-[clamp(2.5rem,7vw,4.5rem)]"
      id="home"
    >
      <h1 className="my-3 max-w-[12ch] text-[clamp(2.5rem,5.2vw,4.2rem)] leading-[0.95]">
        <span className="block text-[0.68em]">Hi, I&apos;m {profile.shortName},</span>
        <span className="block w-max text-[1.16em] tracking-[0.12em] text-(--accent)">
          <span className="block">{titleFirstWord}</span>
          {titleSecondLine && <span className="block">{titleSecondLine}</span>}
        </span>
      </h1>
      <p className="m-0 max-w-116 text-[0.98rem] text-(--text-muted)">
        {profile.heroSummary}
      </p>

      <div className="mt-[1.35rem] flex gap-[0.9rem] max-sm:flex-col">
        <a className={primaryButtonClasses} href="#projects">
          View My Projects
        </a>
        <a className={secondaryButtonClasses} href={`mailto:${contact.email}`}>
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default HeroSection

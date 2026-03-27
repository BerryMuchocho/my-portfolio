function Navbar({ profile, contact }) {
  const [firstName = profile.brandLabel, secondName = ''] =
    profile.brandLabel.split(' / ')
  const navLinkClasses =
    'text-[0.74rem] uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent)]'
  const primaryButtonClasses =
    'inline-flex min-h-[2.35rem] items-center justify-center bg-[var(--accent)] px-4 py-[0.72rem] text-[0.76rem] font-semibold uppercase tracking-[0.08em] !text-[#041417] transition-[background-color,border-color,color,transform] duration-200 hover:-translate-y-px hover:bg-[var(--accent-strong)] hover:!text-[#041417] max-sm:w-full'

  return (
    <header className="flex items-center justify-between gap-4 border-b border-[rgba(112,251,232,0.08)] px-[clamp(1.25rem,2vw,2rem)] py-4 max-sm:flex-wrap max-sm:px-4">
      <a
        className="inline-flex items-center gap-2.5 text-[0.82rem] uppercase tracking-[0.08em] text-(--text-strong)"
        href="#home"
        aria-label={`${profile.brandLabel} home`}
      >
        <span
          className="grid h-[1.7rem] w-[1.7rem] place-items-center border border-[rgba(112,251,232,0.35)] text-[0.72rem] text-(--accent)"
          aria-hidden="true"
        >
          {profile.initials}
        </span>
        <span>
          {firstName} {secondName && <span className="text-(--accent)">/ {secondName}</span>}
        </span>
      </a>

      <nav
        className="flex items-center gap-6 max-[900px]:hidden"
        aria-label="Primary navigation"
      >
        <a className={navLinkClasses} href="#home">Home</a>
        <a className={navLinkClasses} href="#about">About</a>
        <a className={navLinkClasses} href="#projects">Projects</a>
        <a className={navLinkClasses} href="#contact">Contact</a>
      </nav>

      <a className={primaryButtonClasses} href={`mailto:${contact.email}`}>
        Hire Me
      </a>
    </header>
  )
}

export default Navbar

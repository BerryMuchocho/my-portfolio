function Footer({ profile, contact }) {
  const [firstName = profile.brandLabel, secondName = ''] =
    profile.brandLabel.split(' / ')
  const footerLinkClasses =
    'text-[0.74rem] uppercase tracking-[0.08em] text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent)]'

  return (
    <footer
      className="relative mt-6 grid items-start justify-between gap-8 border border-(--border) bg-[linear-gradient(180deg,rgba(10,19,26,0.94),rgba(7,13,18,0.98)),var(--panel)] px-[clamp(1.25rem,2vw,2rem)] pb-[1.6rem] pt-[1.6rem] shadow-[0_24px_80px_rgba(0,0,0,0.35)] min-[901px]:grid-cols-[1.2fr_0.8fr]"
      id="contact"
    >
      <div className="grid gap-[0.85rem]">
        <p className="m-0 text-[0.72rem] uppercase tracking-[0.11em] text-[rgba(112,251,232,0.68)]">
          Contact
        </p>
        <a
          className="inline-flex items-center gap-2.5 text-[0.82rem] uppercase tracking-[0.08em] text-(--text-strong)"
          href="#home"
        >
          {firstName} {secondName && <span className="text-(--accent)">/ {secondName}</span>}
        </a>
        <p className="max-w-md text-(--text-muted)">
          Available for frontend roles and collaborations.
        </p>
      </div>

      <div className="grid gap-[0.85rem]">
        <p className="m-0 text-[0.72rem] uppercase tracking-[0.11em] text-[rgba(112,251,232,0.68)]">
          Quick Links
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
          <a className={footerLinkClasses} href="#home">Home</a>
          <a className={footerLinkClasses} href="#about">About</a>
          <a className={footerLinkClasses} href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className={footerLinkClasses} href={contact.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a className={footerLinkClasses} href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

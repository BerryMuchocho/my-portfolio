function Navbar({ profile, contact }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label={`${profile.brandLabel} home`}>
        <span className="brand-mark" aria-hidden="true">
          {profile.initials}
        </span>
        <span>{profile.brandLabel}</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="nav-cta" href={`mailto:${contact.email}`}>
        Hire Me
      </a>
    </header>
  )
}

export default Navbar

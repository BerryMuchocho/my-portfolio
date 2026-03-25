function Footer({ profile, contact }) {
  return (
    <footer className="footer panel" id="contact">
      <div className="footer-copy">
        <p className="footer-kicker">Contact</p>
        <a className="brand footer-brand" href="#home">
          {profile.brandLabel}
        </a>
        <p className="footer-text">
          Available for frontend roles and collaborations.
        </p>
      </div>

      <div className="footer-nav">
        <p className="footer-label">Quick Links</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={contact.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a href={`mailto:${contact.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

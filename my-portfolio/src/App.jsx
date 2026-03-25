import './App.css'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import {
  galleryProjects,
  profile,
  projects,
  skills,
  stack,
} from './data/portfolioData'

function App() {
  const { contact } = profile

  return (
    <main className="portfolio-shell">
      <section className="panel">
        <Navbar profile={profile} contact={contact} />
        <HeroSection profile={profile} contact={contact} />
      </section>

      <SkillsSection skills={skills} intro={profile.skillsIntro} />

      <AboutSection
        stack={stack}
        journey={profile.journey}
        quote={profile.quote}
        aboutCta={profile.aboutCta}
        contactEmail={contact.email}
      />

      <ProjectsSection projects={projects} />
      <GallerySection galleryProjects={galleryProjects} />

      <Footer
        profile={profile}
        contact={contact}
      />
    </main>
  )
}

export default App

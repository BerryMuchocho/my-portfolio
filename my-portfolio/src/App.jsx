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
    <main className="mx-auto w-full max-w-304 px-6 pb-16 pt-12 max-sm:px-3 max-sm:pb-10 max-sm:pt-4">
      <section className="relative border border-(--border) bg-[linear-gradient(180deg,rgba(10,19,26,0.94),rgba(7,13,18,0.98)),var(--panel)] shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
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

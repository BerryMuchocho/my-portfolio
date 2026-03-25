import GalleryCard from './GalleryCard'

function GallerySection({ galleryProjects }) {
  return (
    <section className="gallery-panel" aria-labelledby="gallery-title">
      <div className="gallery-header">
        <div>
          <p className="gallery-kicker">Selected Work / Case Studies</p>
          <h2 id="gallery-title">Project Gallery</h2>
        </div>
        <p className="gallery-intro">
          A selection of projects where I&apos;ve been learning and exploring
          how to build clean, intuitive interfaces that feel intentional and
          easy to use.
        </p>
      </div>

      <div className="gallery-grid">
        {/* Keeping the map here makes it easy to add or remove projects later. */}
        {galleryProjects.map((project, index) => (
          <GalleryCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default GallerySection

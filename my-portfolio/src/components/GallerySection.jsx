import GalleryCard from './GalleryCard'

function GallerySection({ galleryProjects }) {
  return (
    <section
      className="mt-6 border border-[rgba(112,251,232,0.08)] bg-[linear-gradient(180deg,rgba(10,19,26,0.94),rgba(7,13,18,0.98)),var(--panel)] px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(1.25rem,2vw,1.75rem)] text-(--text-strong) shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
      aria-labelledby="gallery-title"
    >
      <div className="mb-6 grid gap-6 min-[901px]:grid-cols-[1.2fr_0.8fr] min-[901px]:items-end">
        <div>
          <p className="mb-[0.35rem] text-[0.72rem] uppercase tracking-[0.11em] text-[rgba(112,251,232,0.68)]">
            Selected Work / Case Studies
          </p>
          <h2 id="gallery-title" className="text-[clamp(2rem,3.4vw,3rem)] leading-[0.95] text-(--text-strong)">
            Project Gallery
          </h2>
        </div>
        <p className="text-[0.95rem] text-(--text-muted)">
          A selection of projects where I&apos;ve been learning and exploring
          how to build clean, intuitive interfaces that feel intentional and
          easy to use.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Keeping the map here makes it easy to add or remove projects later. */}
        {galleryProjects.map((project, index) => (
          <GalleryCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default GallerySection

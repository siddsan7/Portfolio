export function Resonance({ print = false }) {
  return (
    <img
      className={print ? 'music-print' : 'resonance'}
      src={`/assets/artwork/${print ? 'about-music' : 'hero-resonance'}.webp`}
      width={print ? 293 : 310}
      height={print ? 149 : 191}
      alt=""
      aria-hidden="true"
      loading={print ? 'lazy' : 'eager'}
      fetchPriority={print ? undefined : 'high'}
      decoding="async"
    />
  )
}

export function ProjectVisual({ project }) {
  return (
    <figure className={`project-visual ${project.kind}`}>
      <img
        src={project.image}
        alt={project.imageAlt}
        width={project.imageWidth}
        height={project.imageHeight}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        Concept illustration
        {project.kind === 'logistics' ? ' · Demo workflow' : ''}
      </figcaption>
    </figure>
  )
}

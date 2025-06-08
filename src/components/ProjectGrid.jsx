import React from 'react'

export default function ProjectGrid({ projects, onProjectClick }) {
  return (
    <section className="projects-grid">
      {projects.map((project, i) => (
        <div
          className="project-card"
          key={i}
          onClick={() => onProjectClick(project)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onProjectClick(project)
            }
          }}
          aria-label={`View details of project ${project.title}`}
          role="button"
        >
          <img
            src={project.imgSrc}
            alt={project.imgAlt}
            className="project-img"
            loading="lazy"
          />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.studio}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

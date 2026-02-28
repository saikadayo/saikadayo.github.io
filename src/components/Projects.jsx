import FadeSection from './FadeSection'

import kdramaImg from '../assets/projects/kdrama.png'
import pokedexImg from '../assets/projects/pokedex.png'
import todoImg from '../assets/projects/todo.png'

const projects = [
  {
    title: 'k-drama app',
    image: kdramaImg,
    desc: 'a full-stack k-drama database application with user authentication, profile management, and favouriting. built with a custom rest api on the backend and a react client on the frontend.',
    tags: ['react', 'node.js', 'express', 'mongodb', 'jwt auth', 'rest api'],
    links: [
      { label: 'live demo ↗', url: 'https://kdrama-api.netlify.app/' },
      { label: 'client repo ↗', url: 'https://github.com/saikadayo/kdrama-api-client' },
      { label: 'api repo ↗', url: 'https://github.com/saikadayo/kdrama-api' }
    ]
  },
  {
    title: 'pokédex app',
    image: pokedexImg,
    desc: 'a simple javascript application that loads pokémon data from the pokéapi and displays details in a clean, interactive interface. built with vanilla javascript and bootstrap.',
    tags: ['javascript', 'bootstrap', 'pokéapi', 'html', 'css'],
    links: [
      { label: 'live demo ↗', url: 'https://saikadayo.github.io/simple-js-app/' },
      { label: 'github ↗', url: 'https://github.com/saikadayo/simple-js-app' }
    ]
  },
  {
    title: 'to-do list app',
    image: todoImg,
    desc: 'a clean to-do list application built with jquery for managing tasks. my first project in the careerfoundry bootcamp, focused on dom manipulation and interactive ui fundamentals.',
    tags: ['jquery', 'html', 'css'],
    links: [
      { label: 'live demo ↗', url: 'https://saikadayo.github.io/to-do-list-app/' },
      { label: 'github ↗', url: 'https://github.com/saikadayo/to-do-list-app' }
    ]
  }
]

function Projects() {
  return (
    <FadeSection>
      <section className="projects-section" id="projects">
        <div className="section-inner">
          <p className="section-label">PROJECTS</p>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-preview">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                  />
                </div>

                <div className="project-info">
                  <span className="project-title">{project.title}</span>

                  <p className="project-desc">{project.desc}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeSection>
  )
}

export default Projects
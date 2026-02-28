import FadeSection from './FadeSection'

const skills = [
  'javascript (es6+)', 'typescript', 'react', 'angular',
  'redux', 'context api', 'responsive design', 'accessibility (wcag basics)',
  'node.js', 'express', 'python',
  'rest apis', 'api integration', 'authentication & authorization',
  'mongodb', 'sql',
  'testing (jest / react testing library)',
  'git', 'ci/cd', 'aws lambda',
  'pwa', 'production debugging'
]

function About() {
  return (
    <FadeSection>
      <section className="about-section" id="about">
        <div className="section-inner">
          <p className="section-label">ABOUT</p>
          <p className="about-text">
            i’m a full-stack developer working with react, node.js, mongodb, and angular. i started coding in elementary school, building html/css layouts and experimenting with design long before i knew it could be a career. over time, that hobby became a skillset shaped by curiosity, repetition, and a lot of hands-on practice. i’ve never really stopped building since.
          </p>
          <div className="about-pullquote">
            my family didn’t always understand why i was on my computer so much. i’m glad i never stopped.
          </div>
          <p className="about-text">
            after years inside high-scale saas environments learning how production systems behave, i chose to commit to engineering. i completed my full-stack certification through careerfoundry and am currently pursuing my b.s. in graphic information technology (full-stack web development) at arizona state university. as a single mom chasing a long-held passion, i want my son to see that it’s possible to build a life around work you care about.
          </p>
          <div className="toolkit">
            {skills.map(skill => (
              <span key={skill} className="toolkit-tag">{skill}</span>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

export default About
import FadeSection from './FadeSection'

const experiences = [
  {
    date: 'oct 2024 — present',
    role: 'senior tax expert, payroll systems',
    company: 'toast',
    desc: 'lead root cause analysis for production payroll defects. partner with engineering and product to document reproducible issues, validate system outputs, and verify third-party integrations at scale.'
  },
  {
    date: 'jun 2024 — sep 2024',
    role: 'software engineer intern',
    company: 'seed technologies, inc.',
    desc: 'built full-stack features using javascript, react, node.js, mongodb, and angular. developed rest apis with server-side validation, integrated frontend data flows, and shipped work in an agile team.'
  },
  {
    date: 'mar 2022 — oct 2024',
    role: 'tax specialist, payroll systems',
    company: 'gusto',
    desc: 'investigated discrepancies across automated payroll tax workflows. analyzed system outputs, reviewed api responses, and escalated confirmed defects in jira with detailed reproduction steps to improve platform reliability.'
  }
]

function Experience() {
  return (
    <FadeSection>
      <section className="experience-section" id="experience">
        <div className="section-inner">
          <p className="section-label">EXPERIENCE</p>

          <div className="exp-list">
            {experiences.map((exp, i) => (
              <div key={i} className="exp-item">
                <span className="exp-date">{exp.date}</span>
                <div className="exp-content">
                  <span className="exp-role">{exp.role}</span>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="resume-link">
            view full resume ↗
          </a>
        </div>
      </section>
    </FadeSection>
  )
}

export default Experience
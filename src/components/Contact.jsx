import FadeSection from './FadeSection'

const links = [
  { label: 'email', text: 'hello@babysfirst.dev', url: 'mailto:hello@babysfirst.dev' },
  { label: 'github', text: 'github.com/saikadayo', url: 'https://github.com/saikadayo' },
  { label: 'linkedin', text: 'linkedin.com/in/saikachheav', url: 'https://linkedin.com/in/saikachheav' }
]

function Contact() {
  return (
    <FadeSection>
      <section className="contact-section" id="contact">
        <div className="section-inner">
          <p className="section-label">CONTACT</p>
          <h2 className="contact-heading">coffee chat?</h2>
          <p className="contact-text">i'm currently open to full-time roles and freelance projects. if you'd like to chat about an opportunity or just say hello, let's connect.</p>
          <div className="contact-links">
            {links.map(link => (
              <a key={link.label} href={link.url} className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label">{link.label}</span>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </FadeSection>
  )
}

export default Contact
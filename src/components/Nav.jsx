import { useState, useEffect } from 'react'

function Nav({ theme, toggleTheme }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`nav ${visible ? 'visible' : ''}`}>
      <div className="nav-inner">
        <a href="#about" className="nav-link" onClick={e => handleClick(e, '#about')}>about</a>
        <a href="#experience" className="nav-link" onClick={e => handleClick(e, '#experience')}>experience</a>
        <a href="#projects" className="nav-link" onClick={e => handleClick(e, '#projects')}>projects</a>
        <a href="#contact" className="nav-link" onClick={e => handleClick(e, '#contact')}>contact</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="toggle theme">
          {theme === 'dark' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Nav

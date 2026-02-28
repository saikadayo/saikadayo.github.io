import { useEffect, useRef, useState } from 'react'

function FadeSection({ children, className = '' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`fade-section ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default FadeSection

import React, { useState, useEffect } from 'react'
import './NavDots.css'

export default function NavDots({ sections }) {
  const [active, setActive] = useState(sections[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="nav-dots" aria-label="Navigation sections">
      {sections.map(id => (
        <a
          key={id}
          href={`#${id}`}
          className={`nav-dot ${active === id ? 'nav-dot--active' : ''}`}
          aria-label={id}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
        />
      ))}
    </nav>
  )
}

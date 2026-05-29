import React, { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import './Navbar.css'

export default function Navbar() {
  const { lang, toggle, t }         = useLang()
  const [active, setActive]         = useState('hero')
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.45 }
    )
    t.nav.links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [t])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">

        <a href="#hero" className="navbar__logo" aria-label="Retour en haut">
          <span className="navbar__logo-bracket">&lt;</span>
          MC
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar__links" aria-label="Navigation principale">
          {t.nav.links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`navbar__link ${active === id ? 'navbar__link--active' : ''}`}
            >
              {label}
              <span className="navbar__link-bar" />
            </a>
          ))}
        </nav>

        <button className="navbar__lang" onClick={toggle} aria-label="Changer de langue">
          {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </button>

        <a href="#contact" className="navbar__cta">{t.nav.cta}</a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {t.nav.links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`navbar__mobile-link ${active === id ? 'navbar__mobile-link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <div className="navbar__mobile-bottom">
          <button className="navbar__lang" onClick={toggle}>
            {lang === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
          <a href="#contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
import React, { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

const tags = ['Java', 'Python', 'React', 'PHP', 'C', 'Docker', 'SQL']

export default function Hero() {
  const { t }    = useLang()
  const tagRef   = useRef(null)
  const ref      = useScrollReveal()

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (tagRef.current) tagRef.current.textContent = `<${tags[i % tags.length]} />`
      i++
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__inner">

        <div className="hero__photo-wrap" aria-hidden="true">
          <div className="hero__photo">
            {/* Remplace par : <img src="/photo.jpg" alt="Mick Chen" /> */}
            <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero__photo-svg">
              <circle cx="80" cy="72" r="40" fill="rgba(232,160,32,0.15)" stroke="rgba(232,160,32,0.4)" strokeWidth="1.5"/>
              <path d="M20 190 C20 145 140 145 140 190" fill="rgba(232,160,32,0.1)" stroke="rgba(232,160,32,0.35)" strokeWidth="1.5"/>
              <circle cx="80" cy="68" r="22" fill="rgba(232,160,32,0.2)"/>
            </svg>
            <span className="hero__photo-label">Ta photo ici</span>
          </div>
          <div className="hero__photo-deco" />
        </div>

        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="hero__name">
            <span className="hero__first">Mick</span>
            <span className="hero__last">CHEN</span>
          </h1>

          <p className="hero__title">{t.hero.subtitle}</p>
          <p ref={tagRef} className="hero__tag" aria-live="polite">&lt;Java /&gt;</p>
          <p className="hero__description">{t.hero.description}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary">{t.hero.cta1}</a>
            <a href="#contact"  className="btn btn--ghost">{t.hero.cta2}</a>
            {/* Place ton CV dans /public/CV_Mick_Chen.pdf */}
            <a href="/CV_Mick_Chen.pdf" download className="btn btn--cv">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.hero.downloadCV}
            </a>
          </div>
        </div>

      </div>
      <div className="hero__scroll" aria-hidden="true"><span /></div>
    </section>
  )
}
import React from 'react'
import { useLang } from '../context/LangContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Education.css'

export default function Education() {
  const { t } = useLang()
  const ref   = useScrollReveal()

  return (
    <section id="education" ref={ref} className="reveal">
      <p className="section-label">{t.education.label}</p>
      <h2 className="section-title">{t.education.title}</h2>
      <div className="accent-line" />

      <div className="edu__list">
        {t.education.items.map((item, i) => (
          <div key={i} className="edu__card">
            <div className="edu__card-left">
              <span className="edu__period">{item.period}</span>
              {item.current && <span className="edu__badge">En cours</span>}
            </div>
            <div className="edu__card-body">
              <h3 className="edu__degree">{item.degree}</h3>
              <p className="edu__school">{item.school}</p>
              <p className="edu__desc">{item.desc}</p>
              <ul className="edu__tags">
                {item.tags.map(tag => (
                  <li key={tag} className="edu__tag">{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
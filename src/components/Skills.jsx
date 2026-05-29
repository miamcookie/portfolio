import React from 'react'
import { useLang } from '../context/LangContext'
import './Skills.css'

const categories = {
  fr: [
    {
      title: 'Langages',
      icon: '{ }',
      skills: ['Java', 'Python', 'C', 'PHP', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web',
      icon: '</>',
      skills: ['HTML', 'CSS', 'React', 'Vite', 'Bootstrap', 'JavaFX'],
    },
    {
      title: 'Bases de données',
      icon: '⬡',
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      title: 'Systèmes & Réseaux',
      icon: '⌘',
      skills: ['Bash', 'Docker', 'Linux (Ubuntu)', 'Windows', 'iOS'],
    },
    {
      title: 'Outils',
      icon: '⚙',
      skills: ['JetBrains IDE', 'Spyder', 'Jmerise', 'Trello', 'GitHub'],
    },
  ],
  en: [
    {
      title: 'Languages',
      icon: '{ }',
      skills: ['Java', 'Python', 'C', 'PHP', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web',
      icon: '</>',
      skills: ['HTML', 'CSS', 'React', 'Vite', 'Bootstrap', 'JavaFX'],
    },
    {
      title: 'Databases',
      icon: '⬡',
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      title: 'Systems & Networks',
      icon: '⌘',
      skills: ['Bash', 'Docker', 'Linux (Ubuntu)', 'Windows', 'iOS'],
    },
    {
      title: 'Tools',
      icon: '⚙',
      skills: ['JetBrains IDE', 'Spyder', 'Jmerise', 'Trello', 'GitHub'],
    },
  ],
}

export default function Skills() {
  const { lang, t } = useLang()
  const currentCategories = categories[lang]

  return (
    <section id="skills">
      <p className="section-label">{t.skills.label}</p>
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="accent-line" />

      <div className="skills__grid">
        {currentCategories.map(cat => (
          <div key={cat.title} className="skills__card">
            <div className="skills__card-header">
              <span className="skills__card-icon" aria-hidden="true">{cat.icon}</span>
              <h3 className="skills__card-title">{cat.title}</h3>
            </div>
            <ul className="skills__tags">
              {cat.skills.map(s => (
                <li key={s} className="skills__tag">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

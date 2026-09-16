import React, { useState } from 'react'
import './Experience.css'
import { useLang } from '../context/LangContext'


function Modal({ Experience, onClose }) {
    const [imgIndex, setImgIndex] = useState(0)
    const { t } = useLang()

    React.useEffect(() => {
        const onKey = e => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
                <div className="modal__header">
                    <div>
                        <span className="modal__year">{Experience.year}</span>
                        <h3 className="modal__title">{Experience.title}</h3>
                    </div>
                    <button className="modal__close" onClick={onClose} aria-label={t.projects.close}>✕</button>
                </div>
                {Experience.images && Experience.images.length > 0 ? (
                    <div className="modal__gallery">
                        <img
                            src={Experience.images[imgIndex]}
                            alt={`${Experience.title} screenshot ${imgIndex + 1}`}
                            className="modal__img"
                        />
                        {Experience.images.length > 1 && (
                            <div className="modal__gallery-dots">
                                {Experience.images.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`modal__gallery-dot ${i === imgIndex ? 'modal__gallery-dot--active' : ''}`}
                                        onClick={() => setImgIndex(i)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="modal__no-img">
                        <span>{t.Experience.noImg}</span>
                    </div>
                )}
                <p className="modal__desc">{Experience.details}</p>
                <div className="modal__tech-wrap">
                    <span className="modal__tech-label">{t.Experience.stackLabel}</span>
                    <ul className="modal__tech">
                        {Experience.tech.map((tech) => (
                            <li key={tech} className="modal__badge" style={{ '--badge-color': Experience.color }}>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal__footer">
                    <a
                        href={Experience.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn--primary"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.5rem' }}>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                        </svg>
                    </a>
                    <button className="btn btn--ghost" onClick={onClose}>{t.projects.close}</button>
                </div>

            </div>
        </div>
    )
}

export default function Projects() {
    const { t } = useLang()
    const projects = (t.Experience.items || []).map(p => ({
        ...p,
        github: p.github || 'https://github.com/miamcookie',
        images: p.images || [],
    }))

    const [hovered, setHovered]   = useState(null)
    const [selected, setSelected] = useState(null)

    return (
        <section id="projects">
            <p className="section-label">{t.Experience.label}</p>
            <h2 className="section-title">{t.Experience.title}</h2>
            <div className="accent-line" />

            <div className="projects__list">
                {projects.map((p, i) => (
                    <div
                        key={i}
                        className={`project-row ${hovered === i ? 'project-row--hovered' : ''}`}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(p)}
                    >
                        <span className="project-row__year">{p.year}</span>
                        <div className="project-row__body">
                            <h3 className="project-row__title">projects{p.title}</h3>
                            <p className="project-row__desc">{p.desc}</p>
                        </div>
                        <ul className="project-row__tech">
                            {p.tech.map(tn => (
                                <li key={tn} className="project-row__badge" style={{ '--badge-color': p.color }}>
                                    {tn}
                                </li>
                            ))}
                        </ul>
                        <span className="project-row__arrow">→</span>
                    </div>
                ))}
            </div>

            {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
        </section>
    )
}

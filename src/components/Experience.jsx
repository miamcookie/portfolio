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

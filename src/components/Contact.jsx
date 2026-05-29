import React, { useState } from 'react'
import { useLang } from '../context/LangContext'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)

    const res = await fetch('https://formspree.io/f/xbdbqzpb', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setStatus('sent')
      e.target.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <p className="section-label">{t.contact.label}</p>
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="accent-line" />

      <div className="contact__layout">
        <div className="contact__infos">
          <p className="contact__intro">
            {t.contact.intro}
            <strong>{t.contact.introDate}</strong>.
            {t.contact.introEnd}
          </p>

          <ul className="contact__cards">
            <li>
              <a href="mailto:chen.mickbut@gmail.com" className="contact__card">
                <span className="contact__card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span>
                  <span className="contact__card-label">Email</span>
                  <span className="contact__card-value">chen.mickbut@gmail.com</span>
                </span>
              </a>
            </li>
            <li>
              <a href="tel:0751904565" className="contact__card">
                <span className="contact__card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16h1z"/>
                  </svg>
                </span>
                <span>
                  <span className="contact__card-label">{t.contact.fields.email}</span>
                  <span className="contact__card-value">07 51 90 45 65</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/miamcookie" target="_blank" rel="noreferrer" className="contact__card">
                <span className="contact__card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </span>
                <span>
                  <span className="contact__card-label">GitHub</span>
                  <span className="contact__card-value">miamcookie</span>
                </span>
              </a>
            </li>
            <li>
              <div className="contact__card contact__card--static">
                <span className="contact__card-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>
                  <span className="contact__card-label">Localisation</span>
                  <span className="contact__card-value">Drancy, 93700</span>
                </span>
              </div>
            </li>
          </ul>

          <p className="contact__footer">
            {t.contact.footer}
          </p>
        </div>


        <div className="contact__form-wrap">
          {status === 'sent' ? (
            <div className="contact__success">
              <span className="contact__success-icon">✓</span>
              <p>{t.contact.successMsg}</p>
              <button className="btn btn--ghost" onClick={() => setStatus('idle')}>
                {t.contact.successBtn}
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <p className="contact__form-title">{t.contact.formTitle}</p>

              <div className="contact__field">
                <label htmlFor="name">{t.contact.fields.name}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.contact.placeholders.name}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">{t.contact.fields.email}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.contact.placeholders.email}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">{t.contact.fields.message}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder={t.contact.placeholders.message}
                  required
                />
              </div>

              {status === 'error' && (
                <p className="contact__error">
                  {t.contact.errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? t.contact.sending : t.contact.send}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
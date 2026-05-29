import React, { createContext, useContext, useState } from 'react'
import { content } from '../data/content'

const LangContext = createContext()

export function LangProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const t = content[lang]
  const toggle = () => setLang(l => l === 'fr' ? 'en' : 'fr')
  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
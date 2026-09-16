import React from 'react'
import Hero       from './components/Hero'
import About      from './components/About'
import Education  from './components/Education'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import NavDots    from './components/NavDots'
import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import ScrollTop  from './components/ScrollTop'
import Background from './components/Background'
import Experience from './components/Experience'
import './App.css'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <NavDots sections={['hero','about','education','skills','projects','experience','contact']} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
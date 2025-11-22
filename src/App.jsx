import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

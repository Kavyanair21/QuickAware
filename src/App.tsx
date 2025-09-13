import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Causes from './components/Causes'
import Solutions from './components/Solutions'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-root">
      <Hero />
      <main>
        <About />
        <Causes />
        <Solutions />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}


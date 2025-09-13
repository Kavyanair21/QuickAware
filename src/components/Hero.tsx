import React from 'react'

export default function Hero() {
  return (
    <header className="hero">
      <nav className="nav">
        <div className="brand">Quake<span>Aware</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#causes">Causes</a>
          <a href="#solutions">Solutions</a>
          <a href="#gallery">Gallery</a>
          <a className="cta" href="/simulator">Open Simulator</a>
        </div>
      </nav>

      <div className="hero-inner">
        <div className="hero-left">
          <h1>QuakeAware — Earthquake Disaster Awareness</h1>
          <p>Interactive learning & immersive VR gallery to understand earthquakes: what causes them, what happens to cities, and how to survive & build safer communities.</p>

          <div className="hero-cta">
            <a className="btn primary" href="/simulator">Launch 3D Simulator</a>
            <a className="btn ghost" href="#gallery">Explore Gallery</a>
          </div>

          <ul className="features">
            <li>Interactive 3D city simulator</li>
            <li>Live seismograph & sound</li>
            <li>WebVR Awareness Room & bunker demo</li>
          </ul>
        </div>

        <div className="hero-right">
          <div className="device-mock">
            <div className="scene-preview">
              <div className="building-stack">
                <div className="tower tower-tall" />
                <div className="tower tower-med" />
                <div className="tower tower-short" />
              </div>
              <div className="quake-wave" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-wave" aria-hidden />
    </header>
  )
}


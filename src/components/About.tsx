import React from 'react'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About the Project</h2>
        <p>QuakeAware is an interactive web app built to educate communities about earthquake hazards. It demonstrates the causes, shows realistic city-level impacts using a 3D simulator, and provides practical solutions: safe building practices, emergency planning, and an immersive WebVR gallery that simulates shelters and bunkers.</p>

        <div className="cards">
          <div className="card">
            <h3>Learn</h3>
            <p>Short interactive lessons on seismic science, fault lines, and why earthquakes happen.</p>
          </div>
          <div className="card">
            <h3>Experience</h3>
            <p>3D interactive simulator to visualize shaking, collapse risk, and safe spots indoors.</p>
          </div>
          <div className="card">
            <h3>Prepare</h3>
            <p>Tips, checklists and a simulated bunker/evacuation room in WebVR for training.</p>
          </div>
        </div>
      </div>
    </section>
  )
}


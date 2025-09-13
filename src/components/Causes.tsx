import React from 'react'

const causeItems = [
  { title: 'Tectonic Plate Movement', text: 'Most earthquakes are caused by the sudden release of stress along fault lines when tectonic plates shift.' },
  { title: 'Volcanic Activity', text: 'Volcanic eruptions can trigger earthquakes locally as magma moves.' },
  { title: 'Human Activity', text: 'Large reservoirs, mining, and some industrial activities can induce seismicity.' }
]

export default function Causes() {
  return (
    <section id="causes" className="section causes">
      <div className="container">
        <h2>Causes of Earthquakes</h2>
        <div className="cause-grid">
          {causeItems.map((c) => (
            <article className="cause" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
          <a href='../../components/map/index.html'>
          <article className="cause">
              <h3>Map</h3>
              <p>Seismograph</p>
            </article>
          </a>
          <a href='http://localhost:8002/'>
          <article className="cause">
              <h3>Earthqwake Simulator</h3>
              <p>Seismograph</p>
            </article>
          </a>
        </div>
      </div>
    </section>
  )
}


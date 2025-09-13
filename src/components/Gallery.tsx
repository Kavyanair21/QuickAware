import React from 'react'

const galleryItems = [
  { title: 'Before: Stable City', desc: 'A calm metropolitan area before shaking.' },
  { title: 'During: Peak Shaking', desc: 'Buildings sway, learn where to shelter.' },
  { title: 'After: Rescue & Recovery', desc: 'Post-quake procedures and rebuilding.' }
]

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2>Awareness Gallery</h2>
        <p>Walk through curated scenes that explain the lifecycle of an earthquake event.</p>

        <div className="gallery-grid">
          {galleryItems.map((g) => (
            <div className="gallery-card" key={g.title}>
              <div className="thumb" aria-hidden>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              <a className="btn small" href="/gallery/" onClick={(e) => { e.preventDefault(); alert('Open interactive gallery (placeholder)') }}>Open</a>
              </div>
              <div className="thumb" aria-hidden>
              <h3>Visual representation</h3>
              <p>visual represention of earthquake and their impact</p>
              <a className="btn small" href="http://localhost:5501" target="_blank">Open</a>
              </div>
              <div className="thumb" aria-hidden>
              <h3>Solution</h3>
              <p>An affordable solution is BUNKER</p>
              <a className="btn small" href="http://localhost:8080/index.html" target='_blank'>Open</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


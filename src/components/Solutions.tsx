import React from 'react'

export default function Solutions() {
  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <h2>Solutions & Awareness</h2>
        <p>Our solution is multi-layered: education, engineering, and immersive training.</p>

        <div className="solution-grid">
          <div className="solution-card">
            <h3>Engineering</h3>
            <p>Seismic-resistant design, base isolation, retrofitting old buildings.</p>
          </div>
          <div className="solution-card">
            <h3>Preparation</h3>
            <p>Emergency kits, evacuation plans, community drills.</p>
          </div>
          <div className="solution-card">
            <h3>Awareness Room (WebVR)</h3>
            <p>An art-gallery-like VR room showcasing scenarios, safe practices, and a simulated bunker where users can interact and learn.</p>
            <a className="btn small" href="/vr-room">Enter VR Room</a>
          </div>
        </div>

        <div className="video-section">
          <h3>Useful Videos</h3>
          <div className="videos-grid">
            {/* Video 1 */}
            <div className="video-wrapper">
              <iframe
                width="50%"
                height="250"
                src="https://www.youtube.com/embed/90z5oU1WNTc"
                title="Protect yourself during an earthquake"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Protect yourself during an earthquake</p>
            </div>
            {/* Video 2 */}
            <div className="video-wrapper">
              <iframe
                width="50%"
                height="250"
                src="https://www.youtube.com/embed/RP3uuKqjSfQ"
                title="Preparing for Earthquakes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Preparing for Earthquakes</p>
            </div>
            {/* Video 3 */}
            <div className="video-wrapper">
              <iframe
                width="50%"
                height="250"
                src="https://www.youtube.com/embed/akipmwo7Q30"
                title="Quick Guide to Safety Before, During, and After Earthquakes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <p>Quick Guide: Before / During / After</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


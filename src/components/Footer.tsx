import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} QuakeAware — Built for awareness & education</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#solutions">Solutions</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
    </footer>
  )
}


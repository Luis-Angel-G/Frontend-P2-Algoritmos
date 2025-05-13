"use client"

import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <h1>GameRecs</h1>
        </div>

        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">Inicio</a>
            </li>
            <li>
              <a href="#recommendations">Recomendaciones</a>
            </li>
            <li>
              <a href="#genres">Géneros</a>
            </li>
            <li>
              <a href="#platforms">Plataformas</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

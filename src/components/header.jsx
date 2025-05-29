"use client"

import { useState } from "react"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">★</span>
          <h1>GameMatch</h1>
        </div>

        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#recomendaciones">Recomendaciones</a>
            </li>
            <li>
              <a href="#juegos-populares">Juegos Populares</a>
            </li>
          </ul>
        </nav>

        <div className="header-icons">
          <a href="/login" className="profile-icon" aria-label="Perfil">
            <span>👤</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
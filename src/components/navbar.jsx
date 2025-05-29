"use client"

import { useNavigate } from "react-router-dom"

function Navbar({ onLogout }) {
  const navigate = useNavigate()

  return (
    <header className="rec-header">
      <div className="rec-logo">
        <span className="rec-logo-icon">★</span>
        <h1>GameMatch</h1>
      </div>
      <nav className="rec-nav">
        <ul className="rec-nav-links">
          <li>
            <button
              className="rec-nav-button"
              onClick={() => navigate("/recommendations")}
            >
              Recomendaciones
            </button>
          </li>
          <li>
            <button
              className="rec-nav-button"
              onClick={() => navigate("/profile")}
            >
              Editar Perfil
            </button>
          </li>
          <li>
            <button className="rec-nav-button" onClick={onLogout}>
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
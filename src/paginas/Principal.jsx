import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Header from "../components/Header"
import Hero from "../components/Hero"
import TrendingGames from "../components/TrendingGames"
import "../css/Principal.css"

function Principal() {
  const [user, setUser] = useState(null)
  const [showSignUp, setShowSignUp] = useState(false)

  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="auth-container">
        <div className="auth-background">
          <div className="auth-card">
            <div className="auth-header">
              <div className="logo">
                <span className="logo-icon">★</span>
                <h1>GameMatch</h1>
              </div>
            </div>

            {showSignUp ? (
              <>
                <SignUp />
                <div className="auth-switch">
                  <p>
                    ¿Ya tienes cuenta?
                    <button className="switch-button" onClick={() => setShowSignUp(false)}>
                      Inicia sesión
                    </button>
                  </p>
                </div>
              </>
            ) : (
              <>
                <Login onLogin={setUser} />
                <div className="auth-switch">
                  <p>
                    ¿No tienes cuenta?
                    <button className="switch-button" onClick={() => setShowSignUp(true)}>
                      Regístrate
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="principal">
      <div className="background-overlay">
        <nav className="navbar">
        <div className="navbar-container container">
            <div className="logo">
              <span className="logo-icon">★</span>
              <h1>GameMatch</h1>
            </div>
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/popular" className="nav-link">
                  Popular Games
                </Link>
              </li>
              <li>
                <Link to="/match" className="nav-link">
                  GameMatch
                </Link>
              </li>
              <li>
                <Link to="/profile" className="nav-link">
                  Perfil
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="intro-section container">
          <h2>¡Bienvenido a GameMatch!</h2>
          <p>
            Conéctate con jugadores de todo el mundo y encuentra tu compañero de juego ideal.
            <br />
            ¡Descubre nuevos amigos y comparte la pasión por los videojuegos!
            <br />
            La forma más fácil y divertida de encontrar tu match gamer.
          </p>
          <button className="find-match-button" onClick={() => navigate("/match")}>
            Encuentra tu Match
          </button>
        </div>

        <main>
        {/*<Header */}
          {/*<Hero />*/}
          <TrendingGames />
        </main>
      </div>
    </div>
  )
}

export default Principal


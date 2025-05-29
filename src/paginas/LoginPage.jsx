"use client"

import "../css/Principal.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Header from "../components/Header"
import Hero from "../components/Hero"
import TrendingGames from "../components/TrendingGames"

function Principal() {
  const [user, setUser] = useState(null)
  const [showSignUp, setShowSignUp] = useState(false)
  const navigate = useNavigate()

  // Check for existing session on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Handle login to store user in localStorage and redirect
  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
    navigate("/recommendations")
  }

  // Handle logout to clear localStorage and redirect
  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
    navigate("/login")
  }

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
                <Login onLogin={handleLogin} />
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
        <Header onLogout={handleLogout} />
        <main>
          <Hero />
          <TrendingGames />
        </main>
      </div>
    </div>
  )
}

export default Principal
"use client"

import { useState } from "react"

function Login({ onLogin }) {
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg("")

    try {
      const res = await fetch("http://127.0.0.1:5050/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, contraseña }),
      })

      if (res.ok) {
        const data = await res.json()
        setMsg("Login exitoso")
        onLogin && onLogin(data.user)
      } else {
        setMsg("Correo o contraseña incorrectos")
      }
    } catch (error) {
      setMsg("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Iniciar Sesión</h2>
      <p className="auth-subtitle">Accede a tu cuenta para descubrir nuevos juegos</p>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu@email.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="contraseña">Contraseña</label>
        <input
          id="contraseña"
          name="contraseña"
          type="password"
          placeholder="••••••••"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? "Iniciando sesión..." : "Entrar"}
      </button>

      {msg && <div className={`auth-message ${msg.includes("exitoso") ? "success" : "error"}`}>{msg}</div>}
    </form>
  )
}

export default Login

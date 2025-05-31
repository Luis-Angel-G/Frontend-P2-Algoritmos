"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"
import "../css/Profile.css"

function FriendsManager() {
  const [user, setUser] = useState(null)
  const [nuevoAmigo, setNuevoAmigo] = useState("")
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser || !storedUser.correo) {
      navigate("/login")
      return
    }
    setUser(storedUser)
  }, [navigate])

  const handleAgregar = async (e) => {
    e.preventDefault()
    if (!nuevoAmigo || nuevoAmigo === user.correo) {
      setMsg("Correo inválido.")
      return
    }
    setLoading(true)
    setMsg("")
    try {
      const response = await fetch(
        `http://127.0.0.1:5050/api/v1/users/${encodeURIComponent(user.correo)}/actualizar_amigos`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amigos: [nuevoAmigo] }),
        }
      )
      const data = await response.json()
      if (response.ok) {
        setMsg("Amigo agregado correctamente")
        setNuevoAmigo("")
      } else {
        setMsg(data.error || "Error al agregar amigo")
      }
    } catch {
      setMsg("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  if (!user) return null

  return (
    <div className="profile-page">
      <Navbar onLogout={handleLogout} />
      <div className="profile-container">
        <h2 className="profile-title">Gestionar Amigos</h2>
        <form onSubmit={handleAgregar} className="profile-form" style={{ marginBottom: "2rem" }}>
          <div className="profile-form-grid">
            <div className="form-group" style={{ gridColumn: "1 / -1" }}>
              <label htmlFor="nuevoAmigo">Agregar amigo por correo</label>
              <input
                id="nuevoAmigo"
                name="nuevoAmigo"
                type="email"
                placeholder="Correo del amigo"
                value={nuevoAmigo}
                onChange={e => setNuevoAmigo(e.target.value)}
                className="form-input"
                autoComplete="off"
              />
            </div>
          </div>
          <button type="submit" className="profile-button" disabled={loading}>
            {loading ? "Agregando..." : "Agregar Amigo"}
          </button>
        </form>
        {msg && (
          <div className={`profile-message ${msg.includes("correctamente") ? "success" : "error"}`}>
            {msg}
          </div>
        )}
      </div>
    </div>
  )
}

export default FriendsManager
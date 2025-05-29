"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/navbar"
import "../css/Profile.css"

function UpdateUser() {
  const [user, setUser] = useState(null)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [contraseñaInput, setContraseñaInput] = useState("")
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
    setNombre(storedUser.nombre || "")
    setApellido(storedUser.apellido || "")
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg("")

    try {
        const body = {
        nombre,
        apellido
        }
        // Solo agrega la contraseña si el usuario la escribió
        if (contraseñaInput) {
        body.contraseña = contraseñaInput
        }
        const response = await fetch(
        `http://127.0.0.1:5050/api/v1/users/${encodeURIComponent(user.correo)}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }
        )
        if (response.ok) {
        setMsg("Usuario actualizado correctamente")
        const updatedUser = {
            ...user,
            nombre,
            apellido,
            ...(contraseñaInput && { contraseña: contraseñaInput })
        }
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setUser(updatedUser)
        setContraseñaInput("")
        } else {
        setMsg("Error al actualizar el usuario")
        }
    } catch (error) {
        setMsg("Error de conexión")
    } finally {
        setLoading(false)
    }
    }

  if (!user) return null

  return (
    <div className="profile-page">
      <Navbar onLogout={() => {
        localStorage.removeItem("user")
        navigate("/login")
      }} />
      <div className="profile-container">
        <h2 className="profile-title">Actualizar Datos Personales</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-form-grid">
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Tu apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contraseña">Nueva Contraseña (opcional)</label>
              <input
                id="contraseña"
                name="contraseña"
                type="password"
                placeholder="Deja en blanco para no cambiar la contraseña"
                value={contraseñaInput}
                onChange={(e) => setContraseñaInput(e.target.value)}
                className="form-input"
                autoComplete="new-password"
              />
            </div>
          </div>
          <button type="submit" className="profile-button" disabled={loading}>
            {loading ? "Actualizando..." : "Guardar Cambios"}
          </button>
          {msg && (
            <div className={`profile-message ${msg.includes("correctamente") ? "success" : "error"}`}>
              {msg}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default UpdateUser
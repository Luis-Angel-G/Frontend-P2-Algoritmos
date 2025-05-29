"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"
import Navbar from "../components/navbar"
import "../css/Profile.css"

function Profile() {
  const [user, setUser] = useState(null)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [generosFavoritos, setGenerosFavoritos] = useState([])
  const [plataformasFavoritas, setPlataformasFavoritas] = useState([])
  const [prefiereMultijugador, setPrefiereMultijugador] = useState(false)
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Sample options for genres and platforms (adjust based on backend data)
  const genreOptions = [
    { value: "Acción", label: "Acción" },
    { value: "Aventura", label: "Aventura" },
    { value: "RPG", label: "RPG" },
    { value: "Estrategia", label: "Estrategia" },
    { value: "Deportes", label: "Deportes" },
    { value: "Simulación", label: "Simulación" },
  ]

  const platformOptions = [
    { value: "PC", label: "PC" },
    { value: "PlayStation", label: "PlayStation" },
    { value: "Xbox", label: "Xbox" },
    { value: "Nintendo Switch", label: "Nintendo Switch" },
    { value: "Móvil", label: "Móvil" },
  ]

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser || !storedUser.correo) {
      navigate("/login")
      return
    }

    // Fetch user preferences from backend
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5050/api/v1/users/${encodeURIComponent(storedUser.correo)}`
        )
        if (response.ok) {
          const data = await response.json()
          setUser(data)
          setNombre(data.nombre || "")
          setApellido(data.apellido || "")
          setGenerosFavoritos(
            data.generos_favoritos?.map((g) => ({ value: g, label: g })) || []
          )
          setPlataformasFavoritas(
            data.plataformas_favoritas?.map((p) => ({ value: p, label: p })) || []
          )
          setPrefiereMultijugador(data.prefiere_multijugador || false)
        } else {
          setMsg("Error al cargar los datos del usuario")
        }
      } catch (error) {
        setMsg("Error de conexión al servidor")
      }
    }

    fetchUserData()
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg("")

    try {
      const response = await fetch(
        `http://127.0.0.1:5050/api/v1/users/${encodeURIComponent(user.correo)}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre,
            apellido,
            contraseña: contraseña || undefined, // Send undefined if empty to avoid updating
            generos_favoritos: generosFavoritos.map((g) => g.value),
            plataformas_favoritas: plataformasFavoritas.map((p) => p.value),
            prefiere_multijugador: prefiereMultijugador,
          }),
        }
      )

      if (response.ok) {
        setMsg("Perfil actualizado correctamente")
        // Update localStorage with new user data
        const updatedUser = {
          ...user,
          nombre,
          apellido,
          generos_favoritos: generosFavoritos.map((g) => g.value),
          plataformas_favoritas: plataformasFavoritas.map((p) => p.value),
          prefiere_multijugador: prefiereMultijugador,
        }
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setUser(updatedUser)
      } else {
        setMsg("Error al actualizar el perfil")
      }
    } catch (error) {
      setMsg("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <div className="profile-page">
      <Navbar onLogout={handleLogout} />
      <div className="profile-container">
        <h2 className="profile-title">Editar Perfil</h2>
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
                placeholder="Nueva contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="generos">Géneros Favoritos</label>
              <Select
                id="generos"
                isMulti
                options={genreOptions}
                value={generosFavoritos}
                onChange={setGenerosFavoritos}
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Selecciona géneros..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="plataformas">Plataformas Favoritas</label>
              <Select
                id="plataformas"
                isMulti
                options={platformOptions}
                value={plataformasFavoritas}
                onChange={setPlataformasFavoritas}
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Selecciona plataformas..."
              />
            </div>
            <div className="form-group form-checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={prefiereMultijugador}
                  onChange={(e) => setPrefiereMultijugador(e.target.checked)}
                  className="form-checkbox"
                />
                Prefiero juegos multijugador
              </label>
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

export default Profile
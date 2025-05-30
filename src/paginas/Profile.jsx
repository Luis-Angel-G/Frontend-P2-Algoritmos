"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"
import Navbar from "../components/navbar"
import "../css/Profile.css"

function Profile() {
  const [user, setUser] = useState(null)
  const [juegosFavoritos, setJuegosFavoritos] = useState([])
  const [juegosInteresados, setJuegosInteresados] = useState([])
  const [juegosNoGustados, setJuegosNoGustados] = useState([])
  const [juegosJugados, setJuegosJugados] = useState([])
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [games, setGames] = useState([]);

  // Cargar juegos disponibles
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("http://127.0.0.1:5050/api/v1/videogames");
        if (res.ok) {
          const data = await res.json();
          setGames(data.map((game) => ({ value: game.name, label: game.name })));
        } else {
          setMsg("Error al cargar juegos");
        }
      } catch (error) {
        setMsg("Error de conexión al cargar juegos");
      }
    };
    fetchGames();
  }, []);

  // Cargar datos del usuario
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (!storedUser || !storedUser.correo) {
      navigate("/login")
      return
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5050/api/v1/users/${encodeURIComponent(storedUser.correo)}`
        )
        if (response.ok) {
          const data = await response.json()
          setUser(data)
          setJuegosFavoritos(
            data.juegos_favoritos?.map((g) => ({ value: g, label: g })) || []
          )
          setJuegosInteresados(
            data.juegos_interesados?.map((p) => ({ value: p, label: p })) || []
          )
          setJuegosNoGustados(
            data.juegos_no_gustados?.map((a) => ({ value: a, label: a })) || []
          )
          setJuegosJugados(
            data.juegos_jugados?.map((j) => ({ value: j, label: j })) || []
          )
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
        `http://127.0.0.1:5050/api/v1/users/${encodeURIComponent(user.correo)}/actualizar_juegos`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            juegos_favoritos: juegosFavoritos.map((g) => g.value),
            juegos_interesados: juegosInteresados.map((p) => p.value),
            juegos_no_gustados: juegosNoGustados.map((a) => a.value),
            juegos_jugados: juegosJugados.map((j) => j.value),
          }),
        }
      )

      if (response.ok) {
        setMsg("Juegos actualizados correctamente")
        const updatedUser = {
          ...user,
          juegos_favoritos: juegosFavoritos.map((g) => g.value),
          juegos_interesados: juegosInteresados.map((p) => p.value),
          juegos_no_gustados: juegosNoGustados.map((a) => a.value),
          juegos_jugados: juegosJugados.map((j) => j.value),
        }
        localStorage.setItem("user", JSON.stringify(updatedUser))
        setUser(updatedUser)
      } else {
        setMsg("Error al actualizar los juegos")
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
        <h2 className="profile-title">Editar Juegos del Perfil</h2>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-form-grid">
            <div className="form-group">
              <label htmlFor="juegos_favoritos">Juegos Favoritos</label>
              <Select
                id="juegos_favoritos"
                isMulti
                options={games}
                value={juegosFavoritos}
                onChange={setJuegosFavoritos}
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Selecciona juegos..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="juegos_interesados">Juegos Interesados</label>
              <Select
                id="juegos_interesados"
                isMulti
                options={games}
                value={juegosInteresados}
                onChange={setJuegosInteresados}
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Selecciona juegos..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="juegos_no_gustados">Juegos No Gustados</label>
              <Select
                id="juegos_no_gustados"
                isMulti
                options={games}
                value={juegosNoGustados}
                onChange={setJuegosNoGustados}
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Selecciona juegos..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="juegos_jugados">Juegos Jugados</label>
              <Select
                id="juegos_jugados"
                isMulti
                options={games}
                value={juegosJugados}
                onChange={setJuegosJugados}
                className="form-select"
                classNamePrefix="react-select"
                placeholder="Selecciona juegos..."
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

export default Profile
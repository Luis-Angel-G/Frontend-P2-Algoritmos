"use client"

import { useState } from "react"

function SignUp() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contraseña: "",
    juegos_favoritos: [],
    juegos_interesados: [],
    juegos_no_gustados: [],
    juegos_jugados: [],
    amigos: [],
  })
  const [msg, setMsg] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg("")

    try {
      const res = await fetch("http://127.0.0.1:5050/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setMsg("Usuario registrado correctamente")
        // Reset form
        setForm({
          nombre: "",
          apellido: "",
          correo: "",
          contraseña: "",
          juegos_favoritos: [],
          juegos_interesados: [],
          juegos_no_gustados: [],
          juegos_jugados: [],
          amigos: [],
        })
      } else {
        setMsg("Error al registrar usuario")
      }
    } catch (error) {
      setMsg("Error de conexión")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Crear Cuenta</h2>
      <p className="auth-subtitle">Únete a GameMatch y descubre tu próximo juego favorito</p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            id="apellido"
            name="apellido"
            placeholder="Tu apellido"
            value={form.apellido}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo electrónico</label>
        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="tu@email.com"
          value={form.correo}
          onChange={handleChange}
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
          value={form.contraseña}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </button>

      {msg && <div className={`auth-message ${msg.includes("correctamente") ? "success" : "error"}`}>{msg}</div>}
    </form>
  )
}

export default SignUp

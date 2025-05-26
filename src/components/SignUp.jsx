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
    amigos: []
  })
  const [msg, setMsg] = useState("")

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch("http://127.0.0.1:5050/api/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
    if (res.ok) setMsg("Usuario registrado correctamente")
    else setMsg("Error al registrar usuario")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
      <input name="apellido" placeholder="Apellido" onChange={handleChange} required />
      <input name="correo" placeholder="Correo" onChange={handleChange} required />
      <input name="contraseña" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
      <div>{msg}</div>
    </form>
  )
}

export default SignUp
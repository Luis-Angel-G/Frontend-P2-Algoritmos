import { useState } from "react"

function Login({ onLogin }) {
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [msg, setMsg] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch("http://127.0.0.1:5050/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contraseña })
    })
    if (res.ok) {
      const data = await res.json()
      setMsg("Login exitoso")
      onLogin && onLogin(data.user)
    } else {
      setMsg("Correo o contraseña incorrectos")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input name="correo" placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} required />
      <input name="contraseña" type="password" placeholder="Contraseña" value={contraseña} onChange={e => setContraseña(e.target.value)} required />
      <button type="submit">Entrar</button>
      <div>{msg}</div>
    </form>
  )
}

export default Login
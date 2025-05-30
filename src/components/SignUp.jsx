"use client";

import { useState, useEffect } from "react";
import Select from "react-select";

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
  });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (name, selectedOptions) => {
    setForm((prev) => ({
      ...prev,
      [name]: selectedOptions ? selectedOptions.map((option) => option.value) : [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const userData = {
        nombre: form.nombre,
        apellido: form.apellido,
        correo: form.correo,
        contraseña: form.contraseña,
        juegos_favoritos: form.juegos_favoritos,
        juegos_interesados: form.juegos_interesados,
        juegos_no_gustados: form.juegos_no_gustados,
        juegos_jugados: form.juegos_jugados,
        amigos: [],
      };

      const res = await fetch("http://127.0.0.1:5050/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      if (res.ok) {
        setMsg("Cuenta creada correctamente");
      } else {
        const errorData = await res.json();
        setMsg(`Error al crear cuenta: ${errorData.message || "Error desconocido"}`);
      }
    } catch (error) {
      setMsg("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Crear Cuenta</h2>
      <p className="auth-subtitle">Únete a GameMatch y descubre tu próximo juego favorito</p>

      <div className="form-section">
        <h3>Información Personal</h3>
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
      </div>

      <div className="form-section">
        <h3>Preferencias de Juego</h3>
        <div className="form-group">
          <label htmlFor="juegos_favoritos">Juegos Favoritos </label>
          <Select
            id="juegos_favoritos"
            name="juegos_favoritos"
            isMulti
            options={games}
            value={games.filter((game) => form.juegos_favoritos.includes(game.value))}
            onChange={(selected) => handleSelectChange("juegos_favoritos", selected)}
            placeholder="Selecciona tus juegos favoritos"
            className="form-select"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="juegos_interesados">Juegos Interesados </label>
          <Select
            id="juegos_interesados"
            name="juegos_interesados"
            isMulti
            options={games}
            value={games.filter((game) => form.juegos_interesados.includes(game.value))}
            onChange={(selected) => handleSelectChange("juegos_interesados", selected)}
            placeholder="Selecciona los juegos que te interesan"
            className="form-select"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="juegos_no_gustados">Juegos No Gustados </label>
          <Select
            id="juegos_no_gustados"
            name="juegos_no_gustados"
            isMulti
            options={games}
            value={games.filter((game) => form.juegos_no_gustados.includes(game.value))}
            onChange={(selected) => handleSelectChange("juegos_no_gustados", selected)}
            placeholder="Selecciona los juegos que no te gustan"
            className="form-select"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="juegos_jugados">Juegos Jugados </label>
          <Select
            id="juegos_jugados"
            name="juegos_jugados"
            isMulti
            options={games}
            value={games.filter((game) => form.juegos_jugados.includes(game.value))}
            onChange={(selected) => handleSelectChange("juegos_jugados", selected)}
            placeholder="Selecciona los juegos que has jugado y no los selecionado anteriormente"
            className="form-select"
            classNamePrefix="react-select"
          />
        </div>
      </div>

      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </button>

      {msg && (
        <div className={`auth-message ${msg.includes("correctamente") ? "success" : "error"}`}>{msg}</div>
      )}
    </form>
  );
}

export default SignUp;
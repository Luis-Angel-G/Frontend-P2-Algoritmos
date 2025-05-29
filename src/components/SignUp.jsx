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
    generos_favoritos: [],
    plataformas_favoritas: [],
    prefiere_multijugador: false,
  });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);
  const [genres] = useState([
    { value: "Acción", label: "Acción" },
    { value: "Aventura", label: "Aventura" },
    { value: "Deportes", label: "Deportes" },
    { value: "Estrategia", label: "Estrategia" },
    { value: "RPG", label: "RPG" },
    { value: "Simulación", label: "Simulación" },
    { value: "Shooter", label: "Shooter" },
  ]);
  const [platforms] = useState([
    { value: "PC", label: "PC" },
    { value: "PlayStation", label: "PlayStation" },
    { value: "Xbox", label: "Xbox" },
    { value: "Nintendo Switch", label: "Nintendo Switch" },
  ]);

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
        juegos_interesados: [],
        juegos_no_gustados: [],
        juegos_jugados: [],
        amigos: [],
      };

      const res = await fetch("http://127.0.0.1:5050/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        setMsg("Usuario registrado correctamente");

        const preferencesData = {
          generos_favoritos: form.generos_favoritos,
          plataformas_favoritas: form.plataformas_favoritas,
          prefiere_multijugador: form.prefiere_multijugador,
        };

        const prefRes = await fetch(`http://127.0.0.1:5050/api/v1/users/${form.correo}/preferences`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(preferencesData),
        });

        if (!prefRes.ok) {
          setMsg("Usuario registrado, pero error al guardar preferencias");
        }

        setForm({
          nombre: "",
          apellido: "",
          correo: "",
          contraseña: "",
          juegos_favoritos: [],
          generos_favoritos: [],
          plataformas_favoritas: [],
          prefiere_multijugador: false,
        });
      } else {
        setMsg("Error al registrar usuario");
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
          <label htmlFor="juegos_favoritos">Juegos Favoritos (opcional)</label>
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
          <label htmlFor="generos_favoritos">Géneros Favoritos (opcional)</label>
          <Select
            id="generos_favoritos"
            name="generos_favoritos"
            isMulti
            options={genres}
            value={genres.filter((genre) => form.generos_favoritos.includes(genre.value))}
            onChange={(selected) => handleSelectChange("generos_favoritos", selected)}
            placeholder="Selecciona tus géneros favoritos"
            className="form-select"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label htmlFor="plataformas_favoritas">Plataformas Favoritas (opcional)</label>
          <Select
            id="plataformas_favoritas"
            name="plataformas_favoritas"
            isMulti
            options={platforms}
            value={platforms.filter((platform) => form.plataformas_favoritas.includes(platform.value))}
            onChange={(selected) => handleSelectChange("plataformas_favoritas", selected)}
            placeholder="Selecciona tus plataformas favoritas"
            className="form-select"
            classNamePrefix="react-select"
          />
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="prefiere_multijugador"
              checked={form.prefiere_multijugador}
              onChange={handleChange}
              className="form-checkbox"
            />
            Prefiero juegos multijugador
          </label>
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

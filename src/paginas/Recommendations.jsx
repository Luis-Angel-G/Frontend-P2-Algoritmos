"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../css/Recommendations.css"
import Navbar from "../components/navbar"

function Recommendations() {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user || !user.correo) {
      navigate("/login")
      return
    }

    const fetchRecommendations = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:5050/api/v1/recommendations/top3/${encodeURIComponent(user.correo)}`
        )
        if (response.ok) {
          const data = await response.json()
          setRecommendations(data)
        } else {
          setError("No se pudieron cargar las recomendaciones")
        }
      } catch (err) {
        setError("Error de conexión al servidor")
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [navigate])

  return (
    <div className="rec-page">
      <Navbar onLogout={() => {
        localStorage.removeItem("user")
        navigate("/login")
      }} />
      <div className="rec-container">
        <h2 className="rec-title">Tus Recomendaciones de Juegos</h2>
        {loading && <p className="rec-loading">Cargando recomendaciones...</p>}
        {error && <p className="rec-error">{error}</p>}
        {!loading && !error && recommendations.length === 0 && (
          <p className="rec-no-results">No hay recomendaciones disponibles.</p>
        )}
        <div className="rec-grid">
          {recommendations.map((game) => (
            <div key={game.name} className="rec-card">
              {game.image_url && (
                <img
                  src={game.image_url}
                  alt={game.name}
                  className="rec-card-image"
                  style={{ width: "100%", borderRadius: "12px", marginBottom: "1rem", objectFit: "cover", maxHeight: "200px" }}
                />
              )}
              <h3 className="rec-card-title">{game.name}</h3>
              <p className="rec-card-info"><strong>Puntuación:</strong> {game.score}</p>
              <p className="rec-card-info"><strong>Géneros:</strong> {game.genres.join(", ")}</p>
              <p className="rec-card-info"><strong>Plataformas:</strong> {game.platforms.join(", ")}</p>
              <p className="rec-card-score"><strong>Score Normalizado:</strong> {(game.normalized_score * 100).toFixed(2)}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recommendations
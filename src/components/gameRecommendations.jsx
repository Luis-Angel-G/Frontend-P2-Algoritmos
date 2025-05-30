import '../css/gameRecommendations.css';
import { useNavigate, Link } from "react-router-dom"

function GameRecommendations() {
  const navigate = useNavigate();
  const games = [
    {
      id: 1,
      title: "The Legend of Adventure",
      genre: "RPG",
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=200",
      platform: "PC, PS5, Xbox Series X",
    },
    {
      id: 2,
      title: "Space Explorers",
      genre: "Aventura",
      rating: 4.6,
      image: "/placeholder.svg?height=300&width=200",
      platform: "PC, PS5",
    },
    {
      id: 3,
      title: "Racing Champions",
      genre: "Carreras",
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=200",
      platform: "Todas las plataformas",
    },
    {
      id: 4,
      title: "Tactical Warriors",
      genre: "Estrategia",
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=200",
      platform: "PC, Switch",
    },
  ]

  return (
    <section className="recommendations" id="recommendations">
      <div className="container">
        <div className="section-header">
          <h2>Juegos Recomendados</h2>
          <p>Nuestras mejores selecciones para ti</p>
        </div>

        <div className="view-more">
          <button 
          className="find-match-button"
          onClick={() => navigate("/recommendations")}
          >Ver más recomendaciones</button>
        </div>
      </div> {/* Aquí se cierra el div.container */}
    </section>
  )
}

export default GameRecommendations
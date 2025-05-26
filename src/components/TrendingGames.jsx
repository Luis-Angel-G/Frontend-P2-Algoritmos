"use client"

import { useState } from "react"

function TrendingGames() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const games = [
    {
      id: 1,
      title: "EA FC 24",
      image: "/placeholder.svg?height=300&width=200",
      publisher: "EA Sports",
    },
    {
      id: 2,
      title: "EA FC 24",
      image: "/placeholder.svg?height=300&width=200",
      publisher: "EA Sports",
    },
    {
      id: 3,
      title: "Mario Kart 8 Deluxe",
      image: "/placeholder.svg?height=300&width=200",
      publisher: "Nintendo",
    },
    {
      id: 4,
      title: "Dragon Ball Sparking Zero",
      image: "/placeholder.svg?height=300&width=200",
      publisher: "Bandai Namco",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === games.length - 4 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? games.length - 4 : prev - 1))
  }

  return (
    <section className="trending">
      <div className="container">
        <div className="trending-header">
          <h2>Juegos en tendencia</h2>
          <p>Top 12 más vendidos en 2024...</p>
        </div>

        <div className="trending-carousel">
          <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Anterior">
            ←
          </button>
          <div className="games-container">
            {games.map((game, index) => (
              <div
                className={`game-card ${index >= currentSlide && index < currentSlide + 4 ? "visible" : ""}`}
                key={game.id}
              >
                <div className="game-image">
                  <img src={game.image || "/placeholder.svg"} alt={game.title} />
                </div>
                <div className="game-info">
                  <h3>{game.title}</h3>
                  <p>{game.publisher}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow next" onClick={nextSlide} aria-label="Siguiente">
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default TrendingGames
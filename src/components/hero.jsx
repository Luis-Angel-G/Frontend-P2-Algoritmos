function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Descubre Tu Próxima Aventura Gaming</h1>
          <p>Recomendaciones personalizadas de videojuegos basadas en tus gustos y estilo de juego</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explorar Juegos</button>
            <button className="btn btn-secondary">Ver Tendencias</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="controller-icon">🎮</div>
          <div className="game-cards">
            <div className="game-card card-1"></div>
            <div className="game-card card-2"></div>
            <div className="game-card card-3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

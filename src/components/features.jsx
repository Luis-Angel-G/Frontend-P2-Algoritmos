function Features() {
  const features = [
    {
      id: 1,
      icon: "🎯",
      title: "Recomendaciones Personalizadas",
      description: "Algoritmo que aprende de tus preferencias para recomendarte juegos que realmente te gustarán.",
    },
    {
      id: 2,
      icon: "📊",
      title: "Reseñas Detalladas",
      description: "Análisis profundos de cada juego con pros, contras y opiniones de la comunidad.",
    },
    {
      id: 3,
      icon: "💰",
      title: "Alertas de Ofertas",
      description: "Recibe notificaciones cuando los juegos de tu lista de deseos estén en oferta.",
    },
    {
      id: 4,
      icon: "👥",
      title: "Comunidad Activa",
      description: "Conecta con otros gamers, comparte opiniones y descubre joyas ocultas.",
    },
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2>¿Por qué GameRecs?</h2>
          <p>Características que nos hacen únicos</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

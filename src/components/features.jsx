
import '../css/features.css';
function Features() {
  const features = [
    {
      id: 1,
      icon: "🎯",
      title: "Recomendaciones Personalizadas",
      description: "Nuestro algoritmo aprende tus gustos para recomendarte juegos que realmente disfrutarás.",
    },
    {
      id: 2,
      icon: "📊",
      title: "Reseñas Detalladas",
      description: "Explora análisis a fondo con pros, contras y opiniones de otros jugadores.",
    },
    {
      id: 3,
      icon: "💰",
      title: "Alertas de Ofertas",
      description: "Recibe notificaciones cuando los juegos de tu lista de deseos estén en descuento.",
    },
    {
      id: 4,
      icon: "👥",
      title: "Comunidad Activa",
      description: "Conecta con otros gamers, comparte opiniones y encuentra joyas ocultas.",
    },
    
  ]

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>¿Por qué <span className="highlight">GameRecs</span>?</h2>
          <p>Descubre lo que hace única a nuestra plataforma</p>
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

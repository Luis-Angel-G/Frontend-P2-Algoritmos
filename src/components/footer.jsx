function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="logo">
              <span className="logo-icon">🎮</span>
              <h2>GameRecs</h2>
            </div>
            <p>Tu destino para descubrir los mejores videojuegos personalizados según tus gustos y preferencias.</p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Instagram">
                📸
              </a>
              <a href="#" aria-label="YouTube">
                📺
              </a>
              <a href="#" aria-label="Discord">
                💬
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li>
                <a href="#home">Inicio</a>
              </li>
              <li>
                <a href="#recommendations">Recomendaciones</a>
              </li>
              <li>
                <a href="#genres">Géneros</a>
              </li>
              <li>
                <a href="#platforms">Plataformas</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-section genres">
            <h3>Géneros Populares</h3>
            <ul>
              <li>
                <a href="#">Acción</a>
              </li>
              <li>
                <a href="#">Aventura</a>
              </li>
              <li>
                <a href="#">RPG</a>
              </li>
              <li>
                <a href="#">Estrategia</a>
              </li>
              <li>
                <a href="#">Deportes</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p>
              <span>📧</span> info@gamerecs.com
            </p>
            <p>
              <span>📱</span> +1 (555) 123-4567
            </p>
            <p>
              <span>🌎</span> Ciudad Gaming, CP 12345
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} GameRecs. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Términos de Servicio</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

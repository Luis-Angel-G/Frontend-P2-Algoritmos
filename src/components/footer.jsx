import React from 'react';
import '../css/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-icon">🎮</span>
            <h2>GameRecs</h2>
            <p>
              Tu destino para descubrir los mejores videojuegos personalizados según tus gustos y preferencias.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="YouTube">📺</a>
              <a href="#" aria-label="Discord">💬</a>
            </div>
          </div>
        </div> {/* Cierre de footer-top */}

        <div className="footer-bottom">
          <div className="footer-links">
            <div>
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#recommendations">Recomendaciones</a></li>
                <li><a href="#genres">Géneros</a></li>
                <li><a href="#platforms">Plataformas</a></li>
              </ul>
            </div>

            <div>
              <h4>Géneros Populares</h4>
              <ul>
                <li><a href="#">Acción</a></li>
                <li><a href="#">Aventura</a></li>
                <li><a href="#">RPG</a></li>
                <li><a href="#">Estrategia</a></li>
                <li><a href="#">Deportes</a></li>
              </ul>
            </div>

            <div>
              <h4>Contacto</h4>
              <p><span>📧</span> info@gamerecs.com</p>
              <p><span>📱</span> +1 (555) 123-4567</p>
              <p><span>🌎</span> Ciudad Gaming, CP 12345</p>
            </div>
          </div>

          <div className="footer-legal">
            <p>&copy; {new Date().getFullYear()} GameRecs. Todos los derechos reservados.</p>
            <div>
              <a href="#">Términos de Servicio</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
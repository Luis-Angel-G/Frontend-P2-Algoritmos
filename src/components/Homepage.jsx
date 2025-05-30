
import { useNavigate, Link } from "react-router-dom"

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="principal">
      <div className="background-overlay">
        {/* navbar... */}
        <div className="intro-section container">
          <h2>¡Bienvenido a GameMatch!</h2>
          <p>
            Conéctate con jugadores de todo el mundo y encuentra tu compañero de juego ideal.
            <br />
            ¡Descubre nuevos amigos y comparte la pasión por los videojuegos!
            <br />
            La forma más fácil y divertida de encontrar tu match gamer.
          </p>
          <button
            className="find-match-button"
            onClick={() => navigate("/hero")}
          >
            Encuentra tu Match
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

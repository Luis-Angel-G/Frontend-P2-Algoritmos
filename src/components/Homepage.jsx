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
            Conéctate con amigos de todo el mundo.
            <br />
            ¡Comparte la pasión por los videojuegos!
            <br />
            La forma más fácil y divertida de encontrar tu match gamer.
          </p>
          <button
            className="find-match-button"
            onClick={() => navigate("/friends")}
          >
            Encuentra tu Match
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

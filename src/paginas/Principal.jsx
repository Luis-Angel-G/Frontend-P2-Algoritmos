import React from 'react';
import Navbar from '../components/navbar';
import GameRecommendations from '../components/GameRecommendations';
import Features from '../components/features';
import Footer from '../components/footer';
import '../css/Principal.css';
import HomePage from '../components/Homepage';
import { useNavigate } from "react-router-dom";

function Principal() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="navbar-centered">
        <Navbar onLogout={() => {
          localStorage.removeItem("user")
          navigate("/login")
        }} />
      </div>
      <main>
        <HomePage />
        <GameRecommendations />
        <Features />
      </main>
    </div>
  );
}

export default Principal
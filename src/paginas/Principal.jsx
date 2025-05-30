import React from 'react';
import Navbar from '../components/navbar';
import GameRecommendations from '../components/GameRecommendations';
import Features from '../components/features';
import Footer from '../components/footer';
import '../css/Principal.css';
import HomePage from '../components/Homepage';

function Principal() {
  return (
    <div className="app">
      <Navbar onLogout={() => {
        localStorage.removeItem("user")
        navigate("/login")
      }} />
      <main>
        <HomePage />
        <GameRecommendations />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Principal
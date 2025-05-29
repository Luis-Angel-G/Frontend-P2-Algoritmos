import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';  
import GameRecommendations from '../components/GameRecommendations';
import Features from '../components/features';
import Footer from '../components/footer';
import '../css/Principal.css'; // Asegúrate de que la ruta sea correcta

function Principal() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <GameRecommendations />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Principal;
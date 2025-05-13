import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GameRecommendations from '/src/components/GameRecommendations';
import Features from '/src/components/Features';
import Footer from '/src/components/Footer';
import '../css/Principal.css';

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
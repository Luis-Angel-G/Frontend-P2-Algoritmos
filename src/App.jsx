import Principal from './paginas/Principal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Hero from './components/hero'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Principal from './paginas/Principal'
import Recommendations from './paginas/Recommendations'
import Profile from './paginas/Profile'
import Login from './paginas/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
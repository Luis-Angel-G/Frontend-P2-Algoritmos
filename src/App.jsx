import Principal from './paginas/Principal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {
  const [user, setUser] = useState(null)
  const [showSignUp, setShowSignUp] = useState(false)

  if (!user) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        {showSignUp ? (
          <>
            <SignUp />
            <p>¿Ya tienes cuenta? <button onClick={() => setShowSignUp(false)}>Inicia sesión</button></p>
          </>
        ) : (
          <>
            <Login onLogin={setUser} />
            <p>¿No tienes cuenta? <button onClick={() => setShowSignUp(true)}>Regístrate</button></p>
          </>
        )}
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

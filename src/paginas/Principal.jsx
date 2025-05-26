import "../css/Principal.css"
import Header from "../components/Header"
import Hero from "../components/Hero"
import TrendingGames from "../components/TrendingGames"
import React from "react"
import SignUp from "../components/SignUp"
import Login from "../components/Login"

function App() {
  return (
    <div className="app">
      <div className="background-overlay">
        <Header />
        <main>
          <Hero />
          <TrendingGames />
        </main>
      </div>
    </div>
  )
}

export default App

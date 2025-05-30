import Principal from './paginas/Principal'
import Recommendations from './paginas/Recommendations'
import Profile from './paginas/Profile'
import UpdateUser from './paginas/UpdateUser'
import UpdateFriends from './paginas/UpdateFriends'
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
        <Route path="/update-user" element={<UpdateUser />} />
        <Route path="/friends" element={<UpdateFriends />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
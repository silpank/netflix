import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { Home } from './pages/Home/Home'
import {Routes, Route, useLocation} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  const location = useLocation();
  return (
    <div>
{location.pathname !=='/login' && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>

    </div>
  )
}

export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Game from '../components/Game/Game'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path="/cardgame" element={<Game/>}/>
    </Routes>
  )
}

export default AllRoutes
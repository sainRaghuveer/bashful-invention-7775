import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../components/Home'
import AllGamePage from '../pages/AllGamePage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/allgame' element={<AllGamePage/>}></Route>
    </Routes>
  )
}

export default AllRoutes
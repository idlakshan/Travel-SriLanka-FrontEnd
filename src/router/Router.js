import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResult from '../pages/SearchResult'
import TourDetails from '../pages/TourDetails'
import Tours from '../pages/Tours'


const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to={'/home'}/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/tours' element={<Tours/>}/>
            <Route path='/tours/:id' element={<TourDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/tours/search' element={<SearchResult/>}/>

        </Routes>
       
    
    </div>
  )
}

export default Router

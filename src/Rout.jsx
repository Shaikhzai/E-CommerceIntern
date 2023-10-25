import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'

const Rout = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default Rout
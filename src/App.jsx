import React from 'react'
import NavBar from './NavBar'
import Rout from './Rout'
import Footer from './footer'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Rout/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import './app.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Offer from './Components/Offers/Offer'
import Popular from './Components/Popular/popular'
import About from './Components/About/About'


const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offer/>
    <About/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App

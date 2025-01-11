import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Reservation from './pages/Reservation/Reservation'
import Menu from './pages/Menu/Menu'
import ContactUs from './pages/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <div className='app'>
      <Navigation/>
        <main>
        <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/cart' element={<Cart/>} />
        < Route path='/reservation' element={<Reservation/>} />
        < Route path='/menu' element={<Menu/>} />
        < Route path='/contact-us' element={<ContactUs/>} />
      </Routes>
        </main>
      <Footer/>
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import axios from 'axios'

const App = () => {
  const [location, setLocation] = useState(null)
  const [openTost, setOpenTost] = useState(false)
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation)
        setOpenTost(false)
        console.log(openTost);
        
      } catch (error) {
        console.log(error);

      }
    })


  }
  useEffect(() => {
    getLocation()
  }, [])



  return (
    <div>
      <BrowserRouter>
        <Navbar location={location} getlocation={getLocation} openTost={openTost} setOpenTost={setOpenTost}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/products' element={<Products></Products>} ></Route>
          <Route path='/about' element={<About></About>} ></Route>
          <Route path='/contact' element={<Contact></Contact>} ></Route>
          <Route path='/cart' element={<Cart></Cart>} ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  )
}

export default App
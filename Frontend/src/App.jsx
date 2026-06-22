import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Components/Add';
import Edit from './Components/Edit';
import Show from './Components/Show';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/show/:id' element={<Show />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

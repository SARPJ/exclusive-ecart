import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './compo/signup'
import Header from './compo/header'
import Footer from './compo/footer'
import './compo/file.css'


function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Signup/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App

import { useState, useRef, useEffect } from 'react'
import Navbar from './components/navbar'
import Front from './components/front'
import Iconbar from './components/Iconbar'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Test from './components/Test'
import Video from './components/video'
import './App.css'


import RenderFirstPage from './render/renderFirstPage'
import Home from './components/Home'
import SecondPage from './components/secondPage'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route  path ='/' Component={RenderFirstPage}></Route>
       <Route  path ='/home' Component={Home}></Route>
       <Route path ='/second' Component={SecondPage}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

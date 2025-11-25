import { useState, useRef, useEffect } from 'react'
import Navbar from './components/navbar'
import Front from './components/front'
import Iconbar from './components/Iconbar'

import Test from './components/Test'
import Video from './components/video'
import './App.css'


import RenderFirstPage from './render/renderFirstPage'
import RenderSecondPage from './render/renderSecondPage'

function App() {




  return (
    <>
      <div className=''>
        <div className='absolute'>
          <RenderFirstPage />
        </div>
        <div className='absolute hidden'>
          <RenderSecondPage />
        </div>
      </div>
    </>
  )
}

export default App

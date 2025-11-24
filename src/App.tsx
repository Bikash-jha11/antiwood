import { useState } from 'react'
import Navbar from './components/navbar'
import Front from './components/front'
import Iconbar from './components/Iconbar'

import Test from './components/Test'
import Video from './components/video'
import './App.css'


import RenderFirstPage from './render/renderFirstPage'

function App() {
  return (
    <>
      <div className=''>
        <RenderFirstPage />
        {/* <Iconbar/> */}
        {/* <Test/> */}
      </div>
    </>
  )
}

export default App

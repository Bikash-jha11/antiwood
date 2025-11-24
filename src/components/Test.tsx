import React from 'react'
import Iconbar from './Iconbar'

function Test() {
  return (
    <div className='relative h-screen wavy'>
      hi

<div className='absolute left-1/2 bottom-1 border-1'>
     <Iconbar/>
</div>


  <div className='absolute left-1/2 bottom-1/2 text_animation'>
  <p style={{ "--i": "1" }}>But</p>
  <p style={{ "--i": "2" }}>at</p>
  <p style={{ "--i": "3" }}>center</p>
  <p style={{ "--i": "4" }}>of</p>
  <p style={{ "--i": "5" }}>everything</p>
  </div>
  

        
    </div>
  )
}

export default Test
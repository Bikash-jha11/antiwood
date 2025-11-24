import React from 'react'
import Iconbar from './Iconbar'

function Test() {
  return (
    <div className='relative h-screen wavy'>
      hi

      <div className='absolute left-1/2 bottom-1 border-1'>
        <Iconbar />
      </div>
    </div>
  )
}

export default Test
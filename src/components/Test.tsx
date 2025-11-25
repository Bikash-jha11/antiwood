import React from 'react'
import Iconbar from './Iconbar'
import video from '../assets/universe.mp4'

function Test() {
  return (
    <div className='relative h-screen'>

      <div className='flex items-center justify-center h-full border-1'>
        {/* centered div */}
        <div className=' flex-col flex justify-center items-center gap-8'>
          <div className='w-md h-[70px]  overflow-y-scroll flex-col flex justify-center items-center'>
            <p className='text-gray-400 text-center text-[24px] font-medium tracking-[-0.25px] mt-8'>Inside is the architecture, logic,</p>

            <p className='text-gray-200 text-[24px] font-medium tracking-[-0.25px]'>and engineering I refine</p>
            <p className='text-gray-200 text-[24px] font-medium tracking-[-0.25px]'>to perfection.</p>
          </div>


          {/* video section */}
          <div className='h-[340px] w-xs rounded-3xl overflow-hidden'>
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Test
import React from 'react'
import fade from '../assets/Combi.jpg'

function ThirdPage() {
  return (
    <div className='relative'>
           <div className='flex  flex-col items-center justify-center gap-8 h-screen'>
            <p className='text-gray-100 font-medium text-4xl'>That’s not engineering.</p>
            <p className='text-gray-100 font-medium text-4xl'>— that’s busywork. I focus on real building.</p>
           </div>
           {/* image div */}
           <div className='relative w-full h-[2400px] '>
          <div className='gradient1 w-full h-full'></div>
            <p className='sticky bottom-1/2 text-center text-[48px] text-black font-medium underline decoration-dotted dotted'>It's time to rethink,</p> 
            <p className='sticky bottom-[40%] text-center text-[48px] text-black font-medium underline decoration-dotted dotted'>how your app was made.</p> 
           </div>
             {/* for anim */}
        <div className='bg-[#fffcf7] h-[400px] w-full'>
               
        </div>
    </div>
  )
}

export default ThirdPage
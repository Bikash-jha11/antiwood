import React from 'react'
import GlassTabs from './GlassTab'
import FixedScrollPage from './Scrollpgae'


function Progress() {
  return (
    <>
    <div className='w-[600px] h-full'>
        <div className=' flex flex-col gap-4 items-center justify-center h-full'>
            <p className='text-[40px] text-gray-600 text-center'>I design interfaces that surface problems instantly.</p>
            {/* container for skills */}
            <div className='w-[400px] h-[300px]  flex flex-col items-center justify-center gap-8 overflow-hidden'>
               <div className='w-[300px] border-1 rounded-full h-[50px]'>
                   <GlassTabs/>
               </div>

               <div className='w-[370px] h-[145px] border-1 rounded-2xl flex flex-col p-4 gap-4 lookup'>
                     <p className='text-black text-sm font-medium '>Your UI has added uncached lookup.</p>
                     <p className='text-gray-600 text-sm'>I build frontends that stay stable even when the backend fails — no uncached lookups, no latency spikes, no broken UI.</p>
               </div>
            </div>

        </div>
    </div>
       </>
  )
}

export default Progress
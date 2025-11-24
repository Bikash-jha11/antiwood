import React from 'react'
import Iconbar from './Iconbar'

function Video() {
    return (
        <div className='h-screen'>

            <div className='flex items-center justify-center h-full'>
                {/* centered div */}
                <div className='w-xl h-full border-1'>
                    <p>Inside is your infrastructure</p>
                </div>
            </div>

            <div className='absolute bottom-8 left-[40%]'>
                <Iconbar />
            </div>

        </div>
    )
}

export default Video
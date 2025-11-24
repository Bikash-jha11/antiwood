import React from 'react'

function Navbar() {
    return (
        <div className='fixed right-0 left-0 top-0 h-8 w-full  bg-[rgb(27,27,27)]'>
            {/* left-section */}
            <div className='flex  items-center gap-4 ml-8'>
                <p className='text-nav '>Logo</p>
                <p className='text-nav '>Blog</p>
                <p className='text-nav'>Career</p>
                <p className='text-nav '>Guide</p>
            </div>
        </div>
    )
}

export default Navbar
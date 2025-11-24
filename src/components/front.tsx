import React, { useEffect, useRef } from 'react'
import Vscode from './vscode'

function Front({ scrollY }: any) {
    const textRef = useRef(null);

    useEffect(() => {

        if (scrollY >= 30) {
            textRef.current.style.transform = `translateY(${-200}px)`;
            textRef.current.style.transitionDuration = '0.5s'
        }
    }, [scrollY])


    return (
        <div className='sticky w-full h-screen'>
            {/* centered div */}
            <div className='min-w-3xl h-full  flex flex-col justify-center items-center gap-8 p-8'>
                {/* tagline */}
                <div className='max-w-2xl text-center '>
                    <p className='text-[52px]  font-normal leading-14' ref={textRef}>It has never been easier to build frontend </p>
                </div>

                <Vscode scrollY={scrollY} />
            </div>
        </div>
    )
}

export default Front
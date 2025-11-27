import React, { useEffect, useRef, useState } from 'react'
import Vscode from './vscode'
import StartingBox from './startingBox';

function Front({ scrollY,buttom  }: any) {
    const textRef = useRef(null);
    const [putLoading, setPutLoading] = useState(false);

    useEffect(() => {

        if (scrollY >= 30) {
           // @ts-ignore
            textRef.current.style.transform = `translateY(${-200}px)`;
              // @ts-ignore
            textRef.current.style.transitionDuration = '0.5s'
            setPutLoading(true)
        }
    }, [scrollY])


    return (
        <div className='w-full h-screen'>
            {/* centered div */}
            <div className='min-w-3xl h-full  flex flex-col justify-center items-center gap-8 p-8'>
                {/* tagline */}
                <div className='max-w-2xl text-center '>
                    <p className='text-[52px]  font-normal leading-14' ref={textRef}>It has never been easier to build frontend </p>
                </div>

                <Vscode scrollY={scrollY} buttom={buttom}/>


            </div>
        </div>
    )
}

export default Front
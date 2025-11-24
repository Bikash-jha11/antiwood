import React, { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import logo from '../assets/react.svg'
import code from '../assets/code.png'
import StartingBox from './startingBox';



function Vscode({ scrollY }: any) {
    const vsRef = useRef(null);

    useEffect(() => {
        if (scrollY >= 30) {
            vsRef.current.style.transform = `translateY(${-50}px)`;
            vsRef.current.style.transitionDuration = '1s'
        }
    }, [scrollY])
    return (
        <>
            <div className='relative max-w-4xl h-[400px] rounded-2xl overflow-hidden' ref={vsRef}>
                {/* vs nav */}
                <div className='bg-gray-700 flex items-center'>
                    {/* buttons */}
                    <div className='flex gap-2 p-2'>
                        <div className='h-3 w-3  rounded-full bg-yellow-400'></div>
                        <div className='h-3 w-3  rounded-full  bg-red-400'></div>
                        <div className='h-3 w-3  rounded-full bg-green-400'></div>
                    </div>
                    {/* react and frontend */}
                    <div className='absolute flex gap-2 left-[45%]'>
                        <img src={logo} className='h-5 w-5' />
                        <p className='text-white text-[14px]'>frontend</p>
                    </div>
                </div>

                {/* code image */}
                <div>
                    <img src={code}></img>
                </div>

                {/* button  */}
                <Button className='absolute bottom-6 right-4 bg-white text-black w-[15rem] btn-1'>Make it easier</Button>

            </div>
            {
                scrollY >= 30 ? <StartingBox vsRef={vsRef} /> : (<span></span>)

            }
        </>
    )
}

export default Vscode
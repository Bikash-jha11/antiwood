import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Iconbar from './Iconbar'
import Alerts from './alerts';
import video from '../assets/universe.mp4'

function Video({ scrollY }: any) {
    const ref = useRef(null);
    const aRef = useRef(null);
    const [showNextPage, setShowNextPage] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            ref.current.style.transform = `translateY(${-600}px)`;
            navigate('/home')
        };

        ref.current.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className='absolute h-screen w-full overflow-y-scroll' ref={ref}>
                <div className='flex items-center justify-center h-full mt-16'>
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

                       {
                showNextPage ? (
                    <Alerts/>
            ) : (<span></span>)
                }
            </div>
           
        </>
    )
}

export default Video
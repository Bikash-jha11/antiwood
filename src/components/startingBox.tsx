import React, { useEffect, useState, useRef } from 'react'
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"


import Intro from './Intro';
import Video from './video';

function StartingBox({ vsRef, buttom }: any) {
    const [message, setMessage] = useState('Starting....');
    const [isloaded, setIsLoaded] = useState(false);
    const [animationEnd, setAnimationEnd] = useState(false);
    const[showNextPage,setShowNextPage] = useState(false);

    const ref = useRef(null);
    const introRef = useRef(null);


    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setMessage('Lets go..')
        }, 2000);

        if (isloaded) {
            vsRef.current.style.transform = `translateY(${-1000}px)`;
              // @ts-ignore
            ref.current.style.transform = `translateY(${-1000}px)`;
        }

        if (buttom && animationEnd) {
            //not good approach but working change later
            //it delays so that animation can be completed its not synchronized
            setTimeout(() => {
                  // @ts-ignore
                introRef.current.style.transform = `translateY(${-1000}px)`;
                  // @ts-ignore
                introRef.current.style.transitionDuration = '0.5s'
                setShowNextPage(true);
            }, 2000);
        }

    }, [message, animationEnd]);


    return (
        <>
            <div className={isloaded ? 'absolute left-[40%] bottom-16' : 'absolute  left-[40%] bottom-16'} ref={ref}>
                <Badge className={!isloaded ? 'w-2xs h-[40px] rounded-2xl bg-gray-700 text-md text-[#C2C2C2]' : 'w-3xs h-[40px] rounded-2xl  text-md text-[#00FFFF] text-shadow-glow-blue'}>
                    {isloaded ? <BadgeCheckIcon /> : (<span></span>)}
                    {message}
                </Badge>
            </div>

            {
                isloaded ? (
                    <div className='flex items-center justify-center' ref={introRef}>
                        <Intro onAnimationEnd={() => setAnimationEnd(true)} />
                    </div>) : (<p></p>)
            }

            {
                showNextPage ? (<Video/>) : (<span></span>)
            }

        </>
    )
}

export default StartingBox
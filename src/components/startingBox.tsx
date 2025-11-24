import React, { useEffect, useState, useRef } from 'react'
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import Intro from './Intro';

function StartingBox({ vsRef }: any) {
    const [message, setMessage] = useState('Starting....');
    const [isloaded, setIsLoaded] = useState(false);

    const ref = useRef(null);


    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setMessage('Lets go..')
        }, 2000);

        if (isloaded) {
            vsRef.current.style.transform = `translateY(${-1000}px)`;
            ref.current.style.transform = `translateY(${-1000}px)`;
        }

    }, [message]);


    return (
        <>
            <div className={isloaded ? 'absolute left-[40%] bottom-16' : 'absolute  left-[40%] bottom-16'} ref={ref}>
                <Badge className={!isloaded ? 'w-2xs h-[40px] rounded-2xl bg-gray-700 text-md text-[#C2C2C2]' : 'w-3xs h-[40px] rounded-2xl  text-md text-[#00FFFF] text-shadow-glow-blue'}>
                    {isloaded ? <BadgeCheckIcon /> : (<span></span>)}
                    {message}
                </Badge>
            </div>

            {
                isloaded ? (<Intro />) : (<p></p>)

            }
        </>
    )
}

export default StartingBox
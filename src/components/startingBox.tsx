import React, { useEffect, useState } from 'react'
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"


function StartingBox() {
    const [message, setMessage] = useState('Starting....');
    const [isloaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setMessage('Lets go..')
        }, 2000)

        return () => { }
    }, [message])
    return (
        <div className={isloaded ? 'absolute left-[40%] bottom-16' : 'absolute  left-[40%] bottom-16'}>
            <Badge className={!isloaded ? 'w-2xs h-[40px] rounded-2xl bg-gray-700 text-md text-[#C2C2C2]' : 'w-3xs h-[40px] rounded-2xl  text-md text-[#00FFFF] text-shadow-glow-blue'}>
                {isloaded ? <BadgeCheckIcon /> : (<span></span>)}
                {message}
            </Badge>
        </div>
    )
}

export default StartingBox
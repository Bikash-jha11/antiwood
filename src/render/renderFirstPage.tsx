import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/navbar'
import Front from '@/components/front'
import Intro from '@/components/Intro';
import Iconbar from '@/components/Iconbar';
import StartingBox from '@/components/startingBox';
import Video from '@/components/video';
import RenderSecondPage from './renderSecondPage';



function RenderFirstPage() {
    const [scrollY, setScrollY] = useState(0);
    const [animationEnd, setAnimationEnd] = useState(false)
    const[buttom,setButtom] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        ref.current.addEventListener('scroll', (e) => {
            setScrollY(ref.current.scrollTop);

            const bottom = Math.ceil(ref.current.scrollTop + ref.current.clientHeight) >= ref.current.scrollHeight;

            if (bottom) {
               setButtom(true);
            } 
        })

    }, [scrollY,buttom]);


    return (
        <>
            <div className='relative h-screen w-screen border-1 overflow-hidden overflow-y-auto' ref={ref}>
                <Navbar />
                <Front scrollY={scrollY} buttom={buttom} />
                <Iconbar scrollY={scrollY}/>

            </div>
        </>
    )
}

export default RenderFirstPage
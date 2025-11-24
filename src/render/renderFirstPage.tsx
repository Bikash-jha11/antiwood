import React, { useEffect, useRef, useState } from 'react'
import Navbar from '@/components/navbar'
import Front from '@/components/front'
import Iconbar from '@/components/Iconbar';



function RenderFirstPage() {
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        ref.current.addEventListener('scroll', (e) => {
            setScrollY(ref.current.scrollTop);
        })

    }, [scrollY])
    return (
        <>
            <div className='h-screen border-1 overflow-hidden overflow-y-auto' ref={ref}>
                <Navbar />
                <Front scrollY={scrollY} />
                <Iconbar scrollY={scrollY} />
            </div>
        </>
    )
}

export default RenderFirstPage
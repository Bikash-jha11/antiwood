import React, { useState, useRef, useEffect } from 'react'


function Intro({onAnimationEnd}) {
    const[animationend,setAnimationEnd] = useState(false)
    const ref = useRef(null);


    useEffect(() => {
        const el = ref.current;
       const handler = () => {
      onAnimationEnd(); //  call parent callback
    };

    el.addEventListener("animationend", handler);

    return () => el.removeEventListener("animationend", handler);

    }, [animationend])
    return (
        <div className='absolute bottom-0  text_animation' ref={ref}>
            <div className='texture'>
                <p style={{ "--i": "1" }}>But</p>
                <p style={{ "--i": "2" }}>at</p>
                <p style={{ "--i": "3" }}>core</p>
                <p style={{ "--i": "4" }}>of</p>
                <p style={{ "--i": "5" }}>everything,</p>
            </div>
            <div className='texture'>
                <p style={{ "--i": "6" }}>i</p>
                <p style={{ "--i": "7" }}>build</p>
                <p style={{ "--i": "8" }}>is</p>
                <p style={{ "--i": "9" }}>precision.</p>
                {/* <p style={{ "--i": "10" }}>everything</p> */}
            </div>
        </div>

    )
}

export default Intro
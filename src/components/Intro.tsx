import React, { useState, useRef, useEffect } from 'react'

//@ts-ignore
function Intro({onAnimationEnd}) {
    const[animationend,setAnimationEnd] = useState(false)
    const ref = useRef(null);


    useEffect(() => {
        const el = ref.current;
       const handler = () => {
      onAnimationEnd(); //  call parent callback
    };
//@ts-ignore
    el.addEventListener("animationend", handler);
     //@ts-ignore
    return () => el.removeEventListener("animationend", handler);

    }, [animationend])
    return (
        <div className='absolute bottom-0  text_animation' ref={ref}>
            <div className='texture'>
                <p >But</p>
                <p >at</p>
                <p >core</p>
                <p >of</p>
                <p >everything,</p>
            </div>
            <div className='texture'>
                <p >i</p>
                <p >build</p>
                <p >is</p>
                <p >precision.</p>
                {/* <p style={{ "--i": "10" }}>everything</p> */}
            </div>
        </div>

    )
}

export default Intro
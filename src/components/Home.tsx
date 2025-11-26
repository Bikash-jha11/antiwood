import React, { useEffect, useRef, useState } from 'react'
import Alerts from './alerts';
import Navbar from './navbar'
import { Alert } from './ui/alert';
import Iconbar from './Iconbar'

function Home() {
    const ref = useRef(null);
    const [alert, setAlert] = useState([]);
    const [tagline, setTagline] = useState('And when things fail, I don’t panic')
    const [idx, setIdx] = useState(0);

    let errors = [
        { error: "UI is broken.", pos: 100 },
        { error: "Website is slow.", pos: 200 },
        { error: "Failed to load resources", pos: 300 }
    ]

    useEffect(() => {
        let id: any;
        const el = ref.current;
        if (!el) return;

        const handle = () => {
            if (idx >= errors.length) return;

            el.removeEventListener('wheel', handle);
            //use animationend and make it good,now it works
            setTimeout(() => {
                setTagline('I diagnose, solve, and stabilize fast.');
            }, 2000)

            setIdx(prev => prev + 1);
            setAlert(prev => [...prev, errors[idx]]);
            console.log(alert)
        }

        el.addEventListener('wheel', handle)

        return () => {
            el.removeEventListener('wheel', handle);
            clearTimeout(id);
        }

    }, [idx])

    return (
        <div className='relative h-screen ' ref={ref}>
            <Navbar />
            <div className='h-full border-1 p-8'>


                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-gray-100 text-[44px] font-[500]'>{tagline}</p>
                </div>
                {
                    alert.map((data, key) => (
                        <Alerts key={key} toppos={data?.pos} title={data?.error} />
                    ))
                }
          <div className='absolute bottom-4 flex item-center justify-center w-full'>
                <Iconbar/>
          </div>
         
            </div>
           
        </div>
    )
}

export default Home
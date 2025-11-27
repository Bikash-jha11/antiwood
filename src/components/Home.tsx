import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Alerts from './Alerts'
import Navbar from './navbar';
import Iconbar from './iconbar';

function Home() {
    const navigate = useNavigate();
    const ref = useRef(null);
    const [alert, setAlert] = useState([]);
    // Stage 0: Initial state (First Tagline)
    // Stage 1: Tagline changed (Waiting for next scroll)
    // Stage 2: Navigation complete/triggered
    const [stage, setStage] = useState(0); 
    const [tagline, setTagline] = useState('And when things fail, I don’t panic');

    let errors = [
        { error: "UI is broken.", pos: 100 },
        { error: "Website is slow.", pos: 200 },
        { error: "Failed to load resources", pos: 300 }
    ];

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        
        // Timeout ID to clean up if the component unmounts quickly
        let timeoutId:any;

        const handleScroll = () => {
            console.log(`Scroll detected. Current Stage: ${stage}`);

            // --- STAGE 0: Initial Scroll (Change Tagline) ---
            if (stage === 0) {
                // Remove listener immediately so it doesn't fire multiple times
              //@ts-ignore
                el.removeEventListener('wheel', handleScroll);
                
                // Update error alert (using the first error at index 0)
                //@ts-ignore
                setAlert(prev => [...prev, errors[0]]); 

                // Start the 2-second delay for the tagline change
                timeoutId = setTimeout(() => {
                    setTagline('I diagnose, solve, and stabilize fast.');
                    // Move to Stage 1: Ready for Navigation
                    setStage(1); 
                }, 2000);
            }
            
            // --- STAGE 1: Second Scroll (Navigate) ---
            else if (stage === 1) {
                // Prevent further navigation/listener execution
                //@ts-ignore
                el.removeEventListener('wheel', handleScroll);
                setStage(2); // Set stage to 2 to prevent re-triggering
                
                // Navigate to the next route
                navigate('/second');
            }
        };

        // If the stage is 0 or 1, we attach the listener.
        // The listener is removed inside the handlers after it fires.
        if (stage < 2) {
            //@ts-ignore
             el.addEventListener('wheel', handleScroll);
        }
       
        return () => {
            //@ts-ignore
            el.removeEventListener('wheel', handleScroll);
            clearTimeout(timeoutId); // Clear any pending timeout
        };
    // The effect runs whenever 'stage' changes.
    }, [stage, navigate]); 

    return (
        <div className='relative h-screen ' ref={ref}>
            <Navbar />
            <div className='h-full border-1 p-8'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <p className='text-gray-100 text-[44px] font-[500]'>{tagline}</p>
                </div>
                {
                    alert.map((data, key) => (
                        //@ts-ignore
                        <Alerts key={key} toppos={data?.pos} title={data?.error} />
                    ))
                }
                <div className='absolute bottom-4 flex item-center justify-center w-full'>
                    <Iconbar/>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React,{useEffect,useRef} from 'react'
import finder from '../assets/Finder.png'
import chrome from '../assets/chrome.png'
import store from '../assets/store.png'
import terminal from '../assets/terminal.png'
import cursor from '../assets/kuber.png'
import slack from '../assets/slack.png'


function Iconbar({ scrollY }: any) {
      const iconRef = useRef(null);
    
        useEffect(() => {
    
            if (scrollY >= 30) {
                iconRef.current.style.transform = `translateY(${-20}px)`;
                iconRef.current.style.transitionDuration = '0.5s'
            }
        }, [scrollY])
    return (
        <div className='max-w-[340px] h-[70px]  m-auto rounded-xl border-1 border-gray-700 p-2' ref={iconRef}>
            <div className='rounded-xl flex  h-[50px] bg-[#797979]'>
                <div className='flex justify-between w-full p-[1px]'>
                    <img src={finder} ></img>
                    <img src={chrome}></img>
                    <img src={cursor} className='scale-80'></img>
                    <img src={slack} className='scale-120'></img>
                    <img src={terminal}></img>
                    <img src={store} className='scale-80'></img>
                </div> 
            </div>
        </div>
    )
}

export default Iconbar
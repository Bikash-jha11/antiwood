import React, { useEffect, useState, useRef } from 'react'
import Iconbar from './Iconbar'
import ThirdPage from './thirdpage';


function SecondPage() {
  const [isAnimationComplete, setAnimationComplete] = useState(false);
  const [showNextPage, setShowNextPage] = useState(false);


  const ref = useRef(null);
  const textRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      //if finder icon animation is complete and user scroll further than animate text
      if (isAnimationComplete) {
        textRef.current.classList.add('tagline_animation')
      }
      if (showNextPage && isAnimationComplete) {
        mainRef.current.classList.remove('h-screen', 'overflow-hidden');
        document.body.style.overflowY = 'scroll';
      } else {
        // Keep initial state for full-screen animation
        mainRef.current.classList.add('h-screen', 'overflow-hidden');
        document.body.style.overflowY = 'hidden'; // the document body is not scrollable initially
      }
    }

    const handleAnimationEnd = (e) => {
      setAnimationComplete(true)
    }

    const handleTextAnimationEnd = (e) => {
      setTimeout(() => {
        setShowNextPage(true);
      }, 2000)


    }
    window.addEventListener('wheel', handleScroll);
    ref.current.addEventListener('animationend', handleAnimationEnd)
    textRef.current.addEventListener('animationend', handleTextAnimationEnd)

    return () => {
      window.removeEventListener('wheel', handleScroll);

    }
  }, [isAnimationComplete, showNextPage]);



  return (
    <>

      <div className={`relative ${showNextPage ? '' : 'h-screen overflow-hidden'}`} ref={mainRef}>
        {/* for iconbar */}
        <div className='absolute bottom-4 flex item-center justify-center w-full'>
          <div className='main_div' ref={ref}></div>
          <div className='icon_anim max-w-[340px] h-[70px]  m-auto'>
            <Iconbar />
          </div>
        </div>

        {/* for text animation */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[50px] w-full  overflow-y-scroll'>
          {/* //scrollable div */}
          <div className=' h-full flex flex-col m-3' ref={textRef}>
            <p className='text-white text-2xl font-medium text-center'>"Speed usually creates chaos."</p>
            <p className='text-white text-2xl font-medium text-center'>"But, I engineer in a way that keeps everything predictable, even at scale."</p>
          </div>
        </div>
      </div>
  {
    showNextPage && <ThirdPage/>
  }

    </>
  )
}

export default SecondPage
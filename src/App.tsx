


import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'
import Front from './components/front'




import Video from './components/video'
import './App.css'


import RenderFirstPage from './render/renderFirstPage'
import Home from './components/Home'
import SecondPage from './components/secondPage'


const useScrollToNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScrollY = useRef(0);
  const isNavigating = useRef(false);

  useEffect(() => {
    // Only apply this logic on non-root routes
    if (location.pathname === '/') {
      return () => {}; // Cleanup, do nothing on the home route
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // We rely on 'currentScrollY < prevScrollY.current' to detect upward movement.
      // We only allow navigation if we are in the top half of the page 
      // AND we have scrolled down at least 50 pixels initially (currentScrollY > 50)
      if (
        currentScrollY < prevScrollY.current && // 1. Scrolling Up
        currentScrollY < (window.innerHeight / 2) && // 2. Close to the top (within half a viewport)
        currentScrollY > 50 && // 3. Must be scrolling from a position deeper than 50px
        !isNavigating.current // 4. Not currently navigating
      ) {
        // Prevent multiple navigations while processing
        isNavigating.current = true;

        navigate('/');

        // Add a small delay before allowing navigation again
        setTimeout(() => {
          isNavigating.current = false;
        }, 500);
      }

      // Update the previous scroll position for the next event
      prevScrollY.current = currentScrollY;
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate, location.pathname]); // Re-run effect if the route changes
};

// --- 2. Scroll Handler Component (to access router context) ---
const ScrollToHomeHandler = ({ children }:any) => {
  useScrollToNavigate();
  return <>{children}</>;
};

// --- 3. Mock Components for Routing (Now taller to guarantee scrollability) ---



// --- 4. Main App Component ---
function App() {
  return (
    // Tailwind CSS is assumed to be available
    <div className="min-h-screen font-sans">
      <BrowserRouter>
        {/* The ScrollToHomeHandler wraps the Routes to gain access to useNavigate and Location */}
        <ScrollToHomeHandler>
          <Routes>
            <Route path='/' element={<RenderFirstPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/second' element={<SecondPage />} />
          </Routes>
        </ScrollToHomeHandler>
      </BrowserRouter>
    </div>
  );
}

export default App;
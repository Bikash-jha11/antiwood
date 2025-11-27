import React, { useState, useEffect, useRef } from 'react';

const ControlBox = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for the box content
  const [progressBarWidth, setProgressBarWidth] = useState(0); 
  const boxRef = useRef(null); 

  // --- Intersection Observer for Progress Bar Animation ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProgressBarWidth(100); // Animate to 100%
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.8 } // Trigger when 80% of the box is visible
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  // --- Toggle Light/Dark Mode ---
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const primaryGreen = 'rgba(4, 143, 66, 0.9)'; // Use a stronger green for contrast

  return (
    // Outer container for the black background and centering
    <div className="min-h-screen bg-[#fffcf7] flex flex-col items-center justify-center p-8">
      
      {/* Main Tagline */}
      <h1 className="text-pink-500/20 text-7xl font-extrabold mb-16 text-center z-10 drop-shadow-xl animate-fade-in">
        I AM <span className="text-emerald-400">ALWAYS</span> IN CONTROL
      </h1>

     
      <div 
        ref={boxRef}
        className={`relative w-full max-w-md p-0 rounded-2xl border border-white/40 shadow-2xl transition-all duration-700 ease-in-out overflow-hidden
          backdrop-filter backdrop-blur-3xl **bg-white/85**`} // Prominent white background
      >
      
        <div className="absolute inset-0  opacity-10 rounded-4xl z-0"></div>

        <div className="relative z-10 p-6 md:p-8 lookup">
            
      
            <div className="flex justify-between items-start mb-6">
                <h3 className={`text-3xl font-bold transition-colors duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
                    Your Control Panel
                </h3>

            
                <button
                    onClick={toggleDarkMode}
                    className={`flex items-center justify-center p-2 rounded-full border-2 transition-all duration-300 transform hover:scale-105 shadow-md
                      ${isDarkMode 
                        ? 'bg-gray-800 border-gray-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-800'
                      }`}
                    aria-label="Toggle Light/Dark Mode"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDarkMode ? "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" : "M12 3v1m0 16v1m9-9h1M3 12H2m15.325-4.243l.707-.707M3.929 18.071l.707-.707M18.071 3.929l.707.707M3.929 3.929l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"}></path>
                    </svg>
                </button>
            </div>

      
            <div className={`mb-6 transition-colors duration-500 ${isDarkMode ? 'text-gray-700' : 'text-gray-600'}`}>
                <p className="text-base leading-relaxed">
                    My work relies on developing modular, component-driven frameworks (e.g., React, Vue) that prioritize predictive state management and user customization at the component level.
                </p>
            </div>

            
        </div> 

        {/* --- Minimal Progress Bar at Bottom --- */}
        <div className="w-full h-1 bg-gray-300 overflow-hidden">
            <div
              className="h-full transition-all duration-1000 ease-out"
              style={{
                width: `${progressBarWidth}%`,
                backgroundColor: 'rgba(4, 143, 66, 0.6)', 
              }}
            ></div>
        </div>

      </div> 
    </div>
  );
};

export default ControlBox;
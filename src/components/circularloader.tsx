import React from 'react';


const CircularLoader = () => {
  return (
    // The main container for the spinner
    <div className="loader-container">
      {/* The actual spinner element */}
      <div 
        className="circular-loader"
        role="status" // Accessibility role
        aria-live="polite" // Accessibility live region
      >
        {/* Visually hidden text for screen readers */}
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default CircularLoader;
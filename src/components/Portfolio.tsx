import React from 'react';
import portfolio from '../assets/portfolio.svg'

// --- AboutPage1 (Who Am I?) ---
const AboutPage1 = () => {
  return (
    // h-screen ensures this takes up one full viewport height
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 relative overflow-hidden">

      {/* Background Blurs for Page 1 are ABSOLUTE to the Page 1 div */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-pink-500/40 blur-3xl rounded-full z-0"></div>
      <div className="absolute bottom-1/4 right-20 w-96 h-96 bg-blue-500/40 blur-3xl rounded-full z-0"></div>

      {/* Main Glassmorphism Card */}
      <div className="relative z-20 w-full max-w-2xl p-10 md:p-16 rounded-3xl backdrop-filter backdrop-blur-3xl bg-white/60 border border-white/80 shadow-2xl animate-fade-in-up">
        <h1 className="text-gray-900 text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight drop-shadow-sm">
          So, <span className="text-pink-600">who</span> am <span className="text-purple-600">I</span>?
        </h1>
      </div>
    </div>
  );
};

// --- AboutPage2 (I Am Bikash Jha + Social Icons) ---
const AboutPage2 = () => {
  const socialLinks = [
    {
      name: 'GitHub', icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.417 2.865 8.164 6.839 9.504.47.087.683-.233.683-.58V19.46c-2.812.613-3.395-1.39-3.395-1.39-.455-1.157-1.11-1.465-1.11-1.465-.91-.62.07-.608.07-.608 1.005.07 1.531 1.032 1.531 1.032.89 1.529 2.341 1.087 2.91.829.091-.643.351-1.087.636-1.332-2.22-.25-4.555-1.11-4.555-4.93 0-1.087.388-1.976 1.02-2.675-.10-.253-.44-1.265.09-2.645 0 0 .84-.27 2.75 1.025.798-.222 1.649-.333 2.499-.333.85 0 1.701.111 2.499.333 1.91-1.295 2.75-1.025 2.75-1.025.53 1.38.19 2.392.09 2.645.632.699 1.02 1.588 1.02 2.675 0 3.83-2.338 4.675-4.562 4.922.358.307.674.915.674 1.849V21.4c0 .347.213.667.683.58C19.135 20.181 22 16.434 22 12.017 22 6.484 17.523 2 12 2Z" clipRule="evenodd" /></svg>
      ), href: 'https://github.com/Bikash-jha11'
    },
    {
      name: 'Twitter', icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.638 7.334c.002.13.002.26.002.391 0 3.98-3.031 8.57-8.571 8.57-1.708 0-3.303-.5-4.636-1.353.12.015.241.023.363.023 1.791 0 3.444-.613 4.755-1.637-1.674-.03-3.085-1.13-3.565-2.645.215.04.435.064.66.064.32-.016.638-.088.937-.23-1.748-.352-3.065-1.89-3.065-3.61v-.045c.48.267 1.037.432 1.618.45C6.035 7.18 5.437 6.45 5.437 5.485c0-.608.163-1.18.445-1.666 1.767 2.176 4.414 3.616 7.425 3.766-.062-.267-.093-.546-.093-.836 0-2.018 1.638-3.655 3.655-3.655 1.054 0 2.012.443 2.682 1.157.834-.162 1.62-.468 2.32-.887-.275.859-.858 1.579-1.628 2.029.74-.087 1.455-.284 2.116-.582-.505.748-1.144 1.398-1.87 1.91z" /></svg>
      ), href: 'https://x.com/BikashJha521904'
    },
    {
      name: 'Email', icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm2 0v1.5L12 14l7-4.5V8H5zm7 6.5L5 10v6h14v-6l-7 4.5z" /></svg>
      ), href: 'mailto:bikashjha490@gmail.com'
    },
    {
      name: 'My works', icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zM5 4h6v-.5A.5.5 0 0 1 10.5 3h-3a.5.5 0 0 1-.5.5V4H5zm0 1v7a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5h-6z" />
        </svg>
      ), href: 'https://portfolio-ten-opal-36.vercel.app'
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Blurs for Page 2 are ABSOLUTE to the Page 2 div */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl opacity-50 z-10 animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-500/40 blur-[120px] rounded-full z-0"></div>

      {/* Main Glassmorphism Card */}
      <div className="relative z-20 w-full max-w-3xl p-10 md:p-16 rounded-3xl backdrop-filter backdrop-blur-3xl bg-white/60 border border-white/80 shadow-2xl animate-fade-in-up">
        <h1 className="text-gray-900 text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight drop-shadow-sm mb-12">
          I am <span className="text-pink-600">Bikash</span> <span className="text-purple-600">Jha</span>.
        </h1>


        <div className="flex justify-center gap-6 md:gap-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-16 h-16 rounded-full backdrop-filter backdrop-blur-md bg-white/80 border border-gray-300 shadow-lg text-gray-800 transition-all duration-300 hover:scale-110 hover:bg-white/90"
              aria-label={link.name}
            >
              {link.icon}
              <span className="absolute bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};


// --- PARENT COMPONENT TO STACK THEM ---
const PortfolioIntroSequence = () => {
  return (

    <div className="w-full relative min-h-[200vh] overflow-x-hidden bg-[#fffcf7]">


      <AboutPage1 />

      <AboutPage2 />

    </div>
  );
};

export default PortfolioIntroSequence;
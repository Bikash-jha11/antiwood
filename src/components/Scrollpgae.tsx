import { useState, useEffect, useRef } from 'react'




const skills = [
    "Frontend Engineer crafting fast, polished, production-ready interfaces.",
    "Building beautiful, reliable, and scalable UI systems.",
    "Translating complex ideas into elegant user experiences.",
    "I optimize pixels, performance, and every millisecond in between.",
    "Turning heavy UIs into lightning-fast, smooth experiences.",
    "Performance-obsessed frontend developer — from animations to API calls.",
    "The architect of sub-second load times and seamless transitions.",
    "My stack: JavaScript, React, and a relentless pursuit of speed.",
    "Engineering excellence at the intersection of UX and performance budgets.",
    "I specialize in shaving milliseconds off the critical render path.",
    "From prototype to production: I build interfaces that don't just work, they fly",
];

export default function PortfolioTextFlow() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateEffects = () => {
            const containerRect = container.getBoundingClientRect();

            itemsRef.current.forEach((el) => {
                if (!el) return;

                const rect = el.getBoundingClientRect();
                const diff = containerRect.top - rect.top;

                const progress = Math.min(Math.max(diff / 250, 0), 1);

                el.style.opacity = `${1 - progress * 0.5}`;
                el.style.transform = `translateY(${progress * -30}px) scale(${1 + progress * 0.05})`;
                el.style.filter = `blur(${progress * 3}px)`;
            });
        };

        container.addEventListener("scroll", updateEffects);
        return () => container.removeEventListener("scroll", updateEffects);
    }, []);

    return (
        <div className="w-full h-screen flex bg-[#fffcf7] text-black relative overflow-hidden">
            {/* Background gradient blur elements */}
            <div className="absolute top-10 left-20 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            {/* LEFT FIXED Text */}
            <div className="w-1/2 h-full flex items-center justify-center p-16 sticky top-0 z-10">
                <h1 className="text-5xl font-semibold leading-tight">
                    I build
                    <span className="text-pink-400"> fast</span>,
                    <span className="text-blue-400"> fluid</span>, and
                    <span className="text-purple-400"> intentional</span> experiences.
                </h1>
            </div>

            {/* RIGHT scrolling text */}
            <div
                ref={containerRef}
                className="w-1/2 h-full overflow-y-scroll py-20 px-12 space-y-20 relative z-10"
            >
                {skills.map((text, i) => (
                    <p
                        key={i}
                        ref={(el) => (itemsRef.current[i] = el)}
                        className="text-md  text-gray-600 font-medium tracking-tight transition-all duration-300 will-change-transform will-change-opacity will-change-filter"
                    >
                        {text}
                    </p>
                ))}
            </div>
        </div>
    );
}



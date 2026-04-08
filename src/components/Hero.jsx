import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Parallax effect on mouse move
    const handleMouseMove = (e) => {
      // Only do parallax if the device supports hover
      if (!window.matchMedia("(hover: hover)").matches) return;
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 15; // subtle tilt
      const y = (clientY / window.innerHeight - 0.5) * 15;
      
      requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.setProperty('--mouseX', `${x}deg`);
          containerRef.current.style.setProperty('--mouseY', `${-y}deg`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-background-image">
        <img 
          src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Dark avant-garde aesthetic" 
        />
        <div className="hero-overlay-gradient"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-subtitle reveal is-visible" style={{ transitionDelay: '0.2s' }}>
            <span className="line"></span> 
            <span className="font-display">Rebel Against Ordinary</span>
          </div>
          <h1 className="hero-title reveal is-visible" style={{ transitionDelay: '0.4s' }}>
            Unapologetic.<br />
            <span className="font-serif italic-accent">Seduction.</span>
          </h1>
          <p className="hero-description reveal is-visible" style={{ transitionDelay: '0.6s' }}>
            We engineer the darkest, richest pigments. Blur the line between digital perfection and physical reality. Become the anomaly.
          </p>
          <div className="hero-actions reveal is-visible" style={{ transitionDelay: '0.8s' }}>
            <button className="btn hover-magnetic">
              Shop The Abyss <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      <div className="scrolling-marquee">
        <div className="marquee-content font-display">
          <span>NO APOLOGIES</span>
          <span>•</span>
          <span>RAW PIGMENTS</span>
          <span>•</span>
          <span>ETHEREAL GLOW</span>
          <span>•</span>
          <span>CRUELTY FREE</span>
          <span>•</span>
          <span>NO APOLOGIES</span>
          <span>•</span>
          <span>RAW PIGMENTS</span>
          <span>•</span>
          <span>ETHEREAL GLOW</span>
          <span>•</span>
          <span>CRUELTY FREE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

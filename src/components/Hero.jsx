import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [heroRef, heroVisible] = useScrollReveal();
  const [imgRef, imgVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });

  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>
      
      <div className="container hero-container" ref={heroRef}>
        <div className={`hero-content reveal ${heroVisible ? 'is-visible' : ''}`}>
          <div className="hero-subtitle">
            <span className="line"></span> 
            <span>The New Era of Luxury</span>
          </div>
          <h1 className="hero-title">
            Mesmerizing. <br />
            <span className="text-gradient">Undefined Beauty.</span>
          </h1>
          <p className="hero-description">
            Experience the zenith of cosmetic engineering. Deep, rich, and utterly flawless formulas designed to blur the line between reality and perfection.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Enter Collection <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div 
          className={`hero-image-wrapper reveal ${imgVisible ? 'is-visible' : ''}`}
          ref={imgRef}
        >
          <div className="hero-image glass-panel">
            {/* Extremely reliable Unsplash high-fashion makeup aesthetic */}
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="High-end beauty aesthetic" 
            />
            <div className="img-overlay"></div>
          </div>
          <div className="floating-orb orb-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

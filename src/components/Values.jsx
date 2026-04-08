import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ShieldAlert, Droplet, Orbit } from 'lucide-react';
import './Values.css';

const VALUES = [
  {
    id: 1,
    icon: <ShieldAlert size={48} strokeWidth={1.5} />,
    title: "ABSOLUTE PURITY",
    description: "Sourced from the rarest botanicals, completely vegan and untainted by synthetic fillers. Uncompromising."
  },
  {
    id: 2,
    icon: <Orbit size={48} strokeWidth={1.5} />,
    title: "ETHEREAL GLOW",
    description: "Engineered to reflect light perfectly, creating a mesmerizing, otherworldly radiance in total darkness."
  },
  {
    id: 3,
    icon: <Droplet size={48} strokeWidth={1.5} />,
    title: "DEEP HYDRATION",
    description: "Micro-molecular delivery systems penetrate instantly, leaving zero residency on the skin."
  }
];

const ValueItem = ({ val, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  return (
    <div 
      ref={ref} 
      className={`brutal-value-item reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="brutal-value-header hover-magnetic">
        <div className="brutal-value-icon">{val.icon}</div>
        <h3 className="font-display">{val.title}</h3>
      </div>
      <p className="font-body">{val.description}</p>
    </div>
  );
};

const Values = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="about" className="values-brutal">
      <div className="container">
        <div className="brutal-values-grid">
          <div className={`brutal-values-content reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
            <h2 className="font-display">The Philosophy<br /><span className="font-serif italic-accent">of Seduction</span></h2>
            <p>
              We reject the ordinary. Our formulations are the result of decades of obsession with perfection. 
              Ethical sourcing meets high-end biotechnology.
            </p>
            <button className="btn hover-magnetic">Discover Process</button>
          </div>
          <div className="brutal-values-features">
            {VALUES.map((val, index) => (
              <ValueItem key={val.id} val={val} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

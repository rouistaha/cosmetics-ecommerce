import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Leaf, Droplets, Sparkles } from 'lucide-react';
import './Values.css';

const VALUES = [
  {
    id: 1,
    icon: <Leaf size={40} strokeWidth={1} />,
    title: "Absolute Purity",
    description: "Sourced from the rarest botanicals, completely vegan and untainted by synthetic fillers."
  },
  {
    id: 2,
    icon: <Sparkles size={40} strokeWidth={1} />,
    title: "Ethereal Glow",
    description: "Engineered to reflect light perfectly, creating a mesmerizing, otherworldly radiance."
  },
  {
    id: 3,
    icon: <Droplets size={40} strokeWidth={1} />,
    title: "Deep Hydration",
    description: "Micro-molecular delivery systems penetrate instantly, leaving zero residency on the skin."
  }
];

const ValueItem = ({ val, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.2 });
  return (
    <div 
      ref={ref} 
      className={`value-item reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="value-icon">{val.icon}</div>
      <h3>{val.title}</h3>
      <p>{val.description}</p>
      <div className="hover-glow"></div>
    </div>
  );
};

const Values = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="about" className="values">
      <div className="container">
        <div className="values-grid">
          <div className={`values-content reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
            <h2>The Science<br />of Sensuality</h2>
            <p>
              We reject the ordinary. Our formulations are the result of decades of obsession with perfection. 
              Ethical sourcing meets high-end biotechnology.
            </p>
            <button className="btn btn-primary">Discover the Process</button>
          </div>
          <div className="values-features">
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

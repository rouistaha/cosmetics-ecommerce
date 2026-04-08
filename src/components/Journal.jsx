import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import './Journal.css';

const ARTICLES = [
  {
    id: 1,
    title: "THE DECONSTRUCTION OF LIGHT",
    date: "OCTOBER 12",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1200&h=1600&q=80",
  },
  {
    id: 2,
    title: "PIGMENT AND POWER",
    date: "NOVEMBER 05",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "THE VOID AESTHETIC",
    date: "DECEMBER 01",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=80",
  }
];

const JournalCard = ({ article, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <article 
      ref={ref}
      className={`journal-article reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="journal-image-wrapper hover-magnetic">
        <img src={article.image} alt={article.title} loading="lazy" />
        <div className="journal-image-overlay">
          <ArrowUpRight size={40} className="journal-icon" strokeWidth={1.5} />
        </div>
      </div>
      <div className="journal-meta">
        <span className="journal-date">{article.date}</span>
        <h3 className="font-display">{article.title}</h3>
      </div>
    </article>
  );
};

const Journal = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="journal" className="journal-section">
      <div className="container">
        <div className={`journal-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
          <h2 className="font-display">Editorial</h2>
          <p className="font-serif">Dispatches from the void.</p>
        </div>

        <div className="journal-grid">
          {ARTICLES.map((article, index) => (
            <JournalCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;

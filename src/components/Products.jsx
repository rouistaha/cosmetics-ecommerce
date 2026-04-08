import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus } from 'lucide-react';
import './Products.css';

const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Core",
    category: "Restoration",
    price: "$180",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    styleClass: "brutal-tall"
  },
  {
    id: 2,
    name: "Liquid Amber",
    category: "Pigment",
    price: "$95",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80",
    styleClass: "brutal-wide"
  },
  {
    id: 3,
    name: "Carbon Matte",
    category: "Texture",
    price: "$120",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    styleClass: "brutal-small"
  },
  {
    id: 4,
    name: "Void Serum",
    category: "Extraction",
    price: "$210",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80",
    styleClass: "brutal-large"
  }
];

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`brutal-product-card ${product.styleClass} reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="brutal-image-mask hover-magnetic">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="brutal-overlay">
          <span className="brutal-acquire">Acquire</span>
        </div>
      </div>
      <div className="brutal-info">
        <div className="brutal-info-header">
          <h3 className="font-display">{product.name}</h3>
          <span className="brutal-price">{product.price}</span>
        </div>
        <span className="brutal-category">{product.category}</span>
      </div>
    </div>
  );
};

const Products = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="shop" className="products-brutal">
      <div className="container">
        <div className={`brutal-section-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
          <h2 className="font-display">The Archive</h2>
          <p className="font-serif">Engineered for the fearless.</p>
        </div>

        <div className="brutal-masonry">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

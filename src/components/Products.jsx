import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Plus } from 'lucide-react';
import './Products.css';

const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Night Serum",
    price: "$185.00",
    category: "Restoration",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Golden Hour Primer",
    price: "$95.00",
    category: "Base",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    name: "Velvet Matte Ritual",
    price: "$120.00",
    category: "Pigment",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    name: "Silk Canvas Cream",
    price: "$145.00",
    category: "Moisture",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    span: "col-span-1 row-span-1",
  }
];

const ProductCard = ({ product, index }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`product-card ${product.span} reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="product-image-container">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-overlay">
          <button className="add-to-cart-btn">
            <Plus size={20} strokeWidth={1} />
            <span>Acquire</span>
          </button>
        </div>
      </div>
      <div className="product-info glass-panel">
        <div className="product-info-top">
          <h3 className="product-name">{product.name}</h3>
          <span className="product-price">{product.price}</span>
        </div>
        <span className="product-category">{product.category}</span>
      </div>
    </div>
  );
};

const Products = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section id="shop" className="products">
      <div className="container">
        <div className={`section-header reveal ${headerVisible ? 'is-visible' : ''}`} ref={headerRef}>
          <h2>The Archive</h2>
          <p>Masterfully engineered artifacts of beauty.</p>
        </div>

        <div className="bento-grid">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

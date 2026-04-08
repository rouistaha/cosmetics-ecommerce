import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only mount cursor logic on devices that support hover
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const onMouseMove = (e) => {
        // Use requestAnimationFrame for smoother performance
        requestAnimationFrame(() => {
          setPosition({ x: e.clientX, y: e.clientY });
        });
      };

      const handleMouseOver = (e) => {
        if (
          e.target.tagName.toLowerCase() === 'a' ||
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') ||
          e.target.closest('button') ||
          e.target.classList.contains('hover-magnetic')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  if (typeof navigator !== 'undefined' && 'ontouchstart' in window) {
    return null; // hide entirely on touch screens
  }

  return (
    <div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
};

export default CustomCursor;

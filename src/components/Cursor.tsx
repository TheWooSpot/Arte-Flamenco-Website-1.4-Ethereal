import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const links = document.querySelectorAll('a, button');
    
    links.forEach(link => {
      link.addEventListener('mouseover', handleMouseOver);
      link.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseover', handleMouseOver);
        link.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(212, 175, 55, 0)',
      border: '1px solid rgba(212, 175, 55, 0.5)',
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.8)',
      transition: {
        type: 'spring',
        mass: 0.6
      }
    }
  };

  // Only show custom cursor on non-touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-dot-outline fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 hidden md:block"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          backgroundColor: 'rgba(212, 175, 55, 0.5)',
        }}
        transition={{
          type: 'spring',
          mass: 0.3
        }}
      />
    </>
  );
};

export default Cursor;

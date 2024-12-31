'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030014]">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#030014]/50 to-[#030014] opacity-90" />
      
      {/* Simple animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, #2a2a8e 0%, transparent 70%)',
            'radial-gradient(circle at 80% 80%, #4a2a9e 0%, transparent 70%)',
            'radial-gradient(circle at 20% 20%, #2a2a8e 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: isMobile ? 15 : 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle grid pattern - Only show on desktop */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      )}

      {/* Floating elements - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * (isMobile ? 30 : 50)}px`,
              height: `${150 + i * (isMobile ? 30 : 50)}px`,
              background: `radial-gradient(circle, rgba(82, 107, 249, 0.3) 0%, transparent 70%)`,
              left: `${(i % (isMobile ? 2 : 3)) * (isMobile ? 50 : 33)}%`,
              top: `${Math.floor(i / (isMobile ? 2 : 3)) * (isMobile ? 33 : 50)}%`,
              filter: 'blur(8px)',
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
              y: [0, -20, 0],
            }}
            transition={{
              duration: isMobile ? 8 : (6 + i * 1),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Pulsing dots - Reduced for mobile */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: '8px',
              height: '8px',
              left: `${20 + i * (isMobile ? 25 : 15)}%`,
              top: `${25 + i * (isMobile ? 20 : 12)}%`,
              filter: 'blur(3px)',
              boxShadow: '0 0 10px rgba(147, 197, 253, 0.5)',
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: isMobile ? 4 : 3,
              repeat: Infinity,
              delay: i * (isMobile ? 1 : 0.5),
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 
'use client';

import { motion } from 'framer-motion';

const AnimatedBackground = () => {
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
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Subtle grid pattern */}
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

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              background: `radial-gradient(circle, rgba(82, 107, 249, 0.3) 0%, transparent 70%)`,
              left: `${(i % 3) * 33}%`,
              top: `${Math.floor(i / 3) * 50}%`,
              filter: 'blur(8px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Pulsing dots */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: '8px',
              height: '8px',
              left: `${20 + i * 15}%`,
              top: `${25 + i * 12}%`,
              filter: 'blur(3px)',
              boxShadow: '0 0 10px rgba(147, 197, 253, 0.5)',
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground; 
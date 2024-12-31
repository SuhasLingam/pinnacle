'use client';

import { motion, AnimatePresence } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030014]">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#030014]/50 to-[#030014] opacity-90" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, #1a1a2e 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, #2a1a3e 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, #1a2a3e 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, #2a2a1e 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, #1a1a2e 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main animated elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Large flowing orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${200 + i * 30}px`,
              height: `${200 + i * 30}px`,
              background: `radial-gradient(circle, 
                ${i % 3 === 0 
                  ? 'rgba(62, 87, 229, 0.15) 0%, rgba(66, 211, 246, 0.08) 70%, transparent 100%'
                  : i % 3 === 1
                    ? 'rgba(255, 87, 229, 0.15) 0%, rgba(246, 66, 123, 0.08) 70%, transparent 100%'
                    : 'rgba(87, 229, 255, 0.15) 0%, rgba(66, 123, 246, 0.08) 70%, transparent 100%'
              })`,
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 33}%`,
              filter: 'blur(8px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
              rotate: [0, 180, -180, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.33, 0.66, 1],
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `rgba(255, 255, 255, ${0.2 + Math.random() * 0.3})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Enhanced shooting stars */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: '200px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${45 + Math.random() * 45}deg)`,
              opacity: 0,
            }}
            animate={{
              x: [-200, window.innerWidth + 200],
              opacity: [0, 0.8, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 5,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Pulsing rings with glow */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-white/10"
            style={{
              width: '10px',
              height: '10px',
              left: `${25 + i * 25}%`,
              top: `${30 + i * 20}%`,
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
            }}
            animate={{
              scale: [0, 20],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Glowing orbs */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-white/30"
            style={{
              width: '4px',
              height: '4px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(2px)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nebula effect */}
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedBackground; 
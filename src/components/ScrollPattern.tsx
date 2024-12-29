'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollPattern = () => {
  const { scrollYProgress } = useScroll();
  
  const createZigZagPath = () => {
    const segments = 20;
    const segmentHeight = 100 / segments;
    let path = `M 50 0`;
    
    for (let i = 0; i < segments; i++) {
      const y = segmentHeight * (i + 1);
      const x = i % 2 === 0 ? 70 : 30;
      // Add curve control points for smoother zigzag
      const prevX = i % 2 === 0 ? 30 : 70;
      const midY = segmentHeight * i + segmentHeight / 2;
      path += ` Q ${prevX} ${midY} ${x} ${y}`;
    }
    
    return path;
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[5]">
      <svg className="absolute h-full right-8 w-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Animated gradient background */}
        <defs>
          <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <motion.stop
              offset="0%"
              stopColor="#A855F7"
              animate={{
                stopColor: ['#A855F7', '#EC4899', '#3B82F6', '#A855F7'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.stop
              offset="100%"
              stopColor="#3B82F6"
              animate={{
                stopColor: ['#3B82F6', '#A855F7', '#EC4899', '#3B82F6'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </linearGradient>
        </defs>

        {/* Background line with pulse effect */}
        <motion.path
          d={createZigZagPath()}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{
            filter: ['blur(0px)', 'blur(2px)', 'blur(0px)'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Progress line with dynamic gradient */}
        <motion.path
          d={createZigZagPath()}
          fill="none"
          stroke="url(#backgroundGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          style={{
            pathLength: scrollYProgress,
            opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1])
          }}
          filter="url(#glow)"
        />

        {/* Particle effects */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="white"
            filter="url(#glow)"
            style={{
              y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
              x: useTransform(scrollYProgress, (value) => {
                const segment = Math.floor(value * 20);
                return segment % 2 === 0 ? '70%' : '30%';
              }),
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Main progress dot */}
        <motion.circle
          r="8"
          fill="white"
          filter="url(#glow)"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
            x: useTransform(scrollYProgress, (value) => {
              const segment = Math.floor(value * 20);
              return segment % 2 === 0 ? '70%' : '30%';
            }),
          }}
        >
          <animate attributeName="r" values="6;8;6" dur="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
        </motion.circle>

        {/* Enhanced glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feFlood floodColor="#A855F7" floodOpacity="0.5" result="colorFlood" />
            <feComposite in="colorFlood" in2="coloredBlur" operator="in" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Animated section markers */}
      <div className="absolute right-24 top-0 h-full">
        {['Home', 'About', 'Timeline', 'Prizes', 'Sponsors', 'Register'].map((section, index) => (
          <motion.div
            key={section}
            className="text-white/50 text-sm absolute flex items-center gap-2"
            style={{
              top: `${(index * 100) / 5}%`,
              opacity: useTransform(
                scrollYProgress,
                [(index - 0.5) / 6, index / 6, (index + 0.5) / 6],
                [0.3, 1, 0.3]
              ),
            }}
            whileInView={{
              x: [-20, 0],
              scale: [0.8, 1],
              transition: { duration: 0.5 }
            }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
            {section}
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 
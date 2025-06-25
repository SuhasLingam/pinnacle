'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.4
    }
  }
};

interface SponsorSectionProps {
  height: string
  count: number
  color: string
  logos?: string[] // Array of logo image paths
  mode?: 'grid' | 'carousel'
}

function SponsorSection({ height, count, color, logos = [], mode = 'grid' }: SponsorSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (mode === 'carousel') {
    // Carousel mode: horizontal scroll with infinite auto-scroll
    // Duplicate logos for seamless infinite effect
    const allLogos = [...logos, ...logos];
    return (
      <motion.div 
        className="mb-12 sm:mb-16 last:mb-0 px-4 sm:px-6 lg:px-8"
        variants={prefersReducedMotion ? {} : containerVariants}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ 
          once: true,
          margin: "0px 0px -100px 0px" // Trigger animation earlier
        }}
      >
        <div className="overflow-x-auto overflow-y-visible w-full scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="carousel-infinite gap-6 py-2">
            {allLogos.map((logo, i) => (
              <motion.div
                key={i}
                variants={prefersReducedMotion ? {} : itemVariants}
                whileHover={prefersReducedMotion ? {} : { 
                  scale: 1.05,
                  boxShadow: `0 0 30px ${color}30`
                }}
                className={`
                  ${height} 
                  min-w-[80vw] sm:min-w-[40vw] lg:min-w-[28vw] max-w-[90vw] sm:max-w-[40vw] lg:max-w-[28vw]
                  bg-[#1A1A1A] rounded-xl sm:rounded-2xl flex items-center justify-center relative group overflow-hidden will-change-transform
                `}
                style={{
                  border: `1px solid ${color}20`,
                  transform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
                {/* Hover Glow */}
                {!prefersReducedMotion && (
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
                    }}
                  />
                )}
                {logo ? (
                  <Image
                    src={logo}
                    alt={i + ' logo'}
                    width={120}
                    height={60}
                    className="object-contain max-h-full max-w-full"
                    style={{ filter: 'drop-shadow(0 0 8px ' + color + '60)' }}
                  />
                ) : (
                  <span className="text-white/30 text-sm sm:text-base">
                    Logo Placeholder
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default grid mode
  return (
    <motion.div 
      className="mb-12 sm:mb-16 last:mb-0 px-4 sm:px-6 lg:px-8"
      variants={prefersReducedMotion ? {} : containerVariants}
      initial={prefersReducedMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ 
        once: true,
        margin: "0px 0px -100px 0px" // Trigger animation earlier
      }}
    >
      <div 
        className={`grid grid-cols-1 ${
          count === 1 ? 'max-w-2xl mx-auto' : 
          count === 2 ? 'sm:grid-cols-2' :
          'sm:grid-cols-2 lg:grid-cols-3'
        } gap-4 sm:gap-6 lg:gap-8`}
      >
        {Array(count).fill(0).map((_, i) => (
          <motion.div
            key={i}
            variants={prefersReducedMotion ? {} : itemVariants}
            whileHover={prefersReducedMotion ? {} : { 
              scale: 1.02,
              boxShadow: `0 0 30px ${color}30`
            }}
            className={`
              ${height} 
              bg-[#1A1A1A] 
              rounded-xl sm:rounded-2xl 
              flex items-center justify-center 
              relative group overflow-hidden
              will-change-transform
              ${count === 1 ? 'sm:h-56 md:h-64' : ''}
            `}
            style={{
              border: `1px solid ${color}20`,
              transform: "translate3d(0,0,0)",
              backfaceVisibility: "hidden"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
            {/* Hover Glow - Only render when not using reduced motion */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
                }}
              />
            )}
            {/* Animated Border - Only render when not using reduced motion */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}40, transparent)`,
                  transform: 'translateX(-100%)'
                }}
                animate={{
                  transform: ['translateX(-100%)', 'translateX(100%)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
            )}
            {/* Sponsor Logo or Placeholder */}
            {logos[i] ? (
              <Image
                src={logos[i]}
                alt={i + ' logo'}
                width={120}
                height={60}
                className="object-contain max-h-full max-w-full"
                style={{ filter: 'drop-shadow(0 0 8px ' + color + '60)' }}
              />
            ) : (
              <span className="text-white/30 text-sm sm:text-base">
                Logo Placeholder
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Partners() {
  // State to control when animations should be rendered
  const [isVisible, setIsVisible] = useState(false);
  
  // Delay rendering animations until after component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div 
      className="w-full max-w-7xl mx-auto py-8 sm:py-12"
      style={{ 
        willChange: 'contents',
        transform: 'translateZ(0)'
      }}
    >
      {isVisible && (
        <>         
          <SponsorSection 
            height="h-44 sm:h-60"
            count={2}
            color="#9D71FD"
            logos={["/LogoMain.svg", "/LogoMain.svg"]}
            mode="grid"
          />

          <SponsorSection 
            height="h-32 sm:h-44"
            count={5}
            color="#40F8FF"
            logos={["/LogoMain.svg", "/LogoMain.svg", "/LogoMain.svg", "/LogoMain.svg", "/LogoMain.svg"]}
            mode="carousel"
          />
        </>
      )}
    </div>
  );
} 
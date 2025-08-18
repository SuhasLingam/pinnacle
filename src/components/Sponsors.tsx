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
  title: string
  height: string
  count: number
  color: string
  logos?: string[] // Array of logo image paths
}

function SponsorSection({ title, height, count, color, logos = [] }: SponsorSectionProps) {
  const prefersReducedMotion = useReducedMotion();

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
      <motion.h3
        className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center tracking-wider"
        style={{ color }}
      >
        {title}
      </motion.h3>
      <div
        className={`grid grid-cols-1 ${count === 1 ? 'max-w-2xl mx-auto' :
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
            {/* Placeholder for logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />

            {/* Hover Glow - Only render when not using reduced motion */}
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              // style={{
              //   background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
              // }}
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
                alt={
                  title === "POWERED BY" ? "DEVFOLIO LOGO" :
                    title === "PLATINUM SPONSORS" ? "ETHINDIA LOGO" :
                      title + ' logo'
                }
                width={200}
                height={100}
                className="object-contain max-h-full max-w-full w-auto h-auto"
                style={{
                  minWidth: title === "POWERED BY" ? "200px" : "120px",
                  minHeight: title === "POWERED BY" ? "100px" : "60px",
                  maxWidth: title === "POWERED BY" ? "280px" : "180px",
                  maxHeight: title === "POWERED BY" ? "140px" : "90px"
                }}
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

export function Sponsors() {
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
          {/* Powered by Devfolio - 1st Row (Big) */}
          <SponsorSection
            title="POWERED BY"
            height="h-32 sm:h-40 md:h-48 lg:h-56"
            count={1}
            color="#00D4AA"
            logos={["/sponsors/devfolio-dark.svg"]}
          />

          {/* Platinum Sponsors - 2nd Row (Smaller) */}
          <SponsorSection
            title="PLATINUM SPONSORS"
            height="h-24 sm:h-28 md:h-32 lg:h-36"
            count={1}
            color="#5271FF"
            logos={["/sponsors/ethindia-light.svg"]}
          />

          {/* Diamond Sponsors */}
          {/* <SponsorSection
            title="DIAMOND SPONSORS"
            height="h-28 sm:h-36"
            count={3}
            color="#40F8FF"
            logos={["/LogoMain.svg", "/LogoMain.svg", "/LogoMain.svg"]}
          /> */}

          {/* Gold Sponsors */}
          {/* <SponsorSection
            title="GOLD SPONSORS"
            height="h-24 sm:h-30"
            count={3}
            color="#FFD700"
            logos={["/LogoMain.svg", "/LogoMain.svg", "/LogoMain.svg"]}
          /> */}
        </>
      )}
    </div>
  );
} 
'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface SponsorSectionProps {
  title: string
  height: string
  count: number
  color: string
}

function SponsorSection({ title, height, count, color }: SponsorSectionProps) {
  return (
    <motion.div 
      className="mb-12 sm:mb-16 last:mb-0 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h3 
        className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center tracking-wider"
        style={{ color }}
      >
        {title}
      </motion.h3>
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
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: `0 0 30px ${color}30`
            }}
            className={`
              ${height} 
              bg-[#1A1A1A] 
              rounded-xl sm:rounded-2xl 
              flex items-center justify-center 
              relative group overflow-hidden
              transition-all duration-300
              ${count === 1 ? 'sm:h-56 md:h-64' : ''}
            `}
            style={{
              border: `1px solid ${color}20`
            }}
          >
            {/* Placeholder for logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />
            
            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`
              }}
            />

            {/* Animated Border */}
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

            {/* Placeholder Text (remove when adding actual logos) */}
            <span className="text-white/30 text-sm sm:text-base">
              Logo Placeholder
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Sponsors() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 sm:py-12">
      <SponsorSection 
        title="TITLE SPONSOR"
        height="h-40 sm:h-48"
        count={1}
        color="#B4FF00"
      />
      
      <SponsorSection 
        title="PLATINUM SPONSORS"
        height="h-28 sm:h-32"
        count={3}
        color="#5271FF"
      />
      
      <SponsorSection 
        title="DIAMOND SPONSORS"
        height="h-28 sm:h-32"
        count={3}
        color="#40F8FF"
      />
      
      <SponsorSection 
        title="GOLD SPONSORS"
        height="h-24 sm:h-28"
        count={3}
        color="#FFD700"
      />
      
      <SponsorSection 
        title="PARTNERS"
        height="h-24 sm:h-28"
        count={3}
        color="#9D71FD"
      />
    </div>
  );
} 
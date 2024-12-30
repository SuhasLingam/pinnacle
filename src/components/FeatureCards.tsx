'use client'

import { Lightbulb, Users, TypeIcon as type, LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  spacing?: boolean
}

export function GradientText({ children, className = "", spacing = false }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-[#8BE8FF] via-[#9D71FD] to-[#7C4DFF] text-transparent bg-clip-text font-bold
      ${spacing ? 'tracking-[0.3em] sm:tracking-[0.5em]' : ''} ${className}`}
      style={{
        textShadow: '0 0 20px rgba(139, 232, 255, 0.3)'
      }}
    >
      {children}
    </span>
  )
}

interface FeatureCardProps {
  icon?: LucideIcon
  customIcon?: string
  title: string
  description: string
  className?: string
  iconColor?: string
}

export function FeatureCard({
  icon: Icon,
  customIcon,
  title,
  description,
  className = "",
  iconColor = "text-[#8BE8FF]",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`relative bg-[#1C1C1C] rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 border border-gray-800/50 ${className}`}
      style={{
        boxShadow: `
          0 0 25px rgba(0, 0, 0, 0.5),
          0 0 15px rgba(0, 0, 0, 0.5),
          inset 0 0 60px rgba(0, 0, 0, 0.5)
        `
      }}
    >
      <motion.div 
        className="flex flex-col gap-3 sm:gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {customIcon ? (
            <Image 
              src={customIcon} 
              alt={title}
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          ) : Icon && (
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} style={{
                filter: 'drop-shadow(0 0 8px currentColor)'
              }} />
            </motion.div>
          )}
          <motion.span 
            className="bg-gradient-to-r from-[#8BE8FF] via-[#9D71FD] to-[#7C4DFF] text-transparent bg-clip-text font-bold tracking-wider text-sm sm:text-base"
            style={{
              textShadow: '0 0 10px rgba(139, 232, 255, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.span>
        </div>
        <motion.p 
          className="text-white/90 text-xs sm:text-sm leading-relaxed font-light tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-[20px] sm:rounded-[40px] opacity-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
        style={{
          background: `radial-gradient(circle at center, ${iconColor === 'text-orange-400' ? '#FB923C' : 
            iconColor === 'text-[#8BE8FF]' ? '#8BE8FF' : 
            iconColor === 'text-[#9D71FD]' ? '#9D71FD' : '#7C4DFF'} 0%, transparent 70%)`
        }}
      />
    </motion.div>
  )
}

interface StatCardProps {
  number: string
  label: string
}

export function StatCard({ number, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-[#1C1C1C] rounded-[16px] sm:rounded-[24px] p-4 sm:p-6 border border-gray-800/50"
      style={{
        boxShadow: `
          0 0 25px rgba(0, 0, 0, 0.5),
          0 0 15px rgba(0, 0, 0, 0.5),
          inset 0 0 60px rgba(0, 0, 0, 0.5)
        `
      }}
    >
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <motion.span 
          className="font-bold text-lg sm:text-xl tracking-wider"
          whileHover={{ scale: 1.1 }}
          style={{
            color: '#40F8FF',
            textShadow: '0 0 10px rgba(64, 248, 255, 0.5)'
          }}
        >
          {number}
        </motion.span>
        <motion.span 
          className="text-white/90 text-xs sm:text-sm uppercase tracking-[0.2em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {label}
        </motion.span>
      </div>
    </motion.div>
  )
} 
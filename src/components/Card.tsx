'use client';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence, MotionValue } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  glowOnHover?: boolean;
  variant?: 'default' | 'glass' | 'solid';
}

export const Card = ({ 
  children, 
  className = '', 
  hoverScale = true,
  glowOnHover = true,
  variant = 'default'
}: CardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const variants = {
    default: 'bg-gradient-to-b from-white/[0.08] to-transparent',
    glass: 'bg-white/5',
    solid: 'bg-gray-900/50'
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`
        relative overflow-hidden
        ${variants[variant]}
        backdrop-blur-xl rounded-2xl
        border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        group
        ${hoverScale ? 'hover:scale-[1.02]' : ''}
        ${glowOnHover ? 'hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      style={
        {
          '--mouse-x': useMotionTemplate`${mouseX}px`,
          '--mouse-y': useMotionTemplate`${mouseY}px`
        } as { [key: `--${string}`]: MotionValue<string> }
      }
    >
      {/* Border gradient animation */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            'linear-gradient(45deg, transparent 40%, rgba(168,85,247,0.4), rgba(236,72,153,0.4), transparent 60%)',
            'linear-gradient(45deg, transparent 40%, rgba(236,72,153,0.4), rgba(168,85,247,0.4), transparent 60%)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          borderRadius: 'inherit',
          padding: '1px',
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
        }}
      />

      {/* Glow effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{
                maskImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 50%, black 75%)',
                WebkitMaskImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 50%, black 75%)',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.06), transparent 40%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkles effect */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                animate={{
                  x: [
                    Math.random() * 100 + '%',
                    Math.random() * 100 + '%',
                    Math.random() * 100 + '%'
                  ],
                  y: [
                    Math.random() * 100 + '%',
                    Math.random() * 100 + '%',
                    Math.random() * 100 + '%'
                  ],
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content with subtle hover lift */}
      <motion.div 
        className="relative z-10"
        animate={isHovered ? { y: -2 } : { y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}; 
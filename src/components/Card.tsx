'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: boolean;
  glowOnHover?: boolean;
}

export const Card = ({ 
  children, 
  className = '', 
  hoverScale = true,
  glowOnHover = true 
}: CardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`
        relative overflow-hidden
        bg-gradient-to-b from-white/[0.08] to-transparent
        backdrop-blur-xl rounded-2xl
        border border-white/[0.08]
        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        group
        ${hoverScale ? 'hover:scale-[1.02]' : ''}
        ${glowOnHover ? 'hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]' : ''}
        transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        '--mouse-x': useMotionTemplate`${mouseX}px`,
        '--mouse-y': useMotionTemplate`${mouseY}px`,
      } as any}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute inset-[-1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          style={{
            maskImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 50%, black 75%)',
            WebkitMaskImage: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), transparent 50%, black 75%)',
          }}
        />
      </div>

      {/* Inner glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.06), transparent 40%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}; 
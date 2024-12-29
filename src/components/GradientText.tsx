'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
}

export const GradientText = ({ text, className = '' }: GradientTextProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-gradient ${className}`}
      style={{ backgroundSize: '200% 200%' }}
    >
      {text}
    </motion.h1>
  );
}; 
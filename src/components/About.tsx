'use client';
import { motion } from 'framer-motion';

export function About() {
  const paragraphs = [
    {
      text: "Welcome to ",
      highlight: "PINNACLE",
      rest: ", where caffeine fuels creativity, code sparks innovation, and ideas run wild!"
    },
    {
      text: "We're not your average hackathon—we're the ultimate brain playground for tech rebels, design wizards, and innovation junkies who dare to dream big and build bigger. Whether you're here to code, craft designs that dazzle, or just soak up the good vibes, this is the place where your imagination meets execution."
    },
    {
      text: 'For 24 hours, you\'ll face epic challenges, and turn "what ifs" into "heck yeah!" Think sleepless nights, meme-worthy moments, and the sweet victory of creating something awesome from scratch. Oh, and did we mention prizes, swag, and bragging rights?'
    },
    {
      text: "So, grab your laptop, pack your wildest ideas, and bring your A-game. Together, let's hack the ordinary and create something extraordinary."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      <motion.div 
        className="card text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {paragraphs.map((paragraph, index) => (
          <motion.p 
            key={index}
            variants={itemVariants}
            className={`text-white/90 leading-relaxed tracking-wide text-base md:text-lg ${
              index > 0 ? 'mt-6 md:mt-8' : ''
            }`}
          >
            {paragraph.highlight ? (
              <>
                {paragraph.text}
                <motion.span 
                  className="text-[#B4FF00] font-bold"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {paragraph.highlight}
                </motion.span>
                {paragraph.rest}
              </>
            ) : (
              paragraph.text
            )}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
} 
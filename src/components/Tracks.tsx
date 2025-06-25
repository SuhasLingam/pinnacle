'use client'

import { motion } from 'framer-motion'
import { Brain, BookOpen, Briefcase, Stethoscope, Wallet, Shield, MessageSquare, Lock, Code, Headphones, Leaf, Heart } from 'lucide-react'

const tracks = [
  {
    title: "Generative AI & Creativity",
    icon: Brain,
    description: "Explore the intersection of AI and creative expression, from art generation to music composition.",
    color: "text-[#8BE8FF]"
  },
  {
    title: "AI for Edtech",
    icon: BookOpen,
    description: "Revolutionizing education through personalized learning and intelligent tutoring systems.",
    color: "text-[#9D71FD]"
  },
  {
    title: "AI for Productivity & Business Tools",
    icon: Briefcase,
    description: "Enhancing workplace efficiency with AI-powered automation and decision support systems.",
    color: "text-[#7C4DFF]"
  },
  {
    title: "AI for Medtech",
    icon: Stethoscope,
    description: "Advancing medical technology through AI-driven diagnostics and treatment planning.",
    color: "text-[#8BE8FF]"
  },
  {
    title: "AI in Fintech",
    icon: Wallet,
    description: "Transforming financial services with AI-powered risk assessment and fraud detection.",
    color: "text-[#9D71FD]"
  },
  {
    title: "AI for Content Moderation & Social Platforms",
    icon: Shield,
    description: "Ensuring safe and engaging online spaces through intelligent content filtering.",
    color: "text-[#7C4DFF]"
  },
  {
    title: "AI in Language & Communication",
    icon: MessageSquare,
    description: "Breaking language barriers with advanced translation and natural language processing.",
    color: "text-[#8BE8FF]"
  },
  {
    title: "AI in Cybersecurity",
    icon: Lock,
    description: "Protecting digital assets with AI-driven threat detection and prevention systems.",
    color: "text-[#9D71FD]"
  },
  {
    title: "AI for Code & Developer Tools",
    icon: Code,
    description: "Enhancing software development with AI-powered coding assistance and automation.",
    color: "text-[#7C4DFF]"
  },
  {
    title: "AI in Customer Experience & Support",
    icon: Headphones,
    description: "Revolutionizing customer service with intelligent chatbots and support systems.",
    color: "text-[#8BE8FF]"
  },
  {
    title: "AI in Agritech",
    icon: Leaf,
    description: "Modernizing agriculture through AI-driven crop management and yield optimization.",
    color: "text-[#9D71FD]"
  },
  {
    title: "AI in Healthcare",
    icon: Heart,
    description: "Improving patient care with AI-powered diagnosis and treatment recommendations.",
    color: "text-[#7C4DFF]"
  }
]

export function Tracks() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our diverse range of AI tracks, each focusing on cutting-edge applications and innovations in different sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-[#1C1C1C] rounded-[20px] sm:rounded-[40px] p-6 sm:p-8 border border-gray-800/50"
              style={{
                boxShadow: `
                  0 0 25px rgba(0, 0, 0, 0.5),
                  0 0 15px rgba(0, 0, 0, 0.5),
                  inset 0 0 60px rgba(0, 0, 0, 0.5)
                `
              }}
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <track.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${track.color}`} style={{
                      filter: 'drop-shadow(0 0 8px currentColor)'
                    }} />
                  </motion.div>
                  <motion.span 
                    className="bg-gradient-to-r from-[#8BE8FF] via-[#9D71FD] to-[#7C4DFF] text-transparent bg-clip-text font-mono-rubik tracking-wider text-sm sm:text-base"
                    style={{
                      textShadow: '0 0 10px rgba(139, 232, 255, 0.3)'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {track.title}
                  </motion.span>
                </div>
                <motion.p 
                  className="text-white/90 text-xs sm:text-sm leading-relaxed font-light tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {track.description}
                </motion.p>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-[20px] sm:rounded-[40px] opacity-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                style={{
                  background: `radial-gradient(circle at center, ${track.color.replace('text-', '')} 0%, transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
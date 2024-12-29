'use client';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Navigation } from '@/components/Navigation';
import { GradientText } from '@/components/GradientText';
import { About } from '@/components/About';
import { Timeline } from '@/components/Timeline';
import { Prizes } from '@/components/Prizes';
import { Sponsors } from '@/components/Sponsors';
import { Register } from '@/components/Register';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollPattern } from '@/components/ScrollPattern';

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navigation />
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Hero Section with proper spacing */}
      <div className="relative z-10 min-h-[calc(100vh-64px)] mt-16 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Remove the oval shape div and simplify the title */}
          <GradientText 
            text="Pinnacle Hackathon 2025" 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
              Innovate. Create. Transform.
            </p>
            <p className="text-white/60 text-lg sm:text-xl max-w-3xl mx-auto">
              Join the largest student-run hackathon in India
            </p>
          </motion.div>

          {/* CTA Buttons with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#register"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition-all w-full sm:w-auto overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative flex items-center justify-center gap-2">
                Register Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform transition-all border border-white/20 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <span className="group-hover:rotate-90 transition-transform duration-300">
                  ↓
                </span>
              </span>
            </motion.a>
          </motion.div>

          {/* Stats with Enhanced Visual Design */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-12 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: "⏱", label: "Hours", value: "48" },
              { icon: "👥", label: "Participants", value: "500+" },
              { icon: "💰", label: "in Prizes", value: "₹5L+" },
              { icon: "🌟", label: "Tracks", value: "5+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <span className="text-2xl mb-2">{stat.icon}</span>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
                <motion.div
                  className="w-2 h-2 bg-white/50 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-white/30 text-sm font-light tracking-wider uppercase">
                Scroll
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Content sections with proper spacing */}
      <div className="relative z-10 space-y-32">
        <About />
        <Timeline />
        <Prizes />
        <Sponsors />
        <Register />
      </div>

      {/* Enhanced Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative z-10 bg-black/30 backdrop-blur-lg py-16 mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-xl mb-4">Contact Us</h3>
              <div className="space-y-2">
                <a href="mailto:info@pinnacle-hackathon.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <span>📧</span> info@pinnacle-hackathon.com
                </a>
                <a href="tel:+911234567890" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  <span>📞</span> +91 1234567890
          </a>
        </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-xl mb-4">Follow Us</h3>
              <div className="flex gap-6">
                {[
                  { icon: "𝕏", label: "Twitter", href: "#" },
                  { icon: "in", label: "LinkedIn", href: "#" },
                  { icon: "📸", label: "Instagram", href: "#" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-xl mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "FAQs",
                  "Code of Conduct",
                  "Terms & Conditions",
                  "Privacy Policy"
                ].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/50">
              © 2024 Pinnacle Hackathon. All rights reserved.
            </p>
          </div>
    </div>
      </motion.footer>
    </main>
  );
}


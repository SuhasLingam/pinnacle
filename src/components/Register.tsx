'use client';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { Card } from './Card';

export const Register = () => {
  return (
    <section id="register" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <GradientText text="Register Now" className="text-3xl sm:text-4xl mb-6" />
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Join us for an unforgettable hackathon experience!
          </p>
        </div>

        <Card className="p-8" glowOnHover={false}>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-white mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                           transition-all duration-300"
                  placeholder="John"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-white mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                           focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                           transition-all duration-300"
                  placeholder="Doe"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-white mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                         focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                         transition-all duration-300"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-white mb-2 font-medium">Institution/Organization</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                         focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                         transition-all duration-300"
                placeholder="Your institution or organization"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-white mb-2 font-medium">Skills</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                         focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                         transition-all duration-300"
                placeholder="e.g., React, Python, UI/UX Design"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-white mb-2 font-medium">Why do you want to participate?</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                         focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20
                         transition-all duration-300 h-32 resize-none"
                placeholder="Tell us about your motivation..."
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg 
                       font-medium text-lg shadow-lg hover:shadow-xl transform transition-all
                       focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              Submit Registration
            </motion.button>
          </form>
        </Card>
      </div>
    </section>
  );
}; 
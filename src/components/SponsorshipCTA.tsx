"use client";

import { motion } from "framer-motion";

export function SponsorshipCTA() {
  return (
    <section className="py-10 sm:py-16 px-2 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Glowing Accent */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <span className="block w-3 h-3 sm:w-4 sm:h-4 rounded-full animated-gradient blur-sm shadow-lg" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-mono-rubik mb-4 sm:mb-6 animated-gradient text-transparent bg-clip-text">
            Become a Sponsor
          </h2>

          <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
            Join us in fostering innovation and creativity. Partner with
            PinnacleHacks to connect with the next generation of tech talent and
            showcase your brand to passionate developers.
          </p>

          <motion.div className="inline-block w-full sm:w-auto">
            <a
              href="https://sponsorship.pinnaclehacks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#B4FF00] via-[#5271FF] to-[#7C4DFF] text-black font-mono-rubik text-sm sm:text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* <Handshake className="w-5 h-5 sm:w-6 sm:h-6" /> */}
              <span className="text-center">
                Explore Sponsorship Opportunities
              </span>
              {/* <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 " /> */}
            </a>
          </motion.div>

          <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6 ">
            Connect with 250+ talented developers and innovators
          </p>
        </motion.div>
      </div>
    </section>
  );
}

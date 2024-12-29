'use client';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { Card } from './Card';

export const Sponsors = () => {
  const sponsorTiers = [
    {
      tier: "Platinum Sponsors",
      gradient: "from-gray-100 via-gray-300 to-gray-100",
      sponsors: [
        { name: "TechCorp", logo: "🏢" },
        { name: "InnovateX", logo: "🚀" },
        { name: "FutureHub", logo: "🌟" }
      ]
    },
    {
      tier: "Gold Sponsors",
      gradient: "from-yellow-300 via-yellow-400 to-yellow-300",
      sponsors: [
        { name: "DevTools", logo: "🛠" },
        { name: "CloudNet", logo: "☁️" },
        { name: "CodeLabs", logo: "💻" },
        { name: "BuildEx", logo: "🏗" }
      ]
    },
    {
      tier: "Community Partners",
      gradient: "from-purple-400 via-pink-400 to-purple-400",
      sponsors: [
        { name: "TechHub", logo: "🎯" },
        { name: "DevCommunity", logo: "🤝" },
        { name: "CodeSchool", logo: "🎓" }
      ]
    }
  ];

  return (
    <section id="sponsors" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <GradientText text="Our Sponsors" className="text-3xl sm:text-4xl mb-6" />
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Supported by industry leaders and innovative companies
          </p>
        </div>

        {sponsorTiers.map((tier, tierIndex) => (
          <div key={tier.tier} className="mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.gradient} text-2xl font-bold`}>
                {tier.tier}
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {tier.sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full" hoverScale={true}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-5xl mb-4"
                    >
                      {sponsor.logo}
                    </motion.div>
                    <div className="text-white font-medium text-lg">
                      {sponsor.name}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 
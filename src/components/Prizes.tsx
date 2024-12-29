'use client';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { Card } from './Card';

export const Prizes = () => {
  const prizes = [
    {
      position: "1st Prize",
      amount: "₹2,00,000",
      extras: ["AWS Credits", "1-Year GitHub Pro", "Mentorship"],
      icon: "🏆",
      gradient: "from-yellow-500 via-yellow-300 to-yellow-500"
    },
    {
      position: "2nd Prize",
      amount: "₹1,50,000",
      extras: ["AWS Credits", "6-Month GitHub Pro"],
      icon: "🥈",
      gradient: "from-gray-300 via-gray-100 to-gray-300"
    },
    {
      position: "3rd Prize",
      amount: "₹1,00,000",
      extras: ["AWS Credits", "3-Month GitHub Pro"],
      icon: "🥉",
      gradient: "from-amber-700 via-amber-500 to-amber-700"
    },
    {
      position: "Special Tracks",
      amount: "₹50,000",
      extras: ["Best UI/UX", "Most Innovative", "Social Impact"],
      icon: "⭐",
      gradient: "from-purple-500 via-pink-500 to-purple-500"
    }
  ];

  return (
    <section id="prizes" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <GradientText text="Prizes & Rewards" className="text-3xl sm:text-4xl mb-6" />
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Compete for exciting prizes and rewards worth over ₹5 Lakhs!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl mb-6"
                >
                  {prize.icon}
                </motion.div>
                
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${prize.gradient} font-bold mb-2`}>
                  {prize.position}
                </div>
                
                <div className="text-3xl font-bold text-white mb-6">
                  {prize.amount}
                </div>
                
                <ul className="text-white/70 space-y-3">
                  {prize.extras.map((extra, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.1) + (i * 0.1) }}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {extra}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
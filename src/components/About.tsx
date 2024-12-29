'use client';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { Card } from './Card';

export const About = () => {
  const features = [
    {
      title: "Innovation Hub",
      description: "Join forces with brilliant minds to solve real-world challenges using cutting-edge technology",
      icon: "💡",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Expert Mentorship",
      description: "Get guidance from industry leaders and technical experts throughout your journey",
      icon: "👥",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Networking",
      description: "Connect with fellow developers, designers, and entrepreneurs from around the globe",
      icon: "🤝",
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Learn & Grow",
      description: "Access exclusive workshops, tech talks, and hands-on learning experiences",
      icon: "📚",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="about" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <GradientText text="About The Hackathon" className="text-4xl sm:text-5xl lg:text-6xl mb-8" />
          <p className="text-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            Join us for 48 hours of innovation, creativity, and problem-solving. 
            Build something amazing with like-minded individuals and compete for exciting prizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-white text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: "Participants", value: "500+", icon: "👥" },
            { label: "Prize Pool", value: "₹5L+", icon: "💰" },
            { label: "Mentors", value: "50+", icon: "👨‍🏫" },
            { label: "Workshops", value: "20+", icon: "🎯" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}; 
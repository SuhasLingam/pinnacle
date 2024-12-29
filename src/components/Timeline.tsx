'use client';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';
import { Card } from './Card';

export const Timeline = () => {
  const events = [
    {
      date: "March 15",
      time: "6:00 PM",
      title: "Opening Ceremony",
      description: "Kickoff event with keynote speakers and team formation",
      icon: "🎉"
    },
    {
      date: "March 15",
      time: "7:00 PM",
      title: "Hacking Begins",
      description: "Start working on your innovative solutions",
      icon: "🚀"
    },
    {
      date: "March 16",
      time: "All Day",
      title: "Workshops & Mentoring",
      description: "Expert sessions and one-on-one mentoring",
      icon: "💡"
    },
    {
      date: "March 17",
      time: "5:00 PM",
      title: "Submissions Due",
      description: "Final project submissions and demonstrations",
      icon: "📤"
    },
    {
      date: "March 17",
      time: "7:00 PM",
      title: "Presentations",
      description: "Project showcase and judging",
      icon: "🎯"
    }
  ];

  return (
    <section id="timeline" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <GradientText text="Event Timeline" className="text-4xl sm:text-5xl lg:text-6xl mb-8" />
          <p className="text-white/80 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
            48 hours of innovation, learning, and building the future
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" />

          {/* Events */}
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center md:justify-between mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 hidden md:flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl">
                  {event.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="w-full md:w-5/12">
                <Card className={`p-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="flex items-center gap-4 mb-4 md:hidden">
                    <span className="text-2xl">{event.icon}</span>
                    <div className="text-purple-400 font-semibold">{event.date} • {event.time}</div>
                  </div>
                  <div className="hidden md:block text-purple-400 font-semibold mb-2">{event.date} • {event.time}</div>
                  <h3 className="text-white text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-white/70 text-lg">{event.description}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
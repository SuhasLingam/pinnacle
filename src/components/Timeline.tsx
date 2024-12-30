'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Award, Rocket, Upload, Trophy } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: any;
}

const events: TimelineEvent[] = [
  {
    date: "15 MAR",
    title: "REGISTRATIONS OPEN",
    description: "Begin Your Journey Into The World Of Innovation And Technology",
    icon: Calendar
  },
  {
    date: "30 MAR",
    title: "REGISTRATIONS CLOSE",
    description: "Last Chance To Join The Most Exciting Hackathon Of The Year",
    icon: Clock
  },
  {
    date: "1 APR",
    title: "OPENING CEREMONY",
    description: "Join Us For The Grand Opening And Team Formation",
    icon: Award
  },
  {
    date: "2 APR",
    title: "HACKING BEGINS",
    description: "48 Hours Of Intense Coding, Learning, And Creating",
    icon: Rocket
  },
  {
    date: "4 APR",
    title: "PROJECT SUBMISSION",
    description: "Submit Your Innovative Solutions And Prepare For Presentations",
    icon: Upload
  },
  {
    date: "5 APR",
    title: "RESULTS & PRIZES",
    description: "Celebration Of Innovation And Recognition Of Top Projects",
    icon: Trophy
  }
];

export function Timeline() {
  return (
    <div className="max-w-5xl mx-auto px-4 relative">
      {/* Main Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#B4FF00] via-[#5271FF] to-[#40F8FF] opacity-40" />

      {/* Events */}
      <div className="relative flex flex-col">
        {events.map((event, index) => {
          const Icon = event.icon;
          const isEven = index % 2 === 0;
          const colors = ['#B4FF00', '#5271FF', '#40F8FF'];
          const color = colors[index % 3];
          
          return (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2
              }}
              className="py-12 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col md:grid md:grid-cols-[1fr,auto,1fr] items-center gap-8 md:gap-6">
                {/* Left Content */}
                <div className={`w-full ${!isEven && 'md:col-start-3'}`}>
                  <div className="bg-[#1A1A1A] rounded-2xl p-6 relative group hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl" style={{ background: `${color}20` }}>
                        <Icon 
                          size={24}
                          style={{ 
                            color: color,
                            filter: `drop-shadow(0 0 8px ${color})`
                          }}
                        />
                      </div>
                      <span 
                        className="text-2xl font-bold"
                        style={{ 
                          color: color,
                          textShadow: `0 0 10px ${color}50`
                        }}
                      >
                        {event.date}
                      </span>
                    </div>

                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ 
                        color: color,
                        textShadow: `0 0 10px ${color}30`
                      }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-gray-400">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot - Always in center column */}
                <div className="md:col-start-2 w-4 h-4">
                  <motion.div
                    className="w-4 h-4 rounded-full"
                    style={{
                      background: color,
                      boxShadow: `0 0 15px ${color}`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 15px ${color}`,
                        `0 0 25px ${color}`,
                        `0 0 15px ${color}`
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Empty space for the other side */}
                <div className={`hidden md:block ${isEven && 'md:col-start-3'}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 
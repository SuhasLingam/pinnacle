'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: "March 1",
    title: "Registration Opens",
    description: "Begin your journey by registering for the hackathon"
  },
  {
    date: "March 15",
    title: "Team Formation",
    description: "Form your team or get matched with other participants"
  },
  {
    date: "March 20",
    title: "Opening Ceremony",
    description: "Join us for the grand opening and problem statement reveal"
  },
  {
    date: "March 21",
    title: "Hacking Begins",
    description: "Start working on your innovative solutions"
  },
  {
    date: "March 22",
    title: "Mentorship Sessions",
    description: "Get guidance from industry experts"
  },
  {
    date: "March 23",
    title: "Project Submission",
    description: "Submit your projects for evaluation"
  },
  {
    date: "March 24",
    title: "Presentations",
    description: "Present your solutions to the judges"
  },
  {
    date: "March 25",
    title: "Closing Ceremony",
    description: "Winners announcement and prize distribution"
  }
];

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical Line */}
      <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#B4FF00] via-[#5271FF] to-[#B4FF00] opacity-50" />

      {/* Events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-start gap-8 ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#B4FF00] rounded-full shadow-[0_0_10px_rgba(180,255,0,0.5)]" />

            {/* Content */}
            <div className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${
              index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'
            }`}>
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/10">
                <h3 className="text-[#B4FF00] font-mono-rubik text-sm sm:text-base mb-1">{event.date}</h3>
                <h4 className="text-white font-mono-rubik text-base sm:text-lg mb-2">{event.title}</h4>
                <p className="text-white/70 text-xs sm:text-sm">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 
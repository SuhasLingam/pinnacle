'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    date: "August 20",
    title: "Registration Open",
    description: "Kick off your journey by registering for the hackathon."
  },
  {
    date: "September 10",
    title: "Registration Close",
    description: "Last day to register and secure your spot."
  },
  {
    date: "Sept 20, 8am",
    title: "Check In",
    description: "Arrive at the venue and complete your check-in process."
  },
  {
    date: "Sept 20, 10-12am",
    title: "Inauguration & Speaker Session",
    description: "Join the opening ceremony and get inspired by our speakers."
  },
  {
    date: "Sept 20, 12pm",
    title: "Hack Begins",
    description: "Start building your innovative solutions!"
  },
  {
    date: "Sept 20, 6pm",
    title: "1st Pitch",
    description: "Present your initial ideas and progress to the mentors."
  },
  {
    date: "Sept 21, 12pm",
    title: "Hack Ends",
    description: "Coding ends. Prepare your final presentations."
  },
  {
    date: "Sept 21, 2pm",
    title: "Final Pitch",
    description: "Showcase your finished projects to the judges."
  },
  {
    date: "Sept 21, 4-5pm",
    title: "Closing Ceremony & Results Announcement",
    description: "Celebrate the winners and wrap up the event."
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
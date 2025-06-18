'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => (
  <motion.div 
    className="overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <button
      onClick={onToggle}
      className="w-full px-6 py-5 flex items-center justify-between text-left bg-[#0A0A0A] hover:bg-[#111111] transition-colors duration-300 rounded-lg group"
    >
      <span className="font-mono text-base sm:text-lg uppercase tracking-wider text-white/90 group-hover:text-white">
        {question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-8 h-8 flex items-center justify-center text-white/60 group-hover:text-white"
      >
        <span className="text-2xl font-light">+</span>
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 py-4 text-white/70 text-base sm:text-lg bg-[#0A0A0A]/50 rounded-b-lg">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const faqData = [
  {
    question: "Who can participate in Pinnacle 1st Edition?",
    answer: "Anyone passionate about coding can participate! Whether you're a beginner or an experienced developer, this event offers a great opportunity to learn, collaborate, and showcase your skills. We welcome developers, designers, and tech enthusiasts who are ready to collaborate and build amazing projects. 🚀👩‍💻"
  },
  {
    question: "How does the selection process work?",
    answer: "The selection process is based on your application and profile. We look for passionate individuals who can contribute to the the incite crew and demonstrate their commitment to technology and innovation."
  },
  {
    question: "What is the registration fee?",
    answer: "Registration to Pinnacle 1st Edition is completely free of cost! 🎉"
  },
  {
    question: "What's the team size?",
    answer: "Team size can be 1-4 members. You can participate either as a team or individually. 👥"
  },
  {
    question: "What if I don't have a team?",
    answer: "No worries! You can participate solo or we can help you find team members during the event. We'll have team formation activities to help you connect with other participants. 🤝"
  },
  {
    question: "Is this an offline event?",
    answer: "Yes, this is an offline event only. Virtual participation is not possible. The event will be held in Coimbatore. 🏢"
  },
  {
    question: "Is accommodation and food provided?",
    answer: "Yes! Both accommodation and food will be provided for all participants throughout the event. We'll ensure you have a comfortable resting area as well. 🏠🍽️"
  },
  // {
  //   question: "Once I am accepted, what do I need to bring?",
  //   answer: "Please bring your college ID card, laptop, phone, charger, and any other personal items you might need. 💻"
  // },
  {
    question: "Will there be mentorship available?",
    answer: "Yes! We'll have experienced mentors from the industry to guide you throughout the event. They'll help you with technical challenges and provide valuable insights. 👨‍🏫"
  },
  // {
  //   question: "What kind of projects can we build?",
  //   answer: "You can work on projects across various AI tracks including Generative AI & Creativity, AI for Edtech, AI for Productivity & Business Tools, AI for Medtech, AI in Fintech, AI for Content Moderation, AI in Language & Communication, AI in Cybersecurity, AI for Code & Developer Tools, AI in Customer Experience, AI in Agritech, and AI in Healthcare. Check out our Tracks section for more details! 💡"
  // },
  // {
  //   question: "How can I stay updated?",
  //   answer: "Follow our social media channels and regularly check your email for announcements. We'll keep you posted about all important updates and schedule changes. 📱"
  // },
  {
    question: "Is travel reimbursement provided?",
    answer: "No, travel reimbursement is not provided. Participants will need to arrange and cover their own travel expenses. 🚗"
  },
  {
    question: "Have more questions?",
    answer: "Feel free to reach out to us at incitecrew@gmail.com for any other queries! 📧"
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8">      
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
} 
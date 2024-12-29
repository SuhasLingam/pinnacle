import { motion } from 'framer-motion';

export const ApplyButton = () => (
  <motion.button 
    className="bg-transparent border-2 border-black px-12 py-3 rounded-full
               text-black font-medium relative
               hover:bg-white/10 transition-all transform hover:scale-105 
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    APPLY NOW
  </motion.button>
); 
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ChatBubble() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.button
        className="bg-gradient-to-br from-[#8D6E63] to-[#A0826D] text-white rounded-full p-4 shadow-2xl flex items-center gap-3 pr-6"
        whileHover={{
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(141, 110, 99, 0.4)',
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <MessageCircle size={24} />
        </motion.div>
        <span className="font-semibold">Ask AppDost AI 💬</span>
      </motion.button>

      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-[#FFD700] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
}

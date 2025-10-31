import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 bg-[#FAF7F2]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-2xl bg-gradient-to-br from-[#8D6E63] to-[#A0826D] overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-64 h-64 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                  <Users size={100} className="text-white/80" />
                </div>
              </motion.div>

              <motion.div
                className="absolute top-10 right-10 w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Award className="text-[#5D4037]" size={36} />
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Target className="text-white" size={32} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-[#FFD700] font-semibold mb-2 text-lg"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              About AppDost
            </motion.h3>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Empowering Businesses Through Technology
            </motion.h2>

            <motion.p
              className="text-lg text-[#8D6E63] mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              At AppDost, we believe in creating digital solutions that not only meet
              technical requirements but also inspire and delight users. Our team of
              passionate developers, designers, and strategists work together to bring
              your vision to life.
            </motion.p>

            <motion.p
              className="text-lg text-[#8D6E63] mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              With years of experience in the industry, we've helped countless businesses
              transform their ideas into successful digital products. From startups to
              enterprises, we deliver excellence at every scale.
            </motion.p>

            <motion.div
              className="grid grid-cols-3 gap-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              {[
                { number: '200+', label: 'Projects' },
                { number: '50+', label: 'Clients' },
                { number: '10+', label: 'Years' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold text-[#FFD700] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[#8D6E63]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

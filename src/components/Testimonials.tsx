import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content:
        'AppDost transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DesignHub',
      content:
        'Working with AppDost was a game-changer for our business. They delivered a stunning product that exceeded all our expectations.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO, InnovateCo',
      content:
        'The team at AppDost is incredibly talented and professional. They brought our complex ideas to life with elegance and precision.',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'Product Manager, NextGen',
      content:
        'Outstanding work! AppDost not only met our deadlines but also provided innovative solutions we hadn\'t even considered.',
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#8D6E63] max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 15px 35px rgba(141, 110, 99, 0.15)',
              }}
              className="bg-[#FAF7F2] rounded-2xl p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                          }
                        : {}
                    }
                    transition={{
                      delay: 0.5 + i * 0.1,
                      duration: 0.3,
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, -5, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <Star className="text-[#FFD700] fill-[#FFD700]" size={24} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              <p className="text-[#5D4037] text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8D6E63] to-[#A0826D] flex items-center justify-center text-white font-bold text-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.name.charAt(0)}
                </motion.div>

                <div>
                  <div className="font-bold text-[#5D4037]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#8D6E63]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

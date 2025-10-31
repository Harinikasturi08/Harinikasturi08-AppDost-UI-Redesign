import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, Globe, Palette, Cloud, Wrench, Lightbulb } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that put users first and drive engagement.',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your applications.',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
    },
    {
      icon: Lightbulb,
      title: 'Digital Consulting',
      description: 'Strategic guidance to help you navigate the digital landscape and achieve your goals.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5D4037] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#8D6E63] max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(141, 110, 99, 0.15)',
              }}
              className="bg-[#FAF7F2] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-[#8D6E63] to-[#A0826D] rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>

              <h3 className="text-xl font-bold text-[#5D4037] mb-3">
                {service.title}
              </h3>

              <p className="text-[#8D6E63] leading-relaxed">
                {service.description}
              </p>

              <motion.div
                className="mt-4 flex items-center text-[#FFD700] font-semibold"
                whileHover={{ x: 5 }}
              >
                Learn More →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 flex justify-center gap-8 flex-wrap">
          {[Smartphone, Globe, Palette, Cloud].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#8D6E63]/10 flex items-center justify-center"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                delay: index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon className="text-[#8D6E63]" size={36} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

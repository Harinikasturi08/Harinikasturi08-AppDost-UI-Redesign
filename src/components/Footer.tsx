import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    ['About', 'Services', 'Careers', 'Blog'],
    ['Privacy Policy', 'Terms of Service', 'Contact', 'Support'],
  ];

  const socialIcons = [
    { Icon: Github, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Mail, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-[#8D6E63] to-[#6D5246] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <motion.h3
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-[#FFD700] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              AppDost 2.0
            </motion.h3>
            <p className="text-white/80 leading-relaxed">
              Building digital experiences that inspire and transform businesses.
            </p>
          </div>

          {footerLinks.map((linkGroup, groupIndex) => (
            <div key={groupIndex}>
              <h4 className="font-bold text-lg mb-4 text-[#FFD700]">
                {groupIndex === 0 ? 'Company' : 'Resources'}
              </h4>
              <ul className="space-y-2">
                {linkGroup.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/70 text-sm">
            © 2025 AppDost. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#FFD700]/30 transition-colors"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: 'rgba(255, 215, 0, 0.3)',
                }}
                transition={{ duration: 0.4 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

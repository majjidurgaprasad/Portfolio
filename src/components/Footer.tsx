import React from 'react'; import { motion } from 'framer-motion'; import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/DURGA-PRASAD-MAJJJI", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/majji-durga-prasad?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVThulnx4SSiMrL%2BtBAiOmA%3D%3D", label: "LinkedIn" },
    { icon: FiMail, href: "#contact", label: "Email" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">Majji Durga Prasad</h3>
            <p className="text-gray-400 leading-relaxed mb-6">Full Stack Developer | AI & Data Science Enthusiast. Crafting modern, responsive, and meaningful digital experiences.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} className="p-2 bg-slate-800/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300" aria-label={social.label}>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.button key={link.name} onClick={() => scrollToSection(link.href)} whileHover={{ x: 5 }} className="block text-gray-400 hover:text-white transition-colors duration-200">
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400"><span className="text-white font-medium">Email:</span><br />majjidurgaprasad@gmail.com</p>
              <p className="text-gray-400"><span className="text-white font-medium">Phone:</span><br />+91 6305015997</p>
              <p className="text-gray-400"><span className="text-white font-medium">Location:</span><br />Andhra Pradesh, India</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="fixed bottom-0 left-0 w-full py-3 border-t border-slate-800 text-center z-40 bg-transparent"
        >
          <p className="mb-0 text-gray-400 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <FiHeart className="text-red-400" />
            </motion.span>
            Majji Durga Prasad © {new Date().getFullYear()}. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;

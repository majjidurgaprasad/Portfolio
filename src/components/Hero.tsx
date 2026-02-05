
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-6xl mb-4"
          >
          </motion.div */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Majji Durga Prasad
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          MERN Stack Developer & UI/UX Designer
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
I build modern web applications using the MERN stack — MongoDB, Express.js, React, and Node.js. I love combining solid functionality with clean, beautiful design to create smooth and engaging digital experiences.          </p>

        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get In Touch
          </motion.button>

          <a href="/src/assets/MY_RESUME.pdf" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <FiDownload />
              Download CV
            </motion.button>
          </a>

        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: FiGithub, href: "https://github.com/DURGA-PRASAD-MAJJJI", label: "GitHub" },
            { icon: FiLinkedin, href: "https://www.linkedin.com/in/majji-durga-prasad?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcXPacE0CRXmyZZ1MhTGm8Q%3D%3D", label: "LinkedIn" },
            { icon: FiMail, href: "mailto:durgaprasadmajji65@gmail.com", label: "Email" }
          ].map((social) => (
            <motion.a
              key={social.label}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              className="p-3 bg-slate-800/50 rounded-full text-gray-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

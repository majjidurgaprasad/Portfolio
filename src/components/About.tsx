import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode, FiLayers, FiZap, FiCpu, FiDatabase, FiSmartphone,
  FiBookOpen, FiAward, FiBriefcase, FiUser
} from 'react-icons/fi';
import profileImg from '../assets/passport pic 2.jpg';

const About = () => {
  const services = [
    { icon: FiCode, title: "Full Stack Development", description: "Building scalable web applications with modern technologies like React, Node.js, and cloud platforms.", color: "from-blue-400 to-blue-600" },
    { icon: FiCpu, title: "API Development", description: "Designing robust RESTful and GraphQL APIs with proper documentation and security.", color: "from-green-400 to-green-600" },
    { icon: FiDatabase, title: "Database Architecture", description: "Structuring efficient database schemas for both SQL and NoSQL solutions.", color: "from-red-400 to-red-600" },
    { icon: FiSmartphone, title: "Responsive Design", description: "Ensuring seamless experiences across all device sizes and platforms.", color: "from-indigo-400 to-indigo-600" },
    { icon: FiLayers, title: "UI/UX Design", description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.", color: "from-purple-400 to-purple-600" },
    { icon: FiZap, title: "Performance Optimization", description: "Optimizing applications for speed, accessibility, and search engine performance.", color: "from-yellow-400 to-yellow-600" }
  ];

  const education = [
    {
      degree: "B.Tech in CSE (AI & DS)",
      institution: "Vignan's Institute of Information Technology, Visakhapatnam",
      period: "2023 – 2026",
      details: "CGPA: 8.22",
      icon: FiAward
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Godavari Institute of Engineering & Technology, Rajahmundry",
      period: "2020 – 2023",
      details: "76.77%",
      icon: FiBookOpen
    },
        {
      degree: "10th In SSC",
      institution: "Z.P. High School,Hukumpeta",
      period: "2019 – 2020",
      details:"Grand : 9.3",
      icon: FiBookOpen
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ x: [0, 100, 0], y: [0, 50, 0] }} transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
        <motion.div animate={{ x: [0, -100, 0], y: [0, -50, 0] }} transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 transform origin-center" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Let me introduce myself and my expertise in the digital world
          </p>
        </motion.div>

        {/* Profile + About */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          {/* Profile Image */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <motion.div animate={{ rotate: 360, backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, backgroundPosition: { duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' } }} className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl shadow-2xl" style={{ backgroundSize: '200% 200%' }} />
              <div className="absolute inset-2 flex items-center justify-center">
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-slate-700/50">
                  <img src={profileImg} alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 pointer-events-none" />
                </div>
              </div>
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }} className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-blue-400/10 blur-md" />
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 1 }} className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-400/10 blur-md" />
            </div>
          </motion.div>

          {/* About Content */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="lg:col-span-2 space-y-8"
>
  {/* Introduction */}
  <div className="bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300">
    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
      <FiUser className="text-blue-400" /> Who Am I?
    </h3>
    <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
      <p>
        I'm a full stack developer with a strong interest in artificial intelligence, currently pursuing a B.Tech in Computer Science with a focus on AI and Data Science.
      </p>
      <p>
        With a solid background from my diploma studies, I enjoy building scalable, user-friendly applications using technologies like React, Node.js, and MongoDB.
      </p>
      <p>
        I've taken part in hackathons and internships that gave me real-world experience and helped me grow both technically and creatively.
      </p>
    </div>
  </div>
</motion.div>

        </div>

        {/* Education Section Redesigned */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Education</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 sm:p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10" />
                <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                  <edu.icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-br from-blue-400 to-purple-600 transition-all duration-300">
                  {edu.degree}
                </h4>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400 font-medium px-2 py-1 bg-blue-500/10 rounded-full">{edu.period}</span>
                  {edu.details && <span className="text-gray-500">{edu.details}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Offer</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 sm:p-8 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color}/20 group-hover:${service.color}/30 transition-all duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.color.replace('to', 'text')} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h4 className={`text-xl font-semibold text-white mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-br ${service.color} transition-all duration-300`}>
                  {service.title}
                </h4>
                <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

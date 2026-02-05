import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFilter } from "react-icons/fi";
import medication from '../assets/medication.jpg'
import sculpt from '../assets/sculpt.jpg'
import event_buddy from '../assets/events_buddy.jpg'
import dorm_mate from '../assets/dorm_mate.jpg'

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    { id: 1, title: "Medication", description: "A full-stack MERN app for doctor appointment scheduling, featuring admin and patient dashboards.", image:medication, technologies: ["MongoDB", "Express.js", "React.js", "Node.js"], category: "fullstack", github: "https://github.com/DURGA-PRASAD-MAJJJI/Medication", live: "https://medication-frontend-ms9b.onrender.com/" },
    { id: 2, title: "Sculpt", description: "A LangChain-powered AI video assistant with video summarization, webpage integration, and context-aware Q&A.", image:sculpt, technologies: ["LangChain", "React", "Node.js", "AI APIs"], category: "frontend", github: "https://github.com/DURGA-PRASAD-MAJJJI/Sculpt", live: "https://sculpt-six.vercel.app/" },
    { id: 3, title: "RealTalk", description: "A real-time AI-powered debate platform built with Next.js, enabling users to debate with AI using LangChain, create custom rooms, and interact dynamically.", image:sculpt , technologies: ["Next.js", "LangChain", "Socket.IO", "Tailwind CSS", "OpenAI"], category: "fullstack", github: "https://github.com/DURGA-PRASAD-MAJJJI/RealTalk", live: "" },
    { id: 5, title: "Events Buddy", description: "An event discovery platform using HTML, CSS, JS, and Firebase for real-time event tracking.", image:event_buddy, technologies: ["HTML", "CSS", "JavaScript", "Firebase"], category: "fullstack", github: "https://github.com/DURGA-PRASAD-MAJJJI/Events-Buddy", live: "https://sports-buddy-eab63.web.app/" },
    { id: 4, title: "DormMate", description: "A full-stack MERN hostel management system for managing members, rooms, staff, and appointments with real-time updates.", image:dorm_mate, technologies: ["MongoDB", "Express.js", "React.js", "Node.js"], category: "fullstack", github: "https://github.com/DURGA-PRASAD-MAJJJI/DormMate", live: "#" },
    { id: 7, title: "E-commerce website", description: "A full-stack e-commerce healthcare solution built with MERN stack and integrated with Stripe for secure payments.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"], category: "fullstack", github: "#", live: "#" },
    { id: 8, title: "Task Management App", description: "A real-time collaborative task management tool using React, Firebase, and Material-UI.", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop", technologies: ["React", "Firebase", "Material-UI"], category: "frontend", github: "#", live: "#" },
    { id: 6, title: "WeatherCheck", description: "An interactive weather forecast dashboard built with Vue.js, Chart.js, and OpenWeather API.", image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop", technologies: ["Vue.js", "Chart.js", "OpenWeather API"], category: "frontend", github: "https://github.com/DURGA-PRASAD-MAJJJI/weatherCheck", live: "https://weather-check-ahb3.vercel.app/" },
    { id: 8, title: "REST API Server", description: "A robust REST API backend using Node.js, Express, PostgreSQL, JWT, and rate limiting.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", technologies: ["Node.js", "Express", "PostgreSQL", "JWT"], category: "backend", github: "#", live: "#" },
    { id: 9, title: "Portfolio Website", description: "A responsive and animated personal portfolio built with React, Tailwind CSS, and Framer Motion.", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop", technologies: ["React", "Tailwind CSS", "Framer Motion"], category: "frontend", github: "#", live: "#" },
    { id: 10, title: "Data Analytics Dashboard", description: "A dashboard for data visualization and business intelligence using Django, D3.js, and PostgreSQL.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", technologies: ["Python", "Django", "D3.js", "PostgreSQL"], category: "fullstack", github: "#", live: "#" }
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "fullstack", label: "Full Stack" }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Here are some of my recent projects that showcase my skills and experience</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button key={category.value} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => { setFilter(category.value); setShowAll(false); }} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${filter === category.value ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-slate-700"}`}>
              <FiFilter className="w-4 h-4" />{category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? filteredProjects : filteredProjects.slice(0, 6)).map((project, index) => (
            <motion.div key={`${project.id}-${index}`} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }} className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.github} className="p-3 bg-slate-900/80 rounded-full text-white hover:bg-slate-800 transition-colors" aria-label="View source code"><FiGithub className="w-5 h-5" /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={project.live} className="p-3 bg-slate-900/80 rounded-full text-white hover:bg-slate-800 transition-colors" aria-label="View live demo"><FiExternalLink className="w-5 h-5" /></motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowAll(!showAll)} className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              {showAll ? "Show Less" : "See More"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/azmeraTrade.jpg";
import project2 from "../assets/Netflix.png";
import project3 from "../assets/apple.webp";
import project4 from "../assets/studynest.jpg";
import project5 from "../assets/fitclub.png";
import project6 from "../assets/forHotel.png";
import project7 from "../assets/studynestdashboard.png"
import project8 from "../assets/image.png"
import project9 from "../assets/DashenMerchant.jpg"
import project10 from "../assets/ethipost.jpg"
import project11 from "../assets/choice.jpg"

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 9,
      image: project9,
      title: "Dashen Merchant App",
      type: "app",
      description: "Dashen Merchant App is a mobile application that allows merchants to perform various financial transactions and business operations digitally",
      tags: ["React Native", "Zustand"]
    },
    {
      id: 10,
      image: project10,
      title: "EthioPost Agent App",
      type: "app",
      description: "EthioPost Agent App is a mobile application that allows agents to perform various financial transactions and business operations digitally",
      tags: ["React Native", "Zustand"]
    },

    {
      id: 11,
      image: project11,
      title: "Choice Microfinance App",
      type: "app",
      description: "Choice Microfinance App is a mobile application that supporting digital financial services.",
      tags: ["React Native", "Zustand"]
    },
    {
      id: 1,
      image: project1,
      title: "Azmera Trade",
      type: "app",
      description: "E-commerce mobile application for local trade",
      github: "https://github.com/hailegithubaccount/second-hackton-demo-app.git",
      tags: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 2,
      image: project4,
      title: "Study Nest",
      type: "app",
      description: "Educational platform for students",
      github: "https://github.com/user/project4",
      tags: ["React Native", "MongoDB", "Node.js"]
    },
    {
      id: 4,
      image: project2,
      title: "Netflix",
      type: "web",
      description: "Streaming platform clone with movie database",
      github: "https://github.com/hailegithubaccount/netflix-by-react.git",
      live: "https://netflix-by-react-1he4.vercel.app/",
      tags: ["React", "TMDB API", "Firebase Auth"]
    },
    {
      id: 3,
      image: project3,
      title: "Apple Clone",
      type: "web",
      description: "Apple product showcase website replica",
      github: "https://github.com/hailegithubaccount/Apple.git",
      live: "https://leomain.netlify.app/",
      tags: ["React", "GSAP", "Tailwind CSS"]
    },

    {
      id: 5,
      image: project5,
      title: "Fitclub",
      type: "web",
      description: "Fitness and workout tracking application",
      github: "https://github.com/hailegithubaccount/fitClub-by-react.git",
      live: "https://michaelhailecom.netlify.app/",
      tags: ["React", "Framer Motion", "CSS Modules"]
    },
    {
      id: 6,
      image: project6,
      title: "website template for hotel ",
      type: "web",
      description: "Booking platform for luxury hotels",
      github: "https://github.com/hailegithubaccount/forhotel.git",
      live: "https://forhotelcom.netlify.app/",
      tags: ["React", "Styled Components", "Context API"]
    },
    {
      id: 7,
      image: project7,
      title: "Study Nest Dashboard",
      type: "web",
      description: "the library staff used for the library purpose",
      github: "https://github.com/hailegithubaccount/studnestDashborad",
      live: "https://studnestdashborad.onrender.com",
      tags: ["React", "tailwindcss", "Context API"]
    },
    {
      id: 8,
      image: project8,
      title: "Zumbara",
      type: "app",
      description: "E-commerce mobile application for Electronics selling",
      tags: ["React Native", "Firebase", "zustand"]
    },


    // {
    //   id: 11,
    //   image: project11,
    //   title: "Choice Microfinance App",
    //   type: "app",
    //   description: "Choice Microfinance App is a mobile application that allows users to perform various financial transactions and business operations digitally",
    //   tags: ["React Native", "Zustand"]
    // },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <section className="bg-gradient-to-b from-[#0e1420] to-[#1a2035] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              My Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcase of my best work in web and mobile development
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {["all", "app", "web"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${activeFilter === filter
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative overflow-hidden rounded-xl bg-[#1a2035] border border-gray-800 shadow-xl"
            >

              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.type === "app" && (
                    <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                      Mobile App
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>


                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>


              {hoveredProject === project.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "../assets/azmeraTrade.jpg";
import project2 from "../assets/Netflix.png";
import project3 from "../assets/apple.webp";
import project4 from "../assets/studynest.jpg";
import project5 from "../assets/fitclub.png";
import project6 from "../assets/forHotel.png";
import project7 from "../assets/studynestdashboard.png";
import project8 from "../assets/image.png";
import project9 from "../assets/DashenMerchant.jpg";
import project10 from "../assets/ethipost.jpg";
import project11 from "../assets/choice.jpg";

const projects = [
  {
    id: 9, image: project9, title: "Dashen Merchant App", type: "app",
    description: "Mobile app for merchants to perform financial transactions and business operations digitally",
    tags: ["React Native", "Zustand"]
  },
  {
    id: 10, image: project10, title: "EthioPost Agent App", type: "app",
    description: "Mobile app for agents to perform financial transactions and business operations digitally",
    tags: ["React Native", "Zustand"]
  },
  {
    id: 11, image: project11, title: "Choice Microfinance App", type: "app",
    description: "Mobile application supporting digital financial services",
    tags: ["React Native", "Zustand"]
  },
  {
    id: 1, image: project1, title: "Azmera Trade", type: "app",
    description: "E-commerce mobile application for local trade",
    github: "https://github.com/hailegithubaccount/second-hackton-demo-app.git",
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 2, image: project4, title: "Study Nest", type: "app",
    description: "Educational platform for students",
    github: "https://github.com/user/project4",
    tags: ["React Native", "MongoDB", "Node.js"]
  },
  {
    id: 4, image: project2, title: "Netflix Clone", type: "web",
    description: "Streaming platform clone with movie database",
    github: "https://github.com/hailegithubaccount/netflix-by-react.git",
    live: "https://netflix-by-react-1he4.vercel.app/",
    tags: ["React", "TMDB API", "Firebase Auth"]
  },
  {
    id: 3, image: project3, title: "Apple Clone", type: "web",
    description: "Apple product showcase website replica",
    github: "https://github.com/hailegithubaccount/Apple.git",
    live: "https://leomain.netlify.app/",
    tags: ["React", "GSAP", "Tailwind CSS"]
  },
  {
    id: 5, image: project5, title: "Fitclub", type: "web",
    description: "Fitness and workout tracking application",
    github: "https://github.com/hailegithubaccount/fitClub-by-react.git",
    live: "https://michaelhailecom.netlify.app/",
    tags: ["React", "Framer Motion", "CSS Modules"]
  },
  {
    id: 6, image: project6, title: "Hotel Website Template", type: "web",
    description: "Booking platform for luxury hotels",
    github: "https://github.com/hailegithubaccount/forhotel.git",
    live: "https://forhotelcom.netlify.app/",
    tags: ["React", "Styled Components", "Context API"]
  },
  {
    id: 7, image: project7, title: "Study Nest Dashboard", type: "web",
    description: "Dashboard used by library staff for managing resources",
    github: "https://github.com/hailegithubaccount/studnestDashborad",
    live: "https://studnestdashborad.onrender.com",
    tags: ["React", "Tailwind CSS", "Context API"]
  },
  {
    id: 8, image: project8, title: "Zumbara", type: "app",
    description: "E-commerce mobile application for electronics selling",
    tags: ["React Native", "Firebase", "Zustand"]
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter(p => p.type === filter);

  return (
    <section className="bg-gray-900 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">My Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcase of my best work in web and mobile development
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["all", "app", "web"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full capitalize transition-all ${filter === f ? "bg-cyan-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {f === "all" ? "All Projects" : f === "app" ? "Mobile Apps" : "Web Apps"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl bg-gray-800 border border-gray-700 overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  {project.type === "app" && (
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                      Mobile App
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-white transition-colors">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors">
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
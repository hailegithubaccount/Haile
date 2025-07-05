import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaReact, FaNodeJs, FaMobileAlt, FaCode, FaServer } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";


// Import your profile image (update path as needed)
import profileImage from '../assets/one.png';

function Banner() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  // Skills data with icons and colors
  const skills = [
    { icon: <FaReact className="text-3xl" />, name: "React", color: "text-blue-400", bg: "bg-blue-400/10" },
    { icon: <SiTypescript className="text-3xl" />, name: "TypeScript", color: "text-blue-600", bg: "bg-blue-600/10" },
    { icon: <FaNodeJs className="text-3xl" />, name: "Node.js", color: "text-green-500", bg: "bg-green-500/10" },
    { icon: <FaMobileAlt className="text-3xl" />, name: "React Native", color: "text-orange-400", bg: "bg-orange-400/10" },
    { icon: <SiVite className="text-3xl" />, name: "Vite", color: "text-yellow-400", bg: "bg-yellow-400/10" },
    { icon: <FaServer className="text-3xl" />, name: "Express", color: "text-green-400", bg: "bg-green-400/10" }
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Haile.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 px-6 md:px-12">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-orange-500 mix-blend-overlay"></div>
      </div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block">Hello! I'm</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
                    <ReactTyped
                      strings={["Haile Michael Eshetu", "React Developer", "React Native Expert"]}
                      typeSpeed={50}
                      backSpeed={30}
                      loop
                    />
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 mt-4">
                  Web & Mobile App Builder
                </h2>
              </div>
              
              <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
                I build fast, modern web and mobile apps with React, Vite, and React Native — combining clean
                 architecture with responsive design to create smooth and engaging user experiences.
              </p>
            </motion.div>

            {/* Social Links */}
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4 }}
  className="flex gap-6"
>
  <a href="https://www.facebook.com/profile.php?id=100072563070175" target="_blank" rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">
    <FontAwesomeIcon icon={faFacebook} size="lg" />
  </a>
  <a href="https://www.instagram.com/haile_adey?igsh=MXBkMHNxcjZ5ZWczMQ==" target="_blank" rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">
    <FontAwesomeIcon icon={faInstagram} size="lg" />
  </a>
  <a href="https://www.linkedin.com/in/hailemichael-eshetu-6920b2372/" target="_blank" rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
  </a>
  <a href="https://github.com/hailegithubaccount" target="_blank" rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">
    <FontAwesomeIcon icon={faGithub} size="lg" />
  </a>
  <a href="https://t.me/Haile6" target="_blank" rel="noopener noreferrer"
    className="hover:text-orange-500 transition-colors transform hover:-translate-y-1">
    <FontAwesomeIcon icon={faTelegram} size="lg" />
  </a>
</motion.div>


            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faDownload} />
                Download CV
              </motion.button>
           
            </motion.div>
          </div>

          {/* Right Column - Profile Image and Skills */}
          <div className="flex-1 flex flex-col items-center w-full">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-10"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl group">
                <img 
                  src={profileImage} 
                  alt="Haile Michael Eshetu"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_30px_15px_rgba(249,115,22,0.3)] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-orange-500 opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-purple-500 opacity-20 animate-pulse delay-300"></div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-md"
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                    className={`p-4 rounded-xl ${skill.bg} backdrop-blur-sm border border-gray-700 shadow-md transition-all duration-300 ${
                      activeSkill === index ? 'ring-2 ring-orange-500 scale-105' : ''
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`mb-2 ${skill.color}`}>{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
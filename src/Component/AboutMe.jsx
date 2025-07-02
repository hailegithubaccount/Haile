import { motion } from 'framer-motion';
import { FaReact, FaMobileAlt, FaCode, FaGraduationCap } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiExpo } from 'react-icons/si';

function AboutSection() {
  return (
    <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] text-[#ccd6f6] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* About Me - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#64ffda]">
            About Me
          </h1>
          
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center">
              <FaCode className="text-2xl text-[#64ffda]" />
            </div>
            <p className="text-xl md:text-2xl">
              Passionate <span className="text-[#64ffda] font-medium">Front-End Developer</span> specializing in React & React Native
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#64ffda]/10 flex items-center justify-center">
              <FaGraduationCap className="text-2xl text-[#64ffda]" />
            </div>
            <p className="text-lg md:text-xl">
              Recent <span className="text-[#64ffda] font-medium">Computer Science</span> graduate with strong interest in mobile & web development
            </p>
          </div>
        </motion.div>

        {/* What I Offer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#ccd6f6] flex items-center gap-3">
            <span className="text-[#64ffda]">▹</span> What I Build
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#112240] p-6 rounded-lg border border-[#1e2a47] hover:border-[#64ffda]/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <FaReact className="text-3xl text-[#61dafb]" />
                <h3 className="text-xl font-bold">Clean Interfaces</h3>
              </div>
              <p className="text-[#8892b0]">
                I design and build responsive, user-friendly interfaces with modern React practices
              </p>
            </div>
            
            <div className="bg-[#112240] p-6 rounded-lg border border-[#1e2a47] hover:border-[#64ffda]/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <FaMobileAlt className="text-3xl text-[#64ffda]" />
                <h3 className="text-xl font-bold">Mobile Apps</h3>
              </div>
              <p className="text-[#8892b0]">
                React Native development for cross-platform mobile applications
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {[
              { icon: <SiTailwindcss className="text-2xl" />, name: "Tailwind CSS" },
              { icon: <SiVite className="text-2xl" />, name: "Vite" },
              { icon: <SiExpo className="text-2xl" />, name: "Expo" },
              { name: "Node.js" },
              { name: "MongoDB" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="px-4 py-2 bg-[#112240] rounded-full flex items-center gap-2 border border-[#1e2a47]"
              >
                {tech.icon && <span className="text-[#64ffda]">{tech.icon}</span>}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
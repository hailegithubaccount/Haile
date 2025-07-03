import { useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiRedis, SiFirebase, SiDocker, SiKubernetes } from 'react-icons/si';
import { motion } from "framer-motion";

function Skill() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <FaReact className="text-3xl text-blue-400" />,
      items: [
        { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
        { name: "React Native", icon: <FaReact className="text-2xl text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-gray-800" /> }
      ]
    },
    backend: {
      title: "Backend Technologies",
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-2xl text-gray-400" /> },
        { name: "NestJS", icon: <FaServer className="text-2xl text-red-500" /> }
      ]
    },
    database: {
      title: "Database & Infrastructure",
      icon: <FaDatabase className="text-3xl text-blue-500" />,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-700" /> },
        { name: "Redis", icon: <SiRedis className="text-2xl text-red-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-2xl text-yellow-500" /> }
      ]
    },
    devops: {
      title: "Cloud & DevOps",
      icon: <FaAws className="text-3xl text-yellow-500" />,
      items: [
        { name: "Docker", icon: <SiDocker className="text-2xl text-blue-400" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-2xl text-blue-600" /> },
        { name: "AWS", icon: <FaAws className="text-2xl text-yellow-500" /> }
      ]
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 px-6 md:px-12">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-600 to-orange-500 mix-blend-overlay"></div>
      </div>
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Professional Skill Set
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            A comprehensive overview of the technologies I've mastered throughout my professional journey.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Category Tabs - Vertical sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-64 flex flex-col gap-4"
          >
            {Object.entries(skills).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${activeTab === key ? 'bg-[#1a2035] border border-blue-500/30 shadow-lg' : 'bg-[#1a2035]/70 hover:bg-[#1a2035] shadow-md'}`}
              >
                <span className="flex-shrink-0">{category.icon}</span>
                <span className="text-left font-medium">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid - Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 bg-[#1a2035] rounded-lg p-6 border border-gray-700 shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-blue-400">▹</span> {skills[activeTab].title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills[activeTab].items.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-4 bg-[#0e1420] rounded-lg border border-gray-800 hover:border-blue-400/30 transition-all shadow-md"
                >
                  <div className="flex-shrink-0">{skill.icon}</div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
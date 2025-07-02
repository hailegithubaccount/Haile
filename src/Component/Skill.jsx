import { useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiRedis, SiFirebase, SiDocker, SiKubernetes } from 'react-icons/si';
import { motion } from "framer-motion";

function Skill() {
  const [activeTab, setActiveTab] = useState('frontend');

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: <FaReact className="text-3xl" />,
      items: [
        { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
        { name: "React Native", icon: <FaReact className="text-2xl text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-gray-800" /> }
      ]
    },
    backend: {
      title: "Backend Technologies",
      icon: <FaNodeJs className="text-3xl" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-2xl text-gray-400" /> },
        { name: "NestJS", icon: <FaServer className="text-2xl text-red-500" /> }
      ]
    },
    database: {
      title: "Database & Infrastructure",
      icon: <FaDatabase className="text-3xl" />,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-700" /> },
        { name: "Redis", icon: <SiRedis className="text-2xl text-red-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-2xl text-yellow-500" /> }
      ]
    },
    devops: {
      title: "Cloud & DevOps",
      icon: <FaAws className="text-3xl" />,
      items: [
        { name: "Docker", icon: <SiDocker className="text-2xl text-blue-400" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-2xl text-blue-600" /> },
        { name: "AWS", icon: <FaAws className="text-2xl text-yellow-500" /> }
      ]
    }
  };

  return (
    <div className="bg-[#0a192f] text-[#ccd6f6] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-[#64ffda]">Professional Skill Set</h1>
        <p className="text-lg mb-12 max-w-2xl">
          A comprehensive overview of the technologies I've mastered throughout my professional journey.
        </p>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(skills).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${activeTab === key ? 'bg-[#112240] border border-[#64ffda]/30' : 'bg-[#112240]/50 hover:bg-[#112240]/80'}`}
            >
              <span className="mb-2">{category.icon}</span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="bg-[#112240] rounded-lg p-6 border border-[#1e2a47]">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-[#64ffda]">▹</span> {skills[activeTab].title}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills[activeTab].items.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4 bg-[#0a192f] rounded-lg border border-[#1e2a47] hover:border-[#64ffda]/30 transition-all"
              >
                <div className="mb-2">{skill.icon}</div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
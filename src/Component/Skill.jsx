import { useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaAws, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiNetlify, SiMysql, SiMongodb, SiFlutter } from 'react-icons/si';
import { MdOutlineMobileFriendly } from "react-icons/md";

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: <FaReact className="text-3xl text-blue-400" />,
    items: [
      { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
      { name: "React Native", icon: <FaReact className="text-2xl text-blue-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-gray-300" /> },
      { name: "Flutter", icon: <SiFlutter className="text-2xl text-cyan-500" /> },
    ]
  },
  backend: {
    title: "Backend Technologies",
    icon: <FaNodeJs className="text-3xl text-green-500" />,
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-2xl text-gray-400" /> },
      { name: "NestJS", icon: <FaServer className="text-2xl text-red-500" /> },
    ]
  },
  database: {
    title: "Database & Infrastructure",
    icon: <FaDatabase className="text-3xl text-blue-500" />,
    items: [
      { name: "MySQL", icon: <SiMysql className="text-2xl text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
    ]
  },
  devops: {
    title: "Cloud & DevOps",
    icon: <FaAws className="text-3xl text-yellow-500" />,
    items: [
      { name: "Git", icon: <FaGitAlt className="text-2xl text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-2xl text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-2xl text-green-500" /> },
      { name: "EAS", icon: <MdOutlineMobileFriendly className="text-2xl text-blue-500" /> },
    ]
  }
};

function Skill() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className="bg-gray-900 text-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2 text-cyan-400">Professional Skill Set</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            A comprehensive overview of the technologies I've mastered throughout my professional journey.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 flex flex-col gap-4">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all text-left ${activeTab === key
                    ? 'bg-gray-800 border border-cyan-500/30 shadow-lg'
                    : 'bg-gray-800/50 hover:bg-gray-800'
                  }`}
              >
                <span className="flex-shrink-0">{category.icon}</span>
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-cyan-400">▹</span> {skillCategories[activeTab].title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories[activeTab].items.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex-shrink-0">{skill.icon}</div>
                  <span className="font-medium text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skill;
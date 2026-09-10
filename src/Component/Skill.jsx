import { useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaGithub, FaMobileAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiExpress, SiNetlify, SiMysql, SiMongodb, SiFlutter, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { MdOutlineMobileFriendly } from "react-icons/md";

const skillDescriptions = {
  "React Native": "Haile builds production iOS & Android mobile apps with React Native, state management, and offline-first data caching.",
  "Flutter": "Used by Haile to engineer cross-platform mobile apps like Youth for Health and Adoye with clean Provider state patterns.",
  "Expo": "Enables rapid prototyping, cross-platform mobile development, and seamless testing on physical devices.",
  "EAS Build & Deploy": "Haile configures automated Expo Application Services (EAS) build pipelines and over-the-air (OTA) update deployments.",
  "Firebase Mobile SDK": "Integrated by Haile for Firestore real-time databases, push notifications, and biometric user authentication.",
  "React": "Haile builds high-performance web platforms, dynamic administrative dashboards, and component-based user interfaces.",
  "TypeScript": "Enforces strict static typing across mobile apps and backend APIs, preventing runtime errors and improving code maintainability.",
  "Next.js": "Used by Haile to build server-side rendered (SSR) web applications with optimized SEO and fast page load speeds.",
  "Tailwind CSS": "Haile crafts modern, responsive, dark-mode web user interfaces with clean utility-first CSS styling.",
  "Node.js": "Powers Haile's backend server microservices, REST APIs, and real-time asynchronous data pipelines.",
  "NestJS": "Scalable, enterprise Node.js framework used by Haile to build structured, modular backend applications.",
  "Express": "Lightweight web framework utilized by Haile for fast API endpoints and middleware request routing.",
  "RESTful APIs": "Haile designs clean RESTful API contracts with JWT authentication and secure request validation.",
  "MySQL": "Relational database used for structured data management, relational table joins, and transaction security.",
  "MongoDB": "NoSQL document database integrated by Haile for flexible schemas, digital library resources, and fast document queries.",
  "Firebase": "Used for real-time cloud data sync, user authentication, storage, and serverless backends.",
  "Git & GitHub": "Haile utilizes Git version control, branch management, pull requests, and collaborative code repositories.",
  "Netlify": "Deployment platform utilized by Haile for automated continuous integration and static site hosting."
};

const skillCategories = {
  mobile: {
    title: "Mobile App Development",
    icon: <FaMobileAlt className="text-2xl text-zinc-300" />,
    items: [
      { name: "React Native", icon: <FaReact className="text-xl text-zinc-300" /> },
      { name: "Flutter", icon: <SiFlutter className="text-xl text-zinc-300" /> },
      { name: "Expo", icon: <MdOutlineMobileFriendly className="text-xl text-zinc-300" /> },
      { name: "EAS Build & Deploy", icon: <MdOutlineMobileFriendly className="text-xl text-zinc-300" /> },
      { name: "Firebase Mobile SDK", icon: <SiFirebase className="text-xl text-zinc-300" /> },
    ]
  },
  frontend: {
    title: "Frontend Development",
    icon: <FaReact className="text-2xl text-zinc-300" />,
    items: [
      { name: "React", icon: <FaReact className="text-xl text-zinc-300" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-xl text-zinc-300" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-xl text-zinc-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-xl text-zinc-300" /> },
    ]
  },
  backend: {
    title: "Backend Technologies",
    icon: <FaNodeJs className="text-2xl text-zinc-300" />,
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-xl text-zinc-300" /> },
      { name: "NestJS", icon: <FaServer className="text-xl text-zinc-300" /> },
      { name: "Express", icon: <SiExpress className="text-xl text-zinc-300" /> },
      { name: "RESTful APIs", icon: <FaServer className="text-xl text-zinc-300" /> },
    ]
  },
  database: {
    title: "Database & DevOps",
    icon: <FaDatabase className="text-2xl text-zinc-300" />,
    items: [
      { name: "MySQL", icon: <SiMysql className="text-xl text-zinc-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-xl text-zinc-300" /> },
      { name: "Firebase", icon: <SiFirebase className="text-xl text-zinc-300" /> },
      { name: "Git & GitHub", icon: <FaGithub className="text-xl text-zinc-300" /> },
      { name: "Netlify", icon: <SiNetlify className="text-xl text-zinc-300" /> },
    ]
  }
};

function Skill({ onRobotInspect }) {
  const [activeTab, setActiveTab] = useState('mobile');

  const handleMouseEnter = (skillName) => {
    if (onRobotInspect) {
      const desc = skillDescriptions[skillName] || `${skillName} technology used by Haile in production.`;
      onRobotInspect(`${skillName}: ${desc}`, skillName);
    }
  };

  const handleMouseLeave = () => {
    if (onRobotInspect) {
      onRobotInspect(null, null);
    }
  };

  return (
    <div className="bg-zinc-950 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">Professional Skills</h1>
          <p className="text-base text-zinc-400 max-w-2xl tracking-tight">
            A comprehensive overview of the technologies and frameworks I use in production.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 flex flex-col gap-3">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 p-3.5 rounded-lg transition-colors text-left ${activeTab === key
                    ? 'bg-zinc-800 text-white border border-zinc-700 shadow-sm font-medium'
                    : 'bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                  }`}
              >
                <span className="flex-shrink-0">{category.icon}</span>
                <span className="text-sm tracking-tight">{category.title}</span>
              </button>
            ))}
          </div>

          <div className="flex-1 bg-zinc-900/90 rounded-xl p-6 md:p-8 border border-zinc-800 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 tracking-tight text-white">
              {skillCategories[activeTab].title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillCategories[activeTab].items.map((skill, i) => (
                <div
                  key={i}
                  onMouseEnter={() => handleMouseEnter(skill.name)}
                  onMouseLeave={handleMouseLeave}
                  className="flex items-center gap-3 p-3.5 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer group"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">{skill.icon}</div>
                  <span className="text-sm font-medium text-zinc-200 tracking-tight group-hover:text-white transition-colors">{skill.name}</span>
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
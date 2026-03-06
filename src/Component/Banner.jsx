import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FaReact, FaNodeJs, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiTypescript, SiVite } from 'react-icons/si';
import profileImage from '../assets/one.png';

const socials = [
  { icon: faFacebook, url: "https://www.facebook.com/profile.php?id=100072563070175" },
  { icon: faInstagram, url: "https://www.instagram.com/haile_adey?igsh=MXBkMHNxcjZ5ZWczMQ==" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/hailemichael-eshetu-6920b2372/" },
  { icon: faGithub, url: "https://github.com/hailegithubaccount" },
  { icon: faTelegram, url: "https://t.me/Haile6" },
];

const techStack = [
  { icon: <FaReact className="text-3xl" />, name: "React", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: <SiTypescript className="text-3xl" />, name: "TypeScript", color: "text-blue-600", bg: "bg-blue-600/10" },
  { icon: <FaNodeJs className="text-3xl" />, name: "Node.js", color: "text-green-500", bg: "bg-green-500/10" },
  { icon: <FaMobileAlt className="text-3xl" />, name: "React Native", color: "text-orange-400", bg: "bg-orange-400/10" },
  { icon: <SiVite className="text-3xl" />, name: "Vite", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: <FaServer className="text-3xl" />, name: "Express", color: "text-green-400", bg: "bg-green-400/10" },
];

function Banner() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Haile.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-900 text-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">

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
                  <span className="text-cyan-400">
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

            <div className="flex gap-6">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors hover:-translate-y-1">
                  <FontAwesomeIcon icon={s.icon} size="lg" />
                </a>
              ))}
            </div>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 rounded-lg font-medium hover:bg-cyan-600 transition-all shadow-lg"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center w-full">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-10">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Haile Michael Eshetu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full max-w-md">
              <h3 className="text-2xl font-bold text-center mb-6 text-cyan-400">
                My Tech Stack
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((skill, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl ${skill.bg} border border-gray-700 shadow-md hover:scale-105 transition-transform`}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`mb-2 ${skill.color}`}>{skill.icon}</div>
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
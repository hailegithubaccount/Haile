import { motion } from "framer-motion";
import { FaReact, FaMobileAlt, FaPaintBrush, FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gradient-to-br from-[#0e1420] to-[#1a2035] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              About Me
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Passionate Front-End Developer specializing in <span className="text-blue-400">React</span> & <span className="text-blue-400">React Native</span>
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Recent Computer Science graduate with strong interest in mobile & web development
          </p>
        </motion.div>

        {/* What I Build Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Clean Interfaces Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a2035] p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                <FaPaintBrush className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Clean Interfaces</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I design pixel-perfect, responsive interfaces using modern React practices. My focus is on creating intuitive user experiences with clean code architecture and smooth animations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">Framer Motion</span>
            </div>
          </motion.div>

          {/* Mobile Apps Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a2035] p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-green-500/10 text-green-400">
                <FaMobileAlt className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">Mobile Apps</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I build high-performance cross-platform mobile applications with React Native. From state management to native modules, I create apps that feel at home on both iOS and Android.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm">Expo</span>
              <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">Firebase</span>
            </div>
          </motion.div>

          {/* Additional Cards (you can add more) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="md:col-span-2 bg-[#1a2035] p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                <FaCode className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">My Approach</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As a recent graduate, I combine academic knowledge with hands-on experience. I'm passionate about learning new technologies and applying them to solve real-world problems through clean, maintainable code.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
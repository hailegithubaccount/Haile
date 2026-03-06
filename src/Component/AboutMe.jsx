import { FaMobileAlt, FaPaintBrush, FaCode } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Passionate Front-End Developer specializing in <span className="text-blue-400">React</span> & <span className="text-blue-400">React Native</span>
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Recent Computer Science graduate with strong interest in mobile & web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all">
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
          </div>

          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all">
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
          </div>

          <div className="md:col-span-2 bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                <FaCode className="text-2xl" />
              </div>
              <h2 className="text-2xl font-bold">My Approach</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As a recent graduate with six months of professional experience, I have worked on real-world projects both full-time and remotely. I contributed to the development of the Dashen Merchant App, gaining practical experience in frontend development and building user-friendly financial service interfaces. During my time at EagleLion System Technology, I also worked on the EthioPost Agent Application and the Choice Microfinance Application, supporting digital financial and agent-based service platforms. In addition, I worked remotely on Zumbara, an electronics sales application, where I contributed to building a full-stack e-commerce solution.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              During my academic studies, I completed a capstone project for students, certified by the Library Directorate of Jimma University. I have also participated in several hackathons, achieving a top ranking in one of three competitions with my team. My approach combines academic knowledge with practical experience, continuous learning, and writing clean, maintainable code to build solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
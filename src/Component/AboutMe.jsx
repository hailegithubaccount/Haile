import { FaMobileAlt, FaLayerGroup, FaCode } from "react-icons/fa";

function About({ onRobotInspect }) {
  const handleMouseEnter = (title, details) => {
    if (onRobotInspect) {
      onRobotInspect(`${title}: ${details}`, title);
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
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto tracking-tight font-medium">
            Full Stack & Mobile Application Developer
          </p>
          <p className="text-base text-zinc-400 mt-2 max-w-2xl mx-auto tracking-tight">
            Computer Science graduate specializing in building scalable web platforms and high-performance mobile applications.
          </p>
        </div> 

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            onMouseEnter={() => handleMouseEnter("Full Stack Web Architecture", "Haile architects and engineers end-to-end web applications combining intuitive React/TypeScript frontend interfaces with Node.js/NestJS APIs and PostgreSQL/MongoDB databases.")}
            onMouseLeave={handleMouseLeave}
            className="bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700/50">
                <FaLayerGroup className="text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Full Stack Web Development</h2>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              I architect and engineer scalable end-to-end web applications, combining intuitive frontend interfaces with high-performance backend systems, secure APIs, and robust database management.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">React</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">Node.js / NestJS</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">SQL & MongoDB</span>
            </div>
          </div>

          <div 
            onMouseEnter={() => handleMouseEnter("Mobile App Engineering", "Haile develops cross-platform iOS & Android mobile apps using React Native and Flutter with native hardware features, biometric security, and offline data caching.")}
            onMouseLeave={handleMouseLeave}
            className="bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700/50">
                <FaMobileAlt className="text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Mobile Application Development</h2>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              I develop responsive, high-performance cross-platform mobile apps for iOS and Android using React Native and Flutter. From robust state management to native hardware integrations, I build smooth user experiences.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">React Native</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">Flutter</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">Expo</span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 border border-zinc-700/60 rounded-md text-xs font-medium">Firebase</span>
            </div>
          </div>

          <div className="md:col-span-2 bg-zinc-900/90 p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700/50">
                <FaCode className="text-xl" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Work Experience & Milestones</h2>
            </div>

            {/* Career Timeline */}
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-zinc-800">
              
              {/* Timeline Item 1 */}
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-zinc-950"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-base font-bold text-white tracking-tight">Full Stack Developer</h3>
                    <span className="text-xs text-zinc-400 font-medium bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700/60 w-fit mt-1 sm:mt-0">Present</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mb-2">Orbit Technology Solution PLC</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Engineering scalable web and mobile software systems. Designing full-stack system architecture, implementing reactive frontend UIs, integrating secure RESTful APIs, and managing database layers.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-zinc-950"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-base font-bold text-white tracking-tight">Mobile & Full Stack Developer</h3>
                    <span className="text-xs text-zinc-400 font-medium bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700/60 w-fit mt-1 sm:mt-0">1 Year</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mb-2">EagleLion System Technology</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Contributed to high-volume production fintech and banking applications including <strong className="text-zinc-200 font-medium">Dashen Super App</strong>, <strong className="text-zinc-200 font-medium">Dashen Merchant App</strong>, <strong className="text-zinc-200 font-medium">EthioPost Agent App</strong>, and <strong className="text-zinc-200 font-medium">Choice Microfinance</strong>.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative flex items-start gap-4 pl-8">
                <span className="absolute left-2 top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-zinc-950"></span>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                    <h3 className="text-base font-bold text-white tracking-tight">B.Sc. in Computer Science</h3>
                    <span className="text-xs text-zinc-400 font-medium bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700/60 w-fit mt-1 sm:mt-0">Graduate</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-300 mb-2">Jimma University</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Graduated with a strong software engineering foundation. Completed a recognized capstone project officially certified by the Library Directorate of Jimma University and achieved top rankings in competitive software hackathons.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
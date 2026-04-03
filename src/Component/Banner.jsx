import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faCommentDots } from '@fortawesome/free-solid-svg-icons';
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
  const [isAwake, setIsAwake] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // SMS App State
  const [openedApp, setOpenedApp] = useState(null);
  const [messages, setMessages] = useState([
    { text: "Hi! I am Haile. Feel free to leave a message.", sender: 'haile', id: 1 }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (openedApp === 'sms') scrollToBottom();
  }, [messages, openedApp]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, sender: 'user', id: Date.now() }]);
    setInputText("");

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I’m currently unavailable to chat. Please reach me by phone at +251 927 831 856. Thank you!",
        sender: 'haile',
        id: Date.now() + 1
      }]);
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Haile.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-900 text-white py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* Text Content (Left side on lg) */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
              className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-gray-900 rounded-lg font-bold hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </button>
          </div>

          {/* Phone Mockup (Right side on lg) */}
          <div className="flex-1 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => { if (!isAwake) setIsAwake(true); }}
              className={`relative w-[280px] md:w-[300px] h-[580px] bg-gray-900 border-[12px] border-gray-800 rounded-[3rem] shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col ring-1 ring-gray-700 transition-transform ${!isAwake ? 'cursor-pointer hover:scale-[1.02]' : ''}`}
            >
              
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-30 pointer-events-none">
                <div className="w-32 h-full bg-gray-800 rounded-b-xl flex justify-center items-end pb-1 shadow-inner">
                  {/* Speaker Grill */}
                  <div className="w-10 h-1 bg-gray-900 rounded-full opacity-50"></div>
                </div>
              </div>

              {!isAwake ? (
                /* Lock Screen */
                <div className="absolute inset-0 bg-gray-950 flex flex-col items-center justify-center z-20 overflow-hidden">
                  {/* Wallpaper */}
                  <img src={profileImage} className="absolute inset-0 w-full h-full object-cover" alt="Lock Screen Wallpaper" />
                  <div className="absolute inset-0 bg-black/40"></div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="relative z-10 flex flex-col items-center mt-[-60px]"
                  >
                    <div className="text-white text-[64px] font-light mb-1 tracking-wider drop-shadow-lg leading-none">{timeString}</div>
                    <div className="text-gray-200 text-sm mb-12 drop-shadow-md font-medium">{dateString}</div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute bottom-8 flex flex-col items-center z-10"
                  >
                    <span className="text-xs text-gray-200 font-semibold tracking-wide drop-shadow-md">Tap to unlock</span>
                    <div className="w-32 h-1.5 bg-white/50 rounded-full mt-3 backdrop-blur-sm shadow-lg"></div>
                  </motion.div>
                </div>
              ) : openedApp === 'sms' ? (
                /* SMS App UI */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full h-full flex flex-col bg-gray-900 absolute inset-0 z-40"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* SMS Header */}
                  <div className="w-full h-16 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 flex items-center px-4 pt-4 shrink-0 shadow-sm z-10">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setOpenedApp(null); }}
                      className="text-cyan-400 text-sm flex items-center font-medium hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      <span className="mr-1 text-2xl leading-none -translate-y-[1px]">‹</span> Home
                    </button>
                    <div className="flex-1 flex justify-center pr-12">
                       <div className="flex flex-col items-center cursor-default">
                         <div className="w-6 h-6 rounded-full bg-gray-700 overflow-hidden mb-[2px]">
                           <img src={profileImage} alt="Haile" className="w-full h-full object-cover" />
                         </div>
                         <span className="text-gray-200 font-semibold text-[10px] leading-none">Haile</span>
                       </div>
                    </div>
                  </div>

                  {/* SMS Chat Area */}
                  <div className="flex-1 w-full overflow-y-auto p-4 space-y-4 bg-gray-900">
                    <div className="text-center text-[10px] text-gray-500 font-medium my-2">Today {timeString}</div>
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-xs shadow-md ${msg.sender === 'user' ? 'bg-cyan-600 text-white rounded-br-sm' : 'bg-gray-700 text-gray-200 rounded-bl-sm border border-gray-600'}`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} className="h-2" />
                  </div>

                  {/* SMS Input Area */}
                  <div className="w-full p-3 bg-gray-800/90 backdrop-blur-md border-t border-gray-700 pb-5 shrink-0">
                    <form onSubmit={handleSendMessage} className="flex relative">
                      <input 
                        type="text" 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Text Message"
                        className="w-full bg-gray-900/80 text-gray-100 rounded-full pl-4 pr-10 py-2.5 text-xs outline-none border border-gray-600 focus:border-cyan-500 transition-colors placeholder-gray-500 shadow-inner"
                      />
                      <button 
                        type="submit" 
                        disabled={!inputText.trim()}
                        className={`absolute right-1.5 top-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer ${inputText.trim() ? 'bg-cyan-500 text-gray-900 shadow-md hover:bg-cyan-400' : 'bg-gray-700 text-gray-500'}`}
                      >
                        <span className="text-[10px] font-bold leading-none transform -translate-y-[1px]">↑</span>
                      </button>
                    </form>
                  </div>
                </motion.div>
              ) : (
                /* Active Screen */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col overflow-hidden bg-gray-900 relative"
                >
                  {/* Home Screen Wallpaper (Blurred Profile Image) */}
                  <img src={profileImage} className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[3px] scale-105" alt="Home Screen Wallpaper" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90"></div>

                  {/* App Grid */}
                  <div className="relative z-20 flex-1 w-full pt-12 px-5 pb-24 flex flex-col">
                    <div className="grid grid-cols-3 gap-y-7 gap-x-4">
                      {techStack.map((skill, i) => (
                        <div key={i} className="flex flex-col items-center justify-start group">
                          {/* App Icon */}
                          <div className={`w-[60px] h-[60px] rounded-2xl ${skill.bg} border border-white/10 flex flex-col items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform cursor-pointer bg-opacity-70 backdrop-blur-md`}>
                            <div className={`text-3xl ${skill.color} drop-shadow-lg`}>{skill.icon}</div>
                          </div>
                          {/* App Label */}
                          <span className="text-[11px] font-semibold text-gray-100 mt-2 text-center leading-tight drop-shadow-md truncate w-full px-1">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phone Bottom Dock */}
                  <div 
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-[60px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-around px-2 shadow-2xl z-30"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    
                    {/* Messages App */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); setOpenedApp('sms'); }}
                      title="Open Messages"
                      className="group flex flex-col items-center justify-center p-1"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-green-400 to-emerald-600 rounded-[10px] flex items-center justify-center text-white shadow-md hover:shadow-green-500/50 group-hover:scale-[1.15] group-hover:-translate-y-2 transition-all duration-300">
                        <FontAwesomeIcon icon={faCommentDots} size="lg" />
                      </div>
                    </button>

                    {/* LinkedIn App */}
                    <a 
                      href="https://www.linkedin.com/in/hailemichael-eshetu-6920b2372/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Connect on LinkedIn"
                      className="group flex flex-col items-center justify-center p-1"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-[10px] flex items-center justify-center text-white shadow-md hover:shadow-blue-500/50 group-hover:scale-[1.15] group-hover:-translate-y-2 transition-all duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </div>
                    </a>

                    {/* GitHub App */}
                    <a 
                      href="https://github.com/hailegithubaccount" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="GitHub Profile"
                      className="group flex flex-col items-center justify-center p-1"
                    >
                      <div className="w-11 h-11 bg-gradient-to-br from-gray-700 to-gray-900 rounded-[10px] flex items-center justify-center text-white shadow-md border border-gray-600 hover:shadow-gray-500/50 group-hover:scale-[1.15] group-hover:-translate-y-2 transition-all duration-300">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </div>
                    </a>

                  </div>
                </motion.div>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import robotBot from "../assets/robotBot.png";

// Canvas Component to remove white background from robot image dynamically
function TransparentRobot({ src, className }) {
  const [transparentSrc, setTransparentSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Make all white / near-white pixels completely transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (r > 220 && g > 220 && b > 220) {
          data[i + 3] = 0; // Alpha = 0 (100% transparent)
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setTransparentSrc(canvas.toDataURL("image/png"));
    };
  }, [src]);

  return (
    <img
      src={transparentSrc}
      alt="Robot Assistant"
      className={className}
    />
  );
}

function RobotAssistant({ customMessage, activeHeader }) {
  const [activeSection, setActiveSection] = useState("home");
  const [typedMessage, setTypedMessage] = useState("");

  // Track active section as user scrolls through the portfolio
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section default resting messages
  const sectionMessages = {
    home: "Welcome to Haile's Portfolio! Scroll down to explore his mobile apps, web platforms, and software engineering skills.",
    about: "Haile is a Full-Stack & Mobile Software Engineer specializing in React Native,React, Node.js, and scalable web platforms.",
    skills: "Hover over any skill card on the left to see how Haile applies that technology in production projects!",
    projects: "Hover over any project card to inspect its deep architecture, features, and tech specifications.",
    contact: "Want to collaborate or hire Haile? Feel free to send a message directly or connect via LinkedIn & GitHub!"
  };

  // Determine what full text to type out
  useEffect(() => {
    let fullText = "";

    if (customMessage) {
      fullText = customMessage;
    } else {
      fullText = sectionMessages[activeSection] || sectionMessages.home;
    }

    setTypedMessage("");
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedMessage(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [customMessage, activeSection]);

  const headerTitle = activeHeader || (
    activeSection === "home" ? "Welcome" :
    activeSection === "about" ? "About Haile" :
    activeSection === "skills" ? "Tech Skills" :
    activeSection === "projects" ? "Project Specs" :
    "Contact Haile"
  );

  return (
    <div className="fixed bottom-6 right-4 sm:right-8 z-50 flex flex-col items-end pointer-events-none max-w-sm sm:max-w-md">
      
      {/* Connected Speech / Message Box */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="pointer-events-auto bg-zinc-900 border border-zinc-700 rounded-2xl p-3.5 sm:p-4 mb-3 shadow-2xl backdrop-blur-md relative text-white"
      >
        {/* Pointer Arrow facing down towards the robot */}
        <div className="absolute -bottom-2 right-8 w-3.5 h-3.5 bg-zinc-900 border-r border-b border-zinc-700 rotate-45"></div>

        {/* Speech Box Header Bar */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCommentDots} />
              {headerTitle}
            </span>
          </div>
          <span className="text-[9px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700 px-1.5 py-0.5 rounded uppercase">
            {activeSection}
          </span>
        </div>

        {/* Dynamic Typed Message Content */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed min-h-[44px]">
          {typedMessage}
          <span className="inline-block w-1.5 h-3 bg-white ml-1 animate-pulse align-middle"></span>
        </p>
      </motion.div>

      {/* Floating Standalone Robot Image */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="pointer-events-auto cursor-pointer"
      >
        <TransparentRobot
          src={robotBot}
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

    </div>
  );
}

export default RobotAssistant;

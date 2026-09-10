import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faRobot, faXmark, faChevronRight, faCode, faServer, faLayerGroup, faCommentDots } from "@fortawesome/free-solid-svg-icons";

import project1 from "../assets/azmeraTrade.jpg";
import project2 from "../assets/Netflix.png";
import project3 from "../assets/apple.webp";
import project4 from "../assets/studynest.jpg";
import project5 from "../assets/fitclub.png";
import project6 from "../assets/forHotel.png";
import project7 from "../assets/studynestdashboard.png";
import project8 from "../assets/image.png";
import project9 from "../assets/DashenMerchant.jpg";
import project10 from "../assets/ethipost.jpg";
import project11 from "../assets/choice.jpg";
import project12 from "../assets/YH.jpg";
import project13 from "../assets/Adoye.jpg";
import project14 from "../assets/YH_Dashbaord.png";
import project15 from "../assets/Adoye_dashboard.png";
import project16 from "../assets/hair.png";   
import project17 from "../assets/cloth.png";
import projectDashenSuperApp from "../assets/Dashen.png";
import projectBirateSchool from "../assets/birateSchool.png";
import projectHIMSApp from "../assets/himsApp.png";
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

const projects = [
  {
    id: 20,
    image: projectHIMSApp,
    title: "HIMS Clinical App (Doctor & Nurse)",
    type: "app",
    badge: "Healthcare",
    description: "Secure clinical workspace mobile application for doctors and nurses to manage hospital workflows, patient records, and care delivery.",
    deepDescription: "Designed for intensive clinical environments, this Hospital Information Management System (HIMS) mobile application empowers doctors and nurses with real-time patient triage, digital chart management, medication administration tracking, and secure shift handoffs. Built with encrypted clinical data sync and offline-first information storage system.",
    features: ["Real-time Patient Triage & Vitals", "Doctor Prescriptions & Lab Requests", "Nurse Medication Timelines", "HIPAA-compliant Data Encryption"],
    architecture: { frontend: "React Native, TypeScript", state: "Zustand & Offline Cache", backend: "Node.js Microservices, PostgreSQL" },
    tags: ["React Native", "TypeScript", "Healthcare", "HIMS"]
  },
  {
    id: 18,
    image: projectDashenSuperApp,
    title: "Dashen Super App",
    type: "app",
    badge: "Production",
    description: "Mobile banking and digital payment super app featuring money transfers, utility payments, and 3-click merchant e-commerce.",
    deepDescription: "Architected for millions of daily active banking users, the Dashen Super App integrates financial technology, core banking APIs, biometric authentication, and multi-currency digital wallets. Supports seamlessly bundled mini-apps for bill payments, airtime top-ups, QR payments, and digital merchant storefronts.",
    features: ["Biometric & Pin Authentication", "Core Banking Instant Transfers", "3-Click Merchant E-Commerce", "Multi-Utility Bill Payments"],
    architecture: { frontend: "React Native, TypeScript", state: "Redux Toolkit & Encrypted Storage", backend: "Enterprise Financial Switch APIs" },
    tags: ["React Native", "TypeScript", "Fintech"]
  },
  {
    id: 9,
    image: project9,
    title: "Dashen Merchant App",
    type: "app",
    badge: "Production",
    description: "Mobile app for merchants to perform financial transactions and business operations digitally.",
    deepDescription: "Tailored business companion mobile platform enabling merchants and retail store operators to generate dynamic payment QR codes, manage daily sales analytics, issue digital receipts, and execute automated settlement routines into business bank accounts.",
    features: ["Dynamic QR Code Payment Generation", "Real-Time Sales & Transaction Ledger", "Store Staff Permission Management", "Instant Bank Settlement"],
    architecture: { frontend: "React Native, TypeScript", state: "Zustand", backend: "RESTful Gateway, WebSocket Feeds" },
    tags: ["React Native", "Zustand", "Fintech"]
  },
  {
    id: 10,
    image: project10,
    title: "EthioPost Agent App",
    type: "app",
    badge: "Enterprise",
    description: "Mobile app for agents to perform financial transactions and postal business operations digitally.",
    deepDescription: "Enterprise mobile logistics and agency banking platform for EthioPost operators. Facilitates barcode package scanning, parcel track-and-trace, cash-in/cash-out agency banking transactions, and customer proof-of-delivery signatures in low-connectivity areas.",
    features: ["Package Barcode & QR Scanner", "Agency Cash Transfers & Deposits", "Offline Transaction Queuing", "Digital Proof of Delivery"],
    architecture: { frontend: "React Native, TypeScript", state: "Zustand & SQLite Sync", backend: "Enterprise Postal & Banking APIs" },
    tags: ["React Native", "Zustand"]
  },
  {
    id: 11,
    image: project11,
    title: "Choice Microfinance App",
    type: "app",
    badge: "Fintech",
    description: "Mobile application supporting digital microfinance and financial inclusion services.",
    deepDescription: "Digital microfinance ecosystem designed to provide accessible micro-loans, savings products, and financial inclusion tools to underserved communities. Features automated credit scoring, flexible repayment schedules, and SMS-triggered transaction notifications.",
    features: ["Micro-Loan Application & Automated Scoring", "Savings Account Tracking", "Repayment Schedule Alerts", "USSD/SMS Integration"],
    architecture: { frontend: "React Native", state: "Zustand", backend: "Node.js Core Microfinance Engine" },
    tags: ["React Native", "Zustand"]
  },
  {
    id: 1,
    image: project1,
    title: "Azmera Trade",
    type: "app",
    badge: "Hackathon",
    description: "E-commerce mobile application for local trade and market access.",
    github: "https://github.com/hailegithubaccount/second-hackton-demo-app.git",
    deepDescription: "Award-winning e-commerce marketplace mobile platform engineered during a high-stakes hackathon. Connects local artisans, farmers, and traders directly with urban retail buyers via localized product listings, direct messaging, and lightweight order checkout.",
    features: ["Localized Product Catalog", "Seller Direct Messaging", "Cart & Real-Time Price Calculator", "Firebase Realtime DB"],
    architecture: { frontend: "React Native", state: "Redux", backend: "Firebase Cloud Firestore & Storage" },
    tags: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 2,
    image: project4,
    title: "Study Nest",
    type: "app",
    badge: "Certified",
    description: "Educational and digital library resource platform for university students.",
    github: "https://github.com/hailegithubaccount/studnestDashborad",
    deepDescription: "Comprehensive mobile learning portal for university students offering digitized course readers, PDF annotations, past exam repositories, study group chat rooms, and offline document reading features.",
    features: ["Document Viewer with Highlights", "Course Resource Search & Filter", "Peer Study Group Discussions", "Offline Material Downloads"],
    architecture: { frontend: "React Native", state: "AsyncStorage", backend: "Node.js, Express, MongoDB" },
    tags: ["React Native", "MongoDB", "Node.js"]
  },
  {
    id: 8,
    image: project8,
    title: "Zumbara",
    type: "app",
    description: "E-commerce mobile application for electronics selling.",
    deepDescription: "Dedicated retail shopping mobile app tailored for consumer electronics. Features product spec comparisons, interactive photo galleries, wishlist tracking, and push notifications for flash discount sales.",
    features: ["Interactive Tech Specs Matrix", "Wishlist & Order Tracker", "Flash Deal Countdown Alerts", "Secure Payment Gateway Integration"],
    architecture: { frontend: "React Native", state: "Zustand", backend: "Firebase Auth & Firestore" },
    tags: ["React Native", "Firebase", "Zustand"]
  },
  {
    id: 12,
    image: project12,
    title: "Youth for Health",
    type: "app",
    description: "Mobile application to empower youth with health knowledge and resources.",
    deepDescription: "Youth-centered digital health platform providing confidential access to reproductive health articles, anonymous Q&A with healthcare mentors, nearby health facility mapping, and wellness trackers.",
    features: ["Anonymous Q&A Forum with Doctors", "Interactive Health Map & Clinics", "Educational Content Hub", "Multilingual Support"],
    architecture: { frontend: "Flutter", state: "Provider", backend: "Firebase Cloud Firestore" },
    tags: ["Flutter", "Firebase", "Provider"]
  },
  {
    id: 13,
    image: project13,
    title: "Adoye",
    type: "app",
    description: "Mobile application to empower Girls and Women with educational resources.",
    deepDescription: "Empowerment mobile platform designed specifically to support women and girls with mentorship network access, skill development tutorials, legal rights guides, and emergency helpline dispatch.",
    features: ["Mentorship Booking System", "Rights & Safety Legal Guides", "Video Tutorial Resource Library", "SOS Emergency Quick Contact"],
    architecture: { frontend: "Flutter", state: "Provider", backend: "Firebase Backend" },
    tags: ["Flutter", "Firebase", "Provider"]
  },

  // WEB PROJECTS
  {
    id: 19,
    image: projectBirateSchool,
    title: "International School Management System",
    type: "web",
    badge: "School MS",
    description: "A unified platform built for administrators, teachers, students, and parents to streamline school operations and academic management.",
    deepDescription: "Comprehensive web-based SaaS School Management System (SMS) built for international schools. Unifies academic grading portals, student attendance tracking, tuition fee billing, timetable management, and automated parent SMS notifications into one cohesive dashboard.",
    features: ["Admin, Teacher & Parent Dashboards", "Student Attendance & Report Card Generation", "Tuition Payment & Fee Tracking", "Class Timetable & Exam Scheduler"],
    architecture: { frontend: "React, Tailwind CSS", state: "React Context & Query", backend: "Node.js REST API, PostgreSQL" },
    tags: ["React", "Tailwind CSS", "Node.js", "REST API"]
  },
  {
    id: 7,
    image: project7,
    title: "Study Nest Dashboard",
    type: "web",
    badge: "Certified",
    description: "Web management dashboard for library administrators to manage books and resources.",
    github: "https://github.com/hailegithubaccount/studnestDashborad",
    live: "https://studnestdashborad.onrender.com",
    deepDescription: "Administrative control portal companion for the Study Nest platform. Enables university librarians to catalog thousands of digital books, track resource downloads, manage user roles, and generate usage metrics reports.",
    features: ["Bulk Digital Book Upload & Metadata Indexing", "Student Borrowing & Download Metrics", "Role-based Access Control (RBAC)", "Real-time System Analytics"],
    architecture: { frontend: "React, Tailwind CSS", state: "Redux", backend: "Node.js, Express, MongoDB API" },
    tags: ["React", "Tailwind CSS", "REST API"]
  },
  {
    id: 14,
    image: project14,
    title: "Youth for Health Dashboard",
    type: "web",
    description: "Dashboard used by Admin to Youth for Health to manage resources and users.",
    deepDescription: "Web administrative dashboard designed for program managers to oversee youth health initiatives, review anonymous community inquiries, approve educational articles, and inspect engagement analytics.",
    features: ["Health Counselor Review Portal", "Resource Article Publishing", "Regional Engagement Metrics", "User & Mentor Account Management"],
    architecture: { frontend: "React, Tailwind CSS", state: "Context API", backend: "RESTful Service Integration" },
    tags: ["React", "Tailwind CSS", "Context API"]
  },
  {
    id: 15,
    image: project15,
    title: "Adoye Dashboard",
    type: "web",
    description: "Dashboard used by Admin to Adoye to manage resources and users.",
    deepDescription: "Management web console empowering organization leads to curate empowerment content, match mentors with applicants, schedule community workshops, and evaluate program outreach metrics.",
    features: ["Mentorship Pairings Manager", "Workshop Event Scheduler", "Curriculum Content CMS", "Analytics & Progress Reporting"],
    architecture: { frontend: "React, Tailwind CSS", state: "Context API", backend: "REST Engine" },
    tags: ["React", "Tailwind CSS", "Context API"]
  },
  {
    id: 16,
    image: project16,
    title: "Hare Beauty",
    type: "web",
    description: "Human hair selling website for online business.",
    github: "https://github.com/hailegithubaccount/Shally-Luxe-Collections",
    live: "https://zahra-lemon-tau.vercel.app/",
    deepDescription: "Sleek e-commerce web storefront tailored for premium beauty and human hair products. Features custom length/texture selectors, interactive customer reviews, shopping cart checkout, and mobile-optimized luxury aesthetic.",
    features: ["Product Variant Selector (Length & Color)", "Seamless Shopping Cart & Checkout", "Customer Testimonials Slider", "Mobile-responsive Luxury Layout"],
    architecture: { frontend: "React, Tailwind CSS", state: "Context API", backend: "Serverless E-Commerce Endpoints" },
    tags: ["React", "Tailwind CSS", "Context API"]
  },
  {
    id: 17,
    image: project17,
    title: "Ethiopia Clothe Store",
    type: "web",
    description: "E-commerce website for selling clothing items.",
    live: "https://agent-6a61ce2df4d--scintillating-platypus-7af34e.netlify.app/",
    deepDescription: "Modern online apparel marketplace dedicated to authentic traditional and modern Ethiopian fashion styles. Built with responsive grid galleries, fast search filters, and smooth cart management.",
    features: ["Cultural & Modern Category Filtering", "Fast Search & Sorting", "Interactive Order Summary", "Optimized Web Vitals"],
    architecture: { frontend: "React, Tailwind CSS", state: "Context API", backend: "REST Services" },
    tags: ["React", "Tailwind CSS", "Context API"]
  },
  {
    id: 5,
    image: project5,
    title: "Fitclub",
    type: "web",
    description: "Fitness and workout tracking application.",
    github: "https://github.com/hailegithubaccount/fitClub-by-react.git",
    live: "https://michaelhailecom.netlify.app/",
    deepDescription: "High-energy fitness landing page and training plan platform equipped with dynamic Framer Motion animations, calorie calculators, membership plan selectors, and interactive program preview cards.",
    features: ["Interactive Calorie & BMI Estimator", "Framer Motion Animated Transitions", "Membership Plan Comparison", "Trainer Profile Cards"],
    architecture: { frontend: "React, Framer Motion, CSS Modules", state: "React State", backend: "Static Client Application" },
    tags: ["React", "Framer Motion", "CSS Modules"]
  }
];

function Projects({ onRobotInspect }) {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const appProjects = projects.filter((p) => p.type === "app");
  const webProjects = projects.filter((p) => p.type === "web");

  // Send hovered project info to global RobotAssistant
  useEffect(() => {
    if (hoveredProject && onRobotInspect) {
      onRobotInspect(`${hoveredProject.title}: ${hoveredProject.deepDescription}`, hoveredProject.title);
    } else if (onRobotInspect) {
      onRobotInspect(null, null);
    }
  }, [hoveredProject, onRobotInspect]);

  return (
    <section className="bg-zinc-950 py-20 px-4 sm:px-6 md:px-12 text-white border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
              Featured Projects
              <span className="text-xs font-mono px-2.5 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-full font-medium">
                {projects.length} Projects
              </span>
            </h2>
            <p className="text-base text-zinc-400 mt-2 max-w-2xl tracking-tight">
              Production mobile applications and full-stack web platforms engineered from end to end.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            {["all", "app", "web"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors tracking-tight ${
                  filter === f
                    ? "bg-white text-zinc-950 font-semibold shadow-sm"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {f === "all" ? "All Projects" : f === "app" ? "Mobile Apps" : "Web Platforms"}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* MOBILE APPLICATIONS SECTION (2-Column Split Layout)           */}
        {/* ============================================================ */}
        {(filter === "all" || filter === "app") && (
          <div className="mb-14">
            {filter === "all" && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Mobile Applications
                </span>
                <div className="flex-1 h-px bg-zinc-800/80"></div>
              </div>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {appProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedModalProject(project)}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors shadow-sm flex flex-row group cursor-pointer"
                >
                  {/* Left: Phone Mockup Frame */}
                  <div className="w-[105px] min-[400px]:w-[125px] sm:w-[165px] md:w-[190px] shrink-0 bg-zinc-950 flex items-center justify-center p-2.5 sm:p-4 border-r border-zinc-800/80">
                    <div className="w-[85px] min-[400px]:w-[100px] sm:w-[130px] h-[175px] min-[400px]:h-[205px] sm:h-[250px] bg-zinc-900 border-[3.5px] sm:border-[5px] border-zinc-800 rounded-[1.2rem] sm:rounded-[1.6rem] shadow-xl overflow-hidden flex flex-col relative ring-1 ring-zinc-700/50 group-hover:scale-[1.03] transition-transform duration-300">
                      <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-6 sm:w-10 h-0.5 sm:h-1 bg-zinc-800 rounded-full z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Right: App Details */}
                  <div className="flex-1 min-w-0 p-3.5 sm:p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-col min-[480px]:flex-row min-[480px]:justify-between min-[480px]:items-start gap-1 min-[480px]:gap-2 mb-1.5 sm:mb-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 shrink-0">
                          {project.badge && (
                            <span className="px-1.5 sm:px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider rounded">
                              {project.badge}
                            </span>
                          )}
                          <span className="px-1.5 sm:px-2 py-0.5 bg-zinc-950 text-zinc-400 border border-zinc-800 text-[9px] sm:text-[10px] font-medium rounded">
                            Mobile App
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-[11px] sm:text-xs md:text-sm leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-3">
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-1.5 sm:px-2 py-0.5 bg-zinc-800/90 text-zinc-300 border border-zinc-700/50 text-[10px] rounded font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Specs <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* WEB PLATFORMS SECTION (3-Column Widescreen Layout)            */}
        {/* ============================================================ */}
        {(filter === "all" || filter === "web") && (
          <div>
            {filter === "all" && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                  Web Platforms & Dashboards
                </span>
                <div className="flex-1 h-px bg-zinc-800/80"></div>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {webProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedModalProject(project)}
                  className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors shadow-sm flex flex-col group cursor-pointer"
                >
                  {/* Top: Minimalist Browser Window Frame */}
                  <div className="bg-zinc-950 p-3 sm:p-4 border-b border-zinc-800/80">
                    <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-md flex flex-col group-hover:border-zinc-700 transition-colors">
                      <div className="bg-zinc-800/90 px-3 py-2 border-b border-zinc-700/60 flex items-center justify-between">
                        <div className="flex gap-1.5 items-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                      </div>

                      {/* Full Widescreen Website Image Display */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Web App Details */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h3 className="text-base font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {project.badge && (
                            <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 text-[10px] font-semibold uppercase tracking-wider rounded">
                              {project.badge}
                            </span>
                          )}
                          <span className="px-2 py-0.5 bg-zinc-950 text-zinc-400 border border-zinc-800 text-[10px] font-medium rounded">
                            Web
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-zinc-800/90 text-zinc-300 border border-zinc-700/50 text-[11px] rounded-md font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] font-medium text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Specs <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>



      {/* ============================================================ */}
      {/* MONOCHROME DEEP INSPECTION MODAL                             */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModalProject(null)}
            className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-20"
              >
                <FontAwesomeIcon icon={faXmark} size="lg" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 flex items-center justify-center">
                  <TransparentRobot src={robotBot} className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold px-2 py-0.5 bg-zinc-800 rounded">
                      System Overview
                    </span>
                    {selectedModalProject.badge && (
                      <span className="text-[10px] font-mono text-zinc-400 uppercase border border-zinc-800 px-2 py-0.5 rounded">
                        {selectedModalProject.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedModalProject.title}
                  </h3>
                </div>
              </div>

              {/* Deep Architecture Description */}
              <div className="bg-zinc-950 border border-zinc-800 p-4 sm:p-5 rounded-xl mb-6">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCode} /> System Overview & Architecture
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {selectedModalProject.deepDescription}
                </p>
              </div>

              {/* Core Features */}
              {selectedModalProject.features && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLayerGroup} /> Core Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedModalProject.features.map((feat, idx) => (
                      <div key={idx} className="bg-zinc-950 border border-zinc-800 p-3 rounded-xl flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
                        <span className="text-xs text-zinc-300 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {selectedModalProject.architecture && (
                <div className="mb-6 bg-zinc-950 border border-zinc-800 p-4 rounded-xl text-xs">
                  <h4 className="text-[11px] text-white uppercase tracking-wider mb-3 font-semibold flex items-center gap-2">
                    <FontAwesomeIcon icon={faServer} /> Technical Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                    <div>
                      <span className="text-zinc-500 block">Frontend:</span>
                      <span className="text-zinc-200 font-medium">{selectedModalProject.architecture.frontend}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">State/Storage:</span>
                      <span className="text-zinc-200 font-medium">{selectedModalProject.architecture.state}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Backend:</span>
                      <span className="text-zinc-200 font-medium">{selectedModalProject.architecture.backend}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  {selectedModalProject.github && (
                    <a
                      href={selectedModalProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs rounded-xl border border-zinc-700 transition-colors flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faCode} /> Source Code
                    </a>
                  )}
                  {selectedModalProject.live && (
                    <a
                      href={selectedModalProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-zinc-950 font-bold text-xs rounded-xl hover:bg-zinc-200 transition-colors flex items-center gap-2"
                    >
                      Live Demo 🚀
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white text-xs rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
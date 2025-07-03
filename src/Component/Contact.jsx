import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiWeb3forms } from "react-icons/si";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="contact"
      className="min-h-screen bg-[#0e1420] text-white py-20 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Get In Touch
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Let's connect!
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Direct Contact
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    icon: <FaEnvelope className="text-xl" />,
                    label: "Email",
                    value: "smthcodder@gmail.com",
                    href: "mailto:smthcodder@gmail.com"
                  },
                  {
                    icon: <FaTelegram className="text-xl" />,
                    label: "Telegram",
                    value: "@fsmael_Abellbadr",
                    href: "https://t.me/fsmael_Abellbadr"
                  },
                  {
                    icon: <FaInstagram className="text-xl" />,
                    label: "Instagram",
                    value: "@smael_abellbadr",
                    href: "https://instagram.com/smael_abellbadr"
                  },
                  {
                    icon: <FaPhone className="text-xl" />,
                    label: "Phone",
                    value: "+251 938 958 554",
                    href: "tel:+251938958554"
                  }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 hover:bg-[#1a2035]/50 rounded-lg transition-colors"
                  >
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Professional Profiles */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Professional Profiles
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    icon: <FaLinkedin className="text-xl" />,
                    color: "bg-blue-600 hover:bg-blue-700",
                    href: "#"
                  },
                  {
                    icon: <FaGithub className="text-xl" />,
                    color: "bg-gray-800 hover:bg-gray-700",
                    href: "#"
                  },
                  {
                    icon: <FaTwitter className="text-xl" />,
                    color: "bg-blue-400 hover:bg-blue-500",
                    href: "#"
                  }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full text-white transition-colors ${item.color}`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#1a2035] p-6 md:p-8 rounded-xl border border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
              Send Me a Message
            </h3>
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-6"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value="53207d76-d2bd-42a4-8d81-0ca043a85fa4" 
              />
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 pl-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-[#0e1420] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 pl-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-3 bg-[#0e1420] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                />
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 pl-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full px-4 py-3 bg-[#0e1420] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
              >
                <SiWeb3forms className="text-xl" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-800/80 backdrop-blur-md border-b border-white/10 shadow-md"
          : "bg-gray-800"
      } text-white flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 tracking-wide">
        Portfolio
      </div>

      {/* Mobile Toggle */}
      <div
        className="text-3xl cursor-pointer block md:hidden mr-2"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </div>

      {/* Menu */}
      <ul
        className={`${
          isMenuOpen ? "h-64 opacity-100 py-4" : "h-0 opacity-0"
        } transition-all duration-300 md:opacity-100 md:h-auto md:flex md:gap-8 md:items-center md:static md:flex-row md:bg-transparent bg-gray-900 absolute top-full left-0 w-full md:w-auto flex flex-col items-center overflow-hidden`}
      >
        {["Home", "About", "Skills", "Projects"].map((item) => (
          <li key={item} className="w-full text-center md:w-auto">
            <a
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-lg relative group transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="group-hover:text-orange-400 transition">
                {item}
              </span>
              <span className="absolute left-1/2 bottom-1 transform -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-orange-400 transition-all duration-300"></span>
            </a>
          </li>
        ))}

        {/* Highlighted CTA */}
        <li className="w-full text-center md:w-auto mt-2 md:mt-0">
          <a
            href="#contact"
            className="inline-block py-2 px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

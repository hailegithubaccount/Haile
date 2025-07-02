import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white px-5 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-orange-500">portfolio</div>

      <div
        className="text-3xl cursor-pointer block md:hidden mr-10"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </div>

      <ul
        className={`${
          isMenuOpen
            ? "h-64 py-4"
            : "h-0 overflow-hidden"
        } transition-height duration-300 md:h-auto md:flex md:gap-6 md:items-center md:static md:flex-row md:bg-transparent bg-gray-900 absolute top-full left-0 w-full md:w-auto flex flex-col items-center`}
      >
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item} className="w-full text-center md:w-auto">
            <a
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-lg hover:text-orange-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

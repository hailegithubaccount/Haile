import { useState, useEffect } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 text-white flex justify-between items-center ${scrolled ? "bg-gray-800/80 backdrop-blur-md border-b border-white/10 shadow-md" : "bg-gray-800"
        }`}
    >
      <div className="text-3xl font-extrabold text-cyan-400 tracking-wide">
        Portfolio
      </div>

      <div className="text-3xl cursor-pointer block md:hidden mr-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul
        className={`${menuOpen ? "h-64 opacity-100 py-4" : "h-0 opacity-0"
          } transition-all duration-300 md:opacity-100 md:h-auto md:flex md:gap-8 md:items-center md:static md:flex-row md:bg-transparent bg-gray-900 absolute top-full left-0 w-full md:w-auto flex flex-col items-center overflow-hidden`}
      >
        {navLinks.map((item) => (
          <li key={item} className="w-full text-center md:w-auto">
            <a
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 text-lg relative group transition"
              onClick={() => setMenuOpen(false)}
            >
              <span className="group-hover:text-cyan-400 transition">{item}</span>
              <span className="absolute left-1/2 bottom-1 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-cyan-400 transition-all duration-300" />
            </a>
          </li>
        ))}
        <li className="w-full text-center md:w-auto mt-2 md:mt-0">
          <a
            href="#contact"
            className="inline-block py-2 px-6 bg-cyan-500 text-white rounded-full text-sm font-semibold shadow-lg hover:bg-cyan-600 transition-all"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

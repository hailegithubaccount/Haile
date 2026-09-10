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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 text-white flex justify-between items-center ${scrolled ? "bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 shadow-sm" : "bg-zinc-950 border-b border-zinc-900"
        }`}
    >
      <div className="flex items-center gap-3">
        <a href="#home" className="text-xl font-bold text-white tracking-tight hover:text-zinc-200 transition-colors">
          Haile<span className="text-zinc-500">.dev</span>
        </a>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] text-zinc-300 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Available for roles
        </div>
      </div>

      <div className="text-2xl cursor-pointer block md:hidden mr-2 text-zinc-300" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✕" : "☰"}
      </div>

      <ul
        className={`${menuOpen ? "h-64 opacity-100 py-4" : "h-0 opacity-0"
          } transition-all duration-300 md:opacity-100 md:h-auto md:flex md:gap-8 md:items-center md:static md:flex-row md:bg-transparent bg-zinc-950 absolute top-full left-0 w-full md:w-auto flex flex-col items-center overflow-hidden border-b border-zinc-800 md:border-none`}
      >
        {navLinks.map((item) => (
          <li key={item} className="w-full text-center md:w-auto">
            <a
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
        <li className="w-full text-center md:w-auto mt-2 md:mt-0">
          <a
            href="#contact"
            className="inline-block py-2 px-5 bg-white text-zinc-950 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-sm"
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

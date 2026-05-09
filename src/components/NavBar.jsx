import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from '../assets/Logo.png'

function NavBar({ links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ fontFamily: "'Jost', sans-serif" }} className="sticky top-0 left-0 w-full z-50 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center h-[68px]">

        <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" />

        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[11px] tracking-[2px] uppercase text-[#4A4640] no-underline font-normal transition-colors duration-200 hover:text-[#B8985A]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden focus:outline-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <Menu size={28} className="text-black" />
        </button>
      </div>

      {menuOpen && (
        <div className={
          `md:hidden bg-white border-t border-[#E8E2D8] transition-all duration-300 overflow-hidden 
          ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>

          <ul className="flex flex-col items-center py-4 gap-3 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] tracking-[2px] uppercase text-[#4A4640] no-underline hover:text-[#B8985A] transition-colors duration-200 py-2 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>
      )}
    </nav>
  );
}

export default NavBar;

import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from '../assets/Logo.png'

function NavBar({ links = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" />

        <ul className="hidden md:flex space-x-6 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-black hover:border-b-2 hover:border-black transition-all duration-200 py-2"
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
            `md:hidden bg-black/70 backdrop-blur-lg shadow-lg transition-all duration-300 
            ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`
        }>
          <ul className="flex flex-col items-center py-4 space-y-3 font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-gray-700 transition-all duration-200 py-2 block"
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

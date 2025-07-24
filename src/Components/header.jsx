import React, { useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-950 text-white p-6 shadow-2xl sticky top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-xl md:text-xl font-bold tracking-wide text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.8)]"
        >
          <img src="/images/zeko çizim.png" alt="" className="h-8" />
          <span>Zekeriya Deniz Uğurlu</span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm uppercase font-bold">
          <Link
            to="/"
            className="relative transition hover:text-rose-400 after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Ana Sayfa
          </Link>
          <Link
            to="/about"
            className="relative transition hover:text-rose-400 after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Hakkımda
          </Link>
          <Link
            to="/project"
            className="relative transition hover:text-rose-400 after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r after:from-rose-400 after:to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
          >
            Projeler
          </Link>
        </nav>
        {/* hamburger menü butonu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobil menü */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-950 text-white px-6 py-4 flex flex-col space-y-4 absolute top-full left-0 w-full shadow-2xl z-40  ">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="uppercase font-bold border-b-1 pb-2 "
          >
            Ana Sayfa
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="uppercase font-bold border-b-1 pb-2  "
          >
            Hakkımda
          </Link>
          <Link
            to="/project"
            onClick={() => setMenuOpen(false)}
            className="uppercase font-bold border-b-1 pb-2 "
          >
            Projeler
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;

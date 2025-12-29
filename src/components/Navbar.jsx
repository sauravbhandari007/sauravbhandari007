import React, { useState } from 'react'
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">SAURAV</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300 items-center">
  <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">HOME</Link>
  <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">ABOUT</Link>
  <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">PROJECTS</Link>
  <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">SKILLS</Link>
  <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">CONTACT</Link>
  <a
    href="resume/Saurav_Bhandari.pdf"
    download
    className="ml-4 px-4 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] transition duration-300"
  >
    RESUME
  </a>
</div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur border-t border-white/5 px-6 py-4 flex flex-col space-y-4 text-gray-300">
          <a href="#home" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>HOME</a>
          <a href="#about" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#projects" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>PROJECTS</a>
          <a href="#skills" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>SKILLS</a>
          <a href="#contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>CONTACT</a>

          {/* Mobile Resume Button */}
          <a
            href="/resume/Saurav_Bhandari_Resume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className="text-center px-4 py-2 rounded-lg
            bg-cyan-400 text-black font-semibold
            hover:bg-cyan-300 transition duration-300"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      )}
    </nav>
  )
}

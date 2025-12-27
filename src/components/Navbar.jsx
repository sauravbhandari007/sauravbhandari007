import React, { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">SAURAV</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-cyan-400">HOME</a>
          <a href="#about" className="hover:text-cyan-400">ABOUT</a>
          <a href="#projects" className="hover:text-cyan-400">PROJECTS</a>
          <a href="#skills" className="hover:text-cyan-400">SKILLS</a>
          <a href="#resume" className="hover:text-cyan-400">RESUME</a>
          <a href="#contact" className="hover:text-cyan-400">CONTACT</a>
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
          <a href="#resume" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>RESUME</a>
          <a href="#contact" className="hover:text-cyan-400" onClick={() => setIsOpen(false)}>CONTACT</a>
        </div>
      )}
    </nav>
  )
}

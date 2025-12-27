import React from 'react'

export default function Navbar() {
return (
<nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-xl font-bold text-cyan-400">SAURAV</h1>
<div className="space-x-6 text-sm text-gray-300">
<a href="#home" className="hover:text-cyan-400">HOME</a>
<a href="#about" className="hover:text-cyan-400">ABOUT</a>
<a href="#projects" className="hover:text-cyan-400">PROJECTS</a>
<a href="#skills" className="hover:text-cyan-400">SKILLS</a>
<a href="#resume" className="hover:text-cyan-400">RESUME</a>
<a href="#contact" className="hover:text-cyan-400">CONTACT</a>
</div>
</div>
</nav>
)
}
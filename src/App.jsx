import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'


export default function App() {
return (
<div className="bg-[#0b0f14] text-white font-sans scroll-smooth">
<Navbar />
<Hero />
<About />
<Projects />
<Skills />
<Resume />
<Contact />
</div>
)
}
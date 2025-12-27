import React from 'react'

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-24">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 px-6 items-center">
                <div className="flex justify-center">
                    <div className="w-64 h-64 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div>
                    <p className="text-cyan-400 text-sm mb-2">WELCOME TO MY PORTFOLIO</p>
                    <h1 className="text-4xl font-bold">Hi, I'm <span className="text-cyan-400">Saurav Bhandari</span></h1>
                    <p className="mt-4 text-gray-400">3D Artist | Animator | Game Designer</p>
                    <div className="mt-6 flex gap-4">
                        <a href="#projects" className="px-6 py-3 bg-cyan-400 text-black rounded-lg">View My Work</a>
                        <a href="#contact" className="px-6 py-3 border border-cyan-400 rounded-lg">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
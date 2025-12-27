import React from "react";

export default function About() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#0b0f14] to-[#0e141b]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-widest text-sm mb-2">ABOUT ME</p>
          <h2 className="text-4xl font-bold">
            Passionate About <span className="text-cyan-400">Creating</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            Bringing creative visions to life through 3D modeling, lighting, character design, and immersive animations. Continuously learning and experimenting to craft digital masterpieces.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#111827] p-6 rounded-xl border border-white/5 hover:border-cyan-400 transition">
            <div className="text-cyan-400 text-3xl mb-4">🖌️</div>
            <h3 className="font-semibold text-lg mb-2">3D Modeling</h3>
            <p className="text-gray-400 text-sm">
              Creating optimized and realistic 3D models for animation, games, and visualization projects.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-white/5 hover:border-cyan-400 transition">
            <div className="text-cyan-400 text-3xl mb-4">🎨</div>
            <h3 className="font-semibold text-lg mb-2">Texturing & Lighting</h3>
            <p className="text-gray-400 text-sm">
              Applying materials, textures, and lighting setups to enhance visual realism and mood.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-white/5 hover:border-cyan-400 transition">
            <div className="text-cyan-400 text-3xl mb-4">🕹️</div>
            <h3 className="font-semibold text-lg mb-2">Character Design</h3>
            <p className="text-gray-400 text-sm">
              Designing characters with unique styles, rigging, and animations for storytelling.
            </p>
          </div>

          <div className="bg-[#111827] p-6 rounded-xl border border-white/5 hover:border-cyan-400 transition">
            <div className="text-cyan-400 text-3xl mb-4">🚀</div>
            <h3 className="font-semibold text-lg mb-2">Creative Vision</h3>
            <p className="text-gray-400 text-sm">
              Transforming ideas into engaging digital art that captures imagination and attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#0b0f14] to-[#0e141b]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 backdrop-blur-sm">
              <p className="text-cyan-400 tracking-widest text-sm md:text-base font-extrabold uppercase">ABOUT ME</p>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Passionate About <span className="text-cyan-400">Crafting</span> Immersive 3D Experiences
          </h2>
          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            I turn ideas into vivid 3D experiences — from stylized characters and polished models to cinematic lighting and smooth animations. I combine technical precision with visual storytelling to create work that engages and inspires.
          </p>
        </div>

        {/* Info Cards */}
       <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-items-center">
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

          {/* <div className="bg-[#111827] p-6 rounded-xl border border-white/5 hover:border-cyan-400 transition">
            <div className="text-cyan-400 text-3xl mb-4">🕹️</div>
            <h3 className="font-semibold text-lg mb-2">Character Design</h3>
            <p className="text-gray-400 text-sm">
              Designing characters with unique styles, rigging, and animations for storytelling.
            </p>
          </div> */}

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

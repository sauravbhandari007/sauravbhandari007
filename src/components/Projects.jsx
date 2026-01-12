import React, { useState } from 'react'
import knifeImg from '../assets/knife real render  .png'
import mustangImg from '../assets/mustang @ render 0001.png'
import swordImg from '../assets/sword real .png'
import swordVideo from '../assets/sword aniamtion 0001-0250.mp4'

const projects = [
  {
    id: 1,
    title: "3D Knife Render",
    description: "Ultra-realistic 3D knife modeling with professional lighting and texturing",
    longDescription: "A meticulously crafted 3D knife render featuring photorealistic materials, dynamic lighting, and intricate details. Perfect for game assets or product visualization.",
    image: knifeImg,
    tags: ["3D Modeling", "Rendering", "Product Design"],
    type: "image"
  },
  {
    id: 2,
    title: "Mustang Render",
    description: "Professional automotive 3D rendering of a classic Mustang",
    longDescription: "High-fidelity 3D car render showcasing advanced lighting techniques, metallic materials, and environmental reflections for stunning visual impact.",
    image: mustangImg,
    tags: ["3D Modeling", "Automotive", "Visualization"],
    type: "image"
  },
  {
    id: 3,
    title: "Sword Animation",
    description: "Cinematic animated sword with professional effects and motion graphics",
    longDescription: "An epic sword animation sequence with smooth motion dynamics, particle effects, and cinematic camera work. Watch the blade come to life with stunning visual effects.",
    image: swordImg,
    video: swordVideo,
    tags: ["Animation", "VFX", "Motion Graphics"],
    type: "video"
  }
]

export default function Projects() {
return (
<section id="projects" className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-10 text-center">Featured <span className="text-cyan-400">Projects</span></h2>
<div className="grid md:grid-cols-3 gap-6">
{[1,2,3].map((p) => (
<div key={p} className="bg-[#111827] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-400 transition">
<img src="https://images.unsplash.com/photo-1604079628040-94301bb21b91" />
<div className="p-4">
<h3 className="font-semibold">3D Project {p}</h3>
<p className="text-sm text-gray-400">High quality 3D artwork</p>
</div>
</div>
))}
</div>
</div>
</section>
)
}
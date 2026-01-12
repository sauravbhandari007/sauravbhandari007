import React from 'react'

export default function Projects() {
return (
// hello sourav this my projects component
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
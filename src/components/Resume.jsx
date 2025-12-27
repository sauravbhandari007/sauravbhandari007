import React from 'react'
export default function Resume() {
return (
<section id="resume" className="py-24">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-10">My <span className="text-cyan-400">Resume</span></h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#111827] p-6 rounded-xl">
<h3 className="text-cyan-400 font-semibold">Education</h3>
<ul className="text-gray-400 mt-3 space-y-2">
<li>10th – 2021</li>
<li>12th – 2023</li>
<li>BSc Animation & Gaming – 2026</li>
</ul>
</div>
<div className="bg-[#111827] p-6 rounded-xl">
<h3 className="text-cyan-400 font-semibold">Additional Skills</h3>
<ul className="text-gray-400 mt-3 space-y-2">
<li>Character Rigging</li>
<li>UV Mapping</li>
<li>Lighting Design</li>
</ul>
</div>
</div>
</div>
</section>
)
}
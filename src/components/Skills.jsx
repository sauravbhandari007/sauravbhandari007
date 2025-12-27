
import React from 'react'
export default function Skills() {
const skills = [
{ name: 'Blender', level: '95%' },
{ name: 'Maya', level: '88%' },
{ name: 'Unreal Engine', level: '82%' },
{ name: 'Premiere Pro', level: '80%' }
]


return (
<section id="skills" className="py-24 bg-[#0e141b]">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center mb-10">Tools & <span className="text-cyan-400">Skills</span></h2>
{skills.map((s) => (
<div key={s.name} className="mb-6">
<div className="flex justify-between mb-1">
<span>{s.name}</span><span className="text-cyan-400">{s.level}</span>
</div>
<div className="w-full bg-gray-700 rounded-full h-2">
<div className="bg-cyan-400 h-2 rounded-full" style={{ width: s.level }}></div>
</div>
</div>
))}
</div>
</section>
)
}
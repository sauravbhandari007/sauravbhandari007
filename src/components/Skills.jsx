import React from "react";

const skills = [
    { name: "Blender", logo: "blenderLogo.png" },
    { name: "Maya", logo: "mayaLogo.png" },
    { name: "Premiere Pro", logo: "premierLogo.png" },
    // { name: "Unreal", logo: "UnrealLogo.png" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-[#0b0f14]">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-center text-3xl font-bold text-white mb-12">
                    My <span className="text-cyan-400">Skills</span>
                </h2>

                {/* Skills Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-items-center">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center
              cursor-pointer group"
                        >
                            {/* Logo */}
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-20 h-20 object-contain
                transition-all duration-300
                group-hover:scale-125
                group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                            />

                            {/* Name (optional – only show on hover) */}

                            <p className="text-gray-300 text-sm mt-3 font-semibold tracking-wide
group-hover:text-cyan-400 transition duration-300">
  {skill.name}
</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

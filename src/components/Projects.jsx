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
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <>
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-3 text-center">Featured <span className="text-cyan-400">Projects</span></h2>
          <p className="text-center text-gray-400 mb-12">Explore my latest 3D renders and animations</p>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-[#111827] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                <div className="relative group">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  {project.video && (
                    <button
                      onClick={() => setSelectedVideo(project)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="bg-cyan-400 rounded-full p-4 hover:bg-cyan-300 transition">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5h3V7h4v5h3l-5 5z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded-full border border-cyan-400/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVideo(null)}>
          <div className="bg-[#111827] rounded-2xl border border-cyan-400/30 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h3 className="text-xl font-bold text-cyan-400">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition text-2xl"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <video
                width="100%"
                height="auto"
                controls
                autoPlay
                className="rounded-lg bg-black"
              >
                <source src={selectedVideo.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-gray-300 mt-4">{selectedVideo.longDescription}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
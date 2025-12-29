import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_cwc92pd";
    const templateID = "template_u4xaken";
    const publicKey = "Y7_K0aZG9RBLYHv4U";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Oops, something went wrong!");
        console.log(error.text);
      }
    );
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-[#0b0f14] to-[#0e141b]"
    >
    
      {/* LEFT SIDE VERTICAL ICONS */}
{/* LEFT SIDE VERTICAL ICONS */}
<div
  className="hidden md:flex flex-col gap-10
  fixed left-6 top-[60%] -translate-y-1/2 z-50"
>
  {/* Email */}
  <a href="mailto:sauravbhandari66904@gmail.com" title="Email" className="group">
    <div
      className="w-14 h-14 flex items-center justify-center
      rounded-2xl
      bg-gradient-to-br from-cyan-400/20 to-blue-500/20
      border border-cyan-400/30
      shadow-[0_0_12px_rgba(34,211,238,0.6)]
      hover:shadow-[0_0_25px_rgba(34,211,238,0.9)]
      transition"
    >
      <img
        src="mail.png"
        alt="Email"
        className="w-7 h-7 object-contain
        drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]
        group-hover:scale-125 transition"
      />
    </div>
  </a>

  {/* Phone */}
  <a href="tel:9528335069" title="Call" className="group">
    <div
      className="w-14 h-14 flex items-center justify-center
      rounded-2xl
      bg-gradient-to-br from-green-400/20 to-emerald-500/20
      border border-green-400/30
      shadow-[0_0_12px_rgba(34,197,94,0.6)]
      hover:shadow-[0_0_25px_rgba(34,197,94,0.9)]
      transition"
    >
      <img
        src="telephone.png"
        alt="Phone"
        className="w-7 h-7 object-contain
        drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]
        group-hover:scale-125 transition"
      />
    </div>
  </a>

  {/* Location */}
  <a
    href="https://www.google.com/maps/search/Dehradun"
    target="_blank"
    rel="noopener noreferrer"
    title="Location"
    className="group"
  >
    <div
      className="w-14 h-14 flex items-center justify-center
      rounded-2xl
      bg-gradient-to-br from-pink-400/20 to-purple-500/20
      border border-pink-400/30
      shadow-[0_0_12px_rgba(236,72,153,0.6)]
      hover:shadow-[0_0_25px_rgba(236,72,153,0.9)]
      transition"
    >
      <img
        src="location.png"
        alt="Location"
        className="w-7 h-7 object-contain
        drop-shadow-[0_0_6px_rgba(236,72,153,0.9)]
        group-hover:scale-125 transition"
      />
    </div>
  </a>
</div>


      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Have a project in mind? Let’s work together.
          </p>
        </div>

       
       {/* CENTER FORM */}
<div className="flex justify-center">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-2xl   {/* <-- width increased */}
    bg-[#111827] p-8 rounded-2xl
    border border-white/5 shadow-lg space-y-5"
  >
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
      placeholder="Your Name"
      required
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
      placeholder="Your Email"
      required
    />
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full p-3 rounded-lg bg-black/40 border border-white/10 focus:border-cyan-400 outline-none"
      rows="4"
      placeholder="Tell me about your project..."
      required
    ></textarea>

    <button className="w-full bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:bg-cyan-300 transition">
      Send Message 🚀
    </button>
  </form>
</div>

      </div>
    </section>
  );
}

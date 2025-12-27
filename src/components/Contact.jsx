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

    // Replace these with your EmailJS credentials
    const serviceID = "service_cwc92pd";
    const templateID = "template_u4xaken";
    const publicKey = "Y7_K0aZG9RBLYHv4U";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Oops, something went wrong. Try again!");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-[#0b0f14] to-[#0e141b]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 tracking-widest text-sm mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-bold">
            Let's <span className="text-cyan-400">Connect </span>
          </h2>
          <p className="text-gray-400 mt-3">
            Have a project in mind? Let’s work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let’s Create Something Amazing
            </h3>
            <p className="text-gray-400">
              Whether you want a portfolio, game assets, or 3D visuals, feel
              free to reach out anytime.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sauravbhandari66904@gmail.com"
                className="flex items-center gap-4 bg-[#111827] p-4 rounded-xl border border-white/5 hover:border-cyan-400 transition"
              >
                <span className="text-cyan-400">📧</span>
                <span className="text-gray-300">
                  sauravbhandari66904@gmail.com
                </span>
              </a>

              <a
                href="tel:9528335069"
                className="flex items-center gap-4 bg-[#111827] p-4 rounded-xl border border-white/5 hover:border-cyan-400 transition"
              >
                <span className="text-cyan-400">📞</span>
                <span className="text-gray-300">9528335069</span>
              </a>

              <a
                href="https://www.google.com/maps/search/Dehradun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#111827] p-4 rounded-xl border border-white/5 hover:border-cyan-400 transition"
              >
                <span className="text-cyan-400">📍</span>
                <span className="text-gray-300">Dehradun</span>
              </a>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111827] p-8 rounded-2xl border border-white/5 shadow-lg space-y-5"
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

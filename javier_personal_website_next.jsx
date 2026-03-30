// Full modern personal website (React + Tailwind)
// Copy into a Next.js app (or ask me and I’ll show setup)

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <nav className="p-4 flex justify-between items-center border-b border-gray-700">
        <h1 className="font-bold">Javier Quiñones</h1>
        <div className="flex gap-4">
          <button onClick={() => setDark(!dark)}>Toggle Mode</button>
          <a href="/resume.pdf" download>Download Resume</a>
        </div>
      </nav>

      <section className="text-center py-20">
        <img src="/profile.jpg" className="w-32 h-32 rounded-full mx-auto mb-4" />
        <h1 className="text-4xl font-bold">Investor • Founder • Penn</h1>
        <p className="opacity-70">Building at the intersection of finance, real estate, and global markets</p>
      </section>

      <section className="p-10">
        <h2 className="text-2xl mb-4">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl hover:scale-105 transition">
            <h3>NOVA-Timepieces</h3>
            <p>150+ sales, 55% margins</p>
          </div>
          <div className="p-4 border rounded-xl hover:scale-105 transition">
            <h3>NOVA-News</h3>
            <p>20M+ reach</p>
          </div>
        </div>
      </section>

      <section className="p-10">
        <h2 className="text-2xl mb-4">Investment Thesis</h2>
        <p>
          I focus on asymmetric opportunities in real estate and global markets,
          leveraging macro insights and operational execution.
        </p>
      </section>

      <section className="p-10">
        <h2 className="text-2xl mb-4">Contact</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input placeholder="Your Name" className="p-2 border" />
          <input placeholder="Email" className="p-2 border" />
          <textarea placeholder="Message" className="p-2 border" />
          <button className="bg-green-500 p-2 rounded">Send</button>
        </form>
      </section>

      <footer className="text-center p-6 opacity-50">
        © 2026 Javier Quiñones
      </footer>
    </div>
  );
}

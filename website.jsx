import React from "react";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white p-8 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Lucas Brown</h1>
        <p className="text-xl mb-10 text-gray-400">Builder • Athlete • Public Health Advocate</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Tech & Projects</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Creator of <span className="text-blue-400">StrengthSync</span> — fitness & health tracking app</li>
            <li>Built a community sharing app for anonymous positivity</li>
            <li>Working on a personal assistant powered by LLMs</li>
            <li>Learning SwiftUI + systems design</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Sports</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Club soccer player — 10+ years</li>
            <li>Varsity athlete in soccer & track</li>
            <li>Training to play D3 college soccer</li>
            <li>15 lbs muscle gain with bodybuilding</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Global Health</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>MPH candidate focused on health equity</li>
            <li>Led women’s health projects in Nicaragua</li>
            <li>Worked on cataract surgery missions in the DR</li>
            <li>Interned in Jordan helping refugee women</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2 text-teal-400">Creative & More</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Opera lover & classical music nerd</li>
            <li>Passionate cook & healthy eating advocate</li>
            <li>Writing essays on culture, gender, and justice</li>
            <li>Big fan of science fiction & philosophy</li>
          </ul>
        </section>

        <footer className="mt-20 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Lucas Brown. Built with love & Tailwind.
        </footer>
      </div>
    </main>
  );
}

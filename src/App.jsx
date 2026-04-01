import { useState } from "react";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import Mandala from "./components/Mandala";
import AsciiArt from "./components/AsciiArt";
import { Meteors } from "./components/Meteors";
import "./index.css";

import github from "./assets/github.svg";
import twitter from "./assets/x.svg";
import gmail from "./assets/gmail.svg";
import linkedin from "./assets/linkedin.svg";
import js from "./assets/skills/javascript.svg";
import ts from "./assets/skills/typescript-icon.svg";
import node from "./assets/skills/nodejs-icon.svg";
import python from "./assets/skills/python.svg";
import react from "./assets/skills/react.svg";
import postgres from "./assets/skills/postgresql.svg";
import tailwind from "./assets/skills/tailwindcss-icon.svg";
import nextjs from "./assets/skills/nextjs-icon.svg";
import docker from "./assets/skills/docker.svg";
import fedora from "./assets/skills/fedora.svg";
import nginx from "./assets/skills/nginx.svg";
import redux from "./assets/skills/redux.svg";
import reactquery from "./assets/skills/react-query.svg";
import prisma from "./assets/skills/prisma.svg";
import aws from "./assets/skills/aws.svg";
import bash from "./assets/skills/bash.svg";
import go from "./assets/skills/go.svg";
import cloudflare from "./assets/skills/cloudflare.svg";

const skills = [
  { name: "Javascript", icon: js },
  { name: "Typescript", icon: ts },
  { name: "Python", icon: python },
  { name: "Golang", icon: go },
  { name: "React", icon: react },
  { name: "React Native", icon: react },
  { name: "Next.js", icon: nextjs },
  { name: "Node.js", icon: node },
  { name: "Redux", icon: redux },
  { name: "React Query", icon: reactquery },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "PostgreSQL", icon: postgres },
  { name: "Prisma", icon: prisma },
  { name: "Docker", icon: docker },
  { name: "AWS", icon: aws },
  { name: "Cloudflare", icon: cloudflare },
  { name: "Fedora", icon: fedora },
  { name: "Nginx", icon: nginx },
  { name: "Bash", icon: bash },
];

const socials = [
  { icon: github, url: "https://github.com/devangy", label: "GitHub" },
  { icon: linkedin, url: "https://www.linkedin.com/in/devangy", label: "LinkedIn" },
  { icon: twitter, url: "https://x.com/devangy", label: "X" },
  { icon: gmail, url: "mailto:d3vang@gmail.com", label: "Email" },
];

const projects = [
  {
    name: "Beacon",
    url: "https://github.com/devangy/Beacon",
    desc: "Beacon is a real-time chat application I built to explore websockets for bidirectional communication. It uses Socket.io to handle instant messaging with minimal latency. PostgreSQL database to persist message history, ensuring conversations aren\u2019t lost when a user refreshes. Implemented Github OAuth to handle authentication and seamless login. Designed a mobile-first, responsive UI in React, optimizing the chat experience for performance and usability on both desktop and mobile devices.",
  },
  {
    name: "DataLog",
    url: "https://github.com/devangy/market",
    desc: "DataLog is a Telegram Bot built with Golang and Telego. It provides notification alerts on new events with volume and whale alerts for tracking whale movements across two prediction markets Kalshi and Polymarket. It uses concurrent API polling system using goroutines, channels, and backoff retry logic to get contracts prices from both markets simultaneously. To prevent duplicates it uses a hashmap and automatically discards duplicates by comparing hashes.",
  },
  {
    name: "LucidLines",
    url: "https://github.com/devangy/LucidLines",
    desc: "LucidLines is a full-stack blogging platform with powerful admin management tools. I built the backend with Node.js and Express, PostgreSQL and Prisma ORM for queries, focusing on creating clean, efficient RESTful APIs to handle user data and Cloudinary for image uploads. Implemented full CRUD functionality, enabling users to publish, edit, and delete blogs, as well as engage through comments and likes.",
  },
];

// Terminal prompt component
const Prompt = ({ command, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, margin: "-40px" }}
    className={`flex items-center gap-1.5 font-jetbrains text-sm mb-6 ${className}`}
  >
    <span className="text-indian-green">devang</span>
    <span className="text-white/25">@</span>
    <span className="text-saffron">mumbai</span>
    <span className="text-white/25">:</span>
    <span className="text-cyan-400">~</span>
    <span className="text-white/25">$</span>
    <span className="text-white/60 ml-1">{command}</span>
    <span className="terminal-cursor ml-0.5">&#9610;</span>
  </motion.div>
);

// Rangoli-inspired section divider
const Divider = () => (
  <div className="flex items-center justify-center gap-2 py-20 opacity-25">
    <div className="h-px w-20 bg-gradient-to-r from-transparent to-saffron" />
    <div className="w-1.5 h-1.5 rotate-45 border border-saffron" />
    <div className="w-2 h-2 rounded-full border border-indian-green" />
    <div className="w-1.5 h-1.5 rotate-45 border border-saffron" />
    <div className="h-px w-20 bg-gradient-to-l from-transparent to-saffron" />
  </div>
);

// Fade-in wrapper
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true, margin: "-60px" }}
    className={className}
  >
    {children}
  </motion.div>
);

function App() {
  const [expandIntro, setIntro] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e4e4e7] font-jetbrains scanline">
      {/* ══════ Terminal Chrome ══════ */}
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center">
          {/* Traffic lights */}
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>

          {/* Tabs */}
          <div className="hidden sm:flex items-center gap-1 text-xs font-mono">
            {[
              { id: "home", label: "~/home" },
              { id: "skills", label: "~/skills" },
              { id: "experience", label: "~/work" },
              { id: "projects", label: "~/projects" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); scrollTo(tab.id); }}
                className={`px-3 py-1.5 rounded-t-md transition-colors ${
                  activeTab === tab.id
                    ? "bg-white/[0.06] text-saffron border-b-2 border-saffron"
                    : "text-white/30 hover:text-white/60 hover:bg-white/[0.03]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Title */}
          <div className="flex-1 text-right sm:text-center text-[11px] text-white/20 font-mono">
            devang@mumbai — zsh
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12">
        {/* ══════ HERO ══════ */}
        <section id="home" className="relative min-h-[85vh] flex items-center py-16 md:py-20">
          {/* Background mandala */}
          <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.035] pointer-events-none select-none hidden lg:block">
            <Mandala size={650} />
          </div>

          <div className="relative z-10 w-full">
            <Prompt command="neofetch" />

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 mt-2">
              {/* ASCII art - desktop */}
              <FadeIn className="hidden lg:flex items-center justify-center flex-shrink-0" delay={0.2}>
                <div className="opacity-60 hover:opacity-90 transition-opacity duration-500">
                  <AsciiArt />
                </div>
              </FadeIn>

              {/* Info block */}
              <FadeIn className="flex flex-col gap-1">
                {/* Name */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-spacemono leading-tight rgb-fade">
                  Devang Yadav
                </h1>

                {/* Neofetch-style info */}
                <div className="mt-6 space-y-1.5 text-[15px]">
                  <div className="flex">
                    <span className="text-saffron w-24 sm:w-28 flex-shrink-0">Role</span>
                    <span className="text-white/25 mr-2">:</span>
                    <span className="text-emerald-400">Fullstack Developer</span>
                  </div>
                  <div className="flex">
                    <span className="text-saffron w-24 sm:w-28 flex-shrink-0">Location</span>
                    <span className="text-white/25 mr-2">:</span>
                    <span className="text-white/60">
                      Mumbai,{" "}
                      <span className="text-saffron">In</span>
                      <span className="text-white">di</span>
                      <span className="text-indian-green">a</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-saffron w-24 sm:w-28 flex-shrink-0">OS</span>
                    <span className="text-white/25 mr-2">:</span>
                    <span className="text-white/60">Fedora Linux</span>
                  </div>
                  <div className="flex">
                    <span className="text-saffron w-24 sm:w-28 flex-shrink-0">Shell</span>
                    <span className="text-white/25 mr-2">:</span>
                    <span className="text-white/60">zsh</span>
                  </div>
                  <div className="flex">
                    <span className="text-saffron w-24 sm:w-28 flex-shrink-0">Uptime</span>
                    <span className="text-white/25 mr-2">:</span>
                    <span className="text-white/60">since 2023</span>
                  </div>
                </div>

                {/* Color palette blocks (neofetch style) */}
                <div className="flex gap-1 mt-5">
                  {["#FF9933", "#ffffff", "#138808", "#000080", "#4ade80", "#22d3ee", "#f472b6", "#a78bfa"].map((c) => (
                    <div key={c} className="w-5 h-5 rounded-sm" style={{ backgroundColor: c, opacity: 0.7 }} />
                  ))}
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-5 mt-8">
                  {socials.map(({ icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-40 hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <img src={icon} alt={label} className="w-6 h-6" draggable="false" />
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Divider />

        {/* ══════ ABOUT ══════ */}
        <section>
          <Prompt command="cat ./about.md" />
          <FadeIn>
            <div className="border-l-2 border-saffron/20 pl-6 ml-1">
              <p className="text-white/60 text-lg leading-relaxed">
                Hey! My name is{" "}
                <span className="text-saffron">Devang Yadav</span>, a fullstack
                developer based in <span className="text-red-300">Mumbai</span>,{" "}
                <span className="text-saffron">In</span>
                <span className="text-white">di</span>
                <span className="text-indian-green">a</span>. My journey started in
                2023 learning {"<html>"}, CSS and eventually transitioning to
                Javascript and other frameworks for building web and mobile
                applications. One of the major resources that helped me a lot and
                I&apos;m thankful for was{" "}
                <span className="text-cyan-400">
                  The Odin Project &mdash; an opensource curriculum
                </span>{" "}
                for web development, the struggle was real with the Javascript
                section spending time thinking and tinkering around and
                understanding the concepts which at that time seemed hard but with
                persistency I overcame it.
                {!expandIntro && (
                  <span
                    className="inline-flex ml-2 px-3 py-0.5 text-sm bg-white/[0.04] border border-white/[0.08] rounded cursor-pointer hover:bg-white/[0.08] hover:text-saffron transition-all"
                    onClick={() => setIntro(true)}
                  >
                    more...
                  </span>
                )}
                {expandIntro && (
                  <>
                    {" "}
                    It helped me distinguish between project based learning and
                    tutorial hell early on. I always wanted to build stuff whether
                    it was apps, lego houses or my own physique since I was little
                    but never really got into it seriously until college &mdash;
                    instead that time was wasted playing Counter Strike 10k hours
                    lol, regrets but it was fun. I&apos;m always learning new
                    technologies and reading about finance, markets etc. My core
                    interests lie in Blockchain as I think Decentralization and
                    smart contracts are the future. Systems programming is
                    something I wanna get into and write my own Operating System
                    someday for fun, something like TempleOS. Reverse engineering
                    and malware analysis is another topic that I find interesting
                    to read about.
                    <span
                      className="inline-flex ml-2 px-3 py-0.5 text-sm bg-white/[0.04] border border-white/[0.08] rounded cursor-pointer hover:bg-white/[0.08] hover:text-red-400 transition-all"
                      onClick={() => setIntro(false)}
                    >
                      close
                    </span>
                  </>
                )}
              </p>
            </div>
          </FadeIn>
        </section>

        <Divider />

        {/* ══════ TECHSTACK ══════ */}
        <section id="skills">
          <Prompt command="dnf list installed --techstack" />
          <FadeIn>
            <div className="flex flex-wrap gap-2.5">
              {skills.map(({ name, icon }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.06,
                    backgroundColor: "rgba(255, 153, 51, 0.06)",
                    borderColor: "rgba(255, 153, 51, 0.25)",
                  }}
                  className="flex items-center gap-2.5 px-3.5 py-2 bg-white/[0.025] border border-white/[0.07] rounded-md text-sm text-white/60 hover:text-white/90 transition-colors cursor-default"
                >
                  <img src={icon} alt={name} className="w-5 h-5 object-contain" />
                  <span className="font-code">{name}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </section>

        <Divider />

        {/* ══════ EXPERIENCE ══════ */}
        <section id="experience">
          <Prompt command='git log --author="devang" --oneline' />
          <FadeIn>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-6">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-spacemono text-saffron text-glow-saffron">
                  Vighnotech
                </h3>
                <a
                  href="https://vighnotech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/25 hover:text-saffron transition"
                >
                  <SquareArrowOutUpRight size={16} />
                </a>
              </div>

              <div className="mt-2 text-xs font-mono space-y-0.5 text-white/30">
                <p>
                  <span className="text-yellow-400/50">commit</span> a3f2b1c
                </p>
                <p>
                  <span className="text-yellow-400/50">Date:</span>{" "}
                  Feb 2025 &mdash; Jul 2025
                </p>
              </div>

              <p className="mt-5 text-white/50 text-base leading-relaxed">
                My professional experience covers a range of projects, from
                developing user-facing applications using React and React Native
                to architecting the underlying backend services and CRM systems
                with Node.js and PostgreSQL. I was primarily responsible for
                creating and sustaining business automation tools and custom CRM
                solutions that drove efficiency for clients in various industries.
              </p>
            </div>
          </FadeIn>
        </section>

        <Divider />

        {/* ══════ PROJECTS ══════ */}
        <section id="projects">
          <Prompt command="find ./projects -type d | head" />
          <div className="space-y-6">
            {projects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 0.1}>
                <div className="relative overflow-hidden bg-white/[0.015] border border-white/[0.06] rounded-lg hover:border-saffron/15 transition-colors duration-500">
                  {/* Mini terminal chrome */}
                  <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.015]">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f57]/50" />
                      <div className="w-2 h-2 rounded-full bg-[#febc2e]/50" />
                      <div className="w-2 h-2 rounded-full bg-[#28c840]/50" />
                    </div>
                    <span className="text-white/20 text-xs font-mono ml-2">
                      ~/projects/{project.name.toLowerCase()}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-spacemono text-cyan-400">
                        {project.name}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/25 hover:text-saffron transition"
                      >
                        <SquareArrowOutUpRight size={18} />
                      </a>
                    </div>
                    <p className="text-white/45 text-[15px] leading-relaxed">
                      {project.desc}
                    </p>
                  </div>

                  <Meteors number={15} />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ══════ FOOTER ══════ */}
        <footer className="py-20 mt-20 border-t border-white/[0.05]">
          <Prompt command='echo "&#x0928;&#x092E;&#x0938;&#x094D;&#x0924;&#x0947; &#x1F64F;"' />
          <div className="ml-1 space-y-2">
            <p className="text-white/20 text-sm font-mono">
              Thanks for scrolling. Built with React + Vite on Fedora Linux.
            </p>
            <p className="text-white/10 text-xs font-mono">
              &copy; {new Date().getFullYear()} Devang Yadav &middot; Mumbai, India
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;

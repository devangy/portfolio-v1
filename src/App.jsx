import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  MapPin,
  ExternalLink,
  ArrowRight,
  Mail,
  Sparkles,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";

import { NeonBg } from "./components/NeonBg";
import { AsciiGlobe } from "./components/AsciiGlobe";
import { SkillsMarquee } from "./components/SkillsMarquee";
import { AmbientPlayer } from "./components/AmbientPlayer";

import "./index.css";

const SOCIALS = [
  { name: "GitHub", icon: Github, url: "https://github.com/devangy" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/devangy" },
  { name: "X", icon: Twitter, url: "https://x.com/devangy" },
  { name: "Email", icon: Mail, url: "mailto:d3vang2002@gmail.com" },
];

const PROJECTS = [
  {
    name: "Beacon",
    tag: "Cross-platform Chat",
    github: "https://github.com/devangy/Beacon",
    live: "https://winter-recipe-2421.d3vang2002.workers.dev",
    desc: "Cross-platform chat app with Post-Quantum E2EE (ML-KEM / AES-256-GCM), OAuth auth, Gemini AI chatbot, and Docker + Cloudflare Tunnel deployment.",
    bullets: [
      "Post-Quantum Cryptography via NIST-standard ML-KEM (Kyber) + AES-256-GCM for end-to-end encryption.",
      "Real-time Gemini AI chatbot with persona-based prompting for dynamic conversational responses.",
      "Containerized via Docker Compose + Cloudflare Tunnel; CI/CD pipeline with centralized logging on VPS.",
      "Redux for global state, React Query for server-state caching and optimized data fetching.",
    ],
    stack: ["React Native", "Node.js", "Socket.io", "PostgreSQL", "Prisma", "Gemini AI", "Docker"],
  },
  {
    name: "TradeFlow",
    tag: "Concurrent Data Pipeline",
    github: "https://github.com/devangy/market",
    live: "https://t.me/datalog02bot",
    desc: "Concurrent Go pipeline ingesting live contract prices from multiple prediction markets with deduplication and automated CI/CD.",
    bullets: [
      "Concurrent API polling via goroutines + channels with backoff retry logic to prevent rate limiting.",
      "Deduplication using hash maps and a sliding-window algorithm maintaining a 1-hour rolling state.",
      "Docker multi-stage builds and automated container builds with GitHub Actions self-hosted runner.",
    ],
    stack: ["Golang", "Goroutines", "Channels", "Telego", "Docker", "AWS"],
  },
];

const TABS = ["home", "portfolio", "contact"];

function App() {
  const [tab, setTab] = useState("home");
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white font-jetbrains overflow-x-clip selection:bg-cyan-400/30">
      <AmbientPlayer muted={!playing} />
      <NeonBg />

      <button
        onClick={() => setPlaying((p) => !p)}
        className="fixed top-5 left-5 z-50 w-11 h-11 rounded-full grid place-items-center bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-cyan-300/40 hover:bg-white/[0.08] transition-all"
        aria-label={playing ? "Stop music" : "Play music"}
      >
        {playing ? <Volume2 size={18} className="text-cyan-300" /> : <VolumeX size={18} className="text-white/70" />}
      </button>

      <FloatingNav active={tab} onChange={setTab} />

      <main className={`relative z-10 mx-auto px-4 sm:px-5 pt-24 sm:pt-28 pb-24 ${tab === "portfolio" ? "max-w-5xl" : "max-w-3xl"}`}>
        <AnimatePresence mode="wait">
          {tab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-5"
            >
              <ProfileCard />
              <SkillsMarquee />
              <MiniProfile />
              <FeaturedSection />
            </motion.div>
          )}

          {tab === "portfolio" && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-5"
            >
              <PageTitle title="Portfolio" />
              <ExperienceCard />
              <ProjectsCard />
            </motion.div>
          )}

          {tab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 sm:space-y-5"
            >
              <PageTitle title="Contact" />
              <ContactCard />
              <SocialGrid />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="pt-10 pb-2 text-center text-[11px] text-white/30 font-jetbrains">
          © {new Date().getFullYear()} Devang Yadav · forged in Mumbai ·{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
            keep building
          </span>
        </footer>
      </main>
    </div>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */

const FloatingNav = ({ active, onChange }) => (
  <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
    <div className="relative flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
      <span className="absolute inset-0 rounded-full pointer-events-none opacity-30 bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-sky-400/20 blur-xl" />
      {TABS.map((t) => {
        const isActive = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`relative px-5 sm:px-7 py-2 rounded-full text-[13px] capitalize transition-colors ${
              isActive ? "text-white" : "text-white/55 hover:text-white/85"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="navpill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 via-emerald-400/20 to-sky-400/20 border border-white/15"
              />
            )}
            <span className="relative font-jetbrains">{t}</span>
          </button>
        );
      })}
    </div>
  </nav>
);

/* ─────────────────────── REUSABLE CARD ─────────────────────── */

const Card = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)] overflow-hidden ${className}`}
  >
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    {children}
  </div>
);

const PageTitle = ({ title }) => (
  <div className="flex items-center justify-center gap-3 py-6">
    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399] animate-pulse" />
    <h1 className="text-3xl sm:text-4xl font-spacemono tracking-wider bg-gradient-to-r from-cyan-200 via-emerald-300 to-sky-300 bg-clip-text text-transparent">
      {title}
    </h1>
    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] animate-pulse" />
  </div>
);

/* ──────────────────────── PROFILE ───────────────────────── */

const ProfileCard = () => (
  <Card className="p-6 sm:p-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
      <div className="relative shrink-0 w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] grid place-items-center">
        <div className="absolute inset-0 rounded-full pointer-events-none opacity-70 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_70%)]" />
        <AsciiGlobe />
      </div>

      <div className="flex-1 min-w-0 w-full text-center sm:text-left">
        <h2 className="pb-1 text-[44px] sm:text-[64px] font-spacemono tracking-tight bg-gradient-to-br from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent leading-[1.15]">
          Devang
        </h2>

        <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-white/45 font-jetbrains">
          Fullstack Developer
        </div>

        <div className="mt-4 flex items-center justify-center sm:justify-start gap-2">
          {SOCIALS.map(({ name, icon: I, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="w-9 h-9 grid place-items-center rounded-full bg-white/[0.03] border border-white/[0.07] text-white/60 hover:text-white hover:border-cyan-300/50 hover:bg-cyan-400/[0.08] hover:shadow-[0_0_14px_rgba(34,211,238,0.35)] transition-all"
            >
              <I size={15} />
            </a>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-5 text-[12px] text-white/45 font-jetbrains">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-emerald-300/70" /> <span className="text-amber-200/80">Mumbai</span>, <span className="inline-flex"><span className="text-orange-400">In</span><span className="text-white">di</span><span className="text-emerald-400">a</span></span>
          </span>
          <span className="ml-auto inline-flex items-center gap-1 text-lime-300/80">
            <span className="w-1 h-1 rounded-full bg-lime-300 shadow-[0_0_8px_#bef264]" />
            uptime 89.99%
          </span>
        </div>
      </div>
    </div>
  </Card>
);

/* ──────────────────── MINI PROFILE STRIP ──────────────────── */

const MiniProfile = () => (
  <Card className="flex overflow-hidden">
    <div className="relative w-[88px] sm:w-[100px] shrink-0">
      <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-400/30 via-emerald-400/20 to-sky-500/30 blur-sm opacity-70" />
      <img
        src="/guts.png"
        alt="Devang"
        className="relative w-full h-full object-cover object-top grayscale contrast-[1.1] brightness-90"
        draggable="false"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-emerald-400/5 mix-blend-color-dodge pointer-events-none" />
    </div>

    <div className="flex-1 flex items-center gap-3 px-4 py-3 min-w-0">
      <div className="flex-1 min-w-0">
        <div className="text-[14px] text-white font-jetbrains leading-tight">Devang Yadav</div>
        <div className="mt-0.5 text-[11px] text-white/45 font-jetbrains">@devangy · fullstack</div>
        <div className="mt-1.5 flex items-center gap-1 text-[10.5px] text-lime-300/80 font-jetbrains">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shadow-[0_0_6px_#bef264]" />
          online
        </div>
      </div>
      <a
        href="https://github.com/devangy"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 text-[12px] px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400/15 via-emerald-400/15 to-sky-400/15 border border-white/15 hover:border-cyan-300/50 hover:shadow-[0_0_14px_rgba(34,211,238,0.3)] transition-all text-white/90 font-jetbrains whitespace-nowrap"
      >
        View Profile
      </a>
    </div>
  </Card>
);

/* ─────────────────── FEATURED PROJECTS ─────────────────── */

const FEATURED_ACCENTS = [
  { from: "from-cyan-400/30", to: "to-sky-500/30", text: "text-cyan-200" },
  { from: "from-emerald-400/30", to: "to-sky-500/30", text: "text-emerald-200" },
];

const FeaturedSection = () => (
  <div>
    <div className="px-1 mb-2 text-[10.5px] uppercase tracking-[0.28em] text-white/40 font-jetbrains">
      featured · projects
    </div>
    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
      {PROJECTS.slice(0, 2).map((p, i) => {
        const a = FEATURED_ACCENTS[i];
        return (
          <Card key={p.name} className="p-4 group hover:border-white/20 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.from} ${a.to} border border-white/[0.08] grid place-items-center font-spacemono text-[13px] ${a.text}`}>
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[14px] text-white font-jetbrains truncate">{p.name}</div>
                <div className="text-[11px] text-white/45 font-jetbrains">{p.tag}</div>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11.5px] px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-sky-400/10 border border-white/15 text-white/85 hover:border-cyan-300/50 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] transition"
              >
                View
              </a>
            </div>
          </Card>
        );
      })}
    </div>
  </div>
);

/* ─────────────────────── PORTFOLIO ─────────────────────── */

const SectionHead = ({ Icon, title, color = "emerald" }) => {
  const colors = {
    emerald: "text-emerald-300",
    cyan: "text-cyan-300",
    sky: "text-sky-300",
    lime: "text-lime-300",
  };
  return (
    <div className="flex items-center gap-2.5 mb-4 text-white/85">
      <Icon size={15} className={colors[color]} />
      <h3 className="text-[16px] font-spacemono tracking-wider">{title}</h3>
      <span className="flex-1 h-px bg-gradient-to-r from-white/[0.1] to-transparent ml-1" />
    </div>
  );
};

const ExperienceCard = () => (
  <Card className="p-6 sm:p-8">
    <SectionHead Icon={Briefcase} title="Experience" color="sky" />
    <div className="space-y-4">
      <ExpTile
        title="Fuzzynodes"
        role="Fullstack Developer"
        sub="March 2026 – Present · Remote"
        url="https://fuzzynodes.com"
        kind="Internship"
        accent="emerald"
        bullets={[
          "Built a doctor healthcare consultation webapp in Next.js + TypeScript with real-time video/chat teleconsultation.",
          "Integrated Razorpay for payments and event-driven email notifications via Inngest + Nodemailer.",
          "Developed AI-powered chat using OpenAI API for preliminary symptom diagnosis and patient analysis.",
        ]}
      />
      <ExpTile
        title="Vighnotech"
        role="Fullstack Developer Intern"
        sub="Feb 2025 – Jul 2025 · Mumbai, IN"
        url="https://vighnotech.com"
        kind="Internship"
        accent="cyan"
        bullets={[
          "Engineered custom ERP modules (IMS, Payroll, HR) in Next.js + TypeScript + Redux with SSR and React Query.",
          "Implemented dynamic dashboards with ShadCN; built RESTful APIs with Node/Express, JWT auth, and Drizzle ORM.",
          "Built a React Native finance app and integrated Razorpay; added WebSockets for real-time CRM dashboards.",
          "Architected CI/CD pipeline with GitHub Actions + Docker on AWS EC2 for high availability.",
        ]}
      />
    </div>
  </Card>
);

const KIND_COLORS = {
  cyan: "bg-cyan-400/10 border-cyan-400/30 text-cyan-200",
  emerald: "bg-emerald-400/10 border-emerald-400/30 text-emerald-200",
  sky: "bg-sky-400/10 border-sky-400/30 text-sky-200",
};

const PREVIEW_GRADIENTS = {
  cyan: "from-cyan-400/30 via-cyan-500/15 to-sky-500/20",
  emerald: "from-emerald-400/30 via-emerald-500/15 to-cyan-500/20",
  sky: "from-sky-400/30 via-sky-500/15 to-emerald-500/20",
};

const PREVIEW_TEXT = {
  cyan: "text-cyan-200",
  emerald: "text-emerald-200",
  sky: "text-sky-200",
};

const ACCENT_BAR = {
  cyan: "from-cyan-400/70 via-cyan-300/40 to-sky-400/5",
  emerald: "from-emerald-400/70 via-emerald-300/40 to-cyan-400/5",
  sky: "from-sky-400/70 via-sky-300/40 to-emerald-400/5",
};

const ACCENT_DOT = {
  cyan: "bg-cyan-400",
  emerald: "bg-emerald-400",
  sky: "bg-sky-400",
};

const ExpTile = ({ title, role, sub, bullets = [], url, kind, accent = "cyan" }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block rounded-xl p-5 sm:p-6 pl-6 sm:pl-7 bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] transition-all overflow-hidden"
  >
    <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${ACCENT_BAR[accent]}`} />
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-[19px] sm:text-[22px] text-white font-jetbrains leading-snug">{title}</div>
        {role && (
          <div className={`mt-0.5 text-[15px] sm:text-[16px] font-jetbrains ${PREVIEW_TEXT[accent]}`}>
            {role}
          </div>
        )}
        <div className="mt-1 text-[13px] text-white/40 font-jetbrains">{sub}</div>
      </div>
      <ExternalLink
        size={15}
        className="shrink-0 mt-1 text-white/25 group-hover:text-cyan-300 group-hover:rotate-12 transition"
      />
    </div>

    {bullets.length > 0 && (
      <>
        <div className="mt-4 border-t border-white/[0.07]" />
        <ul className="mt-4 space-y-3.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[14px] sm:text-[15px] text-white/72 leading-relaxed">
              <span className={`mt-[8px] shrink-0 w-2 h-2 rounded-full ${ACCENT_DOT[accent]} opacity-70 shadow-[0_0_6px_currentColor]`} />
              {b}
            </li>
          ))}
        </ul>
      </>
    )}

    <div className="mt-5">
      <span className={`inline-block px-2.5 py-1 text-[11px] uppercase tracking-wider rounded-md border font-jetbrains ${KIND_COLORS[accent]}`}>
        {kind}
      </span>
    </div>
  </a>
);

const PROJECT_ACCENTS = ["cyan", "emerald", "sky"];

const PROJECT_GLYPHS = ["◉", "◈", "✦"];

const ProjectsCard = () => (
  <Card className="p-5 sm:p-6">
    <SectionHead Icon={Sparkles} title="Projects" color="lime" />
    <div className="space-y-3">
      {PROJECTS.map((p, i) => {
        const accent = PROJECT_ACCENTS[i % 3];
        const glyph = PROJECT_GLYPHS[i % PROJECT_GLYPHS.length];
        const chipColor =
          accent === "cyan"
            ? { text: "text-cyan-300", shadow: "rgba(34,211,238,0.5)", border: "border-cyan-400/25", bg: "bg-cyan-400/[0.06]" }
            : accent === "emerald"
            ? { text: "text-emerald-300", shadow: "rgba(52,211,153,0.5)", border: "border-emerald-400/25", bg: "bg-emerald-400/[0.06]" }
            : { text: "text-sky-300", shadow: "rgba(56,189,248,0.5)", border: "border-sky-400/25", bg: "bg-sky-400/[0.06]" };
        return (
          <div
            key={p.name}
            className="group flex gap-4 rounded-xl p-3 sm:p-4 bg-white/[0.02] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04] transition-all"
          >
            <div className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 self-start rounded-lg overflow-hidden border border-white/[0.08] bg-gradient-to-br ${PREVIEW_GRADIENTS[accent]} grid place-items-center`}>
              <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:10px_10px]" />
              <span className={`relative text-3xl sm:text-4xl ${PREVIEW_TEXT[accent]} drop-shadow-[0_0_12px_currentColor]`}>
                {glyph}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <span
                  className={`text-[12px] uppercase tracking-[0.18em] font-jetbrains ${
                    accent === "cyan" ? "text-cyan-300" : accent === "emerald" ? "text-emerald-300" : "text-sky-300"
                  }`}
                >
                  {p.tag}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-jetbrains bg-white/[0.04] border border-white/[0.1] text-white/65 hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
                  >
                    <Github size={11} /> GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-jetbrains border transition-all ${chipColor.bg} ${chipColor.border} ${chipColor.text} hover:opacity-90`}
                    style={{ textShadow: `0 0 8px ${chipColor.shadow}` }}
                  >
                    <ExternalLink size={11} /> Live
                  </a>
                </div>
              </div>
              <div className="mt-1 text-[19px] text-white font-spacemono">{p.name}</div>
              <p className="mt-1 text-[15px] text-white/55 leading-relaxed">{p.desc}</p>
              {p.bullets && (
                <>
                  <div className="mt-3 border-t border-white/[0.07]" />
                  <ul className="mt-3 space-y-2.5">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-[16px] text-white/65 leading-relaxed">
                        <span className={`mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full ${ACCENT_DOT[accent]} opacity-65 shadow-[0_0_5px_currentColor]`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className={`text-[13px] px-3 py-1 rounded-full border font-jetbrains ${chipColor.text} ${chipColor.border} ${chipColor.bg}`}
                    style={{ textShadow: `0 0 8px ${chipColor.shadow}` }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Card>
);

/* ──────────────────────── CONTACT ──────────────────────── */

const ContactCard = () => (
  <Card className="p-6 sm:p-8">
    <SectionHead Icon={Send} title="Get in touch" color="emerald" />
    <p className="text-[13.5px] text-white/65 leading-relaxed">
      Open to fullstack roles, freelance projects and collabs on weird ideas. Reply within
      a day usually — sometimes faster if I&apos;m awake.
    </p>
    <div className="mt-5 flex flex-col sm:flex-row gap-3">
      <a
        href="mailto:d3vang2002@gmail.com"
        className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br from-cyan-400/15 via-emerald-400/15 to-sky-400/10 border border-white/15 hover:border-cyan-300/50 hover:shadow-[0_0_24px_rgba(52,211,153,0.25)] transition-all"
      >
        <span className="w-9 h-9 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 border border-white/15">
          <Mail size={15} className="text-cyan-200" />
        </span>
        <span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-white/45 font-jetbrains">
            email
          </span>
          <span className="block text-[14px] text-white font-jetbrains">
            d3vang2002@gmail.com
          </span>
        </span>
        <ArrowRight
          size={14}
          className="ml-3 text-white/40 group-hover:translate-x-1 group-hover:text-cyan-300 transition"
        />
      </a>

      <div className="flex-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4 flex items-center gap-3">
        <span className="w-9 h-9 grid place-items-center rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
        </span>
        <span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-white/45 font-jetbrains">
            status
          </span>
          <span className="block text-[14px] text-white font-jetbrains">
            available · accepting work
          </span>
        </span>
      </div>
    </div>
  </Card>
);

const SOCIAL_HOVERS = {
  GitHub: "hover:border-sky-400/40 hover:bg-sky-500/[0.06] hover:text-sky-200 hover:shadow-[0_0_18px_rgba(14,165,233,0.3)]",
  LinkedIn: "hover:border-cyan-400/40 hover:bg-cyan-500/[0.06] hover:text-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.3)]",
  X: "hover:border-emerald-400/40 hover:bg-emerald-500/[0.06] hover:text-emerald-200 hover:shadow-[0_0_18px_rgba(52,211,153,0.3)]",
  Email: "hover:border-lime-400/40 hover:bg-lime-500/[0.06] hover:text-lime-200 hover:shadow-[0_0_18px_rgba(190,242,100,0.3)]",
};

const SocialGrid = () => (
  <Card className="p-5 sm:p-6">
    <SectionHead Icon={Sparkles} title="Find me online" color="cyan" />
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {SOCIALS.map(({ name, icon: I, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-white/65 transition-all ${SOCIAL_HOVERS[name]}`}
        >
          <I size={20} className="transition" />
          <span className="text-[11px] font-jetbrains">{name}</span>
        </a>
      ))}
    </div>
  </Card>
);

export default App;

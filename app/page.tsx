"use client";

import Image from "next/image";
import { useEffect } from "react";
import { animate, stagger } from "animejs";

const heroWord = "SYSTEM MAKER";

const companies = [
  {
    label: "01 / first orbit",
    name: "AI First",
    role: "AI Engineer Intern",
    href: "https://aifirst.ph/",
    stat: "AI workflow support",
    copy:
      "My first engineering role. I helped repair client AI workflows, debug automation issues, and turn loose business requests into practical internal tools and client-facing solutions."
  },
  {
    label: "02 / fraud light",
    name: "Boost Capital",
    role: "AI QA Engineer",
    href: "https://www.boostkh.com/",
    stat: "QA automation",
    copy:
      "I worked on QA for AI Parser Studio, a document OCR and fraud-detection system. I automated checks through GitHub Actions, wrote Pytest suites, used Playwright for browser testing, and built a Python + Streamlit fake-document generator to test AI model extraction faster."
  },
  {
    label: "03 / current forge",
    name: "HeyApril",
    role: "Full-Stack Developer",
    href: "https://heyapril.ai/",
    stat: "Next.js tax platform",
    copy:
      "I build the HeyApril web app with Next.js. I use PostHog for product tracking, React Query for caching, Vercel AI SDK for AI flows, and AWS Textract for document extraction. I also work on deterministic tax analysis, auth, workflow simplification, refactors, and end-to-end product features for creators and CPAs."
  },
];

const projects = [
  {
    label: "benchmark harness",
    name: "Zenin",
    href: "https://github.com/mr-jones123/zenin",
    copy:
      "A local arena for CLI coding agents, built around DeepSWE-style tasks, isolated workspaces, objective grading, JSONL trails, and HyperAgents-style child variant proposals. It judges the instructions that judge the agents.",
    meta: "claude code / pi / codex / hermes",
  },
  {
    label: "pi extension suite",
    name: "Toji",
    href: "https://github.com/mr-jones123/toji",
    copy:
      "My personal harness amplifier. Graph memory, persistent goals, todos, AI-to-AI comms, blast radius queries, and codebase indexing, all wired to make every agent pass sharper signals back to me.",
    meta: "sqlite / tree-sitter / mcp / pi",
  },
  {
    label: "agentic slack",
    name: "OctoAI",
    href: "https://github.com/mr-jones123/iforgot-OctoAI",
    copy:
      "An Electron command deck where I become the product manager and AI agents become the dev floor. Kanban cards spawn Claude Code, Codex, Gemini, and Amp into worktrees, terminals, Slack-style channels, review gates, schedules, and cost intel.",
    meta: "electron / xterm / node-pty / worktrees",
  },
];

const signals = [
  "deployments as brushstrokes",
  "fraud fields preserved",
  "tax flows secured",
  "agent harnesses measured",
  "agentic slack commanded",
  "instructions stress-tested",
];

export default function Home() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      document.documentElement.classList.add("motion-ready");
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const intro = animate(".wordmark-char", {
      y: ["110%", "0%"],
      opacity: [0, 1],
      duration: 760,
      delay: stagger(34),
      ease: "outCubic",
    });

    const reveals = animate(".reveal", {
      y: [24, 0],
      opacity: [0, 1],
      clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
      duration: 620,
      delay: stagger(90),
      ease: "outCubic",
    });

    const pixels = animate(".signal-pixel", {
      opacity: [0.2, 1],
      scale: [1, 1.18],
      duration: 520,
      delay: stagger(120),
      loop: true,
      alternate: true,
      ease: "steps(2)",
    });

    return () => {
      intro.revert();
      reveals.revert();
      pixels.revert();
    };
  }, []);

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#EFF3F1] text-[#050505]">
      <Header />
      <section id="myth" className="border-b border-[#D2DAD5] px-[clamp(1.25rem,4vw,3rem)] py-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1440px]">
          <p className="reveal mb-4 font-mono text-sm lowercase tracking-[0.24em] text-[#5D6862]">
            dev.myth() / engineer as maker / 2026
          </p>
          <h1
            className="font-mono text-[clamp(3.25rem,15vw,13rem)] font-bold uppercase leading-[0.82] tracking-[-0.08em]"
            aria-label={heroWord}
          >
            {heroWord.split("").map((char, index) => (
              <span key={`${char}-${index}`} className="wordmark-char inline-block opacity-0">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <div className="mt-8 grid border border-[#D2DAD5] md:grid-cols-[1.15fr_0.85fr]">
            <article className="reveal border-b border-[#D2DAD5] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
              <p className="max-w-[13ch] font-serif text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.055em]">
                The tech universe is my canvas.
              </p>
              <p className="mt-8 max-w-[45ch] font-serif text-[clamp(1.35rem,2.5vw,2.25rem)] leading-[1.08] tracking-[-0.025em]">
                From my fingertips, I paint star systems. Each deployment lands as a brushstroke, each refactor as gravity corrected, each secure flow as a constellation brought under command.
              </p>
            </article>

            <aside className="grid grid-rows-[1fr_auto]">
              <div className="reveal min-h-[18rem] border-b border-[#D2DAD5] p-[clamp(1.25rem,4vw,3rem)]">
                <div className="mb-10 flex gap-2">
                  {[0, 1, 2, 3].map((item) => (
                    <span key={item} className="signal-pixel size-3 bg-[#078D32]" />
                  ))}
                </div>
                <p className="font-mono text-sm lowercase tracking-[0.2em] text-[#5D6862]">who am i?</p>
                <p className="mt-5 max-w-[24ch] font-serif text-3xl leading-[1.02] tracking-[-0.04em] md:text-5xl">
                  My name is <strong className="font-bold">Xynil Jhed Lacap</strong>, a <strong className="flag-word" aria-label="Filipino"><span className="flag-blue">Fili</span><span className="flag-red">pino</span></strong> developer. I build tax software, AI systems, and agent harnesses that turn rough ideas into working products.
                </p>
              </div>
              <a
                className="group flex min-h-16 items-center justify-between bg-[#078D32] px-6 py-5 font-mono text-base text-white transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] active:translate-y-px"
                href="https://github.com/mr-jones123"
                target="_blank"
                rel="noreferrer"
              >
                I came. I saw. I create.
                <span className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <Marquee />

      <section id="companies" className="border-b border-[#D2DAD5] px-[clamp(1.25rem,4vw,3rem)] pt-[clamp(2rem,5vw,4rem)]">
        <div className="mx-auto grid max-w-[1440px] border-x border-[#D2DAD5] lg:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal flex flex-col border-b border-[#D2DAD5] p-[clamp(1.25rem,4vw,3rem)] lg:border-b-0 lg:border-r">
            <p className="font-mono text-sm lowercase tracking-[0.24em] text-[#5D6862]">career.log()</p>
            <h2 className="mt-6 max-w-[8ch] font-serif text-[clamp(2.75rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.055em]">
              Three engines, one ascent.
            </h2>
            <PixelArt />
          </div>
          <div>
            {companies.map((company) => (
              <CompanyRow key={company.name} company={company} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-[#D2DAD5] px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(2rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1440px]">
          <div className="reveal grid border border-[#D2DAD5] md:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-[#D2DAD5] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
              <p className="font-mono text-sm lowercase tracking-[0.24em] text-[#5D6862]">self.projects()</p>
              <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.05em]">
                Harness engineering for sharper machines.
              </h2>
            </div>
            <p className="p-[clamp(1.25rem,4vw,3rem)] font-serif text-[clamp(1.45rem,3vw,3.25rem)] leading-[1.02] tracking-[-0.04em]">
              I do not just ask agents to code. I build arenas, memory, contracts, command boards, and peer channels so their work can be measured, improved, and made less theatrical than their confidence.
            </p>
          </div>

          <div className="mt-8 grid gap-px bg-[#D2DAD5] md:grid-cols-2">
            {projects.map((project) => (
              <ProjectPanel key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
        <div className="reveal mx-auto grid max-w-[1440px] border border-[#D2DAD5] md:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-[#D2DAD5] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
            <p className="font-mono text-sm lowercase tracking-[0.24em] text-[#5D6862]">next.deployment()</p>
            <p className="mt-6 max-w-[18ch] font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.94] tracking-[-0.055em]">
              I came. I saw. I create.
            </p>
          </div>
          <div className="flex flex-col justify-between p-[clamp(1.25rem,4vw,3rem)]">
            <p className="max-w-[34ch] font-serif text-2xl leading-[1.08] tracking-[-0.03em]">
              I like systems with teeth: AI tools, tax engines, document intelligence, and agent infrastructure that can survive contact with real users.
            </p>
            <a
              className="group mt-12 flex min-h-16 items-center justify-between bg-[#050505] px-6 py-5 font-mono text-base text-[#EFF3F1] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] active:translate-y-px"
              href="https://github.com/mr-jones123"
              target="_blank"
              rel="noreferrer"
            >
              Open Profile
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#D2DAD5] bg-[#EFF3F1]/95 font-mono text-sm lowercase tracking-[0.12em] text-[#050505] backdrop-blur-sm">
      <nav className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] border-x border-[#D2DAD5] md:grid-cols-[1.2fr_repeat(4,auto)]">
        <a className="flex min-h-14 items-center border-r border-[#D2DAD5] px-5" href="#myth">
          mr-jones / profile
        </a>
        <div className="hidden md:contents">
          <NavLink href="#companies">companies</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#contact">contact</NavLink>
          <a className="flex min-h-14 items-center bg-[#078D32] px-5 text-white" href="https://github.com/mr-jones123" target="_blank" rel="noreferrer">
            github ↗
          </a>
        </div>
        <details className="relative md:hidden">
          <summary className="flex min-h-14 cursor-pointer list-none items-center px-5 marker:hidden">menu</summary>
          <div className="absolute right-0 top-full grid w-56 border border-[#D2DAD5] bg-[#EFF3F1]">
            <a className="border-b border-[#D2DAD5] px-5 py-4" href="#companies">companies</a>
            <a className="border-b border-[#D2DAD5] px-5 py-4" href="#projects">projects</a>
            <a className="px-5 py-4" href="#contact">contact</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="flex min-h-14 items-center border-r border-[#D2DAD5] px-5 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#E4EAE6]" href={href}>
      {children}
    </a>
  );
}

function PixelArt() {
  const pixels = [
    "left-[0%] top-[0%] bg-[#078D32]",
    "left-[60%] top-[9%] bg-[#BBA72F]",
    "left-[20%] top-[24%] bg-[#211A33]",
    "left-[40%] top-[36%] bg-[#5B3DF5]",
    "left-[80%] top-[49%] bg-[#83E88F]",
    "left-[20%] top-[64%] bg-[#211A33]",
    "left-[60%] top-[78%] bg-[#078D32]",
  ];

  return (
    <div className="pixel-field relative mt-12 min-h-[44rem] flex-1 overflow-hidden border border-[#D2DAD5] bg-[#E4EAE6]" aria-hidden="true">
      {pixels.map((pixel) => (
        <span key={pixel} className={`absolute aspect-square w-1/5 border border-[#D2DAD5] ${pixel}`} />
      ))}
    </div>
  );
}

function CompanyRow({ company }: { company: (typeof companies)[number] }) {
  return (
    <article className="reveal grid border-b border-[#D2DAD5] last:border-b-0 md:grid-cols-[0.95fr_1.05fr]">
      <div className="border-b border-[#D2DAD5] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
        <p className="font-mono text-sm lowercase tracking-[0.2em] text-[#5D6862]">{company.label}</p>
        <h3 className="mt-8 font-serif text-[clamp(2.25rem,4.5vw,4.75rem)] leading-[0.95] tracking-[-0.055em]">
          {company.name}
        </h3>
        <p className="mt-4 font-mono text-sm lowercase tracking-[0.16em] text-[#5D6862]">{company.role}</p>
      </div>
      <div className="flex flex-col justify-between p-[clamp(1.25rem,4vw,3rem)]">
        <p className="font-serif text-[clamp(1.35rem,2.4vw,2.35rem)] leading-[1.08] tracking-[-0.035em]">{company.copy}</p>
        <div className="mt-10 grid grid-cols-[1fr_auto] border border-[#D2DAD5] font-mono text-sm lowercase tracking-[0.12em]">
          <span className="p-4 text-[#5D6862]">{company.stat}</span>
          <a className="border-l border-[#D2DAD5] p-4 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#E4EAE6]" href={company.href} target="_blank" rel="noreferrer">
            visit ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectPanel({ project }: { project: (typeof projects)[number] }) {
  const isOcto = project.name === "OctoAI";

  return (
    <article className={`reveal bg-[#EFF3F1] ${isOcto ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}>
      <div className="p-[clamp(1.25rem,4vw,3rem)]">
        <p className="font-mono text-sm lowercase tracking-[0.2em] text-[#5D6862]">{project.label}</p>
        <h3 className="mt-10 font-mono text-[clamp(3rem,7vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.08em]">
          {project.name}
        </h3>
        <p className="mt-8 max-w-[44ch] font-serif text-[clamp(1.3rem,2.5vw,2.3rem)] leading-[1.08] tracking-[-0.035em]">{project.copy}</p>
        <div className="mt-12 grid border border-[#D2DAD5] font-mono text-sm lowercase tracking-[0.12em] md:grid-cols-[1fr_auto]">
          <span className="border-b border-[#D2DAD5] p-4 text-[#5D6862] md:border-b-0 md:border-r">{project.meta}</span>
          <a className="p-4 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#E4EAE6]" href={project.href} target="_blank" rel="noreferrer">
            repository ↗
          </a>
        </div>
      </div>
      {isOcto ? (
        <div className="relative min-h-[28rem] overflow-hidden border-t border-[#D2DAD5] bg-[#D2DAD5] md:border-l md:border-t-0">
          <Image src="/trunks.png" alt="Pixel art of Trunks powering up" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-center mix-blend-multiply contrast-125" />
        </div>
      ) : null}
    </article>
  );
}

function Marquee({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`marquee border-b border-[#D2DAD5] font-mono text-sm lowercase tracking-[0.16em] ${compact ? "h-10" : "h-14"}`} aria-hidden="true">
      <div className="marquee-track h-full">
        {[...signals, ...signals].map((signal, index) => (
          <span key={`${signal}-${index}`} className={index % 4 === 0 ? "bg-[#5B3DF5] text-white" : index % 4 === 1 ? "bg-[#83E88F]" : index % 4 === 2 ? "bg-[#BBA72F]" : "bg-[#211A33] text-white"}>
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}

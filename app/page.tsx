"use client";

import Image from "next/image";
import { useEffect } from "react";
import { animate, stagger, steps } from "animejs";

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
    label: "speech dataset cli",
    name: "dka",
    href: "https://github.com/mr-jones123/dka",
    copy:
      "A Python CLI for turning raw Philippine-language speech recordings and transcripts into clean WAV clips, normalized metadata, train/dev/test splits, quality reports, dataset cards, and Hugging Face-ready ASR exports.",
    meta: "python / uv / ffmpeg / hugging face",
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
    const saved = localStorage.getItem("theme");
    const theme = saved === "dark" || saved === "light"
      ? saved
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;

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
      ease: steps(2),
    });

    return () => {
      intro.revert();
      reveals.revert();
      pixels.revert();
    };
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  };

  return (
    <main className="min-h-dvh overflow-x-clip bg-[var(--canvas)] text-[var(--ink)]">
      <Header onThemeToggle={toggleTheme} />
      <section id="myth" className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,6vw,5rem)]">
        <div className="mx-auto max-w-[1440px]">
          <p className="reveal mb-4 font-mono text-sm lowercase tracking-[0.24em] text-[var(--muted)]">
            dev.myth() / engineer as maker / 2026
          </p>
          <h1
            className="flex flex-wrap gap-x-[0.24em] font-mono text-[clamp(2.35rem,10vw,13rem)] font-bold uppercase leading-[0.82] tracking-[-0.025em] md:text-[clamp(3.25rem,15vw,13rem)] md:gap-x-[0.14em] md:tracking-[-0.065em]"
            aria-label={heroWord}
          >
            {heroWord.split(" ").map((word) => (
              <span key={word} className="inline-block whitespace-nowrap">
                {word.split("").map((char, index) => (
                  <span key={`${word}-${char}-${index}`} className="wordmark-char inline-block opacity-0">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="mt-10 grid border border-[var(--grid)] md:grid-cols-[1.15fr_0.85fr]">
            <article className="reveal border-b border-[var(--grid)] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
              <p className="max-w-[13ch] font-serif text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.055em]">
                The tech universe is my canvas.
              </p>
              <p className="mt-8 max-w-[45ch] font-serif text-[clamp(1.35rem,2.5vw,2.25rem)] leading-[1.08] tracking-[-0.025em]">
                From my fingertips, I paint star systems. Each deployment lands as a brushstroke, each refactor as gravity corrected, each secure flow as a constellation brought under command.
              </p>
            </article>

            <aside className="grid grid-rows-[1fr_auto]">
              <div className="reveal min-h-[18rem] border-b border-[var(--grid)] p-[clamp(1.25rem,4vw,3rem)]">
                <div className="mb-10 flex gap-2">
                  {[0, 1, 2, 3].map((item) => (
                    <span key={item} className="signal-pixel size-3 bg-[var(--accent)]" />
                  ))}
                </div>
                <p className="font-mono text-sm lowercase tracking-[0.2em] text-[var(--muted)]">who am i?</p>
                <p className="mt-5 max-w-[24ch] font-serif text-3xl leading-[1.02] tracking-[-0.04em] md:text-5xl">
                  My name is <strong className="font-bold">Xynil Jhed Lacap</strong>, a <strong className="flag-word" aria-label="Filipino"><span className="flag-blue">Fili</span><span className="flag-red">pino</span></strong> developer. I build tax software, AI systems, and agent harnesses that turn rough ideas into working products.
                </p>
              </div>
              <a
                className="group flex min-h-16 items-center justify-between bg-[var(--accent)] px-6 py-5 font-mono text-base text-white transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] active:translate-y-px"
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

      <section id="companies" className="px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto grid max-w-[1440px] border border-[var(--grid)] lg:grid-cols-[0.7fr_1.3fr]">
          <div className="reveal flex flex-col border-b border-[var(--grid)] p-[clamp(1.25rem,4vw,3rem)] lg:border-b-0 lg:border-r">
            <p className="font-mono text-sm lowercase tracking-[0.24em] text-[var(--muted)]">career.log()</p>
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

      <section id="projects" className="px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto max-w-[1440px] border-x border-b border-[var(--grid)]">
          <div className="reveal grid border-b border-[var(--grid)] md:grid-cols-[1fr_1.4fr]">
            <div className="border-b border-[var(--grid)] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
              <p className="font-mono text-sm lowercase tracking-[0.24em] text-[var(--muted)]">self.projects()</p>
              <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.05em]">
                Harness engineering for sharper machines.
              </h2>
            </div>
            <p className="p-[clamp(1.25rem,4vw,3rem)] font-serif text-[clamp(1.45rem,3vw,3.25rem)] leading-[1.02] tracking-[-0.04em]">
              I do not just ask agents to code. I build arenas, memory, contracts, command boards, and peer channels so their work can be measured, improved, and made less theatrical than their confidence.
            </p>
          </div>

          <div className="grid items-stretch md:grid-cols-2 [&>article]:border-b [&>article]:border-[var(--grid)] md:[&>article:nth-child(odd)]:border-r">
            {projects.map((project) => (
              <ProjectPanel key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
        <div className="reveal mx-auto grid max-w-[1440px] border border-[var(--grid)] md:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-[var(--grid)] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
            <p className="font-mono text-sm lowercase tracking-[0.24em] text-[var(--muted)]">next.deployment()</p>
            <p className="mt-6 max-w-[18ch] font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.94] tracking-[-0.055em]">
              I came. I saw. I create.
            </p>
          </div>
          <div className="flex flex-col justify-between p-[clamp(1.25rem,4vw,3rem)]">
            <p className="max-w-[34ch] font-serif text-2xl leading-[1.08] tracking-[-0.03em]">
              I like systems with teeth: AI tools, tax engines, document intelligence, and agent infrastructure that can survive contact with real users.
            </p>
            <a
              className="group mt-12 flex min-h-16 items-center justify-between bg-[var(--ink)] px-6 py-5 font-mono text-base text-[var(--canvas)] transition-transform duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] active:translate-y-px"
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

function Header({ onThemeToggle }: { onThemeToggle: () => void }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--grid)] bg-[var(--canvas)]/95 font-mono text-sm lowercase tracking-[0.12em] text-[var(--ink)] backdrop-blur-sm">
      <nav className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] border-x border-[var(--grid)] md:grid-cols-[1.2fr_repeat(5,auto)]">
        <a className="flex min-h-14 items-center border-r border-[var(--grid)] px-5" href="#myth">
          mr-jones / profile
        </a>
        <div className="hidden md:contents">
          <NavLink href="#companies">companies</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#contact">contact</NavLink>
          <a className="flex min-h-14 items-center bg-[var(--accent)] px-5 text-white" href="https://github.com/mr-jones123" target="_blank" rel="noreferrer">
            github ↗
          </a>
          <button className="min-h-14 border-l border-[var(--grid)] px-5 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--surface)]" type="button" onClick={onThemeToggle}>
            mode
          </button>
        </div>
        <details className="relative md:hidden">
          <summary className="flex min-h-14 cursor-pointer list-none items-center px-5 marker:hidden">menu</summary>
          <div className="absolute right-0 top-full grid w-56 border border-[var(--grid)] bg-[var(--canvas)]">
            <a className="border-b border-[var(--grid)] px-5 py-4" href="#companies">companies</a>
            <a className="border-b border-[var(--grid)] px-5 py-4" href="#projects">projects</a>
            <a className="border-b border-[var(--grid)] px-5 py-4" href="#contact">contact</a>
            <button className="px-5 py-4 text-left" type="button" onClick={onThemeToggle}>
              mode
            </button>
          </div>
        </details>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="flex min-h-14 items-center border-r border-[var(--grid)] px-5 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--surface)]" href={href}>
      {children}
    </a>
  );
}

function PixelArt() {
  const colors = ["bg-[var(--accent)]", "bg-[var(--rust)]", "bg-[var(--ochre)]", "bg-[var(--teal)]", "bg-[var(--plum)]"];

  return (
    <div className="mt-12 grid flex-1 grid-cols-4 border border-[var(--grid)] bg-[var(--surface)]" aria-hidden="true">
      {Array.from({ length: 64 }, (_, index) => {
        const show = [0, 6, 9, 15, 20, 23, 29, 34, 38, 45, 50, 57, 63].includes(index);
        return <span key={index} className={`aspect-square border-r border-b border-[var(--grid)] ${show ? colors[index % colors.length] : ""}`} />;
      })}
    </div>
  );
}

function CompanyRow({ company }: { company: (typeof companies)[number] }) {
  return (
    <article className="reveal grid border-b border-[var(--grid)] last:border-b-0 md:grid-cols-[0.95fr_1.05fr]">
      <div className="border-b border-[var(--grid)] p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
        <p className="font-mono text-sm lowercase tracking-[0.2em] text-[var(--muted)]">{company.label}</p>
        <h3 className="mt-8 font-serif text-[clamp(2.25rem,4.5vw,4.75rem)] leading-[0.95] tracking-[-0.055em]">
          {company.name}
        </h3>
        <p className="mt-4 font-mono text-sm lowercase tracking-[0.16em] text-[var(--muted)]">{company.role}</p>
      </div>
      <div className="flex flex-col justify-between p-[clamp(1.25rem,4vw,3rem)]">
        <p className="font-serif text-[clamp(1.35rem,2.4vw,2.35rem)] leading-[1.08] tracking-[-0.035em]">{company.copy}</p>
        <div className="mt-10 grid grid-cols-[1fr_auto] border border-[var(--grid)] font-mono text-sm lowercase tracking-[0.12em]">
          <span className="p-4 text-[var(--muted)]">{company.stat}</span>
          <a className="border-l border-[var(--grid)] p-4 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--surface)]" href={company.href} target="_blank" rel="noreferrer">
            visit ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectPanel({ project }: { project: (typeof projects)[number] }) {
  const hasTrunks = project.name === "dka";

  return (
    <article className="reveal flex h-full flex-col bg-[var(--canvas)]">
      <div className="p-[clamp(1.25rem,4vw,3rem)]">
        <p className="font-mono text-sm lowercase tracking-[0.2em] text-[var(--muted)]">{project.label}</p>
        <h3 className="mt-10 font-mono text-[clamp(3rem,7vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.08em]">
          {project.name}
        </h3>
        <p className="mt-8 max-w-[44ch] font-serif text-[clamp(1.3rem,2.5vw,2.3rem)] leading-[1.08] tracking-[-0.035em]">{project.copy}</p>
        <div className="mt-12 grid border border-[var(--grid)] font-mono text-sm lowercase tracking-[0.12em] md:grid-cols-[1fr_auto]">
          <span className="border-b border-[var(--grid)] p-4 text-[var(--muted)] md:border-b-0 md:border-r">{project.meta}</span>
          <a className="p-4 transition-colors duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[var(--surface)]" href={project.href} target="_blank" rel="noreferrer">
            repository ↗
          </a>
        </div>
      </div>
      {hasTrunks ? (
        <div className="mt-auto border-t border-[var(--grid)] bg-[var(--grid)]">
          <Image src="/trunks.png" alt="Pixel art of Trunks powering up" width={2048} height={2048} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full contrast-125" />
        </div>
      ) : null}
    </article>
  );
}

function Marquee({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`marquee border-b border-[var(--grid)] font-mono text-sm lowercase tracking-[0.16em] ${compact ? "h-10" : "h-14"}`} aria-hidden="true">
      <div className="marquee-track h-full">
        {[...signals, ...signals].map((signal, index) => (
          <span key={`${signal}-${index}`} className={index % 4 === 0 ? "bg-[var(--rust)] text-white" : index % 4 === 1 ? "bg-[var(--ochre)]" : index % 4 === 2 ? "bg-[var(--teal)]" : "bg-[var(--plum)] text-white"}>
            {signal}
          </span>
        ))}
      </div>
    </div>
  );
}

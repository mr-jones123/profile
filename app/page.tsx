"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { animate, createScope, createTimer, onScroll, spring, stagger, utils } from "animejs";

const Starfield = dynamic(() => import("./Starfield"), { ssr: false });

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
    label: "03 / tax forge",
    name: "HeyApril",
    role: "Full-Stack Developer",
    href: "https://heyapril.ai/",
    stat: "Next.js tax platform",
    copy:
      "I built the HeyApril web app with Next.js. I used PostHog for product tracking, React Query for caching, Vercel AI SDK for AI flows, and AWS Textract for document extraction. I also shipped deterministic tax analysis, auth, workflow simplification, refactors, and end-to-end product features for creators and CPAs."
  },
  {
    label: "04 / current forge",
    name: "Offshorly",
    role: "AI Engineer",
    href: "https://offshorly.com/",
    stat: "brokerage & mortgage systems",
    copy:
      "I design and build AI pipelines with LangChain and RAG for brokerage and mortgage systems, plus FastAPI backend services and third-party API integrations. I engineer prompts and steer LLM behaviour at production scale, shipping features that stay accurate, performant, and production-ready."
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
    label: "codebase graph memory",
    name: "Toji",
    href: "https://pypi.org/project/toji/",
    copy:
      "A Python CLI that parses your codebase into a queryable graph — symbols, signatures, call, import, and inheritance edges — stored in SQLite. Every answer carries exact file:line evidence; ambiguous names are surfaced, unresolved calls reported as unknown instead of invented.",
    meta: "python / sqlite / tree-sitter / pypi",
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
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const disposers: Array<() => void> = [];

    import("lenis").then(({ default: Lenis }) => {
      if (!root.current) return;
      const instance = new Lenis({ lerp: 0.1, anchors: true });
      // One shared rAF: animejs engine drives Lenis — no competing loops
      const stopTimer = createTimer({
        onUpdate: () => instance.raf(performance.now()),
      });
      disposers.push(() => {
        stopTimer.revert();
        instance.destroy();
      });
    });

    const scope = createScope({ root });

    scope.add(() => {
      // Scroll reveals: each element gets its own observer so entries
      // stagger naturally by scroll position instead of one global batch
      utils.$(".reveal").forEach((el) => {
        animate(el, {
          y: [28, 0],
          opacity: [0, 1],
          duration: 750,
          ease: spring({ stiffness: 85, damping: 12 }),
          autoplay: onScroll({ enter: "bottom-=40" }),
        });
      });

      // Terminal pixels blink in stepped rhythm
      animate(".signal-pixel", {
        opacity: [0.25, 1],
        scale: [1, 1.2],
        duration: 480,
        delay: stagger(130),
        loop: true,
        alternate: true,
        ease: "steps(2)",
      });

      // Marquee strip speed breathes with scroll velocity
      animate(".marquee-track", {
        x: [{ from: 0, to: -160 }],
        duration: 24000,
        loop: true,
        ease: "linear",
        modifier: (value) => `${utils.snap(value, 4)}px`,
      });

      // CTA arrows nudge diagonally on hover — spring return
      utils.$(".arrow-link").forEach((link) => {
        const arrow = link.querySelector(".arrow");
        if (!arrow) return;
        link.addEventListener("mouseenter", () => {
          animate(arrow, { x: 5, y: -5, scale: [1, 1.15], duration: 320, ease: spring({ stiffness: 80, damping: 11 }) });
        });
        link.addEventListener("mouseleave", () => {
          animate(arrow, { x: 0, y: 0, scale: 1, duration: 420, ease: spring({ stiffness: 70, damping: 9 }) });
        });
      });
    });

    return () => {
      disposers.forEach((dispose) => dispose());
      scope.revert();
    };
  }, []);

  return (
    <main ref={root} className="min-h-dvh overflow-x-clip bg-canvas text-ink">
      <Starfield />
      <div className="nebula" aria-hidden="true" />
      <Header />
      <section id="myth" className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,6vw,5rem)]">
        <div className="mx-auto max-w-[1440px]">
          <p className="reveal mb-4 font-mono text-sm lowercase tracking-[0.24em] text-muted">
            dev.myth() / engineer as maker / 2026
          </p>
          <h1 className="sr-only">
            Xynil Jhed Lacap — full-stack developer building tax software, brokerage and mortgage AI systems, and agent harnesses
          </h1>

          <div className="reveal panel mt-6 grid border-grid border md:grid-cols-[1.15fr_0.85fr]">
            <article className="panel border-grid border-b p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
              <p className="max-w-[13ch] font-serif text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.9] tracking-[-0.055em]">
                The tech universe is my canvas.
              </p>
              <p className="mt-8 max-w-[45ch] font-serif text-[clamp(1.35rem,2.5vw,2.25rem)] leading-[1.08] tracking-[-0.025em] text-muted">
                From my fingertips, I paint star systems. Each deployment lands as a brushstroke, each refactor as gravity corrected, each secure flow as a constellation brought under command.
              </p>
            </article>

            <aside className="grid grid-rows-[1fr_auto]">
              <div className="panel min-h-[18rem] border-grid border-b p-[clamp(1.25rem,4vw,3rem)]">
                <div className="mb-10 flex gap-2">
                  {[0, 1, 2, 3].map((item) => (
                    <span key={item} className="signal-pixel size-3 bg-accent" />
                  ))}
                </div>
                <p className="font-mono text-sm lowercase tracking-[0.2em] text-muted">who am i?</p>
                <p className="mt-5 max-w-[24ch] font-serif text-3xl leading-[1.02] tracking-[-0.04em] md:text-5xl">
                  My name is <strong className="font-bold">Xynil Jhed Lacap</strong>, a <strong className="flag-word" aria-label="Filipino"><span className="flag-blue">Fili</span><span className="flag-red">pino</span></strong> developer. I build tax software, brokerage and mortgage AI systems, and agent harnesses that turn rough ideas into working products.
                </p>
              </div>
              <a
                className="arrow-link group relative flex min-h-16 items-center justify-between bg-accent px-6 py-5 font-mono text-base text-accent-ink"
                href="https://github.com/mr-jones123"
                target="_blank"
                rel="noreferrer"
              >
                I came. I saw. I create.
                <span className="arrow inline-block transition-none">↗</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <Marquee />

      <section id="companies" className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(1.25rem,3vw,2.5rem)]">
        <div className="reveal panel mx-auto grid max-w-[1440px] border-grid border lg:grid-cols-[0.7fr_1.3fr]">
          <div className="panel flex flex-col border-grid border-b p-[clamp(1.25rem,4vw,3rem)] lg:border-b-0 lg:border-r">
            <p className="font-mono text-sm lowercase tracking-[0.24em] text-muted">career.log()</p>
            <h2 className="mt-6 max-w-[8ch] font-serif text-[clamp(2.75rem,6vw,6.5rem)] leading-[0.92] tracking-[-0.055em]">
              Four engines, one ascent.
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

      <section id="projects" className="px-[clamp(1.25rem,4vw,3rem)] pb-[clamp(1.25rem,3vw,2.5rem)]">
        <div className="panel mx-auto max-w-[1440px] border-grid border-x border-b">
          <div className="panel reveal grid border-grid border-b md:grid-cols-[1fr_1.4fr]">
            <div className="panel border-grid border-b p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
              <p className="font-mono text-sm lowercase tracking-[0.24em] text-muted">self.projects()</p>
              <h2 className="mt-6 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.05em]">
                Harness engineering for sharper machines.
              </h2>
            </div>
            <p className="panel p-[clamp(1.25rem,4vw,3rem)] font-serif text-[clamp(1.45rem,3vw,3.25rem)] leading-[1.02] tracking-[-0.04em] text-muted">
            </p>
          </div>

          <div className="reveal grid items-stretch md:grid-cols-2 [&>article]:border-grid [&>article]:border-b md:[&>article:nth-child(odd)]:border-r">
            {projects.map((project) => (
              <ProjectPanel key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-[clamp(1.25rem,4vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
        <div className="reveal panel mx-auto grid max-w-[1440px] border-grid border md:grid-cols-[1.2fr_0.8fr]">
          <div className="panel border-grid border-b p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
            <p className="font-mono text-sm lowercase tracking-[0.24em] text-muted">next.deployment()</p>
            <p className="mt-6 max-w-[18ch] font-serif text-[clamp(2.5rem,6vw,6rem)] leading-[0.94] tracking-[-0.055em]">
              I came. I saw. I create.
            </p>
          </div>
          <div className="panel flex flex-col justify-between p-[clamp(1.25rem,4vw,3rem)]">
            <p className="max-w-[34ch] font-serif text-2xl leading-[1.08] tracking-[-0.03em] text-muted">
            </p>
            <a
              className="arrow-link group mt-12 flex min-h-16 items-center justify-between bg-accent px-6 py-5 font-mono text-base text-accent-ink"
              href="https://github.com/mr-jones123"
              target="_blank"
              rel="noreferrer"
            >
              Open Profile
              <span className="arrow inline-block">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-grid border-b bg-canvas/85 font-mono text-sm lowercase tracking-[0.12em] text-ink backdrop-blur-md">
      <nav className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] border-grid border-x md:grid-cols-[1.2fr_repeat(4,auto)]">
        <a className="flex min-h-14 items-center border-grid border-r px-5" href="#myth">
          mr-jones / profile
        </a>
        <div className="hidden md:contents">
          <NavLink href="#companies">companies</NavLink>
          <NavLink href="#projects">projects</NavLink>
          <NavLink href="#contact">contact</NavLink>
          <a className="flex min-h-14 items-center bg-accent px-5 text-accent-ink" href="https://github.com/mr-jones123" target="_blank" rel="noreferrer">
            github ↗
          </a>
        </div>
        <details className="relative md:hidden">
          <summary className="flex min-h-14 cursor-pointer list-none items-center px-5 marker:hidden">menu</summary>
          <div className="absolute right-0 top-full grid w-56 border-grid border bg-canvas">
            <a className="border-grid border-b px-5 py-4" href="#companies">companies</a>
            <a className="border-grid border-b px-5 py-4" href="#projects">projects</a>
            <a className="border-grid border-b px-5 py-4" href="#contact">contact</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="flex min-h-14 items-center border-grid border-r px-5 transition-colors duration-200 hover:bg-surface" href={href}>
      {children}
    </a>
  );
}

function PixelArt() {
  const colors = ["bg-accent", "bg-flag-blue", "bg-flag-red", "bg-faint", "bg-raised"];

  return (
    <div className="mt-12 hidden grid flex-1 grid-cols-4 border-grid border bg-surface lg:grid" aria-hidden="true">
      {Array.from({ length: 64 }, (_, index) => {
        const show = [0, 6, 9, 15, 20, 23, 29, 34, 38, 45, 50, 57, 63].includes(index);
        return <span key={index} className={`aspect-square border-grid border-r border-b ${show ? colors[index % colors.length] : ""}`} />;
      })}
    </div>
  );
}

function CompanyRow({ company }: { company: (typeof companies)[number] }) {
  return (
    <article className="group grid border-grid border-b last:border-b-0 md:grid-cols-[0.95fr_1.05fr]">
      <div className="panel border-grid border-b p-[clamp(1.25rem,4vw,3rem)] md:border-b-0 md:border-r">
        <p className="font-mono text-sm lowercase tracking-[0.2em] text-muted">{company.label}</p>
        <h3 className="mt-8 font-serif text-[clamp(2.25rem,4.5vw,4.75rem)] leading-[0.95] tracking-[-0.055em]">
          {company.name}
        </h3>
        <p className="mt-4 font-mono text-sm lowercase tracking-[0.16em] text-muted">{company.role}</p>
      </div>
      <div className="panel flex flex-col justify-between p-[clamp(1.25rem,4vw,3rem)]">
        <p className="font-serif text-[clamp(1.35rem,2.4vw,2.35rem)] leading-[1.08] tracking-[-0.035em]">{company.copy}</p>
        <div className="mt-10 grid grid-cols-[1fr_auto] border-grid border font-mono text-sm lowercase tracking-[0.12em]">
          <span className="p-4 text-muted">{company.stat}</span>
          <a className="arrow-link border-grid border-l bg-accent p-4 text-accent-ink" href={company.href} target="_blank" rel="noreferrer">
            visit <span className="arrow inline-block">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectPanel({ project }: { project: (typeof projects)[number] }) {
  const hasTrunks = project.name === "dka";

  return (
    <article className="panel flex h-full flex-col">
      <div className="p-[clamp(1.25rem,4vw,3rem)]">
        <p className="font-mono text-sm lowercase tracking-[0.2em] text-muted">{project.label}</p>
        <h3 className="mt-10 font-mono text-[clamp(3rem,7vw,8rem)] font-bold uppercase leading-[0.82] tracking-[-0.08em] text-accent">
          {project.name}
        </h3>
        <p className="mt-8 max-w-[44ch] font-serif text-[clamp(1.3rem,2.5vw,2.3rem)] leading-[1.08] tracking-[-0.035em]">{project.copy}</p>
        <div className="mt-12 grid border-grid border font-mono text-sm lowercase tracking-[0.12em] md:grid-cols-[1fr_auto]">
          <span className="border-grid border-b p-4 text-muted md:border-b-0 md:border-r">{project.meta}</span>
          <a className="arrow-link bg-raised p-4" href={project.href} target="_blank" rel="noreferrer">
            repository <span className="arrow inline-block">↗</span>
          </a>
        </div>
      </div>
      {hasTrunks ? (
        <div className="mt-auto border-t border-grid bg-surface">
          <Image src="/trunks.png" alt="Pixel art of Trunks powering up" width={2048} height={2048} sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full opacity-90 contrast-110 saturate-[0.75]" />
        </div>
      ) : null}
    </article>
  );
}

function Marquee() {
  // Rotating energy badges: violet / magenta / cyan / plain — echoes the Dark Star tints
  const badges = [
    "bg-accent text-accent-ink",
    "bg-magenta text-accent-ink",
    "bg-cyan text-accent-ink",
    "",
  ];

  return (
    <section className="px-[clamp(1.25rem,4vw,3rem)] py-10" aria-hidden="true">
      <div className="marquee mx-auto max-w-[1440px] border-grid border bg-canvas">
        <div className="marquee-track h-full items-stretch font-mono text-sm lowercase tracking-[0.16em]">
          {[...signals, ...signals].map((signal, index) => (
            <span key={`${signal}-${index}`} className={badges[index % 4]}>
              {signal}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

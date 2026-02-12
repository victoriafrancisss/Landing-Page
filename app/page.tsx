import {
  CheckCircle2,
  ArrowRight,
  Target,
  XCircle,
  Calendar,
  MapPin,
  Linkedin,
  Mail,
  Search,
  Wrench,
  Map,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { FadeInOnScroll } from "./components/InteractiveElements";
import { PremiumBackground } from "./components/PremiumBackground";
import { PoweredByCarousel } from "./components/PoweredByCarousel";
import { FAQAccordion } from "./components/FAQAccordion";
import { StickyCtaBar } from "./components/StickyCtaBar";

const CTA_URL = "https://calendly.com/victoriafranciss/automation-discovery-call";
const CTA_LABEL = "Book a Free Financial Risk Audit™";
const NAVBAR_CTA_LABEL = "Book a Free Financial Risk Audit™";

const heroMetrics = [
  { value: "500+ Hours", label: "Recovered per year" },
  { value: "100% Accuracy", label: "In Board Reporting" },
  { value: "2-Week Turnaround", label: "Average Setup" },
];

const credibilityStrip = [
  "Live diagnosis tailored to your current setup",
  "Immediate quick win during the session",
  "Works with your existing tools and data",
];

const leadMagnetBullets = [
  "Accuracy and risk review",
  "One live fix or automation",
  "Automation priority roadmap",
];

const problemBullets = [
  "Manual processes and spreadsheets hide small errors.",
  "Rushed month-end close lets mistakes slip through.",
  "Errors scale with volume — one mismatch becomes many.",
  "By the time it shows up, decisions are already wrong.",
];

const proofBlocks = [
  { title: "Board numbers matched in 2 weeks.", result: "One number for every board meeting.", icon: BarChart3 },
  { title: "Month-end close in 5 days.", result: "Far fewer fixes each quarter.", icon: TrendingUp },
  { title: "Cash forecast within 3%.", result: "No more surprise shortfalls.", icon: ShieldCheck },
];

const capabilityBlocks = [
  { icon: ShieldCheck, text: "Stop manual mismatches before they spread." },
  { icon: BarChart3, text: "One source of truth for every report." },
  { icon: AlertTriangle, text: "Prevent month-end errors." },
  { icon: TrendingUp, text: "Spot unusual numbers early." },
];

const forYou = [
  "Founders, operators, and small finance teams (roughly 5–50 employees)",
  "Your numbers are manually reconciled, and you’re not 100% sure they’re right",
  "You want to fix accuracy first, then automate—not buy software and hope it helps",
  "You’d rather improve what you have than rebuild from scratch",
];

const notForYou = [
  "You need a full system rebuild or new ERP.",
  "You already have a team and clean processes.",
  "You want a quick fix with no real change.",
];

const faqItems = [
  {
    question: "Do we need new tools or systems?",
    answer: "No. We use what you already have. No new software. No big changes.",
  },
  {
    question: "What happens in the session?",
    answer: "We look at your numbers. We fix one real issue with you. You get a short list of next steps. No prep. No sales pitch.",
  },
  {
    question: "When do we see results?",
    answer: "Same day. We fix one thing in the session. You leave with a win and a clear next step.",
  },
  {
    question: "Is our data secure?",
    answer:
      "Yes. We follow best practices for handling sensitive data. We only access what’s needed for the diagnostic, and nothing is shared without your approval.",
  },
  {
    question: "What if we are too small or too big?",
    answer:
      "We’ll tell you. The Snapshot is designed to find real accuracy risks and clear next steps—not to push a project that doesn’t fit. There’s no obligation to continue.",
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen relative w-full max-w-full bg-[#050505] pb-24 md:pb-0"
      style={{ overflowX: "hidden" }}
    >
      <PremiumBackground />
      <StickyCtaBar />

      {/* Floating Navbar — compact on mobile (StickyCtaBar handles CTA) */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full backdrop-blur-xl bg-[#050505]/70 border border-[#262626] shadow-xl transition-all duration-300 ease-smooth">
        <div className="w-full mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
          <span className="text-white font-bold tracking-tight text-base sm:text-lg truncate">
            BOLDSCALE
          </span>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex premium-button btn-agency group items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-white text-black hover:shadow-[0_0_28px_rgba(255,255,255,0.4)] transition-all duration-300 ease-smooth"
          >
            {NAVBAR_CTA_LABEL}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5" />
          </a>
        </div>
      </nav>

      {/* Hero — Dumo-inspired: aurora glow, dual buttons, POWERED BY, metrics */}
      <section className="hero-section relative flex min-h-screen sm:min-h-[120vh] flex-col items-center justify-start sm:justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-40 pt-32 sm:pt-48 pb-24 sm:pb-40 bg-[#050505] overflow-x-hidden overflow-y-visible">
        {/* Aurora glow — stronger teal/blue radial gradients, subtle animation */}
        <div
          className="absolute inset-0 pointer-events-none z-0 animate-aurora-pulse"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 25%, rgba(20, 184, 166, 0.15) 0%, rgba(59, 130, 246, 0.08) 35%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0 animate-aurora-pulse"
          style={{
            background: 'radial-gradient(ellipse 140% 120% at 50% 45%, rgba(96, 165, 250, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)',
            animationDelay: '1s',
          }}
        />
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.015]"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center overflow-visible">
          <FadeInOnScroll delay={80}>
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              Not Sure If Your Financial Numbers Are Actually Accurate?
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="text-base sm:text-lg text-[#A1A1AA] max-w-[580px] mx-auto mb-10">
              We find where your numbers break, fix one issue immediately, and outline what to automate next — in one session for FREE
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={120}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-[300px] sm:max-w-none mx-auto">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta premium-button btn-agency group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-sm sm:text-base font-semibold rounded-full bg-white text-black shadow-[0_0_28px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 transition-all duration-300 ease-smooth"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </a>
              <a
                href="#who-are-we"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 w-full sm:w-auto rounded-full border border-white/70 bg-white/[0.08] backdrop-blur-xl text-white text-sm sm:text-base font-semibold hover:bg-white/[0.15] hover:border-white/90 hover:-translate-y-0.5 transition-all duration-300 ease-smooth"
              >
                Who Are We
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </a>
            </div>
          </FadeInOnScroll>

          {/* POWERED BY — horizontal logo carousel in color */}
          <FadeInOnScroll delay={200}>
            <p className="text-xs font-medium text-[#71717A] uppercase tracking-widest mb-6">Powered by</p>
            <div className="w-full max-w-4xl mb-16">
              <PoweredByCarousel />
            </div>
          </FadeInOnScroll>

          {/* Metrics row — footer of hero */}
          <FadeInOnScroll delay={220}>
            <div className="w-full max-w-2xl border-t border-white/10 pt-10 mt-4 pb-5 overflow-visible">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 overflow-visible">
              {heroMetrics.map((m, i) => (
                <div key={i} className="text-center overflow-visible transition-transform duration-300 ease-smooth hover:scale-[1.02] cursor-default">
                  <p className={`text-2xl sm:text-3xl font-bold ${i === 1 ? 'text-[#60A5FA]' : 'text-white'}`}>
                    {m.value}
                  </p>
                  <p className="text-sm text-[#A1A1AA] mt-1 leading-relaxed">{m.label}</p>
                </div>
              ))}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Credibility strip — light bg for separation */}
      <section className="relative px-4 sm:px-6 md:px-8 py-20 sm:py-24 bg-[#0A0A0A]/50">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {credibilityStrip.map((statement, i) => (
              <FadeInOnScroll key={i} delay={i * 60}>
                <div className="interactive-card flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 hover:border-white/20 transition-all duration-300 ease-smooth">
                  <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <p className="text-[#A1A1AA] text-sm sm:text-base">{statement}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section — outcome bullets + micro-CTA, alternating bg */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-28 sm:py-36 border-t border-white/5">
        <div className="w-full max-w-2xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 leading-tight text-center">
              If You're Not 100% Sure Your Numbers Are Right
            </h2>
            <ul className="space-y-4 mb-12">
              {problemBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-[#A1A1AA]">
                  <XCircle className="w-5 h-5 text-amber-500/80 flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 text-[#A1A1AA] hover:text-white transition-colors duration-300 ease-smooth"
            >
              <span className="font-semibold text-white">See where your numbers break</span>
              <span>—</span>
              <span className="underline underline-offset-4">Book a Free Financial Risk Audit™</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
            </a>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Solution section — 3 steps with icons */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-28 sm:py-36 bg-[#0A0A0A]/50 border-t border-white/5">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-14 leading-tight text-center">
              How It Works
            </h2>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {[
              { icon: Search, title: "Diagnose Risk", benefit: "Find hidden accuracy risks in your setup." },
              { icon: Wrench, title: "Fix One Issue Live", benefit: "Leave the session with one real win." },
              { icon: Map, title: "Roadmap Next Steps", benefit: "Clear priority list for what to automate." },
            ].map((item, i) => (
              <FadeInOnScroll key={item.title} delay={i * 100}>
                <div className="interactive-card flex flex-col items-center text-center p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300 ease-smooth">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-white/80" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A1A1AA]">{item.benefit}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll delay={150}>
            <p className="text-center text-[#71717A] mt-10 text-sm">
              No system rebuilds. No new tools. No extra hires.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Lead magnet section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-28 sm:py-36 border-t border-white/5">
        <div className="w-full max-w-5xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
              Free Financial Risk Audit™
            </h2>
            <p className="text-[#A1A1AA] text-center mb-12 max-w-2xl mx-auto">
              A live diagnostic + quick win that shows where your numbers are at risk.
            </p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <FadeInOnScroll delay={0}>
              <div className="flex flex-col justify-center">
                <ul className="space-y-3 mb-8">
                  {leadMagnetBullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500/80 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency group inline-flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 ease-smooth hover:-translate-y-0.5"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
                </a>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={80}>
              <div>
                <p className="text-sm font-semibold text-white/90 mb-4">What We Can Do After the Snapshot</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilityBlocks.map((c, i) => (
                    <div key={i} className="interactive-card flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300 ease-smooth">
                      <c.icon className="w-5 h-5 text-white/70 flex-shrink-0" />
                      <span className="text-sm text-[#A1A1AA]">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Proof — simplified with icons, alternating bg */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-28 sm:py-36 bg-[#0A0A0A]/50 border-t border-white/5">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 text-center">Proof</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {proofBlocks.map((block, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card interactive-card p-6 flex flex-col">
                  <block.icon className="w-8 h-8 text-white/70 mb-4" />
                  <h3 className="font-semibold text-white mb-2">{block.title}</h3>
                  <p className="text-sm text-[#A1A1AA]">{block.result}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll delay={200}>
            <div className="mt-12 text-center">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button btn-agency group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 ease-smooth hover:-translate-y-0.5"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Who Are We */}
      <section id="who-are-we" className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-28 sm:py-36 border-t border-white/5 scroll-mt-24">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center tracking-tight">
              Who Are We
            </h2>
            <p className="text-[#A1A1AA] text-center mb-8 max-w-xl mx-auto text-sm">
              We're built for founders, operators, and small finance teams who
              want accurate numbers without the hype.
            </p>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeInOnScroll delay={0}>
              <div className="bento-card interactive-card p-8 sm:p-10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 tracking-tight">
                  <Target className="w-5 h-5 text-white/80" />
                  For you if
                </h3>
                <ul className="space-y-2.5">
                  {forYou.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#A1A1AA] text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <div className="bento-card interactive-card p-8 sm:p-10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 tracking-tight">
                  <XCircle className="w-5 h-5 text-[#71717A]" />
                  Not a fit if
                </h3>
                <ul className="space-y-2.5">
                  {notForYou.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#A1A1AA] text-sm sm:text-base">
                      <XCircle className="w-4 h-4 text-[#71717A] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ — alternating bg */}
      <section className="relative px-4 sm:px-6 md:px-8 py-28 sm:py-36 bg-[#0A0A0A]/50 border-t border-white/5">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center tracking-tight">
            FAQ
          </h2>
          <div className="bento-card p-8 mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 sm:px-6 md:px-8 py-28 sm:py-36 border-t border-white/5">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-12 sm:p-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Clarity Comes First
              </h2>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button btn-agency group inline-flex items-center gap-2 px-8 sm:px-10 py-4 bg-white text-black font-semibold text-base rounded-full hover:shadow-[0_0_32px_rgba(255,255,255,0.25)] transition-all duration-300 ease-smooth hover:-translate-y-0.5"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
              </a>
              <p className="text-sm text-[#A1A1AA] mt-4">
                Only a few sessions are opened each week.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative px-4 sm:px-6 py-12 md:py-16 border-t border-[#262626] bg-[#0A0A0A]/30">
        <div className="w-full max-w-2xl mx-auto text-center space-y-4">
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button btn-agency group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 ease-smooth hover:-translate-y-0.5"
          >
            {CTA_LABEL}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
          </a>
          <p className="text-[#71717A] text-sm">Weekly availability is limited.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-10 border-t border-[#262626]">
        <div className="w-full max-w-4xl mx-auto text-center">
          <p className="text-[#71717A] text-sm mb-4">
            &copy; {new Date().getFullYear()} BOLDSCALE Solutions. Financial
            accuracy for founders and small finance teams.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F0F0F] border border-[#262626] text-sm text-[#A1A1AA] mb-4">
            <MapPin className="w-4 h-4 text-[#71717A]" />
            Operating globally
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/victoria-franciss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#262626] hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] transition-all duration-300 ease-smooth hover:scale-105"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#A1A1AA] hover:text-white" />
            </a>
            <a
              href="mailto:victoriafranciss@hotmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#262626] hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] transition-all duration-300 ease-smooth hover:scale-105"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-[#A1A1AA] hover:text-white" />
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#262626] hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] transition-all duration-300 ease-smooth hover:scale-105"
              aria-label="Book a call"
            >
              <Calendar className="w-5 h-5 text-[#A1A1AA] hover:text-white" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
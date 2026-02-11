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
  RefreshCw,
  BarChart3,
  ShieldCheck,
  Activity,
} from "lucide-react";
import { FadeInOnScroll } from "./components/InteractiveElements";
import { PremiumBackground } from "./components/PremiumBackground";
import { FAQAccordion } from "./components/FAQAccordion";
import { InfiniteMarquee } from "./components/InfiniteMarquee";

const CTA_URL = "https://calendly.com/victoriafranciss/automation-discovery-call";
const CTA_LABEL = "Book Your Free Snapshot";
const NAVBAR_CTA_LABEL = "Book Audit";

const benefitsBullets = [
  "You see where your numbers break.",
  "We fix one real issue live with you.",
  "You get a short list of next steps.",
  "You leave with numbers you can rely on.",
];

const outcomeBlocks = [
  { icon: Search, title: "Find", body: "We find where your numbers break." },
  { icon: Wrench, title: "Fix", body: "We fix one issue live. You leave with a win." },
  { icon: Map, title: "Plan", body: "You get a simple plan so numbers stay right." },
];

const whatYouGetBullets = [
  "You see exactly where your numbers break.",
  "We fix one real problem with you in the session.",
  "You get a short list of what to do next.",
  "You leave sure of your numbers. No more guessing.",
];

const whatComesNext = [
  "One number everywhere. No more mismatches.",
  "Same numbers in every report.",
  "Catch errors before they spread.",
  "Spot problems before they get worse.",
];

const trustStripItems = [
  { icon: RefreshCw, label: "Numbers that match", outcome: "One number everywhere. No more mismatches." },
  { icon: BarChart3, label: "Reports you can trust", outcome: "Same numbers in every report." },
  { icon: ShieldCheck, label: "Fewer mistakes", outcome: "Catch errors before they spread." },
  { icon: Activity, label: "Spot problems early", outcome: "See when something looks wrong." },
];

const proofBlocks = [
  { title: "Board numbers matched in 2 weeks.", line1: "Board report and P&L did not match.", line2: "We fixed it. One number everywhere now." },
  { title: "Month-end close in 5 days.", line1: "Close used to take 2 weeks.", line2: "We fixed it. Far fewer fixes each quarter." },
  { title: "Cash forecast within 3%.", line1: "Forecasts were wrong. Two cash shortfalls in 6 months.", line2: "We fixed it. No more surprise shortfalls." },
];

const microCases = [
  {
    title: "Board numbers matched in 2 weeks.",
    issue: "Revenue in the board deck didn’t match the P&L; no one knew which was right.",
    fix: "We found the broken link and fixed it.",
    result: "Both matched. One number for every board meeting now.",
  },
  {
    title: "Month-end close in 5 days.",
    issue: "Close took 2 weeks. Lots of fixes every quarter.",
    fix: "We fixed the step that caused most errors.",
    result: "Close in 5 days. Far fewer fixes each quarter.",
  },
  {
    title: "Cash forecast within 3%.",
    issue: "Founders couldn’t trust cash forecasts—spreadsheet errors had caused two surprise shortfalls in 6 months.",
    fix: "We fixed the main formula and added a check.",
    result: "Next forecasts were within 3%. No more surprise shortfalls.",
  },
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

const servicesList = [
  { title: "Numbers that match", body: "One number everywhere. No more mismatches." },
  { title: "Reports you can trust", body: "Same numbers in every report." },
  { title: "Fewer mistakes", body: "Catch errors before they spread." },
  { title: "Spot problems early", body: "See when something looks wrong." },
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
      className="min-h-screen relative w-full max-w-full bg-[#050505]"
      style={{ overflowX: "hidden" }}
    >
      <PremiumBackground />

      {/* Floating Navbar — Dumo-style glass pill */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full backdrop-blur-xl bg-[#050505]/70 border border-[#262626] shadow-xl">
        <div className="w-full mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <span className="text-white font-bold tracking-tight text-lg">
            BOLDSCALE
          </span>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button btn-agency inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-white text-black hover:shadow-[0_0_28px_rgba(255,255,255,0.4)]"
          >
            {NAVBAR_CTA_LABEL}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero — breathing room, 2-line max sub-headline */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-32 sm:py-36 md:py-40 lg:py-48 pt-36 sm:pt-40">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(100, 100, 255, 0.06) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(80, 120, 255, 0.03) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <div className="w-full max-w-4xl mx-auto relative z-10 px-2 sm:px-4">
          <div className="text-center space-y-8 sm:space-y-10">
            <FadeInOnScroll delay={100}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.05] tracking-tight">
                <span className="block">Numbers You Can Trust.</span>
                <span className="block">Before They Cost You.</span>
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <p className="text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed text-slate-300 font-medium">
                Stop guessing. Start knowing.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="text-lg sm:text-xl max-w-xl mx-auto text-[#A1A1AA]">
                Free session. We find where it breaks and fix one thing with you. You leave with clarity.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="pt-4 space-y-5">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-4 bg-white text-black font-semibold text-base rounded-full shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:shadow-[0_0_32px_rgba(255,255,255,0.3)]"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-[#A1A1AA]">
                  No prep. No sales pitch.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <InfiniteMarquee />

      {/* 2) Benefits bullets */}
      <section className="relative px-4 sm:px-6 md:px-8 py-24 sm:py-32">
        <div className="w-full max-w-2xl mx-auto">
          <ul className="space-y-4">
            {benefitsBullets.map((bullet, i) => (
              <FadeInOnScroll key={i} delay={i * 60}>
                <li className="flex items-start gap-3 text-[#A1A1AA] text-lg">
                  <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              </FadeInOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* 4) Why it matters */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-3xl mx-auto">
          <FadeInOnScroll>
            <div className="bento-card p-10 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                The Problem: Inaccurate Numbers That Look Right Until They Don’t
              </h2>
              <p className="text-[#A1A1AA] mb-8 max-w-xl">
                Wrong numbers lead to wrong decisions. They often show up when it is too late.
              </p>
              <p className="text-[#A1A1AA]">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="text-white font-medium underline underline-offset-2 hover:no-underline">
                  Get your free snapshot
                </a>
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Outcome blocks — headlines do the work */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {outcomeBlocks.map((block, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div
                  className="p-8 sm:p-10 text-center rounded-xl transition-all duration-300 bg-[rgba(255,255,255,0.03)] border border-white/5 hover:border-white/10 hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-white/5 flex items-center justify-center">
                    <block.icon className="w-6 h-6 text-white/80" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — one sentence per card, subtle borders, calm gradients */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-12 leading-tight text-center tracking-tight">
              How It Works
            </h2>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { step: "01", title: "Review", body: "We find where your numbers break.", gradient: "from-emerald-950/40 via-emerald-900/35 to-teal-950/40" },
              { step: "02", title: "Fix", body: "We fix one issue live. You leave with a win.", gradient: "from-violet-950/40 via-purple-900/35 to-fuchsia-950/40" },
              { step: "03", title: "Plan", body: "You get a short list so numbers stay right.", gradient: "from-blue-950/40 via-indigo-900/35 to-cyan-950/40" },
            ].map((item, i) => (
              <FadeInOnScroll key={item.step} delay={i * 100}>
                <div className={`relative overflow-hidden rounded-2xl border border-white/10 p-8 text-center bg-gradient-to-br ${item.gradient}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white/90 bg-white/10 mb-5">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6) What comes next */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight text-center tracking-tight">
            What Comes Next
          </h2>
          <ul className="space-y-3">
            {whatComesNext.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[#A1A1AA]">
                <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-4 sm:px-6 md:px-8 py-24 sm:py-32">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-10 sm:p-12">
              <p className="text-lg sm:text-xl font-semibold text-white mb-6 tracking-tight">
                Stop guessing. Start knowing your numbers.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button btn-agency inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-[#A1A1AA] mt-4">
                No prep. No sales pitch. No obligation.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* 7) Lead magnet / Snapshot — keep for CTA density */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-5xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center tracking-tight">
              The Free Snapshot
            </h2>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Left: Text + CTA — left-aligned */}
            <FadeInOnScroll delay={0}>
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight tracking-tight">
                  Get clarity in one session.
                </h3>
                <p className="text-[#A1A1AA] leading-relaxed mb-4">
                  Free session. We look at your numbers and fix one issue with you. You leave with one real win and a short list of next steps.
                </p>
              <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                You leave with at least one concrete improvement to your numbers.
                If we don’t deliver that, the session doesn’t count.
              </p>
                <p className="text-xs text-[#71717A] mb-6">
                  Limited free spots each week.
                </p>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
                >
                  {NAVBAR_CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeInOnScroll>
            {/* Right: Problem list / What you get — single glass card */}
            <FadeInOnScroll delay={80}>
              <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col gap-4">
                <p className="text-sm font-semibold text-white mb-1 tracking-tight">What you get</p>
                {whatYouGetBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center tracking-tight">
              Proof
            </h2>
          </FadeInOnScroll>
          <div className="space-y-6">
            {proofBlocks.map((block, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card p-6 sm:p-8">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-3 tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm sm:text-base mb-2">{block.line1}</p>
                  <p className="text-[#A1A1AA] text-sm sm:text-base">{block.line2}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary CTA — after proof */}
      <section className="relative px-4 sm:px-6 md:px-8 py-24 sm:py-32">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-10 sm:p-12">
              <p className="text-lg sm:text-xl font-semibold text-white mb-6 tracking-tight">
                Stop guessing. Start knowing your numbers.
              </p>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button btn-agency inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-[#A1A1AA] mt-4">
                No prep. No sales pitch. No obligation.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Who it's for / not for — Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center tracking-tight">
              Who This Is For — and Who It’s Not
            </h2>
            <p className="text-[#A1A1AA] text-center mb-8 max-w-xl mx-auto text-sm">
              We’re built for founders, operators, and small finance teams who
              want accurate numbers without the hype.
            </p>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 gap-6">
            <FadeInOnScroll delay={0}>
              <div className="bento-card p-8 sm:p-10">
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
              <div className="bento-card p-8 sm:p-10">
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

      {/* FAQ */}
      <section className="relative px-4 sm:px-6 md:px-8 py-24 sm:py-32">
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
      <section className="relative px-4 sm:px-6 md:px-8 py-24 sm:py-32">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-12 sm:p-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Get your numbers right.
              </h2>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button btn-agency inline-flex items-center gap-2 px-8 sm:px-10 py-4 bg-white text-black font-semibold text-base rounded-full hover:shadow-[0_0_32px_rgba(255,255,255,0.25)]"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-[#A1A1AA] mt-4">
                No prep. No sales pitch. Just clarity.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Footer CTA reminder */}
      <section className="relative px-4 sm:px-6 py-8 border-t border-[#262626]">
        <div className="w-full max-w-2xl mx-auto text-center">
          <p className="text-[#A1A1AA] text-sm">
            Still unsure?{" "}
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline underline-offset-2"
            >
              Get your free snapshot
            </a>{" "}
            — no prep, no sales pitch, just clarity.
          </p>
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
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#262626] hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#A1A1AA] hover:text-white" />
            </a>
            <a
              href="mailto:victoriafranciss@hotmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#262626] hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-[#A1A1AA] hover:text-white" />
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#262626] hover:border-white/30 hover:shadow-[0_0_16px_rgba(255,255,255,0.08)] transition-all"
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

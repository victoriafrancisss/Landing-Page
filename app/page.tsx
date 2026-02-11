import {
  CheckCircle2,
  ArrowRight,
  Target,
  XCircle,
  Calendar,
  MapPin,
  Linkedin,
  Mail,
} from "lucide-react";
import { FadeInOnScroll } from "./components/InteractiveElements";
import { PremiumBackground } from "./components/PremiumBackground";
import { FAQAccordion } from "./components/FAQAccordion";

const CTA_URL = "https://calendly.com/victoriafranciss/automation-discovery-call";
const CTA_LABEL = "Book Your Free Financial Accuracy Snapshot™";
const NAVBAR_CTA_LABEL = "Book Your Free Financial Accuracy Snapshot™";

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

const proofBlocks = [
  {
    issue: "Board report and P&L numbers didn't match; no one knew which was right.",
    fix: "We found the broken link and fixed it.",
    result: "Both matched. One number for every board meeting now.",
  },
  {
    issue: "Month-end close took 2 weeks. Lots of fixes every quarter.",
    fix: "We fixed the step that caused most errors.",
    result: "Close in 5 days. Far fewer fixes each quarter.",
  },
  {
    issue: "Founders couldn't trust cash forecasts—spreadsheet errors had caused two surprise shortfalls in 6 months.",
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

      {/* Hero — Above the fold */}
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
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
                Not Sure If Your Financial Numbers Are Actually Accurate?
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-slate-300 font-medium">
                We help growing teams identify hidden accuracy risks, fix one issue immediately, and automate the root cause so your numbers stay reliable as you scale.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="pt-4 space-y-5">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency inline-flex items-center gap-2 px-8 sm:px-10 py-4 bg-white text-black font-semibold text-base rounded-full shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:shadow-[0_0_32px_rgba(255,255,255,0.3)]"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-[#A1A1AA]">
                  Limited to 3 new sessions per week to ensure hands-on implementation.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Credibility strip — Perceived Likelihood Booster */}
      <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {credibilityStrip.map((statement, i) => (
              <FadeInOnScroll key={i} delay={i * 60}>
                <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                  <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                  <p className="text-[#A1A1AA] text-sm sm:text-base">{statement}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-3xl mx-auto">
          <FadeInOnScroll>
            <div className="bento-card p-10 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                If You're Not 100% Sure Your Numbers Are Right, That's the Problem
              </h2>
              <p className="text-[#A1A1AA] mb-6 max-w-xl leading-relaxed">
                Manual processes, spreadsheets, and rushed month-end close create hidden errors that scale with volume. What starts as a small mismatch grows. By the time it shows up, it has already undermined your decisions—and sometimes your cash position.
              </p>
              <p className="text-[#A1A1AA] max-w-xl leading-relaxed">
                Wrong numbers lead to wrong decisions. They often show up when it's too late.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Solution section — 3 steps + reassurance */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight text-center tracking-tight">
              We Fix Accuracy First — Then Automate What Actually Matters
            </h2>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            {[
              { step: "01", title: "Diagnose", body: "Identify accuracy risks in your current setup.", gradient: "from-emerald-950/40 via-emerald-900/35 to-teal-950/40" },
              { step: "02", title: "Fix", body: "Fix one issue immediately during the session.", gradient: "from-violet-950/40 via-purple-900/35 to-fuchsia-950/40" },
              { step: "03", title: "Automate", body: "Automate the root cause so numbers stay right.", gradient: "from-blue-950/40 via-indigo-900/35 to-cyan-950/40" },
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
          <FadeInOnScroll delay={150}>
            <p className="text-center text-[#A1A1AA] mt-10 text-base font-medium">
              No system rebuilds. No new tools. No extra hires.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Lead magnet section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-5xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center tracking-tight">
              Free Financial Accuracy Snapshot™
            </h2>
            <p className="text-[#A1A1AA] text-center mb-10 max-w-2xl mx-auto leading-relaxed">
              A live diagnostic + quick win that shows you exactly where your numbers are at risk — and what to automate next.
            </p>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <FadeInOnScroll delay={0}>
              <div className="flex flex-col justify-center text-left">
                <p className="text-white font-semibold mb-4">Get clarity in one session.</p>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-[#71717A] mt-4">Weekly availability is limited.</p>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={80}>
              <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col gap-4">
                {leadMagnetBullets.map((bullet, i) => (
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

      {/* Proof — micro-cases (Issue → Fix → Result) */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto">
          <div className="space-y-6">
            {proofBlocks.map((block, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card p-6 sm:p-8">
                  <p className="text-[#A1A1AA] text-sm sm:text-base mb-2">
                    <span className="font-semibold text-white">Issue: </span>{block.issue}
                  </p>
                  <p className="text-[#A1A1AA] text-sm sm:text-base mb-2">
                    <span className="font-semibold text-white">Fix: </span>{block.fix}
                  </p>
                  <p className="text-[#A1A1AA] text-sm sm:text-base">
                    <span className="font-semibold text-white">Result: </span>{block.result}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-32">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center tracking-tight">
              Who This Is For — and Who It's Not
            </h2>
            <p className="text-[#A1A1AA] text-center mb-8 max-w-xl mx-auto text-sm">
              We're built for founders, operators, and small finance teams who
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
                Clarity Comes First
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
                Only a few sessions are opened each week.
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
              Book Your Free Financial Accuracy Snapshot™
            </a>{" "}
            — weekly availability is limited.
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
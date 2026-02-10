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
const CTA_LABEL = "Book a Free Financial Accuracy Snapshot™";
const NAVBAR_CTA_LABEL = "Book Audit";

const credibilityStrip = [
  "Your real setup, reviewed live—custom, not templated",
  "At least one real fix done with you in the session—practical operator experience",
  "Your tools, your data. No prep, no new software, personally delivered",
];

const outcomeBlocks = [
  {
    icon: Search,
    title: "Diagnose Risk",
    body: "We reveal where your financial accuracy is jeopardized before it costs you.",
  },
  {
    icon: Wrench,
    title: "Immediate Fix",
    body: "We fix one real issue live during the session.",
  },
  {
    icon: Map,
    title: "Roadmap Next Steps",
    body: "We outline what to automate next.",
  },
];

const whatYouGetBullets = [
  "Hands-on review of your actual setup",
  "One live fix you can apply immediately",
  "A written automation priority roadmap after the call",
];

const trustStripItems = [
  { icon: RefreshCw, label: "Automated Reconciliation" },
  { icon: BarChart3, label: "KPI Dashboards & Reporting" },
  { icon: ShieldCheck, label: "Internal Controls & Checks" },
  { icon: Activity, label: "Anomaly Detection" },
];

const leadMagnetBullets = [
  "We review your financial setup and pinpoint where accuracy is at risk",
  "We fix one real issue live with you—so you see a concrete improvement before you leave",
  "You get a clear roadmap for what to automate next so your numbers stay reliable",
];

const microCases = [
  {
    issue: "Revenue in the board deck didn’t match the P&L; no one knew which was right.",
    fix: "Traced sources, fixed one broken link in the reporting chain, automated the reconciliation.",
    result: "Board deck and P&L matched to the dollar within two weeks; one reliable number for every board meeting since.",
  },
  {
    issue: "Month-end close took 2 weeks and still had 10–12 reclasses every quarter.",
    fix: "Mapped the close process, automated the highest-error step, documented the rest.",
    result: "Close down to 5 business days within 6 weeks; quarterly reclasses fell from 12 to 2.",
  },
  {
    issue: "Founders couldn’t trust cash forecasts—spreadsheet errors had caused two surprise shortfalls in 6 months.",
    fix: "Reviewed formulas and data feeds, corrected the main driver, added a simple check.",
    result: "Next two cash forecasts were within 3% of actual; no surprise shortfalls in the following 6 months.",
  },
];

const forYou = [
  "Founders, operators, and small finance teams (roughly 5–50 employees)",
  "Your numbers are manually reconciled, and you’re not 100% sure they’re right",
  "You want to fix accuracy first, then automate—not buy software and hope it helps",
  "You’d rather improve what you have than rebuild from scratch",
];

const notForYou = [
  "Teams that need a full system rebuild or a new ERP",
  "Companies that already have a dedicated FP&A function and clean, reliable processes",
  "Anyone who wants a quick fix without addressing root causes",
];

const servicesList = [
  { title: "Automated reconciliation", body: "Reduce manual matching and catch mismatches before they spread." },
  { title: "Dashboards & reporting", body: "One source of truth so your numbers tell the same story everywhere." },
  { title: "Controls & checks", body: "Simple safeguards so errors don’t slip through month-end." },
  { title: "Anomaly detection", body: "Spot unusual numbers early so you can fix them before they become problems." },
];

const faqItems = [
  {
    question: "Do we need to change our tools or systems?",
    answer:
      "No. We work with your existing tools and data. The Snapshot is a live, hands-on look at your current setup—no new software, no system rebuilds.",
  },
  {
    question: "What happens during the Financial Accuracy Snapshot™?",
    answer:
      "We review where your numbers come from, identify the biggest accuracy risks, and fix one issue live during the session—with you—so you leave with at least one concrete improvement. You also get a clear roadmap for what to automate next. No prep required; no sales pitch. It’s a gift, not a pitch.",
  },
  {
    question: "How long until we see results?",
    answer:
      "You get at least one live fix or automation during the Snapshot. The roadmap tells you what to tackle next so your numbers stay reliable as you scale.",
  },
  {
    question: "Is our data secure?",
    answer:
      "Yes. We follow best practices for handling sensitive data. We only access what’s needed for the diagnostic, and nothing is shared without your approval.",
  },
  {
    question: "What if our issues are too small or too big?",
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

      {/* Hero — Dumo-style spotlight */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-24 sm:py-28 md:py-32 lg:py-40 pt-32 sm:pt-36">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)',
          }}
        />
        <div className="w-full max-w-4xl mx-auto relative z-10 px-2 sm:px-4">
          <div className="text-center space-y-6 sm:space-y-8">
            <FadeInOnScroll delay={100}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.05] tracking-tight">
                <span className="block">Accurate Financial Numbers —</span>
                <span className="block">Before They Become a Costly Problem</span>
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed text-slate-400">
                A free, hands-on session—personally delivered, not templated—where
                we find where your numbers break, fix one issue live with you, and
                outline what to automate next. No hype. No new tools. No rebuilds.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="pt-2 space-y-4">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-4 bg-white text-black font-semibold text-base rounded-full hover:shadow-[0_0_32px_rgba(255,255,255,0.25)]"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-[#A1A1AA]">
                  No prep. No sales pitch. No obligation.
                </p>
                <p className="text-sm text-[#71717A]">
                  A few sessions per week so each one gets hands-on attention.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      <InfiniteMarquee />

      {/* Credibility strip - Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4">
            {credibilityStrip.map((line, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 p-5 text-center sm:text-left">
                  <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-[#A1A1AA]">
                    {line}
                  </span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome blocks — 3-column Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {outcomeBlocks.map((block, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#0F0F0F] border border-[#262626] flex items-center justify-center">
                    <block.icon className="w-6 h-6 text-white/90" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                    {block.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {block.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Problem - Bento card */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-3xl mx-auto">
          <FadeInOnScroll>
            <div className="bento-card p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight">
                The Problem: Inaccurate Numbers That Look Right Until They Don’t
              </h2>
              <div className="space-y-4 text-[#A1A1AA] leading-relaxed">
                <p>
                  When numbers are manually reconciled across spreadsheets and
                  systems, errors hide in plain sight. A wrong link, a missed
                  reclass, or a formula that didn’t copy right can throw off your
                  P&L, cash forecast, or board deck. The risk is silent until it
                  compounds—and you often don’t find out until it’s expensive.
                </p>
                <p>
                  We help you see where your numbers are at risk and fix those
                  spots before they become a costly problem. No revolution. Just
                  clarity and control.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* How it works — 3-step Dumo-style gradient cards */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 leading-tight text-center tracking-tight">
              How It Works: Fix Real Issues First, Then Automate
            </h2>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {[
              {
                step: "01",
                title: "Review your financial setup",
                body: "We look at where your numbers come from and where accuracy is most at risk.",
                gradient: "from-emerald-950/90 via-emerald-900/80 to-teal-950/90",
                border: "border-emerald-500/30",
              },
              {
                step: "02",
                title: "Fix one issue live",
                body: "We fix one real problem with you during the session—so you leave with a concrete improvement, not just a report.",
                gradient: "from-violet-950/90 via-purple-900/80 to-fuchsia-950/90",
                border: "border-violet-500/30",
              },
              {
                step: "03",
                title: "Outline what to automate next",
                body: "You get a clear roadmap so your numbers stay reliable as you scale.",
                gradient: "from-blue-950/90 via-indigo-900/80 to-cyan-950/90",
                border: "border-blue-500/30",
              },
            ].map((item, i) => (
              <FadeInOnScroll key={item.step} delay={i * 100}>
                <div className={`relative overflow-hidden rounded-2xl border p-6 text-center bg-gradient-to-br ${item.gradient} ${item.border}`}>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white/90 bg-white/10 mb-4">
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
          <FadeInOnScroll>
            <p className="text-center text-[#A1A1AA] font-medium">
              No system rebuilds. No new tools. No extra hires.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contextual CTA Banner 1 */}
      <section className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-8 sm:p-10">
              <p className="text-lg sm:text-xl font-semibold text-white mb-6 tracking-tight">
                Ready to see what’s really breaking your numbers?
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
                No prep. No sales pitch. No obligation. A few sessions per week
                only.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services — 3-column Bento grid */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-5xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center tracking-tight">
              What We Can Do After the Snapshot
            </h2>
            <p className="text-[#A1A1AA] text-center mb-10 max-w-xl mx-auto text-sm">
              If you choose to go further, we help improve accuracy and
              automate the right things—in plain language. No packages, no
              tiers.
            </p>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {servicesList.slice(0, 3).map((s, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card p-6">
                  <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
            <FadeInOnScroll delay={240}>
              <div className="bento-card p-6 sm:col-span-3">
                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {servicesList[3].title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {servicesList[3].body}
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Lead magnet — Financial Accuracy Snapshot™ — Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-2xl mx-auto">
          <FadeInOnScroll>
            <div className="bento-card p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center tracking-tight">
                The Financial Accuracy Snapshot™ — Free, Hands-On, No Pitch
              </h2>
              <p className="text-lg text-[#A1A1AA] text-center mb-6 leading-relaxed">
                A free first step: we review your real financial setup, fix one
                issue live with you, and outline what to automate next. Think of
                it as a gift—you get clarity and one concrete fix, not a sales
                call.
              </p>
              <p className="text-sm text-[#A1A1AA] text-center mb-6 leading-relaxed max-w-lg mx-auto">
                You leave with at least one concrete improvement to your numbers.
                If we don’t deliver that, the session doesn’t count.
              </p>
              <p className="text-xs text-[#71717A] text-center mb-6 max-w-lg mx-auto">
                Offered free while building a small number of case studies.
              </p>
              <div className="mb-8">
                <p className="text-sm font-semibold text-white mb-3 text-center">
                  What you get
                </p>
                <ul className="space-y-2">
                  {whatYouGetBullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-[#A1A1AA] text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-white/80 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="space-y-3 mb-8">
                {leadMagnetBullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#A1A1AA]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center space-y-3">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button btn-agency inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-[#A1A1AA]">
                  No prep. No sales pitch. No obligation. Only a few sessions
                  opened each week.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Mini credibility / trust strip */}
      <section className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="w-full max-w-4xl mx-auto">
          <div className="bento-card grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 p-6">
            {trustStripItems.map((item, i) => (
              <FadeInOnScroll key={i} delay={i * 60}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-[#A1A1AA]">
                  <item.icon className="w-5 h-5 flex-shrink-0 text-[#71717A]" />
                  <span className="text-xs sm:text-sm font-medium text-center sm:text-left">
                    {item.label}
                  </span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — micro-cases Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center tracking-tight">
              Issue → Fix → Result
            </h2>
          </FadeInOnScroll>
          <div className="space-y-6">
            {microCases.map((c, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="bento-card p-6 sm:p-8">
                  <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base">
                    <div>
                      <p className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                        Issue
                      </p>
                      <p className="text-[#A1A1AA] leading-relaxed">{c.issue}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                        Fix
                      </p>
                      <p className="text-[#A1A1AA] leading-relaxed">{c.fix}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">
                        Result
                      </p>
                      <p className="text-[#A1A1AA] leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual CTA Banner 2 */}
      <section className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-8 sm:p-10">
              <p className="text-lg sm:text-xl font-semibold text-white mb-6 tracking-tight">
                Get clarity today — see what’s hiding in your numbers.
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
                Limited weekly availability.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Who it's for / not for — Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
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
              <div className="bento-card p-6 sm:p-8">
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
              <div className="bento-card p-6 sm:p-8">
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

      {/* Pricing — Premium tier boxes, Recommended with white border */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center tracking-tight">
              How We Work With You
            </h2>
            <p className="text-[#A1A1AA] text-center mb-12 max-w-lg mx-auto text-sm">
              Start with the free Snapshot. From there, we can outline next steps.
            </p>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            <FadeInOnScroll delay={0}>
              <div className="bento-card p-6 sm:p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Snapshot Only</h3>
                <p className="text-sm text-[#A1A1AA] mb-6 flex-1">Free diagnostic and one live fix. No obligation to continue.</p>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="premium-button btn-agency inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Book free
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={80}>
              <div className="bento-card p-6 sm:p-8 flex flex-col border-2 border-white relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-white text-black text-xs font-semibold">Recommended</span>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight mt-2">Snapshot + Roadmap</h3>
                <p className="text-sm text-[#A1A1AA] mb-6 flex-1">Everything in Snapshot, plus a written automation priority roadmap after the call.</p>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="premium-button btn-agency inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]">
                  Book free
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={160}>
              <div className="bento-card p-6 sm:p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Ongoing Engagement</h3>
                <p className="text-sm text-[#A1A1AA] mb-6 flex-1">After the Snapshot, we can help implement automation and controls. Scope defined together.</p>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="premium-button btn-agency inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-semibold rounded-full text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Book a call
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* FAQs — Bento */}
      <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center tracking-tight">
            Frequently asked questions
          </h2>
          <div className="bento-card p-6">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <div className="bento-card p-10 sm:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                See What’s Breaking Your Numbers
              </h2>
              <p className="text-[#A1A1AA] mb-6 max-w-lg mx-auto">
                One action: book a free Financial Accuracy Snapshot™. We review
                your setup, fix one issue live, and give you a roadmap. Low effort.
                Low risk.
              </p>
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
                No prep. No obligation. No sales pitch. A few sessions per week
                only.
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
              Book a Free Financial Accuracy Snapshot™
            </a>{" "}
            — no prep, no sales, just clarity.
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

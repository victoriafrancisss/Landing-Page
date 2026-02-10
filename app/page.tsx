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
const CTA_LABEL = "Book a Free Financial Accuracy Snapshot™";

const credibilityStrip = [
  "Your real setup, reviewed live—custom, not templated",
  "At least one real fix done with you in the session—practical operator experience",
  "Your tools, your data. No prep, no new software, personally delivered",
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
      className="min-h-screen relative w-full max-w-full"
      style={{ overflowX: "hidden" }}
    >
      <PremiumBackground />

      {/* Hero */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-28 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-slate-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="w-full max-w-4xl mx-auto relative z-10 px-2 sm:px-4">
          <div className="text-center space-y-6 sm:space-y-8">
            <FadeInOnScroll delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                Accurate Financial Numbers — Before They Become a Costly Problem
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
                  className="premium-button inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  {CTA_LABEL}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-sm text-gray-400">
                  No prep. No sales pitch. No obligation.
                </p>
                <p className="text-sm text-gray-500">
                  A few sessions per week so each one gets hands-on attention.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="relative px-4 sm:px-6 md:px-8 py-8 sm:py-10 border-y border-gray-800/60 bg-gray-900/30">
        <div className="w-full max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {credibilityStrip.map((line, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400/90 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-medium">
                    {line}
                  </span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-3xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              The Problem: Inaccurate Numbers That Look Right Until They Don’t
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
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
          </FadeInOnScroll>
        </div>
      </section>

      {/* How it works — 3-step */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 leading-tight text-center">
              How It Works: Fix Real Issues First, Then Automate
            </h2>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {[
              {
                step: 1,
                title: "Review your financial setup",
                body: "We look at where your numbers come from and where accuracy is most at risk.",
              },
              {
                step: 2,
                title: "Fix one issue live",
                body: "We fix one real problem with you during the session—so you leave with a concrete improvement, not just a report.",
              },
              {
                step: 3,
                title: "Outline what to automate next",
                body: "You get a clear roadmap so your numbers stay reliable as you scale.",
              },
            ].map((item, i) => (
              <FadeInOnScroll key={item.step} delay={i * 100}>
                <div className="glass-effect-premium border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 transition-colors">
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                    <span className="text-lg font-bold text-cyan-400">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll>
            <p className="text-center text-gray-300 font-medium">
              No system rebuilds. No new tools. No extra hires.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Services — what we do */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center">
              What We Can Do After the Snapshot
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto text-sm">
              If you choose to go further, we help improve accuracy and
              automate the right things—in plain language. No packages, no
              tiers.
            </p>
          </FadeInOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {servicesList.map((s, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="border border-gray-700/50 rounded-xl p-5 bg-gray-900/30 hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet — Financial Accuracy Snapshot™ */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-2xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center">
              The Financial Accuracy Snapshot™ — Free, Hands-On, No Pitch
            </h2>
            <p className="text-lg text-gray-300 text-center mb-6 leading-relaxed">
              A free first step: we review your real financial setup, fix one
              issue live with you, and outline what to automate next. Think of
              it as a gift—you get clarity and one concrete fix, not a sales
              call.
            </p>
            <p className="text-sm text-gray-400 text-center mb-6 leading-relaxed max-w-lg mx-auto">
              You leave with at least one concrete improvement to your numbers.
              If we don’t deliver that, the session doesn’t count.
            </p>
            <p className="text-xs text-gray-500 text-center mb-8 max-w-lg mx-auto">
              Offered free while building a small number of case studies.
            </p>
            <ul className="space-y-3 mb-8">
              {leadMagnetBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="text-center space-y-3">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                {CTA_LABEL}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-gray-400">
                No prep. No sales pitch. No obligation. Only a few sessions
                opened each week.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Proof — micro-cases */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              Issue → Fix → Result
            </h2>
          </FadeInOnScroll>
          <div className="space-y-8">
            {microCases.map((c, i) => (
              <FadeInOnScroll key={i} delay={i * 80}>
                <div className="glass-effect-premium border border-gray-700/50 rounded-xl p-6 sm:p-8">
                  <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base">
                    <div>
                      <p className="text-xs font-semibold text-red-400/90 uppercase tracking-wider mb-2">
                        Issue
                      </p>
                      <p className="text-gray-300 leading-relaxed">{c.issue}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-cyan-400/90 uppercase tracking-wider mb-2">
                        Fix
                      </p>
                      <p className="text-gray-300 leading-relaxed">{c.fix}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-green-400/90 uppercase tracking-wider mb-2">
                        Result
                      </p>
                      <p className="text-gray-300 leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for / not for */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="w-full max-w-4xl mx-auto">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 text-center">
              Who This Is For — and Who It’s Not
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-xl mx-auto text-sm">
              We’re built for founders, operators, and small finance teams who
              want accurate numbers without the hype.
            </p>
          </FadeInOnScroll>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
            <FadeInOnScroll delay={0}>
              <div className="border border-cyan-500/30 rounded-xl p-6 sm:p-8 bg-cyan-500/5">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-cyan-400" />
                  For you if
                </h3>
                <ul className="space-y-2.5">
                  {forYou.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-200 text-sm sm:text-base">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
            <FadeInOnScroll delay={100}>
              <div className="border border-gray-600/50 rounded-xl p-6 sm:p-8 bg-gray-800/30">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-gray-400" />
                  Not a fit if
                </h3>
                <ul className="space-y-2.5">
                  {notForYou.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm sm:text-base">
                      <XCircle className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="w-full max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Frequently asked questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-900/20 via-slate-900/30 to-cyan-900/20">
        <div className="w-full max-w-2xl mx-auto text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              See What’s Breaking Your Numbers
            </h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              One action: book a free Financial Accuracy Snapshot™. We review
              your setup, fix one issue live, and give you a roadmap. Low effort.
              Low risk.
            </p>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl"
            >
              {CTA_LABEL}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-sm text-gray-400 mt-4">
              No prep. No obligation. No sales pitch. A few sessions per week
              only.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-10 border-t border-gray-800/50">
        <div className="w-full max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} BOLDSCALE Solutions. Financial
            accuracy for founders and small finance teams.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-sm text-gray-400 mb-4">
            <MapPin className="w-4 h-4 text-blue-400/80" />
            Operating globally
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/victoria-franciss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400" />
            </a>
            <a
              href="mailto:victoriafranciss@hotmail.com"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400" />
            </a>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="Book a call"
            >
              <Calendar className="w-5 h-5 text-gray-400 hover:text-blue-400" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

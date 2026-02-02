import { 
  Clock, 
  TrendingDown, 
  Zap, 
  Shield, 
  Code, 
  Target, 
  CheckCircle2,
  ArrowRight,
  BarChart3,
  DollarSign,
  Timer,
  Sparkles,
  AlertTriangle,
  Video,
  FileText,
  MapPin,
  Linkedin,
  Mail,
  Calendar,
  Database,
  Layers,
  Github,
  ClipboardList
} from "lucide-react";
import { FadeInOnScroll, AnimatedCounter } from './components/InteractiveElements';
import { ConvertKitForm } from './components/ConvertKitForm';
import { SavingsCalculator } from './components/SavingsCalculator';
import { PremiumBackground } from './components/PremiumBackground';

// YouTube VSL: swap in your video ID once uploaded (from youtube.com/watch?v=VIDEO_ID)
// Set via env: NEXT_PUBLIC_YOUTUBE_VIDEO_ID, or replace the string below.
const YOUTUBE_VIDEO_ID = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID || 'WpmjuLzuEcA';

export default function Home() {
  return (
    <main className="min-h-screen relative w-full max-w-full" style={{ overflowX: 'hidden' }}>
      <PremiumBackground />
      {/* Beta Launch Banner */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 md:px-6 text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-lg">
        <div className="w-full max-w-6xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap px-2">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 animate-pulse flex-shrink-0" />
          <span className="text-center">Beta Launch: Limited spots this quarter for a full Workflow Audit</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 animate-pulse flex-shrink-0" />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 pt-24 sm:pt-28 md:pt-24 lg:pt-32 xl:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10">
            <FadeInOnScroll delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5 md:mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}>
                <span className="block">We recover 500+ hours of manual labor waste </span>
                <span className="block">for small-to-mid sized businesses and <span className="whitespace-nowrap">solopreneurs.</span></span>
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
                Turning 12-hour manual nightmares into 15-minute Python runs.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={250}>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                Built for finance teams, ops managers, and founders who run their own books.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8">
                <a
                  href="https://calendly.com/victoriafranciss/automation-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm sm:text-base md:text-lg rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 flex items-center gap-2 sm:gap-3 group transform hover:scale-105 active:scale-95 relative z-10 w-full sm:w-auto"
                  style={{ whiteSpace: 'nowrap', minWidth: 'fit-content', maxWidth: '100%' }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>Get My Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Meet Victoria, Your Architect Section */}
      <section className="px-3 sm:px-4 md:px-6 py-20 sm:py-24 pb-32 md:pb-24 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-3 sm:p-4 md:p-6 lg:p-10 xl:p-14 overflow-hidden w-full">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-center w-full">
              {/* Headshot */}
              <div className="flex flex-col items-center md:items-start w-full" style={{ minWidth: 0, maxWidth: '100%' }}>
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl shadow-blue-500/10" style={{ maxWidth: '100%' }}>
                  <img
                    src="/victoria-headshot.jpg"
                    alt="Victoria Francis - AI Automation Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 sm:mt-5 md:mt-6 text-center md:text-left text-sm sm:text-base md:text-lg text-gray-300 font-semibold tracking-tight">
                  Victoria Francis | Lead Automation Architect
                </p>
              </div>

              {/* Bio Content */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 w-full">
                <div className="w-full">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight">
                    Meet Victoria, Your <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Architect</span>
                  </h2>
                  <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-6 text-gray-200 leading-relaxed">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
                    I don't just run the agency; I write the code. I started BoldScale because I saw brilliant finance teams burning out on Excel work that a script could do in minutes.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
                    When you work with BoldScale Solutions, your project gets <span className="text-cyan-400 font-bold">100% of our focus</span>—no middleman, just results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Step Recovery Plan Section */}
      <section className="px-3 sm:px-4 md:px-6 py-20 sm:py-24 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent w-full overflow-x-hidden">
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-12 sm:mb-16 w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight w-full">
              The <span className="text-cyan-400">3-Step Recovery Plan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-5 sm:p-6 md:p-8 text-center interactive-card hover:border-cyan-500/60 group w-full min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 group-hover:text-cyan-200 transition-colors">
                  We identify your manual leaks.
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 group-hover:text-gray-200 transition-colors">
                  We audit your workflows to find where time and money are being wasted on manual processes.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-5 sm:p-6 md:p-8 text-center interactive-card hover:border-cyan-500/60 group w-full min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 group-hover:text-cyan-200 transition-colors">
                  I build your custom Python pipeline.
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 group-hover:text-gray-200 transition-colors">
                  I create production-ready automation that eliminates your manual bottlenecks.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-5 sm:p-6 md:p-8 text-center interactive-card hover:border-cyan-500/60 group w-full min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5 group-hover:text-cyan-200 transition-colors">
                  We recover 70% of your work week.
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 group-hover:text-gray-200 transition-colors">
                  Your team gets back hundreds of hours per year to focus on high-value work.
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-red-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              The <span className="text-red-400">12-Hour Manual Nightmare</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">Every week, your team loses valuable time to manual processes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-red-500/30 rounded-xl p-8 text-center interactive-card hover:border-red-500/60 group cursor-pointer">
                <Timer className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-3 group-hover:text-red-300 transition-colors">12 Hours</div>
                <div className="text-lg sm:text-xl md:text-2xl text-gray-300 group-hover:text-gray-200 transition-colors font-medium">Per Week Lost</div>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-red-500/30 rounded-xl p-8 text-center interactive-card hover:border-red-500/60 group cursor-pointer">
                <DollarSign className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-3 group-hover:text-red-300 transition-colors">
                  $<AnimatedCounter end={15600} />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-gray-300 group-hover:text-gray-200 transition-colors font-medium">Annual Waste</div>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-red-500/30 rounded-xl p-8 text-center interactive-card hover:border-red-500/60 group cursor-pointer">
                <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-3 group-hover:text-red-300 transition-colors">
                  <AnimatedCounter end={59} suffix="%" />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl text-gray-300 group-hover:text-gray-200 transition-colors font-medium">Hit to Profitability</div>
              </div>
            </FadeInOnScroll>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/40 rounded-xl p-10 text-center shadow-xl shadow-red-900/20">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">Critical Impact</span>
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-200 font-extrabold mb-4 tracking-tight">
              Annual Waste = <span className="text-white text-4xl sm:text-5xl md:text-6xl bg-red-600/30 px-6 py-3 rounded-xl inline-block font-extrabold whitespace-nowrap" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>$15,600</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium">
              624 hours of productivity lost annually
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - intro / see it in action (placed after Pain so visitors are engaged) */}
      <section className="flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <FadeInOnScroll>
            <div className="text-center space-y-3 sm:space-y-4 flex flex-col items-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Watch how we fix the $15,600 leak in 60 seconds.
              </h3>
              <p className="text-sm text-gray-400 mb-2">Watch the demo below.</p>
              <div className="w-full max-w-[600px] mx-auto aspect-video rounded-2xl shadow-2xl border border-gray-700 overflow-hidden relative z-10">
                {YOUTUBE_VIDEO_ID ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?rel=0`}
                    title="How we automate the $15,600 manual leak"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <Video className="w-16 h-16 text-cyan-400 mx-auto opacity-50" />
                      <p className="text-gray-400 text-sm">Add your YouTube Video ID to show your VSL</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <FadeInOnScroll>
            <p className="text-center text-gray-400 text-sm md:text-base mb-6">See your number — adjust the inputs below.</p>
            <SavingsCalculator />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              Transform Your <span className="text-cyan-400">Performance</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">We replace fragile VBA macros with robust Python pipelines</p>
          </div>
          
          {/* Bold 1,800x Callout */}
          <FadeInOnScroll delay={0}>
            <div className="glass-effect-premium bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-2 border-cyan-500/60 rounded-xl p-8 mb-12 text-center shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500 group cursor-pointer">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Zap className="w-10 h-10 text-cyan-400 animate-pulse group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300" />
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                  <span className="text-cyan-300 text-glow">1,800x Faster</span> Data Loading
                </h3>
                <Zap className="w-10 h-10 text-cyan-400 animate-pulse group-hover:scale-125 group-hover:text-cyan-300 transition-all duration-300" />
              </div>
              <p className="text-xl text-gray-300 group-hover:text-gray-200 transition-colors">
                Transform 30-minute data loads into <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">1-second operations</span>
              </p>
            </div>
          </FadeInOnScroll>

          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-b border-cyan-500/20">
                    <th className="px-8 py-6 text-left text-white font-semibold text-lg">Metric</th>
                    <th className="px-8 py-6 text-center text-gray-300 font-semibold">VBA</th>
                    <th className="px-8 py-6 text-center text-cyan-400 font-semibold">Python</th>
                    <th className="px-8 py-6 text-center text-green-400 font-semibold">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                    <td className="px-8 py-6 text-white font-medium">Data Loading</td>
                    <td className="px-8 py-6 text-center text-gray-400">30 min</td>
                    <td className="px-8 py-6 text-center text-cyan-300">1 sec</td>
                    <td className="px-8 py-6 text-center text-green-400 font-bold">1,800x faster</td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors">
                    <td className="px-8 py-6 text-white font-medium">Matching</td>
                    <td className="px-8 py-6 text-center text-gray-400">2 hours</td>
                    <td className="px-8 py-6 text-center text-cyan-300">24 sec</td>
                    <td className="px-8 py-6 text-center text-green-400 font-bold">300x faster</td>
                  </tr>
                  <tr className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-8 py-6 text-white font-medium">Total Process</td>
                    <td className="px-8 py-6 text-center text-gray-400">12 hours</td>
                    <td className="px-8 py-6 text-center text-cyan-300">~15 minutes</td>
                    <td className="px-8 py-6 text-center text-green-400 font-bold">48x faster</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section className="px-6 py-20 pb-32 md:pb-20 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
              <span className="text-cyan-400">Proof of Work</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">Real results from real automation projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Case Study Card - Left Side */}
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-6 md:p-8 lg:p-10 interactive-card hover:border-cyan-500/60 group pb-8 md:pb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Case Study</h3>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white mb-5 leading-snug tracking-tight group-hover:text-cyan-200 transition-colors">
                  How We Reduced Manual Financial Reconciliation Time by <span className="text-cyan-400">70%</span> for a Fintech Startup
                </h4>

                <p className="text-gray-400 mb-7 text-sm leading-relaxed font-light">
                  The finance team spent <span className="text-red-300 font-medium">12+ hours every week</span> manually cross-referencing bank statements with ledger entries, leading to a <span className="text-red-300 font-medium">5% human error rate</span>. Research shows over <span className="text-red-300 font-medium">90% of complex Excel spreadsheets contain manual errors</span>—this was costing them <span className="text-red-300 font-medium">$1,200/month in pure labor waste</span>.
                </p>

                {/* Transformation Highlight */}
                <div className="mb-6 p-4 md:p-5 rounded-lg bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/50">
                  <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4">
                    <div className="text-center flex-1 min-w-[100px] md:min-w-[120px]">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Before</p>
                      <p className="text-xl md:text-2xl font-bold text-red-400 break-words">12 Hours</p>
                      <p className="text-xs text-gray-500 mt-1 break-words">Manual + VBA</p>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mx-2" />
                    <div className="text-center flex-1 min-w-[100px] md:min-w-[120px]">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">After</p>
                      <p className="text-xl md:text-2xl font-bold text-green-400 break-words">15 Minutes</p>
                      <p className="text-xs text-gray-500 mt-1 break-words">Fully Automated</p>
                    </div>
                    <div className="w-full text-center mt-3 md:mt-2 pt-3 border-t border-cyan-500/30">
                      <p className="text-xs md:text-sm text-cyan-300 font-semibold break-words">48x Overall Speed Improvement</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6 md:mb-4">
                  {/* Metric 1 - Speed */}
                  <div className="relative p-4 md:p-5 rounded-lg bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/40 group-hover:border-cyan-500/60 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-cyan-300 uppercase tracking-wider mb-1">Speed Improvement</p>
                        <p className="text-2xl md:text-3xl font-bold text-white mb-1">48x</p>
                        <p className="text-xs text-gray-400 break-words">Reduced 12 hours of manual "data wrestling" to a 15-minute automated run</p>
                      </div>
                      <Zap className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 opacity-60 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Metric 2 - Errors Eliminated */}
                  <div className="relative p-4 md:p-5 rounded-lg bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/40 group-hover:border-green-500/60 transition-all duration-300 shadow-lg shadow-green-500/20">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-green-300 uppercase tracking-wider mb-1">Manual Errors</p>
                        <p className="text-2xl md:text-3xl font-bold text-white mb-1">Zero</p>
                        <p className="text-xs text-gray-400 break-words">Eliminated 5% human error rate & 90% spreadsheet error potential</p>
                      </div>
                      <Shield className="w-8 h-8 md:w-10 md:h-10 text-green-400 opacity-60 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Metric 3 - Financial Recovery */}
                  <div className="relative p-4 md:p-5 rounded-lg bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border-2 border-yellow-500/40 group-hover:border-yellow-500/60 transition-all duration-300 shadow-lg shadow-yellow-500/20 pb-6 md:pb-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-yellow-300 uppercase tracking-wider mb-1">Annual Labor Recovery</p>
                        <p className="text-2xl md:text-3xl font-bold text-white mb-1">$15,600</p>
                        <p className="text-xs text-gray-400 break-words">Total annual savings from eliminating manual reconciliation</p>
                      </div>
                      <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 opacity-60 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Performance Optimizations - Right Side */}
            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-6 md:p-8 lg:p-10 interactive-card hover:border-cyan-500/60 group pb-8 md:pb-10">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Performance Optimizations</h3>
                </div>

                <p className="text-gray-400 mb-6 text-sm">
                  AI-native Python pipeline vs. traditional VBA approach
                </p>

                {/* Performance Metrics */}
                <div className="space-y-4 mb-6">
                  {/* Data Loading */}
                  <div className="p-4 md:p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 mb-4 md:mb-4">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h4 className="text-base md:text-lg font-bold text-white">Data Loading</h4>
                      <span className="text-xl md:text-2xl font-bold text-cyan-400">1,800x</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400">
                      <span className="break-words">VBA: Row-by-row cell access</span>
                      <ArrowRight className="w-4 h-4 hidden sm:block flex-shrink-0" />
                      <span className="break-words">Python: Single read_excel() call</span>
                    </div>
                  </div>

                  {/* Matching */}
                  <div className="p-4 md:p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 mb-4 md:mb-4">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h4 className="text-base md:text-lg font-bold text-white">Matching</h4>
                      <span className="text-xl md:text-2xl font-bold text-cyan-400">300x</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400">
                      <span className="break-words">VBA: O(n) Find() per row</span>
                      <ArrowRight className="w-4 h-4 hidden sm:block flex-shrink-0" />
                      <span className="break-words">Python: O(1) dictionary lookup</span>
                    </div>
                  </div>

                  {/* Transformations */}
                  <div className="p-4 md:p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 mb-4 md:mb-4">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h4 className="text-base md:text-lg font-bold text-white">Transformations</h4>
                      <span className="text-xl md:text-2xl font-bold text-cyan-400">100x</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400">
                      <span className="break-words">VBA: Loop with cell writes</span>
                      <ArrowRight className="w-4 h-4 hidden sm:block flex-shrink-0" />
                      <span className="break-words">Python: Vectorized pandas ops</span>
                    </div>
                  </div>

                  {/* Excel Writing */}
                  <div className="p-4 md:p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 mb-4 md:mb-4 pb-6 md:pb-5">
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <h4 className="text-base md:text-lg font-bold text-white">Excel Writing</h4>
                      <span className="text-xl md:text-2xl font-bold text-cyan-400">540x</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-gray-400">
                      <span className="break-words">VBA: Cell-by-cell writes</span>
                      <ArrowRight className="w-4 h-4 hidden sm:block flex-shrink-0" />
                      <span className="break-words">Python: Bulk to_excel()</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="pt-6 border-t border-cyan-500/20">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                      <div className="flex items-center gap-2">
                        <Code className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-semibold text-white">Python</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-semibold text-white">Pandas</span>
                      </div>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm font-semibold text-white">Cursor AI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>

          {/* GitHub Button */}
          <FadeInOnScroll delay={200}>
            <div className="text-center">
              <a
                href="https://github.com/victoriafrancisss/financial-reconciliation-pipeline"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-gray-900/50 hover:shadow-xl hover:shadow-gray-900/70 border border-gray-600/50 hover:border-cyan-500/50 relative z-10"
              >
                <Github className="w-5 h-5" />
                <span>View Code on GitHub</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" style={{ overflow: 'visible', paddingTop: '3rem' }}>
        <div className="container mx-auto max-w-6xl" style={{ overflow: 'visible' }}>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Choose Your <span className="text-blue-400">Automation Path</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium max-w-3xl mx-auto">Solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" style={{ overflow: 'visible' }}>
            {/* Quick Win */}
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/60 transition-all duration-300 interactive-card group">
                <div className="mb-6">
                  <Zap className="w-9 h-9 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Quick Win</h3>
                  <div className="text-3xl font-bold text-white mb-1 tracking-tight">$800</div>
                  <p className="text-gray-400 text-sm font-light">One-time payment</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 break-words min-w-0">Eliminate one critical workflow bottleneck</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 break-words min-w-0">Production-ready Python automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 break-words min-w-0">Complete technical documentation</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/victoriafranciss/automation-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Get My Audit
                </a>
              </div>
            </FadeInOnScroll>

            {/* Workflow Architect */}
            <FadeInOnScroll delay={100}>
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border-2 border-blue-500/50 rounded-xl p-8 pt-14 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 relative" style={{ overflow: 'visible', marginTop: '1rem' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-50" style={{ whiteSpace: 'nowrap', overflow: 'visible' }}>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2 rounded-full shadow-xl" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
                  MOST POPULAR
                </span>
              </div>
              <div className="mb-6">
                <Code className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Workflow Architect</h3>
                <div className="text-4xl font-bold text-white mb-1">$1,500</div>
                <p className="text-gray-400 text-sm">One-time payment</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 break-words">Multi-workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 break-words">Custom Python architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 break-words min-w-0">Comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 break-words min-w-0">30-day support</span>
                </li>
              </ul>
              
              {/* Grand Slam Bonus */}
              <div className="bg-gradient-to-r from-yellow-500/30 to-amber-500/30 border-2 border-yellow-500/60 rounded-lg p-5 mb-8 shadow-lg shadow-yellow-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <h4 className="font-bold text-yellow-200 text-base uppercase tracking-wide">GRAND SLAM BONUS</h4>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5">
                    <Video className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white font-medium break-words min-w-0">Custom Video Onboarding</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FileText className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white font-medium break-words min-w-0">Team SOP Documentation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <span className="text-base text-white font-medium break-words min-w-0">Extended 30-Day Support</span>
                  </li>
                </ul>
              </div>
              
              <a
                href="https://calendly.com/victoriafranciss/automation-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 relative z-10"
              >
                Get My Audit
              </a>
              </div>
            </FadeInOnScroll>

            {/* Growth Partner */}
            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-gray-700/50 rounded-xl p-8 hover:border-purple-500/60 transition-all duration-300 interactive-card group">
                <div className="mb-6">
                  <Target className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Growth Partner</h3>
                  <div className="text-4xl font-bold text-white mb-1">$400</div>
                  <p className="text-gray-400 text-sm">Per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 break-words min-w-0">Continuously maximize automation ROI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 break-words min-w-0">Eliminate bottlenecks as they emerge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 break-words min-w-0">Monthly profitability optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Unlimited strategic consultations</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/victoriafranciss/automation-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Get My Audit
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Why <span className="text-blue-400">Trust</span> Our Automation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-blue-500/30 rounded-xl p-8 text-center interactive-card hover:border-blue-500/60 group cursor-pointer">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-200 transition-colors tracking-tight">Maximize Profitability</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm font-light leading-relaxed">
                  We engineer every automation to deliver measurable ROI. We don't just automate—we transform your bottom line.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-blue-500/30 rounded-xl p-8 text-center interactive-card hover:border-blue-500/60 group cursor-pointer">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Eliminate Technical Debt</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  I write production-grade code that scales. Zero shortcuts. Zero legacy baggage. Just results that compound.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-blue-500/30 rounded-xl p-8 text-center interactive-card hover:border-blue-500/60 group cursor-pointer">
                <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Transform Workflows</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  We deliver industry-agnostic automation that eliminates waste and maximizes efficiency. I build it to scale with your growth.
                </p>
              </div>
            </FadeInOnScroll>
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">The 5-Hour Recovery Guarantee</h3>
            </div>
            <p className="text-gray-300 text-lg">
              If we don't recover at least 5 hours of your team's week in the first 14 days, we work for free until we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="px-6 py-24 bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-purple-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 text-center shadow-2xl" style={{ overflow: 'visible' }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
              Ready to <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Eliminate</span> the{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                $15,600 Annual Leak?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Transform your operations in 15 minutes. Discover exactly how much time and money you're losing—and how to recover it.
            </p>
            <div className="flex justify-center px-2 sm:px-4">
              <a
                href="https://calendly.com/victoriafranciss/automation-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm md:text-base rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 relative z-10 tracking-tight"
                style={{ whiteSpace: 'nowrap', minWidth: 'fit-content' }}
              >
                <span className="relative z-10" style={{ whiteSpace: 'nowrap' }}>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-6 sm:mt-8 font-light">No commitment required <span className="hidden sm:inline">•</span><span className="sm:hidden"><br /></span> Results in 15 minutes</p>
          </div>
        </div>
      </section>

      {/* Want More Info Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900/80 to-slate-900/90 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-10 md:p-14 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10 mb-10">
              {/* Checklist Preview Icon */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 flex items-center justify-center shadow-lg shadow-blue-500/10">
                  <ClipboardList className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  Stop the <span className="text-red-400">$15,600</span> Leak
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Get the <span className="text-cyan-400 font-medium">10-Point Automation Audit</span> I use to identify where finance teams lose 12+ hours a week.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <ConvertKitForm />
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-6">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-6 text-gray-400">
            <p>&copy; {new Date().getFullYear()} BoldScale Solutions. All rights reserved.</p>
          </div>
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-400">
                AI Automation Consultant | Operating Globally
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/victoria-franciss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:victoriafranciss@hotmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://calendly.com/victoriafranciss/automation-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label="Schedule Call"
              >
                <Calendar className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

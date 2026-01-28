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

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{ contain: 'layout style paint', willChange: 'auto' }}>
      <PremiumBackground />
      {/* Beta Launch Banner - Updated */}
      <div className="relative z-50 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white py-3 px-6 text-center font-semibold text-sm md:text-base shadow-lg">
        <div className="container mx-auto max-w-6xl flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Beta Launch: Only 2 spots remaining for a full Workflow Audit</span>
          <Sparkles className="w-4 h-4 animate-pulse" />
        </div>
      </div>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <FadeInOnScroll delay={100}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                I recover 500+ hours of manual labor waste for small-to-mid sized businesses and solopreneurs.
              </h1>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
                Turning 12-hour manual nightmares into 15-minute Python runs.
              </p>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href="https://calendly.com/victoriafranciss/automation-discovery-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-button px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 flex items-center gap-2 group transform hover:scale-105 active:scale-95 relative z-10"
                >
                  Get My Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Meet Victoria, Your Architect Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-10 md:p-14 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Headshot */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl shadow-blue-500/10">
                  <img
                    src="/victoria-headshot.jpg"
                    alt="Victoria Francis - AI Automation Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-5 text-center md:text-left text-sm text-gray-400 font-medium tracking-tight">
                  Victoria Francis | Lead Automation Architect
                </p>
              </div>

              {/* Bio Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                    Meet Victoria, Your <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Architect</span>
                  </h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </div>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p className="text-lg md:text-xl font-light">
                    I'm <span className="text-white font-semibold">Victoria Francis</span>, an AI-native automation specialist.
                  </p>
                  <p className="text-base md:text-lg font-light">
                    I help business owners reclaim their time and sanity by replacing manual data entry with self-healing Python pipelines.
                  </p>
                  <p className="text-base md:text-lg font-light">
                    When you work with BoldScale Solutions, your project gets <span className="text-cyan-400 font-semibold">100% of our focus</span>—no middleman, just results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Step Recovery Plan Section */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              The <span className="text-cyan-400">3-Step Recovery Plan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-8 text-center interactive-card hover:border-cyan-500/60 group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                  We identify your manual leaks.
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  We audit your workflows to find where time and money are being wasted on manual processes.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-8 text-center interactive-card hover:border-cyan-500/60 group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                  I build your custom Python pipeline.
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  I create production-ready automation that eliminates your manual bottlenecks.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-8 text-center interactive-card hover:border-cyan-500/60 group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-200 transition-colors">
                  You recover 70% of your work week.
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-red-400">12-Hour Manual Nightmare</span>
            </h2>
            <p className="text-xl text-gray-400">Every week, your team loses valuable time to manual processes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-red-500/30 rounded-xl p-8 text-center interactive-card hover:border-red-500/60 group cursor-pointer">
                <Timer className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">12 Hours</div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Per Week Lost</div>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-red-500/30 rounded-xl p-8 text-center interactive-card hover:border-red-500/60 group cursor-pointer">
                <DollarSign className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                  $<AnimatedCounter end={15600} />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Annual Waste</div>
              </div>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-red-500/30 rounded-xl p-8 text-center interactive-card hover:border-red-500/60 group cursor-pointer">
                <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                  <AnimatedCounter end={59} suffix="%" />
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Hit to Profitability</div>
              </div>
            </FadeInOnScroll>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/40 rounded-xl p-10 text-center shadow-xl shadow-red-900/20">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold text-xs uppercase tracking-widest">Critical Impact</span>
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
            <p className="text-2xl md:text-3xl text-red-200 font-bold mb-3 tracking-tight">
              Annual Waste = <span className="text-white text-3xl md:text-4xl bg-red-600/30 px-5 py-2.5 rounded-lg inline-block font-bold">$15,600</span>
            </p>
            <p className="text-gray-300 text-base font-light">
              624 hours of productivity lost annually
            </p>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <FadeInOnScroll>
            <SavingsCalculator />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transform Your <span className="text-cyan-400">Performance</span>
            </h2>
            <p className="text-xl text-gray-400">Python automation that eliminates bottlenecks and maximizes efficiency</p>
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
      <section className="px-6 py-20 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-cyan-400">Proof of Work</span>
            </h2>
            <p className="text-xl text-gray-400">Real results from real automation projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Case Study Card - Left Side */}
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-8 md:p-10 interactive-card hover:border-cyan-500/60 group">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">Case Study</h3>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-white mb-5 leading-snug tracking-tight group-hover:text-cyan-200 transition-colors">
                  How I Reduced Manual Financial Reconciliation Time by <span className="text-cyan-400">70%</span> for a Fintech Startup
                </h4>

                <p className="text-gray-400 mb-7 text-sm leading-relaxed font-light">
                  The finance team spent <span className="text-red-300 font-medium">12+ hours every week</span> manually cross-referencing bank statements with ledger entries, leading to a <span className="text-red-300 font-medium">5% human error rate</span>. Research shows over <span className="text-red-300 font-medium">90% of complex Excel spreadsheets contain manual errors</span>—this was costing them <span className="text-red-300 font-medium">$1,200/month in pure labor waste</span>.
                </p>

                {/* Transformation Highlight */}
                <div className="mb-6 p-5 rounded-lg bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-2 border-cyan-500/50">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="text-center flex-1 min-w-[120px]">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Before</p>
                      <p className="text-2xl font-bold text-red-400">12 Hours</p>
                      <p className="text-xs text-gray-500 mt-1">Manual + VBA</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <div className="text-center flex-1 min-w-[120px]">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">After</p>
                      <p className="text-2xl font-bold text-green-400">15 Minutes</p>
                      <p className="text-xs text-gray-500 mt-1">Fully Automated</p>
                    </div>
                    <div className="w-full text-center mt-2 pt-3 border-t border-cyan-500/30">
                      <p className="text-sm text-cyan-300 font-semibold">48x Overall Speed Improvement</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Metric 1 - Speed */}
                  <div className="relative p-5 rounded-lg bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/40 group-hover:border-cyan-500/60 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs text-cyan-300 uppercase tracking-wider mb-1">Speed Improvement</p>
                        <p className="text-3xl font-bold text-white mb-1">48x</p>
                        <p className="text-xs text-gray-400">Reduced 12 hours of manual "data wrestling" to a 15-minute automated run</p>
                      </div>
                      <Zap className="w-10 h-10 text-cyan-400 opacity-60 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Metric 2 - Errors Eliminated */}
                  <div className="relative p-5 rounded-lg bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/40 group-hover:border-green-500/60 transition-all duration-300 shadow-lg shadow-green-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs text-green-300 uppercase tracking-wider mb-1">Manual Errors</p>
                        <p className="text-3xl font-bold text-white mb-1">Zero</p>
                        <p className="text-xs text-gray-400">Eliminated 5% human error rate & 90% spreadsheet error potential</p>
                      </div>
                      <Shield className="w-10 h-10 text-green-400 opacity-60 flex-shrink-0" />
                    </div>
                  </div>

                  {/* Metric 3 - Financial Recovery */}
                  <div className="relative p-5 rounded-lg bg-gradient-to-r from-yellow-900/30 to-amber-900/30 border-2 border-yellow-500/40 group-hover:border-yellow-500/60 transition-all duration-300 shadow-lg shadow-yellow-500/20">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-xs text-yellow-300 uppercase tracking-wider mb-1">Annual Labor Recovery</p>
                        <p className="text-3xl font-bold text-white mb-1">$15,600</p>
                        <p className="text-xs text-gray-400">Total annual savings from eliminating manual reconciliation</p>
                      </div>
                      <DollarSign className="w-10 h-10 text-yellow-400 opacity-60 flex-shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Performance Optimizations - Right Side */}
            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-cyan-500/30 rounded-xl p-8 md:p-10 interactive-card hover:border-cyan-500/60 group">
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
                  <div className="p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Data Loading</h4>
                      <span className="text-2xl font-bold text-cyan-400">1,800x</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>VBA: Row-by-row cell access</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Python: Single read_excel() call</span>
                    </div>
                  </div>

                  {/* Matching */}
                  <div className="p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Matching</h4>
                      <span className="text-2xl font-bold text-cyan-400">300x</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>VBA: O(n) Find() per row</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Python: O(1) dictionary lookup</span>
                    </div>
                  </div>

                  {/* Transformations */}
                  <div className="p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Transformations</h4>
                      <span className="text-2xl font-bold text-cyan-400">100x</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>VBA: Loop with cell writes</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Python: Vectorized pandas ops</span>
                    </div>
                  </div>

                  {/* Excel Writing */}
                  <div className="p-5 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">Excel Writing</h4>
                      <span className="text-2xl font-bold text-cyan-400">540x</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>VBA: Cell-by-cell writes</span>
                      <ArrowRight className="w-4 h-4" />
                      <span>Python: Bulk to_excel()</span>
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
      <section className="px-6 py-24 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              Choose Your <span className="text-blue-400">Automation Path</span>
            </h2>
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">Solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                    <span className="text-gray-300">Eliminate one critical workflow bottleneck</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Production-ready Python automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Complete technical documentation</span>
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
              <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm border-2 border-blue-500/50 rounded-xl p-8 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 relative interactive-card">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full">
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
                  <span className="text-gray-300">Multi-workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Custom Python architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">30-day support</span>
                </li>
              </ul>
              
              {/* Grand Slam Bonus */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 rounded-lg p-4 mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <h4 className="font-bold text-yellow-300 text-sm">GRAND SLAM BONUS</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Video className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Custom Video Onboarding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Team SOP Documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-200">Extended 30-Day Support</span>
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
                    <span className="text-gray-300">Continuously maximize automation ROI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Eliminate bottlenecks as they emerge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Monthly profitability optimization</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              Why <span className="text-blue-400">Trust</span> Our Automation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeInOnScroll delay={0}>
              <div className="glass-effect-premium border border-blue-500/30 rounded-xl p-8 text-center interactive-card hover:border-blue-500/60 group cursor-pointer">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-200 transition-colors tracking-tight">Maximize Profitability</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-sm font-light leading-relaxed">
                  Every automation is engineered to deliver measurable ROI. We don't just automate—we transform your bottom line.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <div className="glass-effect-premium border border-blue-500/30 rounded-xl p-8 text-center interactive-card hover:border-blue-500/60 group cursor-pointer">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Eliminate Technical Debt</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Production-grade code that scales. Zero shortcuts. Zero legacy baggage. Just results that compound.
                </p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={200}>
              <div className="glass-effect-premium border border-blue-500/30 rounded-xl p-8 text-center interactive-card hover:border-blue-500/60 group cursor-pointer">
                <BarChart3 className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Transform Workflows</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Industry-agnostic automation that eliminates waste and maximizes efficiency. Built to scale with your growth.
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
              If we don't recover at least 5 hours of your team's week in the first 14 days, I work for free until we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="px-6 py-24 bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-purple-900/30">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Eliminate</span> the{" "}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                $15,600 Annual Leak?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Transform your operations in 15 minutes. Discover exactly how much time and money you're losing—and how to recover it.
            </p>
            <a
              href="https://calendly.com/victoriafranciss/automation-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/70 relative z-10 tracking-tight"
            >
              <span className="relative z-10">Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-400 mt-8 font-light">No commitment required • Results in 15 minutes</p>
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
                  Get the <span className="text-cyan-400 font-medium">10-Point Automation Audit</span> I use to recover 12+ hours a week for finance teams.
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

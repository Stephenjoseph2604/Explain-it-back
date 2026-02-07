// ExplainItBackLanding.tsx
import React from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Play, ChevronRight, Star, CheckCircle2 } from "lucide-react"
import { Nav } from "./Nav"

const FloatingSphere = ({
  className,
  delay = 0,
}: {
  className?: string
  delay?: number
}) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      opacity: [0.8, 1, 0.8],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
    className={`absolute rounded-full blur-2xl ${className}`}
  />
)

const StarBackground = () => {
  // Generate random stars
  const stars = Array.from({
    length: 20,
  }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 5,
  }))
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 2, star.opacity],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: star.delay,
          }}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  )
}

export function ExplainItBackLanding() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden font-sans selection:bg-purple-500/30">
      <StarBackground />

      {/* <Nav /> */}

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="lg:col-span-6 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-purple-500/30 rounded-full px-3 py-1 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                <Zap className="w-4 h-4 text-purple-400 fill-purple-400" />
                <span className="text-sm font-medium text-purple-200">
                  AI-Powered Learning
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Learn by{" "}
                <br className="hidden lg:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 animate-gradient-x">
                  Explaining
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Master any subject by teaching it back to AI. Our intelligent
                system identifies gaps in your understanding and helps you truly
                learn faster.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                <button
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 border border-transparent"
                  type="button"
                >
                  Start Learning Free
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                <button
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                  type="button"
                >
                  Watch Demo
                  <Play className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#0F172A] overflow-hidden bg-slate-700"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0F172A] bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                    +10k
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <span className="mt-1 block">Loved by students worldwide</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Visual */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="lg:col-span-6 mt-16 lg:mt-0 relative"
            >
              {/* Decorative Spheres */}
              <FloatingSphere
                className="w-64 h-64 bg-purple-600/20 -top-12 -right-12"
                delay={0}
              />
              <FloatingSphere
                className="w-48 h-48 bg-violet-600/20 bottom-0 -left-12"
                delay={2}
              />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-800/50 border border-white/10 backdrop-blur-xl p-2 shadow-2xl overflow-hidden group">
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Browser/App Window */}
                <div className="relative bg-[#0F172A] rounded-xl overflow-hidden border border-white/5">
                  {/* Window Header */}
                  <div className="h-8 bg-slate-900 border-b border-white/5 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    {/* Chat Interface Mockup */}
                    <div className="space-y-4">
                      {/* AI Message */}
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%] border border-white/5">
                          <p className="text-sm text-slate-300">
                            Explain the concept of{" "}
                            <span className="text-purple-400 font-medium">
                              Quantum Superposition
                            </span>{" "}
                            to me like I'm 5 years old.
                          </p>
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="flex items-start justify-end space-x-3">
                        <div className="bg-violet-500/10 rounded-2xl rounded-tr-none p-4 max-w-[85%] border border-violet-500/20">
                          <p className="text-sm text-slate-200">
                            Okay! Imagine a spinning coin. While it's spinning,
                            it's not heads or tails yet - it's kind of both at
                            the same time!
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center flex-shrink-0 border border-white/10">
                          <div className="w-4 h-4 rounded-full bg-slate-400" />
                        </div>
                      </div>

                      {/* AI Feedback */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1.5,
                          duration: 0.5,
                        }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 max-w-[85%] border border-white/5">
                          <div className="flex items-center space-x-2 mb-2 text-green-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">
                              Great Analogy!
                            </span>
                          </div>
                          <p className="text-sm text-slate-300">
                            That's a perfect way to visualize it. This state of
                            being "both" until measured (when the coin stops) is
                            exactly what superposition is.
                          </p>

                          {/* Progress Bar */}
                          <div className="mt-4 pt-4 border-t border-white/5">
                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                              <span>Understanding</span>
                              <span>85%</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                initial={{
                                  width: 0,
                                }}
                                animate={{
                                  width: "85%",
                                }}
                                transition={{
                                  delay: 2,
                                  duration: 1,
                                  ease: "easeOut",
                                }}
                                className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

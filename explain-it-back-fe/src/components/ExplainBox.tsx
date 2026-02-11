import  { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, CheckCircle2, XCircle, Lightbulb, Play } from "lucide-react"

import { explainAPI } from "./api" // adjust path as needed

// --- Types ---
interface Feedback {
  correctPoints?: string[]
  missingPoints?: string[]
  improvedExplanation?: string
}

interface Result {
  score: number
  feedback: Feedback
}

export default function ExplainBox() {
  const [topic, setTopic] = useState<string>("")
  const [answer, setAnswer] = useState<string>("")
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const submit = async () => {
    setLoading(true)
    try {
      const res = await explainAPI({ topic, answer })
      setResult(res.data)
    } finally {
      setLoading(false)
    }
  }

  // Helper to get level label and color from score
  const getLevel = (score: number) => {
    if (score < 40) return { label: "Poor", color: "#ef4444" }
    if (score < 60) return { label: "Fair", color: "#f59e0b" }
    if (score < 80) return { label: "Good", color: "#10b981" }
    return { label: "Excellent", color: "#059669" }
  }

  const level = result ? getLevel(result.score) : null

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Same dark background */}
      <div className="absolute inset-0 bg-[#0F172A] z-0" />

      {/* Star background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const top = `${Math.random() * 100}%`
          const left = `${Math.random() * 100}%`
          const size = Math.random() * 3 + 1
          const opacity = Math.random() * 0.5 + 0.1
          const delay = Math.random() * 5

          return (
            <motion.div
              key={i}
              initial={{ opacity }}
              animate={{
                opacity: [opacity, opacity * 2, opacity],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay,
              }}
              className="absolute bg-white rounded-full"
              style={{
                top,
                left,
                width: size,
                height: size,
              }}
            />
          )
        })}
      </div>

      {/* Floating spheres */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-purple-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200 uppercase tracking-wider">
              Try It Now
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl text-purple-100 lg:text-5xl font-extrabold tracking-tight mb-4">
            Explain It
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              {" "}
              Back
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A smart feedback tool that helps you learn by explaining concepts in your own words.
          </p>
        </motion.div>

        {/* Form + Report Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-1"
          >
            <div className="bg-slate-800/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-bold mb-6 text-slate-100">Enter Your Question & Answer</h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Topic or Question
                  </label>
                  <input
                    type="text"
                    placeholder="Enter topic (e.g., what is functions in Java)"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/70 border border-white/15 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Explanation
                  </label>
                  <textarea
                    placeholder="Explain in your own words..."
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/70 border border-white/15 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all duration-300 resize-y"
                  />
                </div>

                <button
                  onClick={submit}
                  disabled={!topic || !answer || loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-medium shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 border border-transparent"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <Play className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </span>
                  ) : (
                    "Analyze My Answer"
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: Analytics Report */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-2 lg:order-2"
          >
            <div className="bg-slate-800/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl min-h-[480px] flex flex-col">
              <h2 className="text-xl font-bold mb-6 text-slate-100">Analytics Report</h2>

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex-1 flex flex-col items-center justify-center space-y-4 text-slate-300"
                >
                  <Play className="w-10 h-10 text-violet-400 animate-spin" />
                  <p className="text-lg">Analyzing your answer...</p>
                  <p className="text-sm text-slate-400">Our AI is evaluating your understanding</p>
                </motion.div>
              )}

              {!loading && result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 space-y-6"
                >
                  {/* Score Header */}
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="bg-slate-800/70 border border-white/15 rounded-lg px-4 py-2">
                      <span className="text-sm text-slate-300">Score:</span>{" "}
                      <span className="text-lg font-bold text-white">
                        {result.score}/100
                      </span>
                    </div>

                    <div
                      className="px-4 py-2 rounded-lg text-sm font-bold text-white"
                      style={{ backgroundColor: level?.color }}
                    >
                      {level?.label}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-slate-300">
                      <span>Understanding</span>
                      <span className="ml-auto">{result.score}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.score}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: level?.color }}
                      />
                    </div>
                  </div>

                  {/* What you got right */}
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-base font-bold text-slate-100 flex items-center mb-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                      What you got right
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {result.feedback.correctPoints?.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 mr-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What you missed */}
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-base font-bold text-slate-100 flex items-center mb-3">
                      <XCircle className="w-4 h-4 text-red-400 mr-2" />
                      What you missed
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {result.feedback.missingPoints?.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 mr-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improved explanation */}
                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-base font-bold text-slate-100 flex items-center mb-3">
                      <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
                      Improved explanation
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {result.feedback.improvedExplanation}
                    </p>
                  </div>
                </motion.div>
              )}

              {!loading && !result && (
                <div className="flex-1 flex items-center justify-center text-slate-400 text-sm">
                  Submit your topic and answer to see the analytics report.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

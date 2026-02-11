import { motion } from 'framer-motion'
import {
  Brain,
  FileText,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Brain,
      title: "Ask Your Question",
      description:
        "Enter any topic, question, or concept you want to master. Our AI instantly understands your learning goal.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: FileText,
      title: "Explain It Back",
      description:
        "Type your answer or explanation. Be as detailed or simple as you want — AI captures every nuance.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: CheckCircle2,
      title: "Get Smart Feedback",
      description:
        "Receive instant analysis with understanding score, gaps identified, and personalized improvement tips.",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Same background as your main page */}
      <div className="absolute inset-0 bg-[#0F172A] z-0" />

      {/* Reuse your star background */}
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

      {/* Decorative floating spheres */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-purple-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200 uppercase tracking-wider">
              How It Works
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            3 Simple Steps to
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Master Any Subject
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Students come, type a question or topic, submit their answer, and our AI analyzes it to generate a detailed report with understanding score and improvement tips.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const delay = index * 0.2

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative bg-slate-800/50 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl  h-full transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Step number badge */}
                  <div className="absolute -top-5 left-1 transform -translate-x-1/2">
                    <div
                      className={`w-13 h-13 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-all duration-300`}
                    >
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300">
                    <Icon
                      className={`w-8 h-8 ${
                        index === 0
                          ? "text-violet-400"
                          : index === 1
                          ? "text-emerald-400"
                          : "text-orange-400"
                      } drop-shadow-lg`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 text-center leading-tight group-hover:text-purple-100 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 text-center leading-relaxed mb-8">
                    {step.description}
                  </p>

                  {/* Connector arrow (except last step) */}
                  {index < 2 && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-slate-700 border-r border-b border-white/20 group-hover:bg-emerald-500/50 transition-all duration-300" />
                  )}
                </div>

                {/* Horizontal connector line (except last step) */}
                {index < 2 && (
                  <div className="absolute top-1/2 right-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-24"
        >
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 transition-all duration-300 border border-transparent">
            Start Your First Analysis
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorksSection

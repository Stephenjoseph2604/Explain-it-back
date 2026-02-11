// WhatsNextPage.tsx
import  { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Calendar, CheckCircle2 } from "lucide-react"

const WhatsNextPage = () => {
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null)

  const roadmap = [
    {
      quarter: "Q1 2026",
      status: "done",
      items: [
        "Core Explain It Back engine",
        "Student feedback analytics",
        "Basic teacher dashboard",
      ],
    },
    {
      quarter: "Q2 2026",
      status: "in-progress",
      items: [
        "Subject‑specific templates (Math, Science, CS)",
        "Class‑wide analytics export (CSV/PDF)",
        "Improved explanation suggestions",
      ],
    },
    {
      quarter: "Q3 2026",
      status: "planned",
      items: [
        "Mobile app (iOS & Android)",
        "Quiz‑style practice mode",
        "Collaborative study groups",
      ],
    },
    {
      quarter: "Q4 2026",
      status: "planned",
      items: [
        "Institutional LMS integration",
        "Custom rubrics for teachers",
        "Advanced progress tracking",
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    if (status === "done") return "bg-green-500/20 text-green-400 border-green-500/40"
    if (status === "in-progress") return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40"
    return "bg-slate-600/20 text-slate-400 border-slate-600/40"
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-purple-500/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.15)]">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200 uppercase tracking-wider">
              What’s Next
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Our Roadmap
            <span className="block mt-2 bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              What’s Coming
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We’re constantly improving Explain It Back to help students and teachers learn faster and more effectively. Here’s what you can expect in the coming months.
          </p>
        </motion.div>

        {/* Timeline Roadmap */}
        <div className="relative mb-16">
          {/* Timeline line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500/40 to-purple-500/40" />

          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.quarter}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredPhase(phase.quarter)}
                onMouseLeave={() => setHoveredPhase(null)}
                className="relative group"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-10 top-1 w-4 h-4 rounded-full border-4 bg-[#0F172A] transition-all duration-300 ${
                    hoveredPhase === phase.quarter
                      ? "scale-125"
                      : ""
                  } ${getStatusColor(phase.status).replace("text-", "border-")}`}
                />

                {/* Phase card */}
                <div
                  className={`ml-20 p-6 rounded-xl border backdrop-blur-xl shadow-lg transition-all duration-300 ${
                    hoveredPhase === phase.quarter
                      ? "scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                      : "shadow-2xl"
                  } ${getStatusColor(phase.status)}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-100">{phase.quarter}</h3>
                    <span
                      className={`text-xs font-bold px-2 py-1 rounded-full ${
                        getStatusColor(phase.status)
                      }`}
                    >
                      {phase.status === "done"
                        ? "Done"
                        : phase.status === "in-progress"
                        ? "In Progress"
                        : "Planned"}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            phase.status === "done"
                              ? "text-green-400"
                              : phase.status === "in-progress"
                              ? "text-yellow-400"
                              : "text-slate-400"
                          }`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-100">
            Want to Shape the Future?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">
            We listen to students and teachers to decide what to build next. Join our community and help us prioritize the features you care about most.
          </p>
          <button
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A] bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 border border-transparent"
            type="button"
          >
            Join the Community
            <Sparkles className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatsNextPage

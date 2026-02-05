// PricingPage.tsx
import React from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, CheckCircle2, Users, BookOpen, Star } from "lucide-react"

const PricingPage = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for students just getting started.",
      color: "from-slate-600 to-slate-700",
      features: [
        "Up to 5 analyses per month",
        "Basic understanding score",
        "Limited feedback depth",
        "Community support",
      ],
      cta: "Get Started",
    },
    {
      name: "Student",
      price: "₹299",
      period: "/month",
      description: "For serious learners who want deeper feedback.",
      color: "from-violet-600 to-purple-600",
      popular: true,
      features: [
        "Unlimited analyses",
        "Detailed understanding score",
        "Correct & missing points breakdown",
        "Improved explanation suggestions",
        "Priority support",
      ],
      cta: "Upgrade Now",
    },
    {
      name: "Teacher",
      price: "₹999",
      period: "/month",
      description: "For educators managing multiple students.",
      color: "from-emerald-600 to-teal-600",
      features: [
        "All Student features",
        "Class‑wide analytics dashboard",
        "Export reports (PDF/CSV)",
        "Custom rubrics & scoring",
        "Dedicated support",
      ],
      cta: "Contact Sales",
    },
  ]

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
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200 uppercase tracking-wider">
              Pricing
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Plans for Everyone
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your learning or teaching needs. All plans include our AI‑powered “Explain It Back” feedback engine.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const delay = index * 0.2
            const isPopular = plan.popular

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div
                  className={`relative bg-slate-800/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl h-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${
                    isPopular
                      ? "ring-2 ring-violet-500/50 bg-slate-800/70"
                      : ""
                  }`}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {plan.name === "Starter" && <Sparkles className="w-5 h-5 text-white" />}
                    {plan.name === "Student" && <BookOpen className="w-5 h-5 text-white" />}
                    {plan.name === "Teacher" && <Users className="w-5 h-5 text-white" />}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>

                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-sm text-slate-300 ml-1">{plan.period}</span>
                    )}
                  </div>

                  <p className="text-slate-300 text-sm mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 border ${
                      isPopular
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 border-transparent"
                        : "bg-white/5 text-white hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ / Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            All plans include access to our AI‑powered feedback engine. You can upgrade or downgrade at any time, and we offer a 14‑day money‑back guarantee on paid plans.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPage

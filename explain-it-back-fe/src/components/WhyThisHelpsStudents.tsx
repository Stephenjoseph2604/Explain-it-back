// WhyThisHelpsStudents.tsx
import { motion } from "framer-motion"
import { Lightbulb, Brain, Users, CheckCircle2, BookOpen, Star } from "lucide-react"

const WhyThisHelpsStudents = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Learn by Explaining",
      description:
        "Students solidify understanding by teaching concepts back to AI, which mirrors real‑world exam and interview scenarios.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Personalized Feedback",
      description:
        "Each student gets tailored feedback that highlights what they got right, what they missed, and how to improve.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: CheckCircle2,
      title: "Instant Understanding Score",
      description:
        "A clear score and level (Poor → Excellent) helps students track progress and focus on weak areas.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: BookOpen,
      title: "Better Exam Preparation",
      description:
        "Regular practice with AI feedback builds confidence and reduces exam anxiety by simulating real‑world questions.",
      color: "from-blue-500 to-cyan-600",
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
            <Lightbulb className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200 uppercase tracking-wider">
              Why This Helps Students
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Turn Passive Learning
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Into Active Mastery
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our AI‑integrated platform helps students move from “I think I understand” to “I can explain it clearly” — the real test of mastery.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((item, index) => {
            const Icon = item.icon
            const delay = index * 0.2

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-slate-800/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl h-full transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  {/* Icon badge */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#0F172A] overflow-hidden bg-slate-700"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Student avatar"
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

          <p className="text-slate-300 max-w-2xl mx-auto">
            Students who use this platform regularly report better grades, higher confidence, and faster learning because they practice explaining concepts, not just memorizing them.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyThisHelpsStudents

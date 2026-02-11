// NotFoundPage.tsx
import { motion } from "framer-motion"
import { Sparkles,  Home, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-300 max-w-lg mx-auto leading-relaxed">
            The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
          </p>
        </motion.div>

        {/* Illustration / Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10 inline-flex items-center justify-center"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-medium transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link
            to="/try-it-now"
            className="inline-flex items-center justify-center px-5 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 border border-transparent"
          >
            Try It Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        {/* Fun footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-sm text-slate-400"
        >
          <p>
            Lost in space? Don’t worry — we’re here to help you find your way back.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default NotFoundPage

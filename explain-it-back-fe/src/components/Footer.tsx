// Footer.tsx
import React from "react"
import { motion } from "framer-motion"
import { Sparkles, Twitter, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-[#0F172A] text-white border-t border-white/10">
      {/* Plain dark background */}
      <div className="absolute inset-0 bg-[#0F172A] z-0" />

      {/* Star background (same as your other pages) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => {
          const top = `${Math.random() * 100}%`
          const left = `${Math.random() * 100}%`
          const size = Math.random() * 2 + 1
          const opacity = Math.random() * 0.5 + 0.1

          return (
            <motion.div
              key={i}
              animate={{
                opacity: [opacity, opacity * 1.5, opacity],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 4,
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">Explain It Back</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              An AI‑integrated platform that helps students learn by explaining concepts in their own words and getting instant, personalized feedback.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base font-bold mb-4 text-slate-100">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/try-it-now" className="hover:text-white transition-colors">
                  Try It Now
                </a>
              </li>
              <li>
                <a href="/why-it-helps" className="hover:text-white transition-colors">
                  Why It Helps Students
                </a>
              </li>
              <li>
                <a href="/applications" className="hover:text-white transition-colors">
                  Applications
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-base font-bold mb-4 text-slate-100">Contact & Social</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="mailto:support@explainitback.com" className="flex items-center hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  support@explainitback.com
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-4 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
              >
                <Twitter className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-slate-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Explain It Back. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

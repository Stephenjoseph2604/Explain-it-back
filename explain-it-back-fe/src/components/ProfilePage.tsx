// ProfilePage.tsx
import  { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  ChevronDown,
  ChevronUp,
  User,
  GraduationCap,
  Star,
} from "lucide-react";

interface User {
  name: string;
  email: string;
  role: string;
  joined: string;
  plan?: string;
  credits?: number;
}
// Mock user and analyzes (replace with your actual data / API)
const user: User = {
  name: "Alex Johnson",
  email: "alex@example.com",
  role: "Student",
  joined: "2025-09-12",
};

const analyzes = [
  {
    id: 1,
    topic: "Quantum Superposition",
    date: "2026-02-01",
    score: 85,
    feedback:
      "Great analogy! This is a perfect way to visualize it. This state of being 'both' until measured is exactly what superposition is.",
  },
  {
    id: 2,
    topic: "Newton's Laws of Motion",
    date: "2026-01-25",
    score: 72,
    feedback:
      "You have the basics right but missed the distinction between mass and weight. Try adding a concrete example next time.",
  },
  {
    id: 3,
    topic: "React Component Lifecycle",
    date: "2026-01-18",
    score: 91,
    feedback:
      "Excellent explanation of the component lifecycle. Your breakdown of mounting, updating, and unmounting is very clear.",
  },
];

const ProfilePage = () => {
  const [expandedAnalyze, setExpandedAnalyze] = useState<number | null>(null);

  const toggleAnalyze = (id: number) => {
    setExpandedAnalyze(expandedAnalyze === id ? null : id);
  };

  const firstLetter = user.name.charAt(0).toUpperCase();

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Same dark background */}
      <div className="absolute inset-0 bg-[#0F172A] z-0" />

      {/* Star background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
          const top = `${Math.random() * 100}%`;
          const left = `${Math.random() * 100}%`;
          const size = Math.random() * 3 + 1;
          const opacity = Math.random() * 0.5 + 0.1;
          const delay = Math.random() * 5;

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
          );
        })}
      </div>

      {/* Floating spheres */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Welcome Back, {user.name}
          </h2>
          <p className="text-slate-300">
            View your details and learning history
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Profile Info (fixed height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl h-[420px] flex flex-col relative overflow-hidden"
          >
            <div className="absolute h-7 aspect-square rounded-full bg-gradient-to-br from-violet-500 to-purple-600 top-0 left-0 animate-ping"/>
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/5 to-transparent rounded-2xl pointer-events-none" />

            {/* Initial circle + name */}
            <div className="flex items-center space-x-4 mb-6 z-10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg ring-2 ring-violet-500/40">
                <span className="text-xl font-bold text-white">
                  {firstLetter}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">
                  {user.name}
                </h3>
                <p className="text-sm text-slate-300 truncate max-w-[200px]">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 text-sm text-slate-300 flex-1 z-10">
              <div className="flex items-center space-x-3">
                <User className="w-4 h-4 text-slate-400" />
                <span className="flex-1 font-medium text-slate-200">Role</span>
                <span className="text-slate-100">{user.role}</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-4 h-4 text-slate-400" />
                <span className="flex-1 font-medium text-slate-200">
                  Account created
                </span>
                <span className="text-slate-100">{user.joined}</span>
              </div>

              {/* Plan */}
              <div className="flex items-center space-x-3 mt-2 pt-2 border-t border-white/10">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="flex-1 font-medium text-slate-200">Plan</span>
                <span className="text-slate-100">{user.plan || "Free"}</span>
              </div>

              {/* Remaining credits (symbolic) */}
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="flex-1 font-medium text-slate-200">
                  Credits left
                </span>
                <span className="text-slate-100">{user.credits || 10}</span>
              </div>
            </div>

            {/* Progress‑style bar for credits (optional visual) */}
            <div className="mt-2 z-10">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Usage</span>
                <span>{100 - (user.credits || 10)}%</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${100 - (user.credits || 10)}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="mt-4 z-10">
              <button
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 border border-transparent"
                type="button"
              >
                Upgrade Plan
              </button>
            </div>
          </motion.div>

          {/* Right: Analyzes List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-4">
              Learning History
            </h3>

            {analyzes.map((analyze) => (
              <div
                key={analyze.id}
                className="bg-slate-800/50 border border-white/10 backdrop-blur-xl rounded-xl p-6 shadow-2xl cursor-pointer"
                onClick={() => toggleAnalyze(analyze.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100">
                      {analyze.topic}
                    </h4>
                    <div className="flex items-center text-sm text-slate-400 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {analyze.date}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-slate-300">
                      Score: {analyze.score}%
                    </span>
                    {expandedAnalyze === analyze.id ? (
                      <ChevronUp className="w-4 h-4 text-slate-300" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                </div>

                {/* Expanded report */}
                {expandedAnalyze === analyze.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {analyze.feedback}
                    </p>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Understanding</span>
                        <span>{analyze.score}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${analyze.score}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;

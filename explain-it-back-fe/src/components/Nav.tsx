// Nav.tsx
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Menu, X } from "lucide-react"
import { NavLink as RRNavLink } from "react-router-dom"

// --- Types ---
interface NavLinkProps {
  to: string
  children: React.ReactNode
  className?: (state: { isActive: boolean }) => string
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  children: React.ReactNode
  icon?: React.ReactNode
}

// --- Reusable Components ---
const NavLink = ({ to, children, className }: NavLinkProps) => (
  <RRNavLink
    to={to}
    className={className || (({ isActive }) =>
      `text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "text-white"
          : "text-slate-300 hover:text-white"
      }`  
    )}
  >
    {children}
  </RRNavLink>
)

const Button = ({
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-[#0F172A]"
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 border border-transparent",
    secondary:
      "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  }

  const { onClick, disabled, type } = props
  const motionProps = { onClick, disabled, type }

  return (
    <motion.button
      whileTap={{
        scale: 0.98,
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}  
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  )
}

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-1.5 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-purple-100 tracking-tight">
              Explain It Back
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/#features">Features</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/whats-next">What's Next</NavLink>
          </div>

          {/* CTA + Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost">Sign In</Button>
            <Button variant="primary">Sign Up</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="md:hidden bg-[#0F172A] border-b border-white/10"
        >
          <div className="px-4 pt-3 pb-5 space-y-3">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              Blog
            </NavLink>

            <div className="pt-3 space-y-2 border-t border-white/10">
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
              <Button variant="primary" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

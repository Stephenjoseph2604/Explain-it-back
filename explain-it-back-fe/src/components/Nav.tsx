// Nav.tsx
import React, { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Menu, X, CheckCircle2 } from "lucide-react"

// --- Types ---
interface NavLinkProps {
  href: string
  children: React.ReactNode
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  children: React.ReactNode
  icon?: React.ReactNode
}

// --- Reusable Components ---
const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
)

const Button = ({
  variant = "primary",
  children,
  icon,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0F172A]"
  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:scale-105 border border-transparent",
    secondary:
      "bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-white/20",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5",
  }
  return (
    <>
    {/* <motion.button
      whileTap={{
        scale: 0.98,
      }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button> */}
    </>
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
            <span className="font-bold text-xl tracking-tight">Explain It Back</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#blog">Blog</NavLink>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" className="px-5 py-2 text-sm">
              Get Started
            </Button>
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
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              Pricing
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              About
            </a>
            <Button variant="primary" className="w-full mt-4">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const TriangleLogo = () => (
  <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
    <polygon points="20,5 35,35 5,35" stroke="white" strokeWidth="2" fill="none" />
    <polygon points="20,12 28,28 12,28" stroke="white" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{ background: 'rgba(18, 12, 12, 0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}>
            <TriangleLogo />
          </div>
          <span className="font-display text-2xl tracking-wider text-white">TRI VIBE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#collections" className="text-sm tracking-wide text-white/70 hover:text-white transition-colors">
            Collections
          </a>
          <a href="#about" className="text-sm tracking-wide text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-sm tracking-wide text-white/70 hover:text-white transition-colors">
            Contact
          </a>
          <button
            className="px-6 py-2 text-sm font-medium tracking-wide text-white transition-all hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
          >
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10">
          <div className="flex flex-col gap-4 pt-4 px-2">
            <a
              href="#collections"
              className="text-sm tracking-wide text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Collections
            </a>
            <a
              href="#about"
              className="text-sm tracking-wide text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm tracking-wide text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
            <button
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white text-left"
              style={{ backgroundColor: 'oklch(0.55 0.22 15)' }}
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar" style={scrolled ? { background: 'rgba(10, 10, 26, 0.92)' } : {}}>
      <div className="container navbar-inner">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-icon">🎓</span>
          <span>Tutor<span className="gradient-text">AI</span></span>
        </Link>

        <div className="navbar-links">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#testimonials">Testimonials</Link>

        </div>

        <div className="navbar-actions">
          <Link href="/login" className="btn btn-outline">Log In</Link>
          <Link href="/signup" className="btn btn-primary">Get Started</Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="navbar-logo">
              <span className="navbar-logo-icon">🎓</span>
              <span>Tutor<span className="gradient-text">AI</span></span>
            </div>
            <p>
              Empowering learners worldwide with AI-powered personalized tutoring.
              Learn smarter, not harder.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link href="#features">Features</Link>

            <Link href="#how-it-works">How It Works</Link>
            <Link href="/api">API</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <Link href="/help">Help Center</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TutorAI. All rights reserved. Built with ❤️ for education.</p>
        </div>
      </div>
    </footer>
  );
}

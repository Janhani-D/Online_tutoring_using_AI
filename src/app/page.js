import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <span>✨</span> AI-Powered Learning Platform
          </div>
          <h1>
            Learn Anything, <br />
            <span className="gradient-text">Anytime with AI</span>
          </h1>
          <p>
            Get personalized tutoring powered by cutting-edge AI. Instant
            homework help, adaptive study plans, and expert human tutors — all
            in one platform.
          </p>
          <div className="hero-actions">
            <Link href="/signup" className="btn btn-primary">
              Start Learning Free →
            </Link>
            <Link href="#how-it-works" className="btn btn-outline">
              See How It Works
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value gradient-text">50K+</div>
              <div className="hero-stat-label">Active Students</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value gradient-text">1M+</div>
              <div className="hero-stat-label">Questions Answered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value gradient-text">98%</div>
              <div className="hero-stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2>
              Everything You Need to{" "}
              <span className="gradient-text">Excel</span>
            </h2>
            <p>
              Our AI-powered tools and expert tutors work together to deliver a
              truly personalized learning experience.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Teaching Assistant</h3>
              <p>
                Get instant, step-by-step explanations to any question, 24/7.
                Our AI understands context and adapts to your level.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Adaptive Learning</h3>
              <p>
                Smart algorithms track your progress and dynamically adjust
                content difficulty to keep you in the optimal learning zone.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Tutor Matching</h3>
              <p>
                Our AI matches you with the perfect human tutor based on your
                learning style, subject needs, and schedule.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Auto-Generated Notes</h3>
              <p>
                Instantly create flashcards, summaries, and practice quizzes
                from any lecture, textbook, or document you upload.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📹</div>
              <h3>Live Video Sessions</h3>
              <p>
                Connect face-to-face with expert tutors via HD video with an
                interactive whiteboard and screen sharing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Progress Analytics</h3>
              <p>
                Detailed dashboards showing your strengths, weaknesses, and
                growth over time — powered by AI insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>
              How <span className="gradient-text">TutorAI</span> Works
            </h2>
            <p>Get started in three simple steps and begin learning smarter today.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create Your Profile</h3>
              <p>
                Sign up as a student or tutor. Tell us your subjects, goals, and
                learning preferences to personalize your experience.
              </p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Get Matched & Learn</h3>
              <p>
                Our AI instantly matches you with study materials or expert
                tutors. Start a session or ask the AI chatbot anything.
              </p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Track & Improve</h3>
              <p>
                Review your progress analytics, unlock achievements, and watch
                as your understanding grows with every session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>
              Loved by <span className="gradient-text">Students</span>
            </h2>
            <p>See what our learners have to say about their TutorAI experience.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "TutorAI completely changed how I study. The AI chatbot is like
                having a genius friend available at 2 AM before an exam!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SK</div>
                <div>
                  <div className="testimonial-name">Sarah K.</div>
                  <div className="testimonial-role">Computer Science Student</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The adaptive learning path identified exactly where I was
                struggling in calculus. My grade went from a C to an A-."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">JM</div>
                <div>
                  <div className="testimonial-name">James M.</div>
                  <div className="testimonial-role">Engineering Student</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "As a tutor, the AI lesson plan generator saves me hours of prep
                each week. I can focus on what matters — teaching."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">DR</div>
                <div>
                  <div className="testimonial-name">Dr. Priya R.</div>
                  <div className="testimonial-role">Physics Tutor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Transform Your Learning?</h2>
            <p>
              Join thousands of students who are already learning smarter with
              AI. Get started for free — no credit card required.
            </p>
            <Link href="/signup" className="btn btn-primary">
              Get Started for Free →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

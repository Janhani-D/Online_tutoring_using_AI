'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'ai',
      text: "Hi! 👋 I'm your AI tutor. Ask me anything about your subjects — math, science, coding, history — I'm here to help 24/7!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { role: 'user', text: message };
    setMessages((prev) => [...prev, userMsg]);

    // Simulated AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: "Great question! Let me think about that... 🤔 In a production app, this would hit the AI API for a real answer. For now, I'm just a demo!",
        },
      ]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <Link href="/dashboard" className="sidebar-link active">
          <span className="sidebar-link-icon">📊</span> Dashboard
        </Link>
        <Link href="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">🤖</span> AI Tutor
        </Link>
        <Link href="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">👩‍🏫</span> Find Tutors
        </Link>
        <Link href="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">📅</span> My Sessions
        </Link>
        <Link href="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">📝</span> Study Materials
        </Link>
        <Link href="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">📈</span> Progress
        </Link>
        <Link href="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">⚙️</span> Settings
        </Link>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-welcome">
          <h1>
            Welcome back, <span className="gradient-text">Student</span> 👋
          </h1>
          <p>Here&apos;s an overview of your learning journey today.</p>
        </div>

        {/* Stats */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <div className="stat-card-icon">📚</div>
            <div className="stat-card-value gradient-text">12</div>
            <div className="stat-card-label">Sessions Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">⏰</div>
            <div className="stat-card-value gradient-text">24h</div>
            <div className="stat-card-label">Total Study Time</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">🎯</div>
            <div className="stat-card-value gradient-text">85%</div>
            <div className="stat-card-label">Average Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon">🔥</div>
            <div className="stat-card-value gradient-text">7</div>
            <div className="stat-card-label">Day Streak</div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="dashboard-section">
          <h2>Upcoming Sessions</h2>
          <div className="upcoming-sessions">
            <div className="session-card">
              <div className="session-info">
                <h4>Calculus II — Integration Techniques</h4>
                <p>with Dr. Priya R.</p>
              </div>
              <div className="session-time">Today, 4:00 PM</div>
            </div>
            <div className="session-card">
              <div className="session-info">
                <h4>Physics — Electromagnetism</h4>
                <p>with Prof. James T.</p>
              </div>
              <div className="session-time">Tomorrow, 10:00 AM</div>
            </div>
            <div className="session-card">
              <div className="session-info">
                <h4>Python Programming — Data Structures</h4>
                <p>with Sarah L.</p>
              </div>
              <div className="session-time">Wed, 2:00 PM</div>
            </div>
          </div>
        </div>

        {/* AI Chat */}
        <div className="dashboard-section">
          <h2>AI Tutor Chat</h2>
          <div className="chat-widget">
            <div className="chat-header">
              <div className="chat-header-dot" />
              <h3>AI Teaching Assistant — Online</h3>
            </div>
            <div className="chat-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chat-message ${msg.role}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <form className="chat-input-area" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="chat-input"
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

# TutorAI — Project Requirements

## Functional Requirements

### 1. User Authentication
- Users can sign up as a **Student** or **Tutor**
- Users can log in with email and password
- Role-based access to dashboards

### 2. Landing Page
- Hero section with platform overview
- Features section highlighting AI capabilities
- "How It Works" step-by-step guide
- Testimonials from students and tutors
- Call-to-action for sign up

### 3. Student Dashboard
- Overview stats (sessions completed, study time, average score, streak)
- Upcoming sessions list with tutor name, subject, and time
- AI Chatbot for 24/7 homework help
- Sidebar navigation (Dashboard, AI Tutor, Find Tutors, Sessions, Study Materials, Progress, Settings)

### 4. AI Teaching Assistant
- Chat-based interface for asking academic questions
- Context-aware responses tailored to the student's level
- Available 24/7 within the dashboard

### 5. Tutor Features
- Tutor profile and availability management
- Session scheduling with students
- AI-assisted lesson plan generation

### 6. Session Management
- Book, view, and manage tutoring sessions
- Live video sessions with screen sharing and whiteboard

### 7. Progress Tracking
- Analytics dashboard showing strengths, weaknesses, and growth
- AI-driven insights and recommendations

---

## Non-Functional Requirements

| Requirement       | Description                                              |
|-------------------|----------------------------------------------------------|
| **Performance**   | Page load under 2 seconds, smooth animations at 60fps    |
| **Responsiveness**| Fully responsive design for mobile, tablet, and desktop  |
| **Accessibility** | Semantic HTML, proper labels, keyboard navigation        |
| **Security**      | Server-side API keys, input validation, secure auth      |
| **Scalability**   | Modular component architecture for easy feature addition |
| **SEO**           | Proper meta tags, heading hierarchy, semantic elements   |

---

## Technology Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Frontend    | Next.js (React), Vanilla CSS   |
| Backend     | Next.js API Routes / FastAPI   |
| AI          | Google Gemini / OpenAI (optional) |
| Database    | PostgreSQL (planned)           |
| Auth        | Custom / Clerk (planned)       |
| Video       | WebRTC / Daily.co (planned)    |
| Hosting     | Vercel (planned)               |

---

## Dependencies

See `package.json` for the full list. Core dependencies:
- `next` — React framework with App Router
- `react` / `react-dom` — UI library

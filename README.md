# 🚀 SensAI – Full Stack AI Career Coach
## 🖼️ Demo

[🔗 Live Demo](#) – https://sensai-three-taupe.vercel.app

---
**SensAI** is a cutting-edge, full-stack AI-powered career coach application built with the latest technologies in the React and Next.js ecosystem. It intelligently guides users in their career journey by leveraging the **Gemini API**, and integrates powerful tools like **Clerk**, **Inngest**, and **Prisma** to deliver a seamless, scalable, and secure user experience.

> 🧠 Built for developers who want to *impress recruiters* and showcase real-world full-stack development skills on their resumes.

---

## ✨ Features

- 🔐 **Clerk Authentication** – Secure and modern auth solution with social logins
- 🌈 **Shadcn UI** – Beautiful and customizable component library
- 🧵 **Tailwind CSS** – Utility-first CSS framework for styling
- ⚡ **Gemini API** – Integrates Google’s Gemini AI for personalized career coaching
- 🧬 **Prisma + NeonDB** – Modern ORM with serverless Postgres for efficient data access
- 🧠 **Inngest** – Job scheduling, background tasks, and event-driven actions
- 🛠️ **Next.js 15 + React 19** – Cutting-edge full-stack web development framework

---

## 📂 Tech Stack

| Frontend | Backend | Database | Auth | AI | UI |
|----------|---------|----------|------|----|----|
| React 19 | Next.js 15 | NeonDB (Postgres) | Clerk | Gemini API | Shadcn UI |
| Tailwind CSS | Inngest | Prisma | - | - | - |

---
## 🔑 Environment Variables

Create a `.env` file in your root and add the following:

```env
# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# PostgreSQL Database (NeonDB)
DATABASE_URL=postgresql://<username>:<password>@<host>/<database>?sslmode=require

# Gemini API
GEMINI_API_KEY=AIza...


## 📌 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/sensai.git
cd sensai

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Fill in your own API keys and config in .env

# Run the development server
pnpm dev

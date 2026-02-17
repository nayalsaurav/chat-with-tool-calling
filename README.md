# Nexa Chat – AI-Powered Assistant with Tool Calling

A sophisticated AI chat application capable of **real-time tool calling**, built with **Next.js 15**, **Vercel AI SDK**, and **Drizzle ORM**.

![Nexa Chat Preview](/public/dashboard-dark.png)

## 🚀 Overview

Nexa Chat is an AI-driven product that combines a rich UI, reliable data integrations, and modern cloud-native architecture. It features a chat-based AI assistant that can call real-world tools to fetch live information (Weather, F1, Stocks) and present it in a user-friendly way.

### Key Features

- **🧠 Advanced AI**: Powered by Google's **Gemini 2.0 Flash** via Vercel AI SDK.
- **🛠️ Tool Calling**: The AI intelligently invokes tools to fetch real-time data:
  - 🌦️ **Weather**: Live weather updates for any location.
  - 🏎️ **F1 Matches**: Upgrade on next/recent Formula 1 races.
  - 📈 **Stock Prices**: Real-time stock market data.
- **🔐 Secure Authentication**: OAuth login via **Google** and **GitHub** using NextAuth.js v5.
- **💾 Persistent History**: All conversations and messages are stored in **Neon DB (PostgreSQL)** via Drizzle ORM.
- **🛡️ Rate Limiting**: Robust protection using **Upstash Redis** (IP-based globally + User-based for chat/actions).
- **⚡ Modern Tech**: Built on Next.js 15 App Router with Server Actions and Streaming.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI SDK**: [Vercel AI SDK](https://sdk.vercel.ai/docs) (Google Gemini Provider)
- **Database**: [Neon DB](https://neon.tech/) (Serverless Postgres)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Auth**: [NextAuth.js v5](https://authjs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Rate Limiting**: [Upstash Ratelimit](https://upstash.com/) & [Redis](https://upstash.com/redis)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following API keys:

- **Google AI Studio Key** (for Gemini)
- **Neon DB Connection String** (Postgres)
- **Upstash Redis URL & Token**
- **Google & GitHub OAuth Credentials**
- **Auth Secret** (generated via `openssl rand -base64 32`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nayalsaurav/nexa-chat.git
   cd nexa-chat
   ```

2. **Install dependencies:**

   ```bash
   bun install
   # or npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory:

   ```env
   # Database (Neon DB)
   DATABASE_URL="postgres://..."

   # Authentication (NextAuth.js)
   AUTH_SECRET="your_generated_secret"
   AUTH_GOOGLE_ID="your_google_client_id"
   AUTH_GOOGLE_SECRET="your_google_client_secret"
   AUTH_GITHUB_ID="your_github_client_id"
   AUTH_GITHUB_SECRET="your_github_client_secret"

   # AI Provider
   GOOGLE_GENERATIVE_AI_API_KEY="your_gemini_api_key"

   # Rate Limiting (Upstash)
   UPSTASH_REDIS_REST_URL="https://..."
   UPSTASH_REDIS_REST_TOKEN="your_upstash_token"

   # Site URL
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   ```

4. **Initialize Database:**
   Push the schema to your Neon DB instance:

   ```bash
   bun db:push
   ```

5. **Run Development Server:**
   ```bash
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router
│   ├── (auth)/           # Authentication routes (signin)
│   ├── api/              # API Routes (Chat, Auth)
│   ├── dashboard/        # Protected application routes
│   └── layout.tsx        # Root layout with providers
├── components/           # React components
│   ├── dashboard/        # Chat interface, sidebar, tool cards
│   ├── landing/          # Landing page sections
│   └── ui/               # Reusable shadcn/ui components
├── database/             # Drizzle Schema & Config
├── lib/                  # Utilities, hooks, and tool definitions
│   ├── auth.ts           # NextAuth configuration
│   ├── ratelimit.ts      # Rate limiting logic
│   └── tools.ts          # Tool implementations (Weather, F1, etc.)
└── public/               # Static assets
```

## 🔒 Security & Performance

- **Rate Limiting**:
  - Global API protection: **100 reqs/min** per IP.
  - Chat generation limit: **10 chats/min** per user (configurable).
- **Authentication**: Routes are protected via middleware and server-side session checks.
- **Validation**: All inputs are validated using Zod schemas.

## 🚢 Deployment

1. Push your code to a GitHub repository.
2. Import the project into **Vercel**.
3. Add the **Environment Variables** in the Vercel project settings.
4. Deploy! 🚀

---

Built with ❤️ by [Saurav Nayal](https://github.com/saurav-nayal)

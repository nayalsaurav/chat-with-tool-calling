import { Bot, Globe, ShieldCheck, Sparkle } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    description:
      "Get instant, streaming responses that feel natural. The assistant understands your intent and delivers structured, readable answers in real time.",
    highlights: [
      "Real-time streaming responses",
      "Clean, intuitive chat interface",
      "Instant feedback as you type",
    ],
    iconAccent: "bg-violet-500/10 text-violet-500",
    borderAccent: "group-hover:border-violet-500/30",
  },
  {
    icon: Globe,
    title: "Live Data at Your Fingertips",
    description:
      "Ask about the weather, upcoming F1 races, or stock prices — the assistant fetches real-time data and presents it in beautifully formatted cards.",
    highlights: [
      "Real-time weather updates",
      "Upcoming F1 race schedules",
      "Live stock price lookups",
    ],
    iconAccent: "bg-sky-500/10 text-sky-500",
    borderAccent: "group-hover:border-sky-500/30",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Sign in with Google or GitHub and your conversations stay private. Every route is protected so only you can access your data.",
    highlights: [
      "Sign in with Google or GitHub",
      "Private, encrypted sessions",
      "Protected chat history",
    ],
    iconAccent: "bg-emerald-500/10 text-emerald-500",
    borderAccent: "group-hover:border-emerald-500/30",
  },
];

export const FeatureSection = () => {
  return (
    <section id="features" className="border-t border-border/40 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Everything under the hood
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A modern AI chat experience built with real-time tools, streaming
            responses, and secure authentication.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all duration-300 hover:bg-card hover:shadow-xl ${feature.borderAccent}`}
            >
              <div
                className={`mb-5 flex size-10 items-center justify-center rounded-xl ${feature.iconAccent} transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className="size-5" />
              </div>

              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Sparkle className="size-3 shrink-0 text-primary/60" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

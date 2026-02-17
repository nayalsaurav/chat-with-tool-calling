import { CloudSun, Flag, TrendingUp, ArrowRight, Sparkle } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: CloudSun,
    title: "Weather Insights",
    video:
      "https://res.cloudinary.com/dcoqmeswp/video/upload/v1771315125/izzykf6pnjrffxzt3omx.mp4",
    prompt: "What's the weather in Tokyo?",
    description:
      "The AI automatically calls the weather API and renders a structured weather card with real-time data.",
    data: ["Temperature", "Condition", "Humidity", "Location"],
    accent: "from-sky-500/10 to-blue-500/5",
    iconAccent: "bg-sky-500/10 text-sky-500",
    borderAccent: "group-hover:border-sky-500/30",
  },
  {
    icon: Flag,
    title: "F1 Next Race Tracker",
    video:
      "https://res.cloudinary.com/dcoqmeswp/video/upload/v1771315121/mxafrparmgursgtp5gsa.mp4",
    prompt: "When is the next F1 race?",
    description:
      "The assistant fetches the next scheduled race and presents it in a structured race card — no parameters needed.",
    data: ["Race Name", "Circuit", "Country", "Date"],
    accent: "from-red-500/10 to-orange-500/5",
    iconAccent: "bg-red-500/10 text-red-500",
    borderAccent: "group-hover:border-red-500/30",
  },
  {
    icon: TrendingUp,
    title: "Stock Price Lookup",
    video:
      "https://res.cloudinary.com/dcoqmeswp/video/upload/v1771315125/mzwzyomyh3wv8itdeopr.mp4",
    prompt: "What's the stock price of AAPL?",
    description:
      "The assistant invokes the stock API and renders a financial card with live market data and price changes.",
    data: ["Symbol", "Current Price", "% Change", "Last Updated"],
    accent: "from-emerald-500/10 to-green-500/5",
    iconAccent: "bg-emerald-500/10 text-emerald-500",
    borderAccent: "group-hover:border-emerald-500/30",
  },
];

export const ToolShowcase = () => {
  return (
    <section
      id="how-it-works"
      className="border-t border-border/40 bg-muted/20 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Tool Calling
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            More than just text responses
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            The assistant understands intent, selects the correct tool, fetches
            live data, and renders structured UI components in real time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:shadow-xl ${tool.borderAccent}`}
            >
              {/* Video preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <video
                  src={tool.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Header */}
              <div className="px-6 pt-5 pb-3">
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex size-9 items-center justify-center rounded-lg ${tool.iconAccent} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <tool.icon className="size-4" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {tool.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col px-6 pb-6">
                {/* Prompt preview */}
                <div className="mb-4 rounded-lg border border-dashed border-border/60 bg-muted/30 px-3.5 py-2.5">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70">
                    Try asking
                  </p>
                  <p className="mt-1 text-sm text-foreground/90">
                    &ldquo;{tool.prompt}&rdquo;
                  </p>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>

                {/* Data points */}
                <ul className="mt-auto space-y-2">
                  {tool.data.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Sparkle className="size-3 shrink-0 text-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

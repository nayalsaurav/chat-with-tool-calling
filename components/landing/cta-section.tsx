import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border border-border/50 rounded-2xl bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-8 py-12">
        <PlusIcon
          className="absolute top-[-12px] left-[-12px] z-1 size-6 text-muted-foreground/40"
          strokeWidth={1}
        />
        <PlusIcon
          className="absolute top-[-12px] right-[-12px] z-1 size-6 text-muted-foreground/40"
          strokeWidth={1}
        />
        <PlusIcon
          className="absolute bottom-[-12px] left-[-12px] z-1 size-6 text-muted-foreground/40"
          strokeWidth={1}
        />
        <PlusIcon
          className="absolute right-[-12px] bottom-[-12px] z-1 size-6 text-muted-foreground/40"
          strokeWidth={1}
        />

        <div className="space-y-1">
          <h2 className="text-center font-bold text-2xl">
            Ready to chat smarter?
          </h2>
          <p className="text-center text-muted-foreground">
            Start a conversation and see AI tool calling in action.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button variant="outline" asChild>
            <a href="#features">Learn More</a>
          </Button>
          <Button asChild>
            <a href="/dashboard">
              Start Chatting <ArrowRightIcon className="size-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

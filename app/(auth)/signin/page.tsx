import Image from "next/image";
import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2 bg-background text-foreground dark">
      <div className="relative flex flex-col border-r border-border">
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, color-mix(in oklch, var(--foreground), transparent 80%) 0, color-mix(in oklch, var(--foreground), transparent 80%) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(-45deg, color-mix(in oklch, var(--foreground), transparent 80%) 0, color-mix(in oklch, var(--foreground), transparent 80%) 1px, transparent 1px, transparent 20px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 flex flex-1 flex-col p-6 md:p-10">
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
                <GalleryVerticalEnd className="h-4 w-4" />
              </div>
              <span className="text-lg tracking-tight">Chat App</span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-sm">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <Image
          src="https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg"
          alt="Login background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
      </div>
    </div>
  );
}

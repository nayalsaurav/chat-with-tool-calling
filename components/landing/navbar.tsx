"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Tools", href: "#tools" },
];

export const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-20">
      <nav
        data-state={menuState && "active"}
        className="group w-full border-b border-dashed bg-white/80 backdrop-blur md:bg-white/80 dark:bg-zinc-950/80 lg:dark:bg-zinc-950/80 py-2"
      >
        <div className="m-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-6 lg:gap-0">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center justify-center gap-2"
              >
                <Image
                  src="/logo.png"
                  alt="Nexa Chat"
                  width={40}
                  height={40}
                  priority
                />
                <span className="text-lg font-bold">Nexa Chat</span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:pr-4">
                <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                {!session ? (
                  <>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/signin">
                        <span>Sign In</span>
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href="/dashboard">
                        <span>Get Started</span>
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button asChild size="sm">
                    <Link href="/dashboard">
                      <span>Dashboard</span>
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

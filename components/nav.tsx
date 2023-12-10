"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui/utils";

export function Nav() {
  return (
    <nav className="md:flex hidden items-center space-x-6 text-sm font-medium gap-2">
      <NavItem href="/blog" label="Blog" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/about" label="About" />
      <NavItem href="/resume" label="Resume" />
      <NavItem href="/guestbook" label="Guestbook" />
    </nav>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80 py-3",
        pathname?.startsWith(href) ? "text-foreground" : "text-foreground/60"
      )}
    >
      {label}
    </Link>
  );
}

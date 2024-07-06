"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui/utils";

interface Nav {
  href: string;
  label: string;
  external?: boolean;
}

export const navs = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "https://note.miryang.dev/note/intro",
    label: "Note",
    external: true,
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/resume",
    label: "Resume",
  },
  {
    href: "/guestbook",
    label: "Guestbook",
  },
];

export default function Nav() {
  return (
    <nav className="sm:flex hidden items-center space-x-6 text-sm font-medium gap-2">
      {navs.map((nav) => (
        <NavItem key={nav.label} {...nav} />
      ))}
    </nav>
  );
}

export function NavItem({ href, label, external }: Nav) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80 py-3",
        pathname?.startsWith(href) ? "text-foreground" : "text-foreground/60"
      )}
      target={external ? "_blank" : undefined}
    >
      {label}
    </Link>
  );
}

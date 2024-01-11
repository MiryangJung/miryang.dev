"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui/utils";

export const navs = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/about",
    label: "About",
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
      {navs.map(({ href, label }) => (
        <NavItem href={href} label={label} key={label} />
      ))}
    </nav>
  );
}

export function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-foreground/80 py-3",
        pathname?.startsWith(href) ? "text-foreground" : "text-foreground/60"
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

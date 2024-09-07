"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "./ui/utils";

interface Nav {
	href: string;
	label: string;
	external?: boolean;
	className?: string;
}

export const navs = [
	{
		href: "/blog",
		label: "Blog",
		className: "bg-neon-yellow",
	},
	{
		href: "https://notes.miryang.dev",
		label: "Note",
		external: true,
		className: "bg-neon-green",
	},
	{
		href: "/projects",
		label: "Projects",
		className: "bg-neon-violet",
	},
	{
		href: "/resume",
		label: "Resume",
		className: "bg-neon-pink",
	},
	{
		href: "/guestbook",
		label: "Guestbook",
		className: "bg-neon-sky",
	},
];

export default function Nav() {
	return (
		<nav className="flex items-center text-sm font-medium justify-between gap-2 sm:gap-5">
			{navs.map((nav) => (
				<NavItem key={nav.label} {...nav} />
			))}
		</nav>
	);
}

export function NavItem({
	href,
	label,
	external,
	onClick,
	className,
}: Nav & { onClick?: () => void }) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={cn(
				"px-2 py-1.5 border rounded-lg font-bold text-sm hover:bg-white text-black shadow-bold",
				pathname?.startsWith(href) && "font-black",
				className,
			)}
			target={external ? "_blank" : undefined}
			onClick={onClick}
		>
			<span className="sm:block hidden">{label}</span>
			<span className="sm:hidden">{label.split("")[0]}</span>
		</Link>
	);
}

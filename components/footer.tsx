import { getTzDay } from "@/util/days";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center w-full h-28 gap-3">
			<div className="flex items-center justify-center gap-3">
				<Link href="https://github.com/MiryangJung/miryang.dev" target="_blank">
					<GithubIcon size={20} className="text-primary stroke-1" />
				</Link>
				<Link href="https://www.linkedin.com/in/miryangjung/" target="_blank">
					<LinkedinIcon size={20} className="text-primary stroke-1" />
				</Link>
				<Link href="https://twitter.com/miryangjung" target="_blank">
					<TwitterIcon size={20} className="text-primary stroke-1" />
				</Link>
			</div>
			<span className="text-xs text-primary font-medium">
				Copyright © {getTzDay(new Date()).get("year")} MiryangJung
			</span>
		</footer>
	);
}

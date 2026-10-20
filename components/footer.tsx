import { getTzDay } from "@/util/days";
import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-center w-full h-28 gap-3 print:hidden">
			<div className="flex items-center justify-center gap-3">
				<Link
					href="https://github.com/MiryangJung/miryang.dev"
					target="_blank"
					aria-label="GitHub"
				>
					<GitHubLogoIcon
						width={20}
						height={20}
						className="text-primary stroke-1"
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/miryangjung/"
					target="_blank"
					aria-label="LinkedIn"
				>
					<LinkedInLogoIcon
						width={20}
						height={20}
						className="text-primary stroke-1"
					/>
				</Link>
				<Link
					href="https://twitter.com/miryangjung"
					target="_blank"
					aria-label="Twitter"
				>
					<TwitterLogoIcon
						width={20}
						height={20}
						className="text-primary stroke-1"
					/>
				</Link>
			</div>
			<span className="text-xs text-primary font-medium">
				Copyright © {getTzDay(new Date()).get("year")} MiryangJung
			</span>
		</footer>
	);
}

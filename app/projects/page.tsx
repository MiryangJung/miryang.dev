import metadata from "@/util/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "./data/projects";

export default function ProjectsPage() {
	return (
		<div>
			{projects.map((p) => (
				<section
					key={p.section}
					className="flex flex-col gap-3 py-5 even:items-end"
				>
					<h2 className="text-3xl font-black text-primary tracking-wider">
						{p.section}
					</h2>
					{p.data.map((project) => (
						<Link
							key={project.title}
							href={project.link}
							className="break-keep underline underline-offset-8 max-w-[90%] font-semibold tracking-wider text-base"
							target="_blank"
							rel="noopener"
						>
							{project.title}
							<span className="text-sm">
								{project.description && ` ${project.description}`}
							</span>
						</Link>
					))}
				</section>
			))}
		</div>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return metadata({
		title: "프로젝트",
		description: "프로젝트 목록",
		path: "/projects",
	});
}

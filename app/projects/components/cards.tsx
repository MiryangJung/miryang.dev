import { projects } from "../data/projects";
import ProjectCard from "./card";

export default function ProjectCards() {
	return (
		<div className="grid grid-cols-2 gap-10 mt-10">
			{projects.map((project) => (
				<ProjectCard key={project.title} {...project} />
			))}
		</div>
	);
}

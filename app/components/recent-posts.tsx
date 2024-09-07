import Link from "next/link";
import { blogPosts } from "#site/content";

export default function RecentPosts() {
	return (
		<>
			<h2 className="mt-20 text-5xl font-medium text-primary">
				Recent <span className="font-black">Posts</span>
			</h2>
			<div className="flex flex-col">
				{blogPosts
					.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
					.slice(0, 5)
					.map((blog) => (
						<Link
							href={`${blog.permalink}`}
							key={blog.slug}
							className="flex flex-col gap-1 flex-1 border-b last:border-none py-5"
						>
							<span className="font-bold text-lg break-keep text-primary">
								{blog.title}
							</span>
							<span className="text-primary">{blog.description}</span>
						</Link>
					))}
			</div>
		</>
	);
}

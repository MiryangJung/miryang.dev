import Link from "next/link";
import { blogPosts } from "#site/content";

export default function RecentPosts() {
	return (
		<section className="bg-neon-orange p-3 rounded-lg shadow-bold2 flex flex-col gap-2 border-2">
			<h2 className="text-2xl font-bold">최근 게시물</h2>
			{blogPosts
				.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
				.slice(0, 5)
				.map((blog) => (
					<Link
						href={`${blog.permalink}`}
						key={blog.slug}
						className="flex flex-col gap-1 flex-1 py-1 px-2 border bg-white dark:bg-black rounded"
					>
						<span className="font-bold text-base break-keep"> {blog.title}</span>
						<span className="text-sm">{blog.description}</span>
						<time className="text-xs text-gray-500 mt-1">{blog.date}</time>
					</Link>
				))}
		</section>
	);
}

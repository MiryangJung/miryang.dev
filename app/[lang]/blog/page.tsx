import PageLayout from "@/components/page-layout";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "#site/content";

export default function BlogPage() {
	return (
		<PageLayout
			title="Blog"
			description="공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다."
		>
			<div className="flex flex-col">
				{blogPosts
					.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
					.map((blog) => (
						<Link
							href={`${blog.permalink}`}
							key={blog.slug}
							className="flex py-5 items-center justify-between gap-2 border-b last:border-none"
						>
							<div className="flex flex-col gap-1 flex-1">
								<span className="font-semibold text-lg break-all line-clamp-2 text-primary">
									{blog.title}
								</span>
								<span className="break-all">{blog.description}</span>
								<time className="text-xs mt-1">{blog.date}</time>
							</div>
							<Image
								width={150}
								height={150}
								src={blog.thumbnailUrl}
								alt={blog.title}
								className="object-cover w-28 h-28"
							/>
						</Link>
					))}
			</div>
		</PageLayout>
	);
}

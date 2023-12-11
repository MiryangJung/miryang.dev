import { allBlogs } from "@/.contentlayer/generated";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <>
      <h2 className="mt-5 text-2xl font-bold">최근 게시물</h2>
      {allBlogs
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .slice(0, 5)
        .map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="flex flex-col gap-1 flex-1"
          >
            <span className="font-bold text-lg break-keep"> {blog.title}</span>
            <span>{blog.description}</span>
            <time className="text-xs text-gray-500 mt-1">{blog.date}</time>
          </Link>
        ))}
    </>
  );
}

import PageLayout from "@/components/page-layout";
import { allBlogs } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <PageLayout
      title="Blog"
      description="공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다."
    >
      {allBlogs
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        .map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.slug}
            className="flex py-5 items-start justify-between gap-2"
          >
            <div className="flex flex-col gap-1 flex-1">
              <span className="font-bold text-lg break-keep">
                {" "}
                {blog.title}
              </span>
              <span>{blog.description}</span>
              <time className="text-xs text-gray-500 mt-1">{blog.date}</time>
            </div>
            <Image
              width={150}
              height={150}
              src={blog.thumbnailUrl}
              alt={blog.title}
              className="object-cover w-32 h-24 rounded"
            />
          </Link>
        ))}
    </PageLayout>
  );
}

import { notFound } from "next/navigation";
import { blogPosts } from "#site/content";
import type { Metadata } from "next";
import { Mdx } from "./components/mdx";
import metadata from "@/util/metadata";
import Supplement from "./components/supplement";

interface Props {
  params: {
    slug: string;
  };
}

export default function DocPage({ params }: Props) {
  const post = getPageBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col mt-5 gap-1">
      <h1 className="break-all text-3xl font-black bg-gradient-to-r from-slate-600 via-slate-300 to-slate-700 inline-block text-transparent bg-clip-text">
        {post.title}
      </h1>
      <time className="text-gray-500 text-sm mt-2 ml-auto">{post.date}</time>
      <Mdx code={post.body} />
      <Supplement />
    </div>
  );
}

function getPageBySlug(slug: string) {
  return blogPosts.find((page) => page.slug === slug);
}

export async function generateStaticParams() {
  return blogPosts.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getPageBySlug(params.slug);

  if (!doc) {
    return {};
  }

  return metadata({
    title: doc.title,
    description: doc.description,
    path: doc.permalink,
    image: `${doc.thumbnailUrl}`,
  });
}

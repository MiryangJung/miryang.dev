import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { Mdx } from "./components/mdx";
import metadata from "@/util/metadata";
import Supplement from "./components/supplement";

interface Props {
  params: {
    slug: string;
  };
}

export default async function DocPage({ params }: Props) {
  const post = await getDocFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col mt-5 gap-1">
      <h1 className="break-all text-3xl font-black bg-gradient-to-r from-slate-600 via-slate-300 to-slate-700 inline-block text-transparent bg-clip-text">
        {post.title}
      </h1>
      <time className="text-gray-500 text-sm mt-2 ml-auto">{post.date}</time>
      <Mdx code={post.body.code} />
      <Supplement />
    </div>
  );
}

async function getDocFromParams({ params }: Props) {
  const doc = allBlogs.find((doc) => doc.slug === params.slug);

  return doc ?? null;
}

export async function generateStaticParams() {
  return allBlogs.map((doc) => ({
    slug: doc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return metadata({
    title: doc.title,
    description: doc.description,
    path: `/blog/${doc.slug}`,
    image: `/${doc.thumbnailUrl}`,
  });
}

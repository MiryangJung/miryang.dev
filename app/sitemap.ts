import { MetadataRoute } from "next";
import { allBlogs } from "@/.contentlayer/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const webUrl = "https://miryang.dev";

  const blogPosts =
    posts?.map((post) => ({
      url: `${webUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString().split("T")[0],
    })) ?? [];

  const routes = [
    "",
    "/blog",
    "/about",
    "/guestbook",
    "/resume",
    "/projects",
  ].map((route) => ({
    url: `${webUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogPosts, ...routes];
}

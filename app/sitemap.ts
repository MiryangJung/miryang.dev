import type { MetadataRoute } from "next";
import { blogPosts } from "#site/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const webUrl = "https://miryang.dev";

	const blogPostsUrl =
		blogPosts?.map((post) => ({
			url: `${webUrl}/${post.permalink}`,
			lastModified: new Date(post.date).toISOString().split("T")[0],
		})) ?? [];

	const routes = ["", "/blog", "/guestbook", "/resume", "/projects"].map(
		(route) => ({
			url: `${webUrl}${route}`,
			lastModified: new Date().toISOString().split("T")[0],
		}),
	);

	return [...blogPostsUrl, ...routes];
}

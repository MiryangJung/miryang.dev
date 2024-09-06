import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  root: "posts",
  collections: {
    blogPosts: {
      name: "Blog",
      pattern: "blog/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          description: s.string().max(99),
          slug: s.path(),
          date: s.string(),
          thumbnailUrl: s.string().max(99),
          body: s.mdx(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`,
          slug: data.slug.replaceAll("blog/", ""),
        })),
    },
  },
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  mdx: {
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
  },
});

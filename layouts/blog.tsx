import MDXPost from '../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'
import GiscusArea from '../components/GiscusArea'
import metadata from '../data/metadata'
import Container from '../components/Container'
import { NextSeo } from 'next-seo'

function BlogLayout({ post }) {
  const MDXComponent = useMDXComponent(post.body.code)
  return (
    <Container>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`${metadata.meta.url}/blog/${post.slug}`}
        openGraph={{
          type: 'article',
          url: `${metadata.meta.url}/blog/${post.slug}`,
          article: {
            publishedTime: new Date(post.date).toISOString(),
            tags: ['Frontend', 'Develop'],
          },
          images: [
            {
              url: `${metadata.meta.url}${post.thumbnailUrl}`,
              width: 850,
              height: 650,
              alt: post.title,
            },
          ],
        }}
      />
      <MDXPost title={post.title} date={post.date}>
        <MDXComponent />
      </MDXPost>
      <GiscusArea slug={post.slug} />
    </Container>
  )
}

export default BlogLayout

import MDXPost from '../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'
import GiscusArea from '../components/GiscusArea'
import metadata from '../data/metadata'
import Container from '../components/Container'

function BlogLayout({ post }) {
  const customMeta = {
    title: post.title,
    description: post.description,
    image: `${metadata.meta.url}${post.thumbnailUrl}`,
    type: 'article',
    date: new Date(post.publishedAt).toISOString(),
  }
  const MDXComponent = useMDXComponent(post.body.code)
  return (
    <Container customMeta={customMeta}>
      <MDXPost title={post.title} date={post.date}>
        <MDXComponent />
      </MDXPost>
      <GiscusArea slug={post.slug} />
    </Container>
  )
}

export default BlogLayout

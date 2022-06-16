import MDXPost from '../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'
import metadata from '../data/metadata'
import Container from '../components/Container'
import { NextSeo } from 'next-seo'

const BlankLink = (props: any) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

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
            tags: [...post.tags, 'Frontend', 'Develop'],
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
        <MDXComponent
          components={
            {
              a: BlankLink,
            } as any
          }
        />
      </MDXPost>
    </Container>
  )
}

export default BlogLayout

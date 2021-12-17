import MDXPost from '../../components/MDXPost'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allBlogs } from '.contentlayer/data'

const PostPage = ({ post }) => {
  const MDXComponent = useMDXComponent(post.body.code)
  return (
    <MDXPost title={post.title} date={post.date}>
      <MDXComponent />
    </MDXPost>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = allBlogs.find(p => p.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

export default PostPage

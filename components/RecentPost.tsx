import Link from 'next/link'
import { PostCard, PostDescription, PostItlte, RecentPostTitle } from './RecentPost.style'

const RecentPost = ({ posts }) => {
  return (
    <>
      <RecentPostTitle>Recent Post</RecentPostTitle>
      {posts.map(post => (
        <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
          <PostCard>
            <PostItlte>{post.title}</PostItlte>
            <PostDescription>{post.description}</PostDescription>
          </PostCard>
        </Link>
      ))}
    </>
  )
}

export default RecentPost

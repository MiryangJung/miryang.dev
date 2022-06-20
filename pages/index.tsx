import RecentPost from '../components/RecentPost.bs'
import { allBlogs } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import Container from '../components/Container'
import dynamic from 'next/dynamic'

const HomeProfile = dynamic(() => import('../components/HomeProfile.bs'), {
  ssr: false,
})

function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <>
        <HomeProfile />
        {posts.length >= 5 ? (
          <RecentPost posts={posts.slice(0, 5)} />
        ) : (
          <RecentPost posts={posts} />
        )}
      </>
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
  return {
    props: {
      posts,
    },
  }
}

export default Homepage

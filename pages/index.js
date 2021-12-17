import HomeProfile from '../components/HomeProfile'
import RecentPost from '../components/RecentPost'
import { allBlogs } from '.contentlayer/data'

function Homepage({ posts }) {
  return (
    <>
      <HomeProfile />
      {posts.length >= 5 ? <RecentPost posts={posts.slice(0, 5)} /> : <RecentPost posts={posts} />}
    </>
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

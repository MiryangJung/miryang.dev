import Title from '../components/Title'
import PostCards from '../components/PostCards'
import { useState } from 'react'
import Search from '../components/Search'
import { allBlogs } from '.contentlayer/data'

function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <>
      <Title title="Blog" des="공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다." />
      <Search type="text" changeHandler={e => setSearchValue(e.target.value)} />
      {filteredBlogPosts.map((post, index) => (
        <PostCards post={post} key={index} slug={post.slug} />
      ))}
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

export default Blog

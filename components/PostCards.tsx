import Image from 'next/image'
import Link from 'next/link'
import { PostContainer, PostDate, PostDescription, PostText, PostTitle } from './PostCard.style'
import usDateString from '../lib/usDateString'

const PostCards = ({ post, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <PostContainer>
        <PostText>
          <PostTitle>{post.title}</PostTitle>
          <PostDescription>{post.description}</PostDescription>
          <PostDate>{usDateString(post.date)}</PostDate>
        </PostText>
        <Image
          src={post.thumbnailUrl}
          className="round-image"
          alt="thumbnail"
          width={100}
          height={100}
          objectFit="cover"
        />
      </PostContainer>
    </Link>
  )
}

export default PostCards

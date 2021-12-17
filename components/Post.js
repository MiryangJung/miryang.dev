import Image from 'next/image'
import Link from 'next/link'
import { PostContainer, PostDate, PostDescription, PostText, PostTitle } from './PostCard.style'

const PostCard = ({ post, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <PostContainer>
        <Image
          src={post.thumbnailUrl}
          className="round-image"
          alt="thumbnail"
          width={250}
          height={130}
          objectFit="cover"
        />
        <PostText>
          <PostTitle>{post.title}</PostTitle>
          <PostDescription>{post.description}</PostDescription>
          <PostDate>📅 {post.date}</PostDate>
        </PostText>
      </PostContainer>
    </Link>
  )
}

export default PostCard

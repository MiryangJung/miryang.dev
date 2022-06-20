import Image from 'next/image';
import Link from 'next/link';
import usDateString from '../lib/usDateString';

const PostCards = ({ post, slug }) => {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <div className="flex flex-nowrap items-center justify-between w-full rounded-lg my-4 p-1.5 cursor-pointer">
        <div className="flex flex-col flex-nowrap items-start flex-1">
          <h2 className="text-xl font-bold my-1.5">{post.title}</h2>
          <span className="font-light break-words text-lg md:text-base">
            {post.description}
          </span>
          <span className="text-sm mt-1.5 text-slate-500">
            {usDateString(post.date)}
          </span>
        </div>
        <Image
          src={post.thumbnailUrl}
          className="rounded-lg"
          alt="thumbnail"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
    </Link>
  );
};

export default PostCards;

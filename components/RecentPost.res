@react.component
let default = (~posts) => {
  <>
    <div className={`w-full font-bold text-[35px] mt-12`}> {`Recent Post`->React.string} </div>
    {posts
    ->Belt.Array.map(post =>
      <Next.Link href={`/blog/${post["slug"]}`} passHref={true} key={post["slug"]}>
        <div className={`w-full flex flex-col flex-nowrap cursor-pointer m-1.5`}>
          <span className={`font-medium text-xl mt-5`}> {post["title"]->React.string} </span>
          <span className={`mt-1.5 text-[ var(--tx-sub-dark)]`}>
            {post["description"]->React.string}
          </span>
        </div>
      </Next.Link>
    )
    ->React.array}
  </>
}

@react.component
let default = () => {
  <footer
    className={`flex flex-col flex-nowrap items-center mt-[100px] p-8 border-t border-solid border-t-[var(--bg-sub)] w-[calc(100% - calc((100% - 700px)))] md:calc(100% - 40px)`}>
    <div className={`flex flex-wrap items-center`}>
      <a href={Metadata.social["github"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`} width={18.0} objectFit=#contain src="/social/github.svg" alt="github"
        />
      </a>
      <a href={Metadata.social["facebook"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`}
          width={18.0}
          objectFit=#contain
          src="/social/facebook.svg"
          alt="facebook"
        />
      </a>
      <a href={Metadata.social["instagram"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`}
          width={18.0}
          objectFit=#contain
          src="/social/instagram.svg"
          alt="instagram"
        />
      </a>
      <a href={Metadata.social["linkedin"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`}
          width={18.0}
          objectFit=#contain
          src="/social/linkedin.svg"
          alt="linkedin"
        />
      </a>
      <a href={Metadata.social["stackoverflow"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`}
          width={18.0}
          objectFit=#contain
          src="/social/stackoverflow.svg"
          alt="stackoverflow"
        />
      </a>
      <a href={Metadata.social["twitter"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`}
          width={18.0}
          objectFit=#contain
          src="/social/twitter.svg"
          alt="twitter"
        />
      </a>
      <a href={Metadata.social["rss"]} target="_blank" rel="noreferrer">
        <Next.Image
          className={`mx-1.5`} width={18.0} objectFit=#contain src="/social/rss.svg" alt="facebook"
        />
      </a>
    </div>
    <span className={`text-sm text-[var(--tx-sub)] mt-3`}>
      {`Copyright © 2021 ${Metadata.author}`->React.string}
    </span>
    <Next.Link href={Metadata.repo} passHref={true}>
      <a className={`text-xs text-[var(--tx-sub-dark)] no-underline mt-2.5 hover:underline`}>
        {`miryang.dev`->React.string}
      </a>
    </Next.Link>
  </footer>
}

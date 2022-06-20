@react.component
let default = () => {
  <section
    className={`flex flex-col flex-nowrap w-full h-[300px] rounded-2xl p-6 bg-no-repeat bg-cover dark:bg-center bg-[url('/home/light.gif')] dark:bg-[url('/home/dark.gif')]`}>
    <span className={`font-bold  text-4xl md:text-3xl`}>
      {Metadata.home["name"]->React.string}
    </span>
    <span className={` font-light mt-2.5 break-all text-lg md:text-base`}>
      {Metadata.home["description"]->React.string}
    </span>
    <Next.Link href="/about" passHref=true>
      <a className={`font-semibold text-[var(--bg-a5)] text-sm mt-3`}>
        {`Learn more`->React.string}
      </a>
    </Next.Link>
  </section>
}

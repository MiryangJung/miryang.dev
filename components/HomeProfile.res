@react.component
let default = () => {
  <section className={`flex flex-col flex-nowrap w-full h-[300px] rounded-2xl p-6`}>
    <span className={`font-bold text-[var(--tx-white)] text-4xl md:text-3xl`}>
      {Metadata.home["name"]->React.string}
    </span>
    <span className={`text-[var(--tx-white)] font-light mt-2.5 break-all text-lg md:text-base`}>
      {Metadata.home["description"]->React.string}
    </span>
    <span> <Next.Link href="/about" passHref=true> {`Learn more`->React.string} </Next.Link> </span>
  </section>
}

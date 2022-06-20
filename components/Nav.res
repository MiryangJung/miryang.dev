module Links = {
  @react.component
  let make = (~handleDropMenuOpen) => {
    let router = Next.Router.useRouter()
    <>
      {NavLinks.data
      ->Belt.Array.map(link =>
        <Next.Link href={link.link} key={link.title} passHref={true}>
          <a
            className={{
              router.pathname->Js.String2.includes(link.path) ? `true` : `false`
            } ++ `no-underline text-[var(--tx-sub-dark)] pr-5 md:py-4 md:px-7 md:hidden hover:var(--tx-accent)`}
            onClick={_ => handleDropMenuOpen(false)}>
            {link.title->React.string}
          </a>
        </Next.Link>
      )
      ->React.array}
    </>
  }
}

@react.component
let default = () => {
  let (isDropMenuOpen, setIsDropMenuOpen) = React.useState(_ => false)

  <>
    <div className={`flex flex-nowrap items-center`}>
      <Links handleDropMenuOpen={value => setIsDropMenuOpen(_ => value)} />
      <svg
        className={`fill-[var(--tx-sub)] cursor-pointer hidden md:block`}
        onClick={_ => setIsDropMenuOpen(prev => !prev)}
        xmlns="http://www.w3.org/2000/svg"
        height="38px"
        viewBox="0 0 24 24"
        width="38px">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
    <div
      className={`w-full h-screen absolute top-20 left-0 bg-[var(--bg-main)] flex-col flex-nowrap` ++ {
        isDropMenuOpen ? `flex` : `hidden`
      }}>
      <Links handleDropMenuOpen={value => setIsDropMenuOpen(_ => value)} />
    </div>
  </>
}

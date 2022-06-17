@react.component
let defalut = (~title: string, ~des: string) => {
  <div className={`flex flex-col flex-nowrap pb-5 w-full`}>
    <span
      style={ReactDOM.Style.make(
        ~background=`linear-gradient(to right, var(--tx-accent-light), var(--tx-accent), var(--tx-sub))`,
        ~animation=`rainbow 2s ease-in-out infinite`,
        ~transition=`color 0.2s ease-in-out`,
        ~color=`rgba(0, 0, 0, 0)`,
        ~backgroundSize=`200% 200%`,
        (),
      )}
      className={`text-[50px] font-extrabold color bg-clip-text `}>
      {title->React.string}
    </span>
    <span className={`text-lg font-light color-[var(--tx-sub-dark)] break-all mt-2.5`}>
      {des->React.string}
    </span>
  </div>
}

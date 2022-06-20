@react.component
let default = (~title: string, ~des: string) => {
  <div className={`flex flex-col flex-nowrap pb-5 w-full`}>
    <span className={`text-[50px] font-extrabold text-slate-900 dark:text-slate-50`}>
      {title->React.string}
    </span>
    <span className={`text-lg font-light color-[var(--tx-sub-dark)] break-all mt-2.5`}>
      {des->React.string}
    </span>
  </div>
}

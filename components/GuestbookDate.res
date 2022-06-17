@react.component
let default = (~date: string) => {
  <div className={`text-xs text-[var(--tx-sub-dark)] w-full text-center mt-2.5`}>
    {date->React.string}
  </div>
}

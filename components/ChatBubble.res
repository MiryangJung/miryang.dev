@react.component
let default = (~content: string, ~color: string) => {
  <div
    style={ReactDOM.Style.make(~background=color, ())}
    className={`ml-auto py-2 px-2.5 break-all leading-6 rounded-[10px] rounded-br-none font-light mt-2.5 max-w-[90%] text-[var(--tx-white)]`}>
    {content->React.string}
  </div>
}

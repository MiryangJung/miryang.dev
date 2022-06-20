@react.component
let default = (~title: string) => {
  <div className={`w-full mt-[50px] mb-2.5 text-[22px] text-gray-500 font-semibold`}>
    {title->React.string}
  </div>
}

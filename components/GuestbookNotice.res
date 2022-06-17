@react.component
let default = () => {
  <div className={`text-sm text-[var(--tx-main)] mb-5 w-full text-left`}>
    {`악플 방지를 위해 방명록 등록 시 IP를 수집합니다.`->React.string}
    <br />
    {`이에 동의하시는 분만 방명록을 작성해 주시기 바랍니다.`->React.string}
  </div>
}

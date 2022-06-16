@react.component
let default = () => {
  <section className={`flex flex-wrap w-full items-start justify-center`}>
    <Next.Image
      src="/about/about.jpg"
      className={`rounded-lg`}
      alt="MiryangJung"
      width={300.0}
      height={300.0}
      objectFit=#cover
    />
    <div className={`min-w-[300px] max-w-[400px] px-5 break-words leading-6 mt-5 md:mt-0`}>
      {`새로운 경험을 좋아하는 개발자입니다.`->React.string}
      <br />
      <br />
      {`최신 트렌드와 명료한 코드를 작성하는 것에 관심이 많으며, 정보를 공유하는 것에 기쁨을
        느낍니다.`->React.string}
      <br />
      {`보안을 했고, 요즘은 프론트엔드에 힘을 쏟고 있습니다.`->React.string}
      <br />
      <br />
      {`여행을 좋아합니다. 현재까지 다녀온 나라`->React.string}
      <br />
      <span className={`text-gray-600`}>
        {`Denmark, Turkey, Finland, Sweden, Norway, Italy, United Kingdom, Czechia, Hungary,
        Austria, Switzerland, France, Japan, Philippines, Taiwan`->React.string}
      </span>
      <br />
      <br />
      <Next.Link href="/resume" passHref={true}>
        <button
          className={`px-7 py-2 bg-blue-700 font-semibold border-none outline-none rounded-xl cursor-pointer`}>
          {`Resume`->React.string}
        </button>
      </Next.Link>
    </div>
  </section>
}

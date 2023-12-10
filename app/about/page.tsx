import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <h1 className="text-xl font-bold">miryang</h1>
      <span className="text-gray-500 mb-5">안녕하세요. 너무 반갑습니다. 🫶</span>

      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:items-start">
        <Image
          width={300}
          height={300}
          src="/about/profile.JPG"
          alt="정미량 프로필 이미지"
          className="rounded"
          quality={100}
        />
        <span className="break-keep leading-8">
          <b>새로운 경험을 좋아하는 개발자입니다.</b>
          <br />
          기술을 깊게 공부하는 것도 좋지만 저는 다양한 기술을 사용해보고
          프로덕트를 만드는 것이 더 재미있습니다.
          <br />
          새로운 기술을 접할 때마다 그 기술의 가능성에 대해 궁금해하고, 이를
          활용하여 무엇을 만들어낼 수 있을지 고민합니다.
          <br /> <br />
          명확하고 가독성 좋은 코드를 작성하는 것에 관심이 많으며, 정보를
          공유하는 것에 기쁨을 느낍니다.
          <br /> <br />
          보안을 했고, 요즘은 프론트엔드 개발자로서 사용자에게 편리하고 즐거운
          경험을 제공하는 프로덕트를 만들기 위해 노력하고 있습니다.
          <br /> <br />
          <span className="text-gray-500">
            여행을 좋아합니다. 현재까지 다녀온 나라:
            <br />
            Denmark, Turkey, Finland, Sweden, Norway, Italy, United Kingdom,
            Czechia, Hungary, Austria, Switzerland, France, Japan, Philippines,
            Taiwan, Vietnam, Thailand
          </span>
        </span>
      </div>
    </>
  );
}

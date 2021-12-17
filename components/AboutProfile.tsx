import Image from 'next/image'
import { AboutProfileContainer, ProfileText, ProfileTextSub, Resume } from './AboutProfile.style'

const AboutProfile = ({ text }: { text: string }) => {
  return (
    <AboutProfileContainer>
      <Image
        src="/about/about.jpg"
        className="round-image"
        alt="MiryangJung"
        width={300}
        height={300}
        objectFit="cover"
      />
      <ProfileText>
        새로운 경험을 좋아하는 개발자입니다.
        <br />
        <br />
        최신 트렌드와 명료한 코드를 작성하는 것에 관심이 많으며, 정보를 공유하는 것에 기쁨을
        느낍니다.
        <br />
        백엔드 개발로 시작했고, 요즘은 프론트엔드 개발 공부에 힘을 쏟고 있습니다.
        <br />
        <br />
        주니어 개발자지만 다양한 스타트업에서 프로젝트 리드를 맡아왔고, 혼자 일하는 게 익숙해 협업을
        하면서 일해보고 싶기도 합니다.
        <br />
        <br />
        여행을 좋아합니다. 현재까지 다녀온 나라
        <br />
        <ProfileTextSub>
          Denmark, Turkey, Finland, Sweden, Norway, Italy, United Kingdom, Czechia, Hungary,
          Austria, Switzerland, France, Japan
        </ProfileTextSub>
        <br />
        <br />
        <Resume
          href="https://www.notion.so/miryang/Jung-Miryang-45d8573632d74e8587f853b4982bfd9a"
          target="_blank"
        >
          Resume
        </Resume>
      </ProfileText>
    </AboutProfileContainer>
  )
}

export default AboutProfile

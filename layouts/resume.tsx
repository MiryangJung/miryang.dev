import Container from '../components/Container'
import { ResumeContent } from './resume.style'
import ResumeAbout from '../components/ResumeAbout'
import ResumeTitle from '../components/ResumeTitle'
import ResumeCard from '../components/ResumeCard'
import ResumeOtherExCard from '../components/ResumeOtherExCard'
import ResumeSkillCard from '../components/ResumeSkillCard'
import { NextSeo } from 'next-seo'
import metadata from '../data/metadata'

function ResumeLayout() {
  return (
    <Container>
      <NextSeo
        title="Resume"
        description="Resume of my work experience and skills"
        canonical={`${metadata.meta.url}/resume`}
        openGraph={{ url: `${metadata.meta.url}/resume` }}
      />
      <ResumeContent>
        <ResumeAbout />
        <ResumeTitle title={'👩🏻‍💻 Experience.'} />
        <ResumeCard />
        <ResumeTitle title={'💻 Other Experience.'} />
        <ResumeOtherExCard />
        <ResumeTitle title={'⚒️ Skills.'} />
        <ResumeSkillCard />
      </ResumeContent>
    </Container>
  )
}

export default ResumeLayout

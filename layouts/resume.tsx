import Container from '../components/Container'
import resume from '../data/resume'
import { ResumeContent } from './resume.style'
import ResumeAbout from '../components/ResumeAbout'
import ResumeTitle from '../components/ResumeTitle'
import ResumeCard from '../components/ResumeCard'
import ResumeOtherExCard from '../components/ResumeOtherExCard'
import ResumeSkillCard from '../components/ResumeSkillCard'

function ResumeLayout() {
  const customMeta = {
    title: `Resume - ${resume.name}`,
    description: 'Resume of my work experience and skills',
  }

  return (
    <Container customMeta={customMeta}>
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
